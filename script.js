const handles = ["@trail.hard", "@run.hard", "@cycling.hard"];
const handleText = document.getElementById("handleText");
let handleIndex = 0;

setInterval(() => {
  handleText.style.opacity = 0;

  setTimeout(() => {
    handleIndex = (handleIndex + 1) % handles.length;
    handleText.textContent = handles[handleIndex];
    handleText.style.opacity = 1;
  }, 250);
}, 3000);

const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

menuBtn.addEventListener("click", () => {
  menuPanel.classList.toggle("is-open");
});

menuPanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menuPanel.classList.remove("is-open"));
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
});

const translations = {
  fr: {
    menuButton: "menu",
    navManifesto: "Manifesto",
    navMedia: "Médias",
    navMission: "Mission",
    navReferences: "Références",
    navContact: "Contact",
    heroSubtitle: "Trail running — Cyclisme — Running",
    introTitleSmall: "Le sport,",
    introTitleBig: "plus fort",
    introCopy: "Agence média dédiée aux cultures trail running, running et cyclisme.",
    statReach: "reach mensuel",
    statFollowers: "abonnés cumulés",
    statAge: "18–40 ans",
    statCollabs: "collaborations",
    statCommunities: "communautés",
    discoverMedia: "Découvrir les médias",
    missionTitle: "Notre mission",
    missionText: "Créer des ponts entre les marques, les athlètes et les communautés sportives grâce à des contenus authentiques, performants et culturellement ancrés.",
    discover: "Découvrir",
    contactEyebrow: "Partenariats marques",
    contactTitle: "nous contacter",
    contactText: "Marques, agences ou partenaires : construisons ensemble des campagnes impactantes autour du sport et de la performance.",
    contactButton: "Nous contacter"
  },
  en: {
    menuButton: "menu",
    navManifesto: "Manifesto",
    navMedia: "Media",
    navMission: "Mission",
    navReferences: "References",
    navContact: "Contact",
    heroSubtitle: "Trail running — Cycling — Running",
    introTitleSmall: "Sport,",
    introTitleBig: "stronger",
    introCopy: "A media agency dedicated to trail running, running and cycling cultures.",
    statReach: "monthly reach",
    statFollowers: "combined followers",
    statAge: "18–40 years old",
    statCollabs: "collaborations",
    statCommunities: "communities",
    discoverMedia: "Discover the media",
    missionTitle: "Our mission",
    missionText: "We connect brands, athletes and sports communities through authentic, high-performing and culturally grounded content.",
    discover: "Discover",
    contactEyebrow: "Brand partnerships",
    contactTitle: "contact us",
    contactText: "Brands, agencies and partners: let’s build impactful campaigns around sport and performance.",
    contactButton: "Contact us"
  }
};

const langBtn = document.getElementById("langBtn");
let currentLang = "fr";

function applyTranslation(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key];
  });

  langBtn.textContent = lang === "fr" ? "EN" : "FR";
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyTranslation(currentLang);
});
