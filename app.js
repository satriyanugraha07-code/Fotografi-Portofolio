/**
 * SHUTTERRIYA — PREMIUM CINEMATIC PORTFOLIO LOGIC
 */

// 1. IMAGES CONFIGURATION & METADATA
const HERO_BG_URL = 'https://drive.google.com/thumbnail?id=109eYebbdh35A1Mbu9FGXNbQVbJPQNbeC&sz=w2560';
const ABOUT_IMG_URL = 'https://drive.google.com/thumbnail?id=1WaSeJvaYnureYx-fDicdSC6clZqmH4wb&sz=w1200';
const STORIES = [
    {
        "url": "https://drive.google.com/thumbnail?id=1gkCbdStGY_7Rkd_wLGV6bFXRrtEMnHKO&sz=w1600",
        "title": "Featured Story #Copy of IMG_0507",
        "category": "Featured",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Selected frame from visual journeys and quiet moments.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1ah4D4K1gprFod4P9z9um9KM-nIxN2YMe&sz=w1600",
        "title": "Featured Story #Copy of IMG_0675",
        "category": "Featured",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Selected frame from visual journeys and quiet moments.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1Jn2jfhD4Px6Ie7uuG92JQdaYeGdzGvCW&sz=w1600",
        "title": "Featured Story #WhatsApp Image 2026-04-25 at 14",
        "category": "Featured",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Selected frame from visual journeys and quiet moments.",
        "aspect": "landscape"
    }
];
const PHOTOS = [
    {
        "url": "https://drive.google.com/thumbnail?id=1_IQ0Z0g3zyeJ286GMS54v5QmmFsoZZ95&sz=w1600",
        "title": "Portrait Frame #IMG_0095",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1Mj-oFNX5ts52Rho3ah93W1cJylY2F0Do&sz=w1600",
        "title": "Portrait Frame #IMG_0187-Enhanced-NR-2",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1Cql5Kgddy8S5F2iuMkDPiWGFEVNBfr9S&sz=w1600",
        "title": "Portrait Frame #IMG_0191",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1z0vYI7jba_-2-MWS5bOdGvAao3ojWam4&sz=w1600",
        "title": "Portrait Frame #IMG_0478",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1MNbHCV-wXMDrcP_Mi2NTU3Mh-34gP-t2&sz=w1600",
        "title": "Portrait Frame #IMG_0488-2",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1-excj6brL8zMnF9VYIk1K6ryy-M1RxsV&sz=w1600",
        "title": "Portrait Frame #IMG_0489",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=17l9P7RwyQPXaBEIpipT8qCmz4ZC8Ye_B&sz=w1600",
        "title": "Portrait Frame #IMG_0491-2",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1owK6kM-WkNKn6c3n0o9iolW7SHe4S-vy&sz=w1600",
        "title": "Portrait Frame #IMG_0635",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1enprTFIvDPul6UO2xY7jVOjvmMrFEG-g&sz=w1600",
        "title": "Portrait Frame #IMG_0675",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1qvzlL-5ePgt-kSX5_0fdqnrVXQZx5PmI&sz=w1600",
        "title": "Portrait Frame #IMG_0767",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1gitlDFAhtMxdv7JEfaUeZI6rNel-Lsrs&sz=w1600",
        "title": "Portrait Frame #IMG_0787",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1eRlCqCB4EbkHo-BcLJNJDGX_uhSgq4d4&sz=w1600",
        "title": "Portrait Frame #IMG_0789",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1aUOPAumd9HxIexZAEnJLsZ49YLzpdKOB&sz=w1600",
        "title": "Portrait Frame #IMG_3742",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1TwgmlcMqDVGiqrp2-Qkx4f5EAUKtoxxy&sz=w1600",
        "title": "Portrait Frame #IMG_7654-3",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1j02158n3BMJmGW-kBQIOLmhUWGct13eV&sz=w1600",
        "title": "Portrait Frame #IMG_7690 (1)",
        "category": "Portrait",
        "location": "Studio Session, Surakarta",
        "date": "Jun 2026",
        "description": "A portrait study of expressions, shadows, and cinematic light.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1udNNB--7TY1OI8YKP38AwmGne72njTVk&sz=w1600",
        "title": "Landscape Frame #IMG_0350",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1Hb0iQ757IHk7HNAQfkrRUuCTqRp4Fhwv&sz=w1600",
        "title": "Landscape Frame #IMG_0351",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1mmIFMEyokUijb6QEz8yfCqt35lNGtphZ&sz=w1600",
        "title": "Landscape Frame #IMG_0446",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=10tmpV4FieMmdE1sY3TKX65LAAJuvtbLk&sz=w1600",
        "title": "Landscape Frame #IMG_0503",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=14y__4W8_lQz2Fz2rKP3OgBo6jHfBt7bF&sz=w1600",
        "title": "Landscape Frame #IMG_0507",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1EZVd3GKScx-3X6ifyRKgb_9TXOahyx_f&sz=w1600",
        "title": "Landscape Frame #IMG_0510",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1Wfo-FY5ayi7WbKP8NvcpI5pZrGVkPN2J&sz=w1600",
        "title": "Landscape Frame #IMG_0511",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1gP4MZSPxB318dgTsGsx3GNwyPQEpJIv_&sz=w1600",
        "title": "Landscape Frame #IMG_0550",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1E-d3BkUY98nrnCl0dwGk4ldimljSylzD&sz=w1600",
        "title": "Landscape Frame #IMG_0608",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1vsIrPG3LoHl8otE1ARwZH9dZAJYLmgfw&sz=w1600",
        "title": "Landscape Frame #IMG_0671-Enhanced-NR",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1bcOhtOnM8pA9IiIQaVSSwQfHH66zNPnq&sz=w1600",
        "title": "Landscape Frame #IMG_0672",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1P8jvKalY_Ac7_LMizhWoRgBZINyw6vdA&sz=w1600",
        "title": "Landscape Frame #IMG_0673",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1WQeH0p2IcaHvDk6Z-nGePna008t-E8OL&sz=w1600",
        "title": "Landscape Frame #IMG_0693",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=16gDW_QE8-UgnuBTpIDRN6Q2bVALCghYy&sz=w1600",
        "title": "Landscape Frame #IMG_0695",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1vpFCeBAYZxQHqsdn-_By4Xq-RSSDD849&sz=w1600",
        "title": "Landscape Frame #IMG_0697",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=197UEvVKZWkZq9zV7Nm5SIgBmvVivtJBB&sz=w1600",
        "title": "Landscape Frame #IMG_1167-Enhanced-NR",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1GKe7xv2mRnfsge82FJ-y2Rb7OVfX3WBR&sz=w1600",
        "title": "Landscape Frame #IMG_1762",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=135sTvaDcV1LiUSontE9O84H2syK5HESv&sz=w1600",
        "title": "Landscape Frame #IMG_1808",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1C8GOMHq19JyQhfEMI8O9GSgkuQTtM-yC&sz=w1600",
        "title": "Landscape Frame #IMG_1867",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1mhiPUdCTjzcQqZABGar677NKXmrTqhQk&sz=w1600",
        "title": "Landscape Frame #IMG_4326",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1mCiGkKIDaOb4R7BsVdq1mNPYmjoTLdAz&sz=w1600",
        "title": "Landscape Frame #IMG_4351",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1XtPg9grDDjOYyyXLDZrBbu8BcaCglXzr&sz=w1600",
        "title": "Landscape Frame #IMG_4447-Enhanced-NR",
        "category": "Landscape",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "A breathtaking landscape capturing the silence and contours of nature.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1PCjBDiq12UHJdLgp5oP4IaiXg4UCf7Dh&sz=w1600",
        "title": "Travel Frame #IMG_3730",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=10kxwVB6yhnmEqbaaNXPAUtWmmw8umJ1X&sz=w1600",
        "title": "Travel Frame #IMG_3732",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1qzToDOXbBIiBuJ5wi3pPDH8VeTTvVW0p&sz=w1600",
        "title": "Travel Frame #IMG_3750-2",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1WV-IFhOLBgzGX5O3uE_MENQdy0NwXKR6&sz=w1600",
        "title": "Travel Frame #IMG_3854",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "landscape"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1wiX4W1Ol2zGxiIvbBICcDRSLq_VYDoy-&sz=w1600",
        "title": "Travel Frame #IMG_4076-2",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1TSgGuevx4l0eid_euAlpqdCHbAM0mVm-&sz=w1600",
        "title": "Travel Frame #IMG_4089",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "portrait"
    },
    {
        "url": "https://drive.google.com/thumbnail?id=1ANI4uMxQuCr_yDUpP9BUadK2wpzkU1dU&sz=w1600",
        "title": "Travel Frame #IMG_4090",
        "category": "Travel",
        "location": "Various Locations",
        "date": "Jun 2026",
        "description": "Architectural details and fragments of places remembered through the lens.",
        "aspect": "landscape"
    }
];// Placeholder Canvas configuration (empty slots that the user can swap later)
const PLACEHOLDERS = [
    {
        isPlaceholder: true,
        title: 'Uncharted Frame',
        category: 'Portrait',
        description: 'A frame reserved for future portraits and human connections.'
    },
    {
        isPlaceholder: true,
        title: 'Quiet Encounter',
        category: 'Street',
        description: 'A space waiting for unscripted street stories and candids.'
    },
    {
        isPlaceholder: true,
        title: 'Vast Canvas',
        category: 'Landscape',
        description: 'A placeholder for mountains, oceans, and natural elements.'
    },
    {
        isPlaceholder: true,
        title: 'Distant Horizon',
        category: 'Travel',
        description: 'A slot reserved for travel explorations and architectural details.'
    },
    {
        isPlaceholder: true,
        title: 'Ephemeral Fragment',
        category: 'Daily Moments',
        description: 'A frame waiting for the simple details of ordinary days.'
    },
    {
        isPlaceholder: true,
        title: 'Passing Memory',
        category: 'Street',
        description: 'A reserved frame for capturing motion and light transitions.'
    }
];

