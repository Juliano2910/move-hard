/* =========================================================
   MOVE HARD MEDIA
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.05) translateY(${scrollPosition * 0.12}px)`;

    }

});


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements = document.querySelectorAll(
    ".carousel-slide, .service, .number-item, .intro-content, .manifesto-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        const contact = document.querySelector("#contact");

        if (contact) {

            contact.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================================
   ACTIVE SECTION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    ".desktop-nav a"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === "#" + id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },
    {
        threshold: 0.4
    }
);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   MEDIA CAROUSEL
========================================================= */

class MediaCarousel {
    
    constructor() {
        
        this.slides = document.querySelectorAll(".carousel-slide");
        this.dots = document.querySelectorAll(".dot");
        this.prevBtn = document.querySelector(".carousel-prev");
        this.nextBtn = document.querySelector(".carousel-next");
        
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 4000; // 4 secondes
        
        if (this.slides.length === 0) return;
        
        this.init();
        
    }
    
    init() {
        
        // Event listeners pour les boutons
        if (this.prevBtn) {
            this.prevBtn.addEventListener("click", () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener("click", () => this.nextSlide());
        }
        
        // Event listeners pour les dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => this.goToSlide(index));
        });
        
        // Afficher le premier slide
        this.showSlide(0);
        
        // Démarrer l'autoplay
        this.startAutoplay();
        
        // Pause l'autoplay au survol
        const container = document.querySelector(".carousel-container");
        if (container) {
            container.addEventListener("mouseenter", () => this.pauseAutoplay());
            container.addEventListener("mouseleave", () => this.startAutoplay());
        }
        
    }
    
    showSlide(index) {
        
        // S'assurer que l'index est valide
        if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else {
            this.currentSlide = index;
        }
        
        // Retirer la classe active de tous les slides
        this.slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        
        // Ajouter la classe active au slide actuel
        this.slides[this.currentSlide].classList.add("active");
        
        // Mettre à jour les dots
        this.updateDots();
        
    }
    
    updateDots() {
        
        this.dots.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === this.currentSlide) {
                dot.classList.add("active");
            }
        });
        
    }
    
    nextSlide() {
        
        this.pauseAutoplay();
        this.showSlide(this.currentSlide + 1);
        this.startAutoplay();
        
    }
    
    prevSlide() {
        
        this.pauseAutoplay();
        this.showSlide(this.currentSlide - 1);
        this.startAutoplay();
        
    }
    
    goToSlide(index) {
        
        this.pauseAutoplay();
        this.showSlide(index);
        this.startAutoplay();
        
    }
    
    startAutoplay() {
        
        if (this.autoplayInterval) return;
        
        this.autoplayInterval = setInterval(() => {
            this.showSlide(this.currentSlide + 1);
        }, this.autoplayDelay);
        
    }
    
    pauseAutoplay() {
        
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
        
    }
    
}

// Initialiser le carousel au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    new MediaCarousel();
});
