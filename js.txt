/*
=========================================================
Portfolio V2
Navigation + Animations
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();

    initRevealAnimations();

    initNavbar();

    initParallax();

    initSmoothAnchors();

});


/*=========================================================
MENU MOBILE
=========================================================*/

function initMobileMenu() {

    const button = document.querySelector(".menu-button");

    const menu = document.querySelector(".mobile-navigation");

    if (!button || !menu) return;

    button.addEventListener("click", () => {

        const opened = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !opened);

        menu.hidden = opened;

        document.body.classList.toggle("menu-open");

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            button.setAttribute("aria-expanded", "false");

            menu.hidden = true;

            document.body.classList.remove("menu-open");

        });

    });

}


/*=========================================================
APPARITION AU SCROLL
=========================================================*/

function initRevealAnimations() {

    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {

        elements.forEach(el => el.classList.add("is-visible"));

        return;

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => observer.observe(el));

}


/*=========================================================
NAVIGATION
=========================================================*/

function initNavbar() {

    const nav = document.querySelector(".site-navigation");

    if (!nav) return;

    let previousScroll = 0;

    window.addEventListener("scroll", () => {

        const current = window.scrollY;

        if (current > 120) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

        if (current > previousScroll && current > 250) {

            nav.style.transform = "translateY(-100%)";

        } else {

            nav.style.transform = "translateY(0)";

        }

        previousScroll = current;

    });

}


/*=========================================================
PARALLAX HERO
=========================================================*/

function initParallax() {

    const heroImage = document.querySelector(".hero-visual");

    if (!heroImage) return;

    window.addEventListener("scroll", () => {

        const offset = window.scrollY * 0.15;

        heroImage.style.transform =
            `translateY(${offset}px) rotate(-4deg)`;

    });

}


/*=========================================================
SCROLL FLUIDE
=========================================================*/

function initSmoothAnchors() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            const id = link.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}


/*=========================================================
EFFET HOVER SUR LES CARTES
=========================================================*/

document.querySelectorAll(".featured-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -6;

        const rotateY = ((x / rect.width) - 0.5) * 6;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "none";

    });

});


/*=========================================================
COMPTEUR ANIMÉ
=========================================================*/

const numbers = document.querySelectorAll(".statistic strong");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const end = parseInt(el.textContent);

        let current = 0;

        const timer = setInterval(() => {

            current++;

            el.textContent = current.toString().padStart(2, "0");

            if (current >= end) {

                clearInterval(timer);

            }

        }, 60);

        counterObserver.unobserve(el);

    });

}, {

    threshold: 0.5

});

numbers.forEach(number => {

    counterObserver.observe(number);

});


/*=========================================================
TICKER PAUSE AU SURVOL
=========================================================*/

const ticker = document.querySelector(".ticker-content");

if (ticker) {

    ticker.addEventListener("mouseenter", () => {

        ticker.style.animationPlayState = "paused";

    });

    ticker.addEventListener("mouseleave", () => {

        ticker.style.animationPlayState = "running";

    });

}


/*=========================================================
ANIMATION DES IMAGES
=========================================================*/

document.querySelectorAll(".image-placeholder").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.02)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/*=========================================================
PRÉCHARGEMENT DES IMAGES
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================================
FIN
=========================================================*/