// Combine real photos and placeholders for the gallery layout
const ALL_GALLERY_ITEMS = [
    ...PHOTOS.map((p, index) => ({ ...p, id: `photo-${index}`, isPlaceholder: false })),
    ...PLACEHOLDERS.map((p, index) => ({ ...p, id: `placeholder-${index}`, isPlaceholder: true }))
];

// Category metadata
const CATEGORIES = [
    { name: 'Portrait', desc: 'Human presence, expression, and emotion.' },
    { name: 'Street', desc: 'Unscripted stories from ordinary places.' },
    { name: 'Landscape', desc: 'Open spaces, silence, and natural light.' },
    { name: 'Travel', desc: 'Fragments of places remembered through the lens.' },
    { name: 'Daily Moments', desc: 'Small memories hidden inside everyday life.' }
];

// State variables
let activeFilter = 'all';
let currentLightboxIndex = -1;
let currentFilteredItems = [];

// DOM Elements
const heroBg = document.getElementById('hero-bg');
const quoteBg = document.getElementById('quote-bg');
const mainNav = document.getElementById('main-nav');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const featuredGrid = document.getElementById('featured-grid');
const journeysGrid = document.getElementById('journeys-grid');
const galleryMasonry = document.getElementById('gallery-masonry');
const filterTabs = document.querySelectorAll('.filter-tab');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxOverlay = document.getElementById('lightbox-overlay');

