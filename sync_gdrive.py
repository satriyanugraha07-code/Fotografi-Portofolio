import urllib.request
import re
import json
import os

# Google Drive folder IDs
FOLDER_IDS = {
    'Hero': '1kQjlU5IFvfJ6atsnYNvlJo2RHS1T1iYB',
    'About': '1jWM7E20mGxqcZeY-7FX9igxf1N3-qOpI',
    'Stories': '1yQqOHDuvgpix-MsGJkuwRkPSTIcsG0g6',
    'Portrait': '1udfECUfc1p7kot_ofJDEIZcwvYjtjVEV',
    'Street': '1hUrunTGr35Vp0nvQLYqsYVG00CGez53d',
    'Landscape': '1QUawYm_ZHuOhXsyH4B2XYhq9wF5OrKtr',
    'Travel': '1L_0fq8_1ShbEwvEnqsKxHtwpB0x9wmDH',
    'Daily Moments': '1Z2MUAIG54IqsVPf5D96lyS9XdNDMuD_I'
}

# Helper to fetch and parse entries from Google Drive embedded view
def get_drive_files(folder_id):
    url = f'https://drive.google.com/embeddedfolderview?id={folder_id}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
        
        # Parse entry ID and name
        entries = re.findall(r'<div class="flip-entry" id="entry-([^"]+)"[^>]*>.*?<div class="flip-entry-title">([^<]+)</div>', html, re.DOTALL)
        files = []
        for eid, name in entries:
            name_lower = name.lower()
            if any(name_lower.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                files.append({'name': name, 'id': eid})
        return files
    except Exception as e:
        print(f"Error fetching folder {folder_id}: {e}")
        return []

def main():
    app_js_path = 'app.js'
    if not os.path.exists(app_js_path):
        print("app.js not found in current directory.")
        return

    with open(app_js_path, 'r', encoding='utf-8') as f:
        app_js_content = f.read()

    # 1. Parse existing data from app.js to preserve metadata
    existing_photos_map = {}
    existing_stories_map = {}

    def extract_array(content, array_name):
        start_idx = content.find(array_name)
        if start_idx == -1:
            return []
        open_bracket_idx = content.find('[', start_idx)
        if open_bracket_idx == -1:
            return []
        
        count = 1
        end_bracket_idx = -1
        for i in range(open_bracket_idx + 1, len(content)):
            if content[i] == '[':
                count += 1
            elif content[i] == ']':
                count -= 1
            if count == 0:
                end_bracket_idx = i
                break
        
        if end_bracket_idx == -1:
            return []
        
        array_str = content[open_bracket_idx:end_bracket_idx+1]
        try:
            return json.loads(array_str)
        except Exception as e:
            # Fallback if there are comments or format issues: clean it up briefly
            cleaned_str = re.sub(r'//.*?\n', '\n', array_str)
            cleaned_str = re.sub(r'/\*.*?\*/', '', cleaned_str, flags=re.DOTALL)
            try:
                return json.loads(cleaned_str)
            except Exception as e2:
                print(f"Failed parsing {array_name}: {e2}")
                return []

    existing_photos = extract_array(app_js_content, 'const PHOTOS = [')
    existing_stories = extract_array(app_js_content, 'const STORIES = [')

    # Map existing items by filename extracted from their URL (local or gdrive)
    def get_filename_from_url(url):
        # E.g. "aset/Portrait/IMG_0095.JPG" -> "IMG_0095.JPG"
        # E.g. "https://lh3.googleusercontent.com/d/1A2B3C..." -> we look at title map or check
        return url.split('/')[-1]

    for p in existing_photos:
        filename = get_filename_from_url(p['url'])
        # Also store by title or clean name if url is already gdrive
        existing_photos_map[filename] = p

    for s in existing_stories:
        filename = get_filename_from_url(s['url'])
        existing_stories_map[filename] = s

    print(f"Parsed {len(existing_photos)} existing photos and {len(existing_stories)} existing stories.")

    # 2. Fetch images from each Google Drive folder
    drive_data = {}
    for name, fid in FOLDER_IDS.items():
        print(f"Fetching file list for folder '{name}'...")
        drive_data[name] = get_drive_files(fid)
        print(f"Found {len(drive_data[name])} images in '{name}'.")

    # 3. Process Hero Background
    hero_bg_url = ''
    if drive_data['Hero']:
        # Use first image
        hero_bg_url = f"https://drive.google.com/thumbnail?id={drive_data['Hero'][0]['id']}&sz=w2560"
        print(f"Hero Background URL set to: {hero_bg_url}")
    else:
        print("WARNING: No image found in Hero folder.")

    # 4. Process About Image
    about_img_url = ''
    if drive_data['About']:
        about_img_url = f"https://drive.google.com/thumbnail?id={drive_data['About'][0]['id']}&sz=w1200"
        print(f"About Image URL set to: {about_img_url}")
    else:
        print("WARNING: No image found in About folder.")

    # 5. Process Stories
    updated_stories = []
    for f in drive_data['Stories']:
        filename = f['name']
        gdrive_url = f"https://drive.google.com/thumbnail?id={f['id']}&sz=w1600"
        
        # Check if we have existing metadata for this filename
        matched = False
        for old_fname, meta in existing_stories_map.items():
            if old_fname.lower() == filename.lower() or meta.get('title', '').endswith(filename.split('.')[0]):
                # Re-use metadata, updating url
                new_meta = meta.copy()
                new_meta['url'] = gdrive_url
                updated_stories.append(new_meta)
                matched = True
                break
        
        if not matched:
            # Create default metadata
            updated_stories.append({
                "url": gdrive_url,
                "title": f"Featured Story #{filename.split('.')[0]}",
                "category": "Featured",
                "location": "Various Locations",
                "date": "Jun 2026",
                "description": "Selected frame from visual journeys and quiet moments.",
                "aspect": "landscape"
            })

    # 6. Process main PHOTOS categories
    updated_photos = []
    categories_folders = [
        ('Portrait', 'portrait', 'Portrait Frame', 'A portrait study of expressions, shadows, and cinematic light.'),
        ('Street', 'landscape', 'Street Frame', 'Unscripted street stories and candids captured in natural environments.'),
        ('Landscape', 'landscape', 'Landscape Frame', 'A breathtaking landscape capturing the silence and contours of nature.'),
        ('Travel', 'landscape', 'Travel Frame', 'Architectural details and fragments of places remembered through the lens.'),
        ('Daily Moments', 'portrait', 'Daily Moment Frame', 'The simple details and quiet beauty of everyday life.')
    ]

    for cat_name, default_aspect, default_title, default_desc in categories_folders:
        for f in drive_data[cat_name]:
            filename = f['name']
            gdrive_url = f"https://drive.google.com/thumbnail?id={f['id']}&sz=w1600"
            
            # Look for matched filename in existing photos map
            matched = False
            for old_fname, meta in existing_photos_map.items():
                # match if old filename matches, or if old title contains filename
                if old_fname.lower() == filename.lower() or meta.get('title', '').endswith(filename.split('.')[0]):
                    new_meta = meta.copy()
                    new_meta['url'] = gdrive_url
                    new_meta['category'] = cat_name  # Ensure category matches folder
                    updated_photos.append(new_meta)
                    matched = True
                    break
            
            if not matched:
                # Create default metadata
                updated_photos.append({
                    "url": gdrive_url,
                    "title": f"{default_title} #{filename.split('.')[0]}",
                    "category": cat_name,
                    "location": "Studio Session, Surakarta" if cat_name == 'Portrait' else "Various Locations",
                    "date": "Jun 2026",
                    "description": default_desc,
                    "aspect": default_aspect
                })

    # 7. Write results back to app.js
    # Find markers in app.js and replace them
    markers = [
        'const HERO_BG_URL =',
        'const ABOUT_IMG_URL =',
        'const STORIES =',
        'const PHOTOS = ['
    ]
    start_replace_idx = -1
    for marker in markers:
        idx = app_js_content.find(marker)
        if idx != -1 and (start_replace_idx == -1 or idx < start_replace_idx):
            start_replace_idx = idx

    photos_start_idx = app_js_content.find('const PHOTOS = [')
    # Find matching ending bracket for PHOTOS
    open_bracket_idx = app_js_content.find('[', photos_start_idx)
    count = 1
    end_bracket_idx = -1
    for i in range(open_bracket_idx + 1, len(app_js_content)):
        if app_js_content[i] == '[':
            count += 1
        elif app_js_content[i] == ']':
            count -= 1
        if count == 0:
            end_bracket_idx = i
            break

    replace_end_idx = end_bracket_idx + 1
    while replace_end_idx < len(app_js_content) and app_js_content[replace_end_idx] in [';', '\r', '\n']:
        replace_end_idx += 1

    formatted_hero_bg = f"const HERO_BG_URL = '{hero_bg_url}';\n"
    formatted_about_img = f"const ABOUT_IMG_URL = '{about_img_url}';\n"
    formatted_stories = "const STORIES = " + json.dumps(updated_stories, indent=4) + ";\n"
    formatted_photos = formatted_hero_bg + formatted_about_img + formatted_stories + "const PHOTOS = " + json.dumps(updated_photos, indent=4) + ";"

    new_content = app_js_content[:start_replace_idx] + formatted_photos + app_js_content[replace_end_idx:]
    
    with open(app_js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("SUCCESS: Google Drive photos synced successfully!")
    print(f"Total synced: {len(updated_photos)} photos and {len(updated_stories)} stories.")

if __name__ == '__main__':
    main()
