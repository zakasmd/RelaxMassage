// JavaScript for Relax Massage & Spa at Parkway Inn

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Toggle Mobile Menu
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // Header Background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-dark-900/98', 'shadow-lg', 'shadow-black/50', 'py-1');
            header.classList.remove('bg-dark-900/90');
        } else {
            header.classList.remove('bg-dark-900/98', 'shadow-lg', 'shadow-black/50', 'py-1');
            header.classList.add('bg-dark-900/90');
        }

        // Active Link Highlight on Scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Gallery Lightbox Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryItems && lightboxModal && lightboxImg && lightboxCaption) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.getAttribute('data-img');
                const caption = item.getAttribute('data-caption');
                
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption || '';
                lightboxModal.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            });
        });

        const closeLightbox = () => {
            lightboxModal.classList.add('hidden');
            lightboxImg.src = '';
            document.body.classList.remove('overflow-hidden');
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('flex-1')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }
});
