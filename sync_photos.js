const fs = require('fs');
const path = require('path');

// Helper to parse JPEG size natively
function getJpegSize(buffer) {
    try {
        let offset = 2; // Skip SOI (FFD8)
        while (offset < buffer.length) {
            if (offset + 2 > buffer.length) break;
            const marker = buffer.readUInt16BE(offset);
            offset += 2;
            
            if (marker === 0xFFC0 || marker === 0xFFC2) {
                if (offset + 7 > buffer.length) break;
                const height = buffer.readUInt16BE(offset + 3);
                const width = buffer.readUInt16BE(offset + 5);
                return { width, height };
            }
            
            if (offset + 2 > buffer.length) break;
            const length = buffer.readUInt16BE(offset);
            offset += length;
        }
    } catch (e) {
        // ignore
    }
    return null;
}

// 1. Read existing app.js
const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// 2. Locate the start index (earliest of the synced variables) and parse existing arrays
const markers = [
    'const HERO_BG_URL =',
    'const ABOUT_IMG_URL =',
    'const STORIES =',
    'const PHOTOS = ['
];
let startIndex = -1;
for (const marker of markers) {
    const idx = appJsContent.indexOf(marker);
    if (idx !== -1 && (startIndex === -1 || idx < startIndex)) {
        startIndex = idx;
    }
}

if (startIndex === -1) {
    console.error('Could not find start index in app.js');
    process.exit(1);
}

const photosStartIndex = appJsContent.indexOf('const PHOTOS = [');
if (photosStartIndex === -1) {
    console.error('Could not find PHOTOS array in app.js');
    process.exit(1);
}

// Find matching ending bracket for PHOTOS array
let bracketCount = 1;
let endIndex = -1;
for (let i = photosStartIndex + 'const PHOTOS = ['.length; i < appJsContent.length; i++) {
    if (appJsContent[i] === '[') bracketCount++;
    if (appJsContent[i] === ']') bracketCount--;
    if (bracketCount === 0) {
        endIndex = i;
        break;
    }
}

if (endIndex === -1) {
    console.error('Could not find closing bracket for PHOTOS array');
    process.exit(1);
}

// Eat trailing semicolons or newlines after PHOTOS array ending bracket
let replaceEndIndex = endIndex + 1;
while (replaceEndIndex < appJsContent.length && (appJsContent[replaceEndIndex] === ';' || appJsContent[replaceEndIndex] === '\r' || appJsContent[replaceEndIndex] === '\n')) {
    replaceEndIndex++;
}

const photosArrayString = appJsContent.substring(photosStartIndex + 'const PHOTOS ='.length, endIndex + 1);

// Safely evaluate the array using Function constructor
const existingPhotos = new Function(`return ${photosArrayString}`)();

// Create a map of existing photos by their relative URL
const photosMap = new Map();
existingPhotos.forEach(p => photosMap.set(p.url, p));

// Extract and parse existing STORIES array if it exists
let existingStories = [];
const storiesArrayStartIndex = appJsContent.indexOf('const STORIES = [');
if (storiesArrayStartIndex !== -1) {
    let sBracketCount = 1;
    let sEndIndex = -1;
    for (let i = storiesArrayStartIndex + 'const STORIES = ['.length; i < appJsContent.length; i++) {
        if (appJsContent[i] === '[') sBracketCount++;
        if (appJsContent[i] === ']') sBracketCount--;
        if (sBracketCount === 0) {
            sEndIndex = i;
            break;
        }
    }
    if (sEndIndex !== -1) {
        const storiesArrayString = appJsContent.substring(storiesArrayStartIndex + 'const STORIES ='.length, sEndIndex + 1);
        try {
            existingStories = new Function(`return ${storiesArrayString}`)();
        } catch(e) {
            // ignore
        }
    }
}
const storiesMap = new Map();
existingStories.forEach(s => storiesMap.set(s.url, s));

const updatedPhotos = [];

// 3. Scan all category folders inside aset/ (ignoring Hero folder for standard gallery)
const folders = [
    { dir: 'aset/Portrait', category: 'Portrait', defaultAspect: 'portrait', defaultTitle: 'Portrait Frame', defaultDesc: 'A portrait study of expressions, shadows, and cinematic light.' },
    { dir: 'aset/Street', category: 'Street', defaultAspect: 'landscape', defaultTitle: 'Street Frame', defaultDesc: 'Unscripted street stories and candids captured in natural environments.' },
    { dir: 'aset/Landscape', category: 'Landscape', defaultAspect: 'landscape', defaultTitle: 'Landscape Frame', defaultDesc: 'A breathtaking landscape capturing the silence and contours of nature.' },
    { dir: 'aset/Travel', category: 'Travel', defaultAspect: 'landscape', defaultTitle: 'Travel Frame', defaultDesc: 'Architectural details and fragments of places remembered through the lens.' },
    { dir: 'aset/Daily Moments', category: 'Daily Moments', defaultAspect: 'portrait', defaultTitle: 'Daily Moment Frame', defaultDesc: 'The simple details and quiet beauty of everyday life.' }
];