// 2. INITIALIZATION
function initializeWebsite() {
    // Render static lists first so the HTML structures are ready
    initHeroBackground();
    initAboutImage();
    initQuoteBackground();
    renderFeaturedStories();
    renderJourneys();
    renderGallery();
    initScrollEffects();
    initNavigation();
    initLightbox();
    initCardTilt();
    initPremiumAnimations();

    // Collect URLs of critical images to preload before dismissing loading screen
    const criticalAssets = [];
    
    if (typeof HERO_BG_URL !== 'undefined' && HERO_BG_URL) criticalAssets.push(HERO_BG_URL);
    if (typeof ABOUT_IMG_URL !== 'undefined' && ABOUT_IMG_URL) criticalAssets.push(ABOUT_IMG_URL);
    
    // Add stories images
    if (typeof STORIES !== 'undefined' && Array.isArray(STORIES)) {
        STORIES.forEach(s => {
            if (s && s.url) criticalAssets.push(s.url);
        });
    }
    
    // Add first 6 gallery/featured photos
    if (typeof PHOTOS !== 'undefined' && Array.isArray(PHOTOS)) {
        PHOTOS.slice(0, 6).forEach(p => {
            if (p && p.url) criticalAssets.push(p.url);
        });
    }

    const preloader = document.getElementById('preloader');
    const statusEl = document.getElementById('preloader-status');
    const barEl = document.querySelector('.preloader-bar');

    // Filter unique and non-empty URLs
    const uniqueAssets = [...new Set(criticalAssets)].filter(Boolean);
    const totalAssets = uniqueAssets.length;
    let loadedCount = 0;

    function updateProgress() {
        const percentage = totalAssets > 0 ? Math.round((loadedCount / totalAssets) * 100) : 100;
        
        if (statusEl) {
            statusEl.textContent = `Syncing frames... ${percentage}%`;
        }
        if (barEl) {
            barEl.style.width = `${percentage}%`;
        }

        if (loadedCount >= totalAssets) {
            // Once all assets load, wait a short moment and open the shutter
            setTimeout(() => {
                if (statusEl) statusEl.textContent = "Cinematic entry ready";
                setTimeout(() => {
                    dismissPreloader();
                }, 400);
            }, 300);
        }
    }

    function dismissPreloader() {
        if (preloader) {
            preloader.classList.add('preloader-hidden');
            document.body.classList.add('page-loaded');
            // Remove preloader from DOM after transition completes (wait 2s for 1.6s shutter slide)
            setTimeout(() => {
                preloader.remove();
            }, 2000);
        }
    }

    if (totalAssets === 0) {
        dismissPreloader();
    } else {
        // Start loading each image in background
        uniqueAssets.forEach(url => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                updateProgress();
            };
            img.onerror = () => {
                // If it fails, count as loaded so preloader is not blocked forever
                loadedCount++;
                updateProgress();
            };
            img.src = url;
        });
    }
}

