/* ==========================================================================
   Shyuzz Studio Javascript - Case Studies, Modals & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Projects Database (Real local assets from assets/ folders)
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
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/qr sticker_Page_1_Image_0001.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/qr sticker_Page_2_Image_0001.png' }
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
        'bayer': {
            tag: 'Identity • Marketing Suite',
            title: 'Bayer: Annual Cycle 2026',
            desc: 'Branding campaign and marketing materials designed for Bayer\'s 2026 Annual Cycle, creating a consistent and premium visual identity for corporate communications. Developed as part of my work at “Dotan-Lidgi” Studio.',
            media: [
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-24 at 16.20.58.jpeg' },
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-24 at 16.20.59.jpeg' },
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-13 at 09.28.03.jpeg' },
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-24 at 16.22.20.jpeg' },
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-24 at 16.22.20 (1).jpeg' },
                { type: 'image', path: 'assets/branding/bayer/Annual Cycle 2026/WhatsApp Image 2026-05-24 at 16.22.20 (2).jpeg' }
            ]
        },
        'haifa-magical-summer': {
            tag: 'Identity • Campaign Design',
            title: 'Haifa Tourism: Magical Summer',
            desc: 'Visual language and marketing materials created for Haifa\'s Magical Summer campaign, inviting locals and tourists to experience the city\'s enchanting summer events. Developed as part of my work at “Dotan-Lidgi” Studio.',
            media: [
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/DL-57593 Summer 2026 - Facebook.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/DL-57593 Summer 2026 - Facebook3.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/DL-57593 Summer 2026 - Facebook6.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/ChatGPT Image Jun 30, 2026, 01_18_03 PM.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/DL-00000 Summer 2026 - Posts & Stories July 13.jpg' },
                { type: 'image', path: 'assets/branding/Haifa Tourism magical summer/DL-00000 Summer 2026 - Posts & Stories July 15.jpg' }
            ]
        }
    };

    // 2. Custom Cursor Follower
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.cursor-text');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Track mouse coordinates
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Custom cursor animation loop using requestAnimationFrame (smooth follow)
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
    const interactiveElements = document.querySelectorAll('a, button, .filter-btn, .project-block');
    
    interactiveElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            
            // Customize cursor text based on element type
            if (elem.classList.contains('project-block')) {
                cursorText.innerText = 'VIEW';
                cursorText.style.color = '#0b0b0d';
            } else {
                cursorText.innerText = 'GO';
                cursorText.style.color = '#0b0b0d';
            }
        });

        elem.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

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

    // 4. Hero Section Animations (Text & Sticker)
    gsap.from('.title-line', {
        yPercent: 100,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1
    });

    gsap.from('.hero-brand-sticker', {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1.2
    });

    gsap.from('.hero-text-card', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.4
    });

    // 5. Work Section Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectBlocks = document.querySelectorAll('.project-block');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            const showExtra = (filterValue !== 'all') || (document.getElementById('toggle-projects-btn')?.classList.contains('expanded'));

            gsap.to('.portsection', {
                opacity: 0,
                y: 15,
                duration: 0.3,
                onComplete: () => {
                    projectBlocks.forEach(card => {
                        const category = card.getAttribute('data-category');
                        const panel = card.closest('.panelc');
                        const isExtra = panel && panel.classList.contains('extra-project');
                        
                        const matchesFilter = (filterValue === 'all' || category === filterValue);
                        const shouldShow = matchesFilter && (!isExtra || showExtra);
                        
                        if (shouldShow) {
                            card.classList.remove('hide');
                            if (panel) {
                                panel.classList.remove('hide');
                                if (isExtra) {
                                    panel.style.display = 'block';
                                    panel.style.opacity = '1';
                                }
                            }
                        } else {
                            card.classList.add('hide');
                            if (panel) {
                                panel.classList.add('hide');
                                if (isExtra && filterValue === 'all') {
                                    panel.style.display = 'none';
                                    panel.style.opacity = '0';
                                }
                            }
                        }
                    });
                    
                    // Re-calculate ScrollTrigger positions
                    ScrollTrigger.refresh();
                    
                    gsap.to('.portsection', {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                }
            });
        });
    });

    // 6. No GSAP parallax on images — matching Idyllic's natural scroll behavior

    // Mask Text Reveal animations for Titles
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((text) => {
        gsap.to(text, {
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: text.parentElement,
                start: 'top 88%',
                toggleActions: 'play none none none'
            }
        });
    });

    // 3D Card Hover Tilt gesture for Marquee Cutout items
    const marqueeItems = document.querySelectorAll('.image-marquee__item');
    marqueeItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            // Get mouse position relative to center of the card
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotational values
            const rotateX = -y * 0.12;
            const rotateY = x * 0.12;
            
            gsap.to(item, {
                rotateX: rotateX,
                rotateY: rotateY,
                translateY: -15,
                transformPerspective: 800,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                rotateX: 0,
                rotateY: 0,
                translateY: 0,
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto'
            });
        });
    });

    // Story paragraphs fade & slide up on scroll (Idyllic fixed-scroll style)
    const scrollRevealBlocks = document.querySelectorAll('.scroll-reveal-block');
    scrollRevealBlocks.forEach((block) => {
        const paragraph = block.querySelector('.reveal-paragraph');
        if (paragraph) {
            gsap.fromTo(paragraph, 
                { opacity: 0.1, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: block,
                        start: 'top 85%',
                        end: 'bottom 45%',
                        scrub: true
                    }
                }
            );
        }
    });

    // Cutout marquee entry reveal
    gsap.from('.image-marquee', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.cutout-marquee-section',
            start: 'top 75%'
        }
    });

    // Helper function to split text into individual spans for character-level animations
    const splitTextIntoChars = (element) => {
        const text = element.innerText;
        element.innerHTML = '';
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.className = 'char-anim';
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.innerText = char;
            }
            element.appendChild(span);
        });
    };

    // Apply Idyllic-style "MAGNIFICENT" text distortion to .magnificent-text items
    const magnificentTexts = document.querySelectorAll('.magnificent-text');
    magnificentTexts.forEach(el => {
        splitTextIntoChars(el);
        const chars = el.querySelectorAll('.char-anim');
        
        chars.forEach((char, index) => {
            // Sinusoidal wave vertical offsets (wavy initial baseline)
            const initialY = index % 2 === 0 ? -28 : 28;
            // Outward/inward rotations
            const initialRotate = index % 2 === 0 ? -16 : 16;
            
            gsap.fromTo(char, 
                {
                    scaleX: 0.12,          // Squeezed paper-thin horizontally
                    rotate: initialRotate, // Tilted
                    y: initialY,           // Alternating baseline offset
                    opacity: 0.3
                },
                {
                    scaleX: 1,             // Expanded to full width
                    rotate: 0,             // Fully upright
                    y: 0,                  // Perfectly aligned
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 92%',   // Animates as it scrolls into screen
                        end: 'bottom 52%', // Fully upright at 52% of viewport
                        scrub: true
                    }
                }
            );
        });
    });

    // Massive Banner Scroll Zoom Reveal (for the non-distorted baseline)
    gsap.from('.massive-text', {
        scale: 0.94,
        opacity: 0.6,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.massive-banner-section',
            start: 'top 90%',
            end: 'bottom 55%',
            scrub: true
        }
    });

    // Mapped inner tracks for continuous slow auto-scrolling
    const marqueeLanes = document.querySelectorAll('#notgoodat .marquee-lane__inner');
    const lane1Inner = marqueeLanes[0];
    const lane2Inner = marqueeLanes[1];

    if (lane1Inner) {
        gsap.to(lane1Inner, {
            xPercent: -50,
            ease: 'none',
            duration: 80, // Very slow constant auto-scroll
            repeat: -1
        });
    }

    if (lane2Inner) {
        gsap.fromTo(lane2Inner, 
            { xPercent: -50 },
            {
                xPercent: 0,
                ease: 'none',
                duration: 80,
                repeat: -1
            }
        );
    }

    // Scroll-bound parallax drift on the parent containers (slowing down and adding interactivity)
    const parentLane1 = document.querySelector('#notgoodat .marquee-lane:not(.alternating)');
    const parentLane2 = document.querySelector('#notgoodat .marquee-lane.alternating');

    if (parentLane1) {
        gsap.fromTo(parentLane1, 
            { x: 180 },
            {
                x: -180,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#notgoodat',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5 // Smooth momentum lag
                }
            }
        );
    }

    if (parentLane2) {
        gsap.fromTo(parentLane2, 
            { x: -180 },
            {
                x: 180,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#notgoodat',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            }
        );
    }

    // About Section paragraphs fade reveal
    gsap.from('.about-p, .skills-chips', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%'
        }
    });

    // 7. Case Study Modal Popup System
    const modal = document.getElementById('project-modal');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalGallery = document.getElementById('modal-gallery');
    const closeBtn = document.querySelector('.modal-close-btn');

    const openCaseStudy = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        // Populate header details
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

        // Block background scroll
        document.documentElement.style.overflow = 'hidden';
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
            ease: 'power3.in',
            onComplete: () => {
                gsap.set(modal, { display: 'none' });
                // Restore scroll
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
            }
        });
    };

    // Attach click events to project blocks and marquee cutout items
    const allProjectTriggers = document.querySelectorAll('.project-block, .image-marquee__item');
    allProjectTriggers.forEach(block => {
        block.addEventListener('click', () => {
            const projectId = block.getAttribute('data-project-id');
            if (projectId) {
                openCaseStudy(projectId);
            }
        });
    });

    closeBtn.addEventListener('click', closeCaseStudy);

    // Close on pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCaseStudy();
        }
    });

    // Smart revealing header scroll handler (inspired by Idyllic)
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

    // Scroll-activated environmental background color switcher
    const panels = document.querySelectorAll('.scroll-color-panel');
    panels.forEach((panel) => {
        const bgColor = panel.getAttribute('data-bg-color');
        ScrollTrigger.create({
            trigger: panel,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                document.body.style.backgroundColor = bgColor;
            },
            onEnterBack: () => {
                document.body.style.backgroundColor = bgColor;
            }
        });
    });
    // =========================================================================
    // Fixed Background "Work" Text — Show/Hide via ScrollTrigger
    // Fades in ONLY when scrolling through the #work section (.workon to .workoff)
    // =========================================================================
    const workBgText = document.querySelector('.work-background-text');
    const workonEl = document.querySelector('.workon');
    const workoffEl = document.querySelector('.workoff');
    
    if (workBgText && workonEl && workoffEl) {
        // Initialize state as hidden
        gsap.set(workBgText, { display: 'none', opacity: 0, visibility: 'hidden' });
        
        ScrollTrigger.create({
            trigger: workonEl,
            start: 'top 70%',
            endTrigger: workoffEl,
            end: 'bottom 30%',
            onToggle: (self) => {
                if (self.isActive) {
                    gsap.to(workBgText, { 
                        display: 'block', 
                        visibility: 'visible', 
                        opacity: 0.18, 
                        duration: 0.4, 
                        ease: 'power2.out',
                        overwrite: 'auto' 
                    });
                } else {
                    gsap.to(workBgText, { 
                        opacity: 0, 
                        duration: 0.3, 
                        ease: 'power2.in', 
                        overwrite: 'auto', 
                        onComplete: () => { 
                            gsap.set(workBgText, { display: 'none', visibility: 'hidden' }); 
                        } 
                    });
                }
            },
            onRefresh: (self) => {
                if (self.isActive) {
                    gsap.set(workBgText, { display: 'block', visibility: 'visible', opacity: 0.18 });
                } else {
                    gsap.set(workBgText, { display: 'none', visibility: 'hidden', opacity: 0 });
                }
            }
        });
    }

    // =========================================================================
    // Scroll Reveal Animations for Project Panels (Optimized ScrollTrigger)
    // Matches Idyllic layout reveal with buttery smooth performance
    // =========================================================================
    document.querySelectorAll('.panelc').forEach((panel) => {
        const galleryWrap = panel.querySelector('.gallery-wrap');
        if (galleryWrap) {
            const isMobile = window.innerWidth <= 768;
            gsap.fromTo(galleryWrap, 
                { opacity: 0, y: isMobile ? 40 : 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: isMobile ? 0.6 : 1.0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 92%', // start reveal when panel is near bottom of viewport
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    });


    // Toggle Projects Button click handler removed — button now acts as a direct anchor link to work.html


});
