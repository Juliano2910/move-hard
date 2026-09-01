// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.getElementById("mobile-navigation");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  // Ferme le menu mobile quand on clique sur un lien
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
      document.body.classList.remove("menu-open");
    });
  });
}


// =========================================================
// ANIMATIONS AU SCROLL (.reveal)
// =========================================================

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Affiche tout directement, sans animation
    revealElements.forEach((el) => el.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Navigateur trop ancien : on affiche tout directement
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }
}