// Run initialization immediately if DOM is already parsed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

// 3. SET RANDOM / INTELLECTUAL BACKGROUNDS
function initHeroBackground() {
    // Set static background from the dedicated Hero folder (configured via sync_photos.js)
    if (typeof HERO_BG_URL !== 'undefined' && HERO_BG_URL) {
        heroBg.style.backgroundImage = `url('${HERO_BG_URL}')`;
    } else {
        // Fallback if no hero background image is found
        heroBg.style.backgroundImage = `url('${PHOTOS[0].url}')`;
    }
}

function initAboutImage() {
    const aboutPortrait = document.getElementById('about-portrait');
    if (!aboutPortrait) return;
    
    if (typeof ABOUT_IMG_URL !== 'undefined' && ABOUT_IMG_URL) {
        aboutPortrait.src = ABOUT_IMG_URL;
    } else {
        // Fallback to default portrait image if empty
        aboutPortrait.src = 'aset/Portrait/IMG_0095.JPG';
    }
}

function initQuoteBackground() {
    // Choose a moody landscape photo (e.g. IMG_0489.JPG)
    const quotePhoto = PHOTOS.find(p => p.url.includes('IMG_0489')) || PHOTOS[PHOTOS.length - 1];
    quoteBg.style.backgroundImage = `url('${quotePhoto.url}')`;
}

// 4. RENDER FEATURED STORIES (6 Asymmetrical cards)
function renderFeaturedStories() {
    let featuredPhotos = [];
    
    // Check if we have photos inside the dedicated STORIES array
    if (typeof STORIES !== 'undefined' && STORIES && STORIES.length > 0) {
        featuredPhotos = [...STORIES];
        
        // If we have fewer than 6 photos, fill the remaining slots from PHOTOS
        if (featuredPhotos.length < 6) {
            const availablePhotos = PHOTOS.filter(p => !featuredPhotos.some(fp => fp.url === p.url));
            const shuffledPhotos = [...availablePhotos].sort(() => 0.5 - Math.random());
            featuredPhotos = [...featuredPhotos, ...shuffledPhotos.slice(0, 6 - featuredPhotos.length)];
        } else if (featuredPhotos.length > 6) {
            // If we have more than 6, take the first 6 to keep the design and order
            featuredPhotos = featuredPhotos.slice(0, 6);
        }
    } else {
        // Fallback: Select 6 random images for a fresh, dynamic spotlight on every reload
        const shuffledPhotos = [...PHOTOS].sort(() => 0.5 - Math.random());
        featuredPhotos = shuffledPhotos.slice(0, 6);
    }
    
    let htmlContent = '';

    featuredPhotos.forEach((photo, idx) => {
        // Assign categories to match UI titles dynamically
        const isWide = idx === 1 || idx === 2 || idx === 4 || idx === 5;
        const cardClass = isWide ? 'featured-card wide-card reveal-shutter' : 'featured-card reveal-shutter';
        
        htmlContent += `
            <div class="${cardClass}" data-photo-url="${photo.url}" role="button" aria-label="View story: ${photo.title}">
                <div class="card-img-wrapper">
                    <img src="${photo.url}" alt="${photo.title}" loading="lazy">
                    <div class="card-overlay"></div>
                    <div class="card-details">
                        <div class="card-meta">
                            <span class="card-date">${photo.date}</span>
                            <span class="card-separator">•</span>
                            <span class="card-location">${photo.location}</span>
                        </div>
                        <h3 class="card-title">${photo.title}</h3>
                        <p class="card-desc">${photo.description}</p>
                        <div class="card-accent-line"></div>
                    </div>
                </div>
            </div>
        `;
    });

    featuredGrid.innerHTML = htmlContent;

    // Attach click events to open in lightbox
    const cards = featuredGrid.querySelectorAll('.featured-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-photo-url');
            openLightboxByUrl(url);
        });
    });
}

