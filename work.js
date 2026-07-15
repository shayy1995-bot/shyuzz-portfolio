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
            desc: 'Exhibition design for artist Gil Goren at the “Hermann Struck” Museum. The exhibition title, “Can You See The Beauty”, is taken from a poem by Nathan Alterman, reflecting the poetic dialogue between past and present that runs through the show. Goren’s work references the legacy of Hermann Struck in Eretz Israel while introducing a contemporary visual language defined by bold, saturated colors. Following in-depth research into the artist’s practice, the exhibition space was divided into RGB zones with an additional green axis, echoing the chromatic structure of the artworks. This color-based spatial system guided visitors through the exhibition, creating a layered conversation between historical influence, modern interpretation, and the museum’s architectural framework.',
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
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/qr sticker_Page_1_Image_0001.png' },
                { type: 'image', path: 'assets/branding/Haifa Tourism The Red Bus Design/qr sticker_Page_2_Image_0001.png' }
            ]
        },
        'branding-myself': {
            tag: 'Branding • Self-Identity',
            title: 'Branding Myself: The Difficult Client',
            desc: 'As a graphic designer, branding myself was one of the most challenging projects I’ve ever tackled. I had to dig deep, figure out how I want to present my studio, and translate that into a clear and unique visual language. The process included creating a logo, selecting a color palette, typography, and graphic elements that reflect Shyuzz Studio: bold creativity, vibrant colors, and a personal touch. The result? A brand that feels 100% me – authentic, creative, and professional. If I can brand myself, I can brand anything!',
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
            desc: 'A large-scale mural created for Garin Tzabar, a community of lone soldiers and new immigrants that left their homeland to serve in the IDF. The artwork visually narrates the journey of aliyah, homeland, and shared vision, blending symbols of identity and patriotism, belonging, and resilience. Created in collaboration with “Dotan-Lidgi” Studio, the mural transforms a communal space into a meaningful reflection of collective spirit and purpose.',
            media: [
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/540514125_1171119641713980_4907827523360123064_n.jpg' },
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/538530753_1171119625047315_2672241607695226882_n.jpg' },
                { type: 'image', path: 'assets/murals/Garin Tzabar | Community Wall Art/sd_.png' },
                { type: 'video', path: 'assets/murals/Garin Tzabar | Community Wall Art/Untitled.mp4' }
            ]
        },
        'papa-bakery': {
            tag: 'Mural • Commercial Spaces',
            title: 'Papa Bakery Murals',
            desc: 'My mural project features a nearly 2-meter artwork showcasing the bakery\'s logo, blending natural elements with imagery of the baked goods crafted on-site. The design highlights the bakery\'s deep connection to nature, reflected in its philosophy and use of fresh, natural ingredients. This mural creates a harmonious visual centerpiece that conveys warmth, authenticity, and a celebration of both nature and craftsmanship.',
            media: [
                { type: 'image', path: 'assets/murals/Papa Bakery/IMG_3312.jpeg' },
                { type: 'image', path: 'assets/murals/Papa Bakery/IMG_3322 Large.jpeg' },
                { type: 'image', path: 'assets/murals/Papa Bakery/image-fc8d0ba0-5e5b-4c6a-97ac-a17c7a12f967.webp' }
            ]
        },
        'bloomy': {
            tag: 'Environmental Art • Mural Design',
            title: 'Bloomy — Street Art Haifa',
            desc: 'The TALKING WALLS project is a street museum that narrates the Israeli story through murals created by Israeli artists. The murals story begins with a "time travel" through the utopia before October 7, progresses through the events of the massacre and the war, and concludes by commemorating the events, honoring the heroes, and inspiring hope. Our project speaks of hope. This ethereal figure holds a dandelion in its hand, which self-propagates in the wind, giving rise to new dandelions. Located at HaNamal 38, Haifa.',
            media: [
                { type: 'image', path: 'assets/murals/Bloomy/unnamed.png' },
                { type: 'image', path: 'assets/murals/Bloomy/3D435DC3-00DF-406C-A10C-B22ACCE695BE.jpg' },
                { type: 'image', path: 'assets/murals/Bloomy/46F29B14-61CF-431C-9E11-70FCA6A8BBAA.jpg' },
                { type: 'image', path: 'assets/murals/Bloomy/49B96FD4-78A8-4002-850F-2CA87B8B6780.jpg' },
                { type: 'image', path: 'assets/murals/Bloomy/IMG_0311.jpeg' },
                { type: 'image', path: 'assets/murals/Bloomy/IMG_0345.jpeg' }
            ]
        },
        'job-leap': {
            tag: 'Identity • Event Branding',
            title: 'Job Leap Conference Branding',
            desc: 'Event branding and visual design created for the Ministry of Aliyah and Integration. The conference focused on job searching and professional integration for new immigrants, connecting them with diverse industries. Designed as part of my work at “Dotan-Lidgi” Studio.',
            media: [
                { type: 'image', path: 'assets/branding/job-leap-branding/map-folded-flyer-mockup.jpg' },
                { type: 'image', path: 'assets/branding/job-leap-branding/flyer-multi-language.png' },
                { type: 'image', path: 'assets/branding/job-leap-branding/artboard-1.png' },
                { type: 'image', path: 'assets/branding/job-leap-branding/flyer-mockup.jpg' }
            ]
        },
        'pop-art': {
            tag: 'Identity • Event Branding',
            title: 'Pop Art Family Festival',
            desc: 'Branding and visual design for a Pop Art festival for the whole family, presented by the Municipality of Haifa at “Sammy Ofer” stadium. The event featured a wide range of interactive activities, creative workshops, and vibrant installations, all infused with the playful energy of pop art. I developed the visual identity to reflect the joyful spirit of the festival, combining bold color, dynamic typography, and engaging graphic elements that appeal to all ages. Created as part of my work at “Dotan-Lidgi” Studio.',
            media: [
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES.png' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES banners - Social-Cover 851-315.jpg' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/DL-56246 POP ART FAMILIES banners - Social-Insta 1080x1920.jpg' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/standing-billboard-template-front-shop.png' },
                { type: 'image', path: 'assets/branding/Pop Art Family Festival/ _.jpg' }
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
            desc: 'This project hilariously unravels the tapestry of everyday addictions we all secretly nurture. As naughty as they may be, we\'ve got these tiny obsessions we wish we could bid farewell. Yet, here we are, cheers to persistently indulging in these quirks that make life amusingly unpredictable!',
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
            desc: 'Book design for a documentary publication telling the story of the “Yiftach” IDF Unit, which took part in the fighting on October 7. Accompanied by photographer Micha Birkman, who documented the combat and its aftermath, the book combines powerful photography with restrained design to honor the reality and weight of the events. Created as part of my work at “Dotan-Lidgi” Studio.',
            media: [
                { type: 'image', path: 'assets/books/yiftach-unit/Hard Cover Open Book Mockup1.png' }
            ]
        },
        'little-big': {
            tag: 'Book & Editorial Design',
            title: '“Little Big” Book Project',
            desc: 'This book is a personal creation—combining writing and illustration to bring to life stories born from childhood experiences, memories, and the moments that shaped me. Through words and drawings, it reflects my world in a unique way, filled with humor, emotion, and nostalgia. It is dedicated to my family, especially my older siblings, who filled my childhood with adventures, inspiration, and stories worth telling. This book is about the experiences that make us who we are—small, big, and everything in between.',
            media: [
                { type: 'image', path: 'assets/books/little big/05.png' },
                { type: 'image', path: 'assets/books/little big/06.png' },
                { type: 'image', path: 'assets/books/little big/6.1.png' }
            ]
        },
        'pillowcase': {
            tag: 'Book & Editorial Design',
            title: '“Pillowcase” Book Design',
            desc: 'I created a book that explores intimacy through the lens of the bedroom—a space of emotion, connection, and quiet moments. Through poems, stories, and reflections, it captures the essence of home, where love, dreams, and solitude intertwine. Every page dives into the familiar yet personal atmosphere of the bedroom, turning everyday experiences into something poetic and meaningful. It’s a book about the spaces we retreat to, the feelings that arise within them, and the unspoken stories that make a house a home.',
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
        },
        'neural-pathways': {
            tag: 'Environmental Art • Wallpaper Design',
            title: 'Neural Pathways',
            desc: 'The wallpaper design project aimed to enrich the corridors of the Brain Research Department at a university in Jerusalem. Developed in collaboration with a designer, the project remained conceptual and was not implemented. Inspired by molecular structures and metro station aesthetics, the design sought to symbolize connection, progress, and the complexities of brain research. Though unrealized, it reflected a vision for a space that inspires curiosity and innovation.',
            media: [
                { type: 'image', path: 'assets/murals/neural-pathways/asset_1.png' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_2.png' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_3.png' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_4.png' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_5.png' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_6.jpg' },
                { type: 'image', path: 'assets/murals/neural-pathways/asset_7.png' }
            ]
        },
        'mad-tea': {
            tag: 'Illustration • Graphic Art',
            title: 'The Mad Tea Feast',
            desc: 'A wild depiction of my eccentric tea party with none other than myself, my feline muse & Andy Warhol. Providing artistic inspiration that even the teacups envy. Amidst the chaos, hidden details weave a tapestry of my life - a chaotic invention of whimsy, where my cat rules, inspiration flows, and my tea party guest list is exclusively me. It\'s a celebration of the absurd, the amusing, and the gloriously self-indulgent.',
            media: [
                { type: 'image', path: 'assets/artistic/mad-tea/asset_1.jpg' },
                { type: 'image', path: 'assets/artistic/mad-tea/asset_2.gif' }
            ]
        },
        'as-fast-as-you-can': {
            tag: 'Concept Art • Motion Design',
            title: 'As Fast as You Can',
            desc: 'The viewer, fixed in one moment, senses restlessness as events unfold elsewhere. Driven by a constant pursuit of diverse experiences, there\'s a desire to be part of something beyond the present, coupled with the fear of missing out on potentially better moments everywhere.',
            media: [
                { type: 'image', path: 'assets/artistic/as-fast-as-you-can/asset_1.jpg' },
                { type: 'image', path: 'assets/artistic/as-fast-as-you-can/asset_2.jpg' },
                { type: 'image', path: 'assets/artistic/as-fast-as-you-can/asset_3.gif' }
            ]
        },
        'brenda': {
            tag: 'Typographic Poster • Graphic Design',
            title: 'Brenda — Fontimonim Talents Poster',
            desc: 'Poster design created for the “Fontimonim” Talents platform, inspired by the font “Brenda”. The poster presents the characteristics of the font into a visual persona — bold, sharp, and self-assured. I approached Brenda as a strong female figure, confident in presence and unafraid to occupy the margins. composition, hierarchy, and tone, allowing the typography to lead the visual narrative to a result of a typographic poster that treats the font not just as a tool, but as a character in its own right.',
            media: [
                { type: 'image', path: 'assets/artistic/brenda/asset_1.png' }
            ]
        },
        'surrounded-by-idiots': {
            tag: 'Motion Graphics • Installation Design',
            title: 'Surrounded by Idiots',
            desc: 'Dating Culture (Fails) Between Women and Men. We all have bizarre dating stories: awkward situations with men we went out with, stories no one wants to remember, or ones we only laugh about. My project brings to the forefront those bizarre, diverse, and in a word, \"ruthless\" experiences that made us cut ties with that guy. The project involved the creation of 25 videos, each displayed on a separate screen. This approach creates a unique and multi-dimensional experience for the viewer, allowing them to engage with the content in an immersive and stimulating way.',
            media: [
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_1.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_2.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_3.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_4.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_5.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_6.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_7.jpg' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_8.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_9.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_10.gif' },
                { type: 'image', path: 'assets/posters/surrounded-by-idiots/asset_11.png' }
            ]
        },
        'beyond-boundaries': {
            tag: 'Exhibition Branding • Identity',
            title: 'Beyond Boundaries: Wizo Showcase',
            desc: 'As a \"Wizo\" student I participated in the team of the Design college graduation exhibition, we were tasked with developing the branding for this prestigious event.',
            media: [
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_1.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_2.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_3.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_4.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_5.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_6.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_7.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_8.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_9.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_10.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_11.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_12.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_13.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_14.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_15.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_16.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_17.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_18.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_19.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_20.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_21.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_22.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_23.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_24.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_25.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_26.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_27.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_28.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_29.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_30.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_31.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_32.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_33.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_34.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_35.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_36.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_37.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_38.jpg' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_39.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_40.png' },
                { type: 'image', path: 'assets/branding/beyond-boundaries/asset_41.png' }
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
            onComplete: () => {
                gsap.set(modal, { display: 'none' });
                // Restore scroll
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
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
