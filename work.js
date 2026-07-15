/* ==========================================================================
   Shyuzz Studio Javascript - Portfolio Works Page (work.html)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Projects Database (Consistent with index.js database)
    const projectsData = {
        'gil-goren': {
            tag: 'Exhibition Design • Branding',
            title: '“Can You See The Beauty” — Gil Goren',
            desc: 'Exhibition design for artist Gil Goren at the “Hermann Struck” Museum. The exhibition title, “Can You See The Beauty”, is taken from a poem by Nathan Alterman, reflecting the poetic dialogue between past and present that runs through the show. Goren’s work references the legacy of Hermann Struck in Eretz Israel while introducing a contemporary visual language defined by bold, saturated colors. Following in-depth research into the artist’s practice, the exhibition space was divided into RGB zones with an additional green axis, echoing the chromatic structure of the artworks.',
            media: [
                { type: 'image', path: 'assets/branding/“Can You See The Beauty” — Exhibition Design for Artist Gil Goren/rotator.png' },
                { type: 'image', path: 'assets/branding/“Can You See The Beauty” — Exhibition Design for Artist Gil Goren/Colbo and Yediot.jpg' },
                { type: 'image', path: 'assets/branding/“Can You See The Beauty” — Exhibition Design for Artist Gil Goren/לוגו הראית איזה יופי.png' },
                { type: 'image', path: 'assets/branding/“Can You See The Beauty” — Exhibition Design for Artist Gil Goren/לוגו הראית איזה יופי2.png' }
            ]
        },
        'red-bus': {
            tag: 'Branding • Transport Design',
            title: 'Haifa Tourism: The Red Bus Design',
            desc: 'Visual concept and detailed graphic design mapping for Haifa\'s official tourism double-decker bus, adding character and vibrant local identity to the streetscape. The wrapping layout integrates illustrative and graphic elements, showing the historical tourist attractions of the city of Haifa.',
            media: [
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/Gemini_Generated_Image_oadmpxoadmpxoadm.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/ChatGPT Image May 19, 2026, 06_50_00 PM (1).png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/ChatGPT Image May 19, 2026, 06_50_00 PM (2).png' }
            ]
        },
        'branding-myself': {
            tag: 'Branding • Self-Identity',
            title: 'Branding Myself: The Difficult Client',
            desc: 'Developing a cheeky, bold, and sassy visual identity for Shyuzz Studio. Infused with neon hues, custom icons, and interactive digital layout concepts, this branding showcases the studio\'s refusal of the ordinary, turning corporate assets into visual statements.',
            media: [
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/04e3a117-75b8-497b-804b-d801a6688faa.png' },
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/17098fc3-75af-48f3-ae47-b4b0984c7085.png' },
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/4cd3f586-5cc3-41f5-965a-b4cbdc8aa031.png' },
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/58eb96eb-8e10-480d-9229-abde0d5e0b2d.png' },
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/b296aaaf-5b68-4137-ac32-71a4af69a99b.png' },
                { type: 'image', path: 'assets/branding/branding Myself The Most Difficult Client/e7184cae-b7fc-47e1-884e-caa9c4c74cb8.png' }
            ]
        },
        'garin-tzabar': {
            tag: 'Environmental Art • Mural Design',
            title: 'Garin Tzabar: Community Wall Art',
            desc: 'A large-scale public mural design created for Garin Tzabar, blending illustrative community symbols with bold graphic elements to revitalize a shared urban space. The project features hand-painted walls and interactive digital templates designed in collaboration with the community members.',
            media: [
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/540514125_1171119641713980_4907827523360123064_n.jpg' },
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/538530753_1171119625047315_2672241607695226882_n.jpg' },
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/sdסופי.png' },
                { type: 'video', path: 'assets/murals/Garin Tzabar | Community Wall Art/Untitled.mp4' }
            ]
        },
        'papa-bakery': {
            tag: 'Mural • Commercial Spaces',
            title: 'Papa Bakery Murals',
            desc: 'Handcrafted interior mural designs created for Papa Bakery, establishing a warm, artisanal brand story through typographic painting and illustrations. Designed to draw visual interest and set an inviting, premium tone for visiting customers.',
            media: [
                { type: 'image', path: 'assets/murals/Papa Bakery/IMG_3312.jpeg' },
                { type: 'image', path: 'assets/murals/Papa Bakery/IMG_3322 Large.jpeg' },
                { type: 'image', path: 'assets/murals/Papa Bakery/image-fc8d0ba0-5e5b-4c6a-97ac-a17c7a12f967.webp' }
            ]
        },
        'pop-art': {
            tag: 'Identity • Event Branding',
            title: 'Pop Art Family Festival',
            desc: 'Visual language, logo, and marketing banner suites developed for the Pop Art Family Festival. The design incorporates high-contrast illustration style, bringing comic-style branding elements to print billboards, online banners, and spatial layouts.',
            media: [
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES.png' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES banners - Social-Cover 851-315.jpg' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES banners - Social-Insta 1080x1920.jpg' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/standing-billboard-template-front-shop.png' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/סמי עופר.jpg' }
            ]
        },
        'museums-campaign': {
            tag: 'Campaign • Editorial Poster',
            title: 'Haifa Museums Campaign Series',
            desc: 'A series of high-energy exhibition promotional posters and outdoor mockups designed for Haifa Museums. This campaign uses bold, structured colorblocking and clean typography layouts to capture attention in metropolitan environments.',
            media: [
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-57304 Passover HMS Banners פלזמה 1600x916.png' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-00000 Africa Day Ad.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-55961 Beit Hahm Rottetors.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-56083 Japan Craft post.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-56083 Japan Craft post2.jpeg' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-56421 41th Film Festival Ad.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Museums Promotional Poster Series/DL-56422 Tisrei Holiday AD.jpg' }
            ]
        },
        'strange-addiction': {
            tag: 'Book & Editorial Design',
            title: '“Strange Addiction” Book Design',
            desc: 'Cheeky, bold editorial layout and cover design for "Strange Addiction". This publication features custom typographic experiments, visual grid structure disruptions, and full-bleed custom graphics that challenge conventional editorial constraints.',
            media: [
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_01.png' },
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_03.png' },
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_04.png' },
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_06.png' },
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_07.png' },
                { type: 'image', path: 'assets/books/starnge eddiction/Book_Mockup_08.png' }
            ]
        },
        'yiftach-unit': {
            tag: 'Book & Editorial Design',
            title: '“Yiftach Unit” — Micha Brickman',
            desc: 'Premium hard-cover editorial book design and layout planning for "Yiftach Unit" by author Micha Brickman. The concept respects structural historical archives while overlaying clean modern grid layouts and striking, high-contrast black-and-white spreads.',
            media: [
                { type: 'image', path: 'assets/books/יחידת יפתח | מיכה בריקמן /Hard Cover Open Book Mockup1.png' }
            ]
        },
        'little-big': {
            tag: 'Book & Editorial Design',
            title: '“Little Big” Book Project',
            desc: 'Vibrant editorial layout design and custom graphic illustrations for the "Little Big" book project. Utilizes saturated vector graphic styles, hand-painted digital layouts, and quirky font pairings to build a lively visual narrative.',
            media: [
                { type: 'image', path: 'assets/books/little big/05.png' },
                { type: 'image', path: 'assets/books/little big/06.png' },
                { type: 'image', path: 'assets/books/little big/6.1.png' }
            ]
        },
        'pillowcase': {
            tag: 'Book & Editorial Design',
            title: '“Pillowcase” Book Design',
            desc: 'Artistic editorial publication and material design for "Pillowcase". Features organic text wrap layouts, soft photographic spacing, and physical textured paper mockups that evoke comfort and tactility.',
            media: [
                { type: 'image', path: 'assets/books/pilowcase/IMG_9720.jpeg' },
                { type: 'image', path: 'assets/books/pilowcase/IMG_9721.jpeg' },
                { type: 'image', path: 'assets/books/pilowcase/IMG_9721 2.jpeg' },
                { type: 'image', path: 'assets/books/pilowcase/IMG_9722.jpeg' },
                { type: 'image', path: 'assets/books/pilowcase/IMG_9723.jpeg' },
                { type: 'image', path: 'assets/books/pilowcase/IMG_9725.jpeg' }
            ]
        },
        'haifa-summer': {
            tag: 'Branding • Summer Campaign',
            title: 'Haifa Tourism: Summer Campaign',
            desc: 'Creative direction, layout structures, and detailed marketing banner designs executed for the official Haifa Tourism Summer Campaign. Focuses on high-contrast neon tones and layered summer branding elements for outdoor posters and social media suites.',
            media: [
                { type: 'image', path: 'assets/branding/haifa-tourism-dreamy-summer/DL-57593 Summer_2026_ Social4.jpg' },
                { type: 'image', path: 'assets/branding/haifa-tourism-dreamy-summer/DL-57593 Summer_2026_ Social7.jpg' }
            ]
        },
        'motherland': {
            tag: 'Poster Series',
            title: '“Motherland” Poster Series',
            desc: 'A conceptual set of multilingual graphic posters exploring visual tension and identity. Integrates Hebrew and English typographic hierarchies with structured vector design blocks to represent historical dialogues.',
            media: [
                { type: 'image', path: 'assets/posters/Motherland/ENGLISH POSTERS.png' },
                { type: 'image', path: 'assets/posters/Motherland/ENGLISH POSTERS2.png' },
                { type: 'image', path: 'assets/posters/Motherland/ENGLISH POSTERS3.png' },
                { type: 'image', path: 'assets/posters/Motherland/ENGLISH POSTERS5.png' },
                { type: 'image', path: 'assets/posters/Motherland/HEBREW POSTERS .png' },
                { type: 'image', path: 'assets/posters/Motherland/HEBREW POSTERS 2.png' },
                { type: 'image', path: 'assets/posters/Motherland/HEBREW POSTERS 3.png' },
                { type: 'image', path: 'assets/posters/Motherland/HEBREW POSTERS 5.png' }
            ]
        },
        'cabin-exhibition': {
            tag: 'Poster & Editorial',
            title: '“Cabin” Exhibition Poster',
            desc: 'Visual concept and poster layouts for the Cabin exhibition. Employs minimal graphic rules, textured papers, and a custom animated showcase GIF that highlights spatial design details.',
            media: [
                { type: 'image', path: 'assets/posters/cabin/MVX_POSTER_MOCKUP.png' },
                { type: 'image', path: 'assets/posters/cabin/exhibition-text_Page_1.jpg' },
                { type: 'image', path: 'assets/posters/cabin/exhibition-gif.gif' },
                { type: 'image', path: 'assets/posters/cabin/Papers-Brand-Presentation-Design-Free-psd-Mockup.jpg' }
            ]
        },
        'gido-concert': {
            tag: 'Concert Poster & Identity',
            title: 'Gido Concert Branding',
            desc: 'Bold, high-energy event marketing campaign posters created for the Gido concert. Features customized title typography, social media banners, and digital template graphics optimized for pop-culture promotions.',
            media: [
                { type: 'image', path: 'assets/posters/gido concert/gido-and-ibish.png' },
                { type: 'image', path: 'assets/posters/gido concert/gido-insta.jpg' },
                { type: 'image', path: 'assets/posters/gido concert/facebook-cover.jpg' }
            ]
        },
        'sharks-association': {
            tag: 'Branding Posters',
            title: 'Israel Sharks Association Posters',
            desc: 'Environmental awareness poster campaign developed for the Israel Sharks Association. Uses structured typographic layouts and dramatic marine photography to engage public audiences in wildlife conservation.',
            media: [
                { type: 'image', path: 'assets/posters/sharks-association-israel/Artboard 1-100.jpg' },
                { type: 'image', path: 'assets/posters/sharks-association-israel/Artboard 2-100.jpg' },
                { type: 'image', path: 'assets/posters/sharks-association-israel/Artboard 1-8.png' },
                { type: 'image', path: 'assets/posters/sharks-association-israel/Artboard 2-8.png' }
            ]
        }
    };

    // 2. Custom Cursor Follower
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.cursor-text');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const updateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        gsap.set(cursor, {
            x: cursorX,
            y: cursorY
        });
        
        requestAnimationFrame(updateCursor);
    };
    requestAnimationFrame(updateCursor);

    // Hover interactive elements to update cursor shape
    const setupCursorHovers = () => {
        const interactiveElements = document.querySelectorAll('a, button, select, .grid-item-link');
        interactiveElements.forEach(elem => {
            // Remove previous listeners to prevent duplicates
            elem.removeEventListener('mouseenter', onMouseEnter);
            elem.removeEventListener('mouseleave', onMouseLeave);
            
            elem.addEventListener('mouseenter', onMouseEnter);
            elem.addEventListener('mouseleave', onMouseLeave);
        });
    };

    const onMouseEnter = (e) => {
        cursor.classList.add('hovered');
        const elem = e.currentTarget;
        if (elem.classList.contains('grid-item-link')) {
            cursorText.innerText = 'VIEW';
            cursorText.style.color = '#0b0b0d';
        } else {
            cursorText.innerText = 'GO';
            cursorText.style.color = '#0b0b0d';
        }
    };

    const onMouseLeave = () => {
        cursor.classList.remove('hovered');
    };

    setupCursorHovers();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
    });
    document.addEventListener('mouseenter', () => {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
    });

    // 3. Hamburger Menu Toggle (Native Scroll)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        menuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        if (menuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(mobileLinks, 
                { opacity: 0, y: 30, skewY: 5 }, 
                { opacity: 1, y: 0, skewY: 0, stagger: 0.1, duration: 0.6, ease: 'power4.out', delay: 0.3 }
            );
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    menuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 4. Smart revealing header scroll handler
    const header = document.querySelector('.main-header');
    if (header) {
        let lastScrollY = window.scrollY;
        const scrollThreshold = 80;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > scrollThreshold) {
                if (currentScrollY > lastScrollY) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // 5. Isotope-Style Double Select Filtering
    const grid = document.getElementById('portfolio-grid');
    const gridItems = document.querySelectorAll('.grid-item');
    const selectCategory = document.getElementById('filter-category');
    const selectStyle = document.getElementById('filter-style');

    const filterGrid = () => {
        const catVal = selectCategory.value;
        const styleVal = selectStyle.value;

        // Slide down and fade out transition for premium feel
        gsap.to(grid, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                gridItems.forEach(item => {
                    const itemCat = item.getAttribute('data-category');
                    const itemStyle = item.getAttribute('data-style');

                    const matchesCat = (catVal === 'all' || itemCat === catVal);
                    const matchesStyle = (styleVal === 'all' || itemStyle === styleVal);

                    if (matchesCat && matchesStyle) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });

                // Fade back in and slide up
                gsap.to(grid, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            }
        });
    };

    selectCategory.addEventListener('change', filterGrid);
    selectStyle.addEventListener('change', filterGrid);

    // 6. Project Modal Details Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalGallery = document.getElementById('modal-gallery');

    const openCaseStudy = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        // Feed details
        modalTag.innerText = data.tag;
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.desc;

        // Clear previous images and load new ones
        modalGallery.innerHTML = '';
        data.media.forEach(item => {
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = encodeURI(item.path);
                img.alt = data.title;
                img.loading = 'lazy';
                modalGallery.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = encodeURI(item.path);
                video.controls = true;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                modalGallery.appendChild(video);
            }
        });

        // Block body scroll
        document.body.style.overflow = 'hidden';

        // Animate modal open
        gsap.set(modal, { display: 'block' });
        gsap.fromTo(modal, 
            { opacity: 0, yPercent: 40 },
            { opacity: 1, yPercent: 0, duration: 0.6, ease: 'power3.out' }
        );
    };

    const closeCaseStudy = () => {
        gsap.to(modal, {
            opacity: 0,
            yPercent: 40,
            duration: 0.4,
            onComplete: () => {
                gsap.set(modal, { display: 'none' });
                document.body.style.overflow = 'auto';
            }
        });
    };

    // Attach trigger clicks
    const projectLinks = document.querySelectorAll('.grid-item-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project-id');
            if (projectId) {
                openCaseStudy(projectId);
            }
        });
    });

    closeBtn.addEventListener('click', closeCaseStudy);

    // Escape key listener to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCaseStudy();
        }
    });

    // Staggered grid item entry animation
    gsap.from('.grid-item', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
    });
});