// 5. RENDER JOURNEYS (5 Category cards)
function renderJourneys() {
    let htmlContent = '';

    CATEGORIES.forEach(cat => {
        // Find a cover image from the category
        const catPhotos = PHOTOS.filter(p => p.category === cat.name);
        const coverUrl = catPhotos.length > 0 ? catPhotos[0].url : '';
        const count = catPhotos.length;

        htmlContent += `
            <div class="journey-card reveal-shutter" data-category="${cat.name}" role="button" aria-label="Explore ${cat.name} Journey">
                <div class="journey-card-bg" style="background-image: url('${coverUrl}')"></div>
                <div class="journey-overlay"></div>
                <div class="journey-content">
                    <h3 class="journey-name">${cat.name}</h3>
                    <p class="journey-desc">${cat.desc}</p>
                    <div class="journey-footer">
                        <span class="journey-count">${count} Frames</span>
                        <svg class="journey-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    });

    journeysGrid.innerHTML = htmlContent;

    // Add click listeners to filter gallery and scroll there
    const cards = journeysGrid.querySelectorAll('.journey-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Activate corresponding tab
            filterTabs.forEach(tab => {
                if (tab.getAttribute('data-filter') === category) {
                    tab.click();
                }
            });

            // Smooth scroll to gallery
            const gallerySection = document.getElementById('gallery');
            window.scrollTo({
                top: gallerySection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

// 6. RENDER CINEMATIC GALLERY
function renderGallery() {
    // Filter items based on active category
    currentFilteredItems = ALL_GALLERY_ITEMS.filter(item => {
        if (activeFilter === 'all') return true;
        return item.category === activeFilter;
    });

    let htmlContent = '';

    currentFilteredItems.forEach((item, index) => {
        if (item.isPlaceholder) {
            // Render beautiful empty frame
            htmlContent += `
                <div class="gallery-item placeholder-frame reveal-shutter" data-index="${index}">
                    <div class="placeholder-inner">
                        <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <h4 class="placeholder-title">${item.title}</h4>
                        <p class="placeholder-text">${item.description}</p>
                    </div>
                </div>
            `;
        } else {
            // Render standard photography item
            htmlContent += `
                <div class="gallery-item reveal-shutter" data-index="${index}" data-photo-id="${item.id}">
                    <div class="gallery-img-wrapper ${item.aspect}-aspect">
                        <img src="${item.url}" alt="${item.title}" loading="lazy">
                        <div class="gallery-item-overlay"></div>
                        <div class="gallery-item-details">
                            <div class="gallery-item-meta">
                                <span class="gallery-item-date">${item.date}</span>
                                <span class="gallery-item-location">${item.location}</span>
                            </div>
                            <h3 class="gallery-item-title">${item.title}</h3>
                            <p class="gallery-item-desc">${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    // Animate transition by fading out, replacing content, and fading in
    galleryMasonry.style.opacity = 0;
    setTimeout(() => {
        galleryMasonry.innerHTML = htmlContent;
        galleryMasonry.style.opacity = 1;

        // Re-observe new items for reveal animation
        observeItems();
        
        // Re-initialize 3D tilt for newly rendered cards
        initCardTilt();
        
        // Attach click listeners to real photos
        const items = galleryMasonry.querySelectorAll('.gallery-item:not(.placeholder-frame)');
        items.forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.getAttribute('data-index'));
                openLightbox(idx);
            });
        });

        const placeholders = galleryMasonry.querySelectorAll('.gallery-item.placeholder-frame');
        placeholders.forEach(el => {
            el.addEventListener('click', () => {
                alert("This is a reserved frame slot for your upcoming photos. You can easily replace it by editing the image config in app.js!");
            });
        });
    }, 300);
}