folders.forEach(folder => {
    const fullPath = path.join(__dirname, folder.dir);
    if (!fs.existsSync(fullPath)) return;
    
    const files = fs.readdirSync(fullPath);
    files.forEach(file => {
        if (!file.toLowerCase().endsWith('.jpg') && !file.toLowerCase().endsWith('.jpeg')) return;
        
        const relativeUrl = `${folder.dir}/${file}`;
        
        if (photosMap.has(relativeUrl)) {
            // Keep existing metadata
            updatedPhotos.push(photosMap.get(relativeUrl));
        } else {
            // Read dimensions to determine aspect ratio
            let aspect = folder.defaultAspect;
            try {
                const buffer = fs.readFileSync(path.join(fullPath, file));
                const size = getJpegSize(buffer);
                if (size) {
                    aspect = size.width > size.height ? 'landscape' : 'portrait';
                }
            } catch (e) {
                // ignore
            }
            
            // Add new photo with placeholders
            updatedPhotos.push({
                url: relativeUrl,
                title: `${folder.defaultTitle} #${file.split('.')[0]}`,
                category: folder.category,
                location: folder.category === 'Portrait' ? 'Studio Session, Surakarta' : 'Various Locations',
                date: 'Jun 2026',
                description: folder.defaultDesc,
                aspect: aspect
            });
        }
    });
});

// 4. Scan aset/Hero for static background file
const heroFolder = path.join(__dirname, 'aset/Hero');
let heroBgUrl = '';
if (fs.existsSync(heroFolder)) {
    const heroFiles = fs.readdirSync(heroFolder);
    const validHeroFile = heroFiles.find(f => {
        const ext = f.toLowerCase();
        return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png') || ext.endsWith('.webp');
    });
    if (validHeroFile) {
        heroBgUrl = `aset/Hero/${validHeroFile}`;
    }
}

// 4b. Scan aset/About for photographer's profile image
const aboutFolder = path.join(__dirname, 'aset/About');
let aboutImgUrl = '';
if (fs.existsSync(aboutFolder)) {
    const aboutFiles = fs.readdirSync(aboutFolder);
    const validAboutFile = aboutFiles.find(f => {
        const ext = f.toLowerCase();
        return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png') || ext.endsWith('.webp');
    });
    if (validAboutFile) {
        aboutImgUrl = `aset/About/${validAboutFile}`;
    }
}

// 4c. Scan aset/Stories for featured stories
const storiesFolder = path.join(__dirname, 'aset/Stories');
const storiesPhotos = [];
if (fs.existsSync(storiesFolder)) {
    const storiesFiles = fs.readdirSync(storiesFolder);
    storiesFiles.forEach(file => {
        if (!file.toLowerCase().endsWith('.jpg') && !file.toLowerCase().endsWith('.jpeg') && !file.toLowerCase().endsWith('.png') && !file.toLowerCase().endsWith('.webp')) return;
        
        const relativeUrl = `aset/Stories/${file}`;
        if (storiesMap.has(relativeUrl)) {
            storiesPhotos.push(storiesMap.get(relativeUrl));
        } else {
            let aspect = 'landscape';
            try {
                const buffer = fs.readFileSync(path.join(storiesFolder, file));
                const size = getJpegSize(buffer);
                if (size) {
                    aspect = size.width > size.height ? 'landscape' : 'portrait';
                }
            } catch (e) {
                // ignore
            }
            storiesPhotos.push({
                url: relativeUrl,
                title: `Featured Story #${file.split('.')[0]}`,
                category: 'Featured',
                location: 'Various Locations',
                date: 'Jun 2026',
                description: 'Selected frame from visual journeys and quiet moments.',
                aspect: aspect
            });
        }
    });
}

// 5. Format the updated output string
const formattedHeroBg = `const HERO_BG_URL = '${heroBgUrl}';\n`;
const formattedAboutImg = `const ABOUT_IMG_URL = '${aboutImgUrl}';\n`;
const formattedStories = `const STORIES = ` + JSON.stringify(storiesPhotos, null, 4) + ';\n';
const formattedPhotos = formattedHeroBg + formattedAboutImg + formattedStories + 'const PHOTOS = ' + JSON.stringify(updatedPhotos, null, 4) + ';';

// 6. Replace and write to app.js
const newAppJsContent = appJsContent.substring(0, startIndex) + formattedPhotos + appJsContent.substring(replaceEndIndex);
fs.writeFileSync(appJsPath, newAppJsContent, 'utf8');
console.log(`Successfully synced! Total photos: ${updatedPhotos.length}, Hero URL: ${heroBgUrl}, About URL: ${aboutImgUrl}, Stories: ${storiesPhotos.length}`);
