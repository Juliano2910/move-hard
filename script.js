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
    ".media-card, .service, .number-item, .intro-content, .manifesto-content"
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

        // Sur le one-pager, le bouton MENU renvoie
        // directement vers la section contact.

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