// Filter Tab Click Handlers
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilter = tab.getAttribute('data-filter');
        renderGallery();
    });
});

// 7. LIGHTBOX CONTROLS
function initLightbox() {
    // Close events
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Navigation events
    lightboxPrev.addEventListener('click', navigateLightboxPrev);
    lightboxNext.addEventListener('click', navigateLightboxNext);

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightboxPrev();
        if (e.key === 'ArrowRight') navigateLightboxNext();
    });

    // Touch Swipe Controls (Mobile gesture compatibility)
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            // Swiped Left -> Next image
            navigateLightboxNext();
        }
        if (touchEndX > touchStartX + threshold) {
            // Swiped Right -> Prev image
            navigateLightboxPrev();
        }
    }
}

function openLightbox(index) {
    const item = currentFilteredItems[index];
    if (!item || item.isPlaceholder) return;

    currentLightboxIndex = index;
    
    // Set content
    lightboxImg.src = item.url;
    lightboxImg.alt = item.title;
    lightboxCategory.textContent = item.category;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description || 'A timeless moment captured forever.';

    // Show modal and lock page scroll
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');

    // Toggle navigation button visibility
    updateLightboxNavs();
}

// Helpers to search globally by Url (for Featured Stories card clicks)
function openLightboxByUrl(url) {
    // Temporarily map currentFilteredItems to all photos so users can scroll through all
    const allAvailablePhotos = [...ALL_GALLERY_ITEMS.filter(item => !item.isPlaceholder)];
    
    // If the URL is in STORIES, make sure it is available in the list
    if (typeof STORIES !== 'undefined' && STORIES) {
        STORIES.forEach(s => {
            if (!allAvailablePhotos.some(p => p.url === s.url)) {
                allAvailablePhotos.push({ ...s, id: `story-${s.url}`, isPlaceholder: false });
            }
        });
    }
    
    currentFilteredItems = allAvailablePhotos;
    const index = currentFilteredItems.findIndex(p => p.url === url);
    if (index !== -1) {
        openLightbox(index);
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
    // Clear src to save resource loading
    setTimeout(() => {
        lightboxImg.src = '';
    }, 400);
}

function navigateLightboxPrev() {
    let index = currentLightboxIndex;
    do {
        index = (index - 1 + currentFilteredItems.length) % currentFilteredItems.length;
    } while (currentFilteredItems[index].isPlaceholder && index !== currentLightboxIndex);

    if (index !== currentLightboxIndex) {
        openLightbox(index);
    }
}

function navigateLightboxNext() {
    let index = currentLightboxIndex;
    do {
        index = (index + 1) % currentFilteredItems.length;
    } while (currentFilteredItems[index].isPlaceholder && index !== currentLightboxIndex);

    if (index !== currentLightboxIndex) {
        openLightbox(index);
    }
}

function updateLightboxNavs() {
    // Check if there are other real photos in the current filter list
    const realPhotos = currentFilteredItems.filter(item => !item.isPlaceholder);
    if (realPhotos.length <= 1) {
        lightboxPrev.style.display = 'none';
        lightboxNext.style.display = 'none';
    } else {
        lightboxPrev.style.display = 'flex';
        lightboxNext.style.display = 'flex';
    }
}

// 8. SCROLL EFFECTS & PARALLAX
function initScrollEffects() {
    // Navigation bar transition on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // Parallax effects
    window.addEventListener('scroll', () => {
        const scrollVal = window.scrollY;
        
        // Parallax for Hero Background
        if (heroBg && elementInViewport(document.getElementById('hero'))) {
            heroBg.style.transform = `translate3d(0, ${scrollVal * 0.35}px, 0) scale(1.05)`;
        }

        // Parallax for Quote Background
        const quoteSection = document.getElementById('quote');
        if (quoteBg && elementInViewport(quoteSection)) {
            const offsetTop = quoteSection.offsetTop;
            const viewVal = scrollVal - offsetTop;
            quoteBg.style.transform = `translate3d(0, ${viewVal * 0.25}px, 0) scale(1.05)`;
        }
    }, { passive: true });

    // Initial run of scroll reveal
    observeItems();
}

function elementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Intersection Observer for scroll reveal animations
let revealObserver;
function observeItems() {
    const items = document.querySelectorAll('.reveal-item, .reveal-shutter');
    
    if (revealObserver) {
        revealObserver.disconnect();
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        revealObserver.observe(item);
    });
}

// 9. RESPONSIVE MOBILE NAVIGATION DRAWER
function initNavigation() {
    // Hamburger click
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = hamburgerBtn.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Drawer links click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMobileMenu();
            // Allow default hash scroll
        });
    });

    // Click outside drawer
    drawerOverlay.addEventListener('click', closeMobileMenu);
}

function openMobileMenu() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');
}

function closeMobileMenu() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
}

// 10. DYNAMIC 3D TILT INTERACTION
function initCardTilt() {
    // Only run on desktop/devices with a mouse (hover support)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.featured-card, .gallery-item, .journey-card');
    cards.forEach(card => {
        // Skip placeholders
        if (card.classList.contains('placeholder-frame')) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angles (max 6 degrees for subtle classiness)
            const rotateX = ((centerY - y) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`;
            card.style.boxShadow = `0 35px 80px rgba(0, 0, 0, 0.7), 0 0 35px rgba(201, 168, 106, 0.2)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            card.style.boxShadow = ''; // Reset to CSS default
        });
    });
}

// 11. PREMIUM CINEMATIC ANIMATIONS (Custom Cursor, Hero Flare, Clip-path reveals)
function initPremiumAnimations() {
    // A. Custom Cursor logic
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    
    if (!cursorDot || !cursorRing) return;

    // Check if device supports fine pointer (mouse)
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) {
        cursorDot.style.display = 'none';
        cursorRing.style.display = 'none';
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    // Update mouse position target
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Spring effect animation loop
    function animateCursor() {
        // Dot tracking (very fast/almost instant)
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

        // Ring tracking (smooth lag spring)
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Event delegation for hover states
    document.body.addEventListener('mouseover', (e) => {
        if (e.target && typeof e.target.closest === 'function') {
            const target = e.target.closest('a, button, .featured-card, .gallery-item, .journey-card, .filter-tab, [role="button"]');
            if (target && !target.classList.contains('placeholder-frame')) {
                document.body.classList.add('cursor-hover');
            }
        }
    });

    document.body.addEventListener('mouseout', (e) => {
        if (e.target && typeof e.target.closest === 'function') {
            const target = e.target.closest('a, button, .featured-card, .gallery-item, .journey-card, .filter-tab, [role="button"]');
            if (target) {
                document.body.classList.remove('cursor-hover');
            }
        }
    });

    // B. Hero Lens Flare tracking
    const heroSection = document.getElementById('hero');
    const lensFlare = document.getElementById('hero-lens-flare');
    if (heroSection && lensFlare) {
        let flareTargetX = 0;
        let flareTargetY = 0;
        let flareCurrentX = 0;
        let flareCurrentY = 0;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            // Calculate mouse position relative to center of hero section
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Constrain flare displacement
            flareTargetX = (x / rect.width) * 150;
            flareTargetY = (y / rect.height) * 150;
        });

        heroSection.addEventListener('mouseleave', () => {
            flareTargetX = 0;
            flareTargetY = 0;
        });

        function animateLensFlare() {
            if (elementInViewport(heroSection)) {
                flareCurrentX += (flareTargetX - flareCurrentX) * 0.08;
                flareCurrentY += (flareTargetY - flareCurrentY) * 0.08;
                lensFlare.style.transform = `translate3d(calc(-50% + ${flareCurrentX}px), calc(-50% + ${flareCurrentY}px), 0) scale(1)`;
            }
            requestAnimationFrame(animateLensFlare);
        }
        requestAnimationFrame(animateLensFlare);
    }
}
