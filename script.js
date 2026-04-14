const translations = {
  fr: {
    brandTag: 'Le sport, plus fort',

    navMedia: 'Médias',
    navProjects: 'Projets',
    navServices: 'Services',
    navContact: 'Contact',

    heroEyebrow: 'AGENCE MÉDIA SPORT',
    heroTitle: 'NOUS PORTONS UNE COMMUNAUTÉ SPORTIVE LIBRE, ENGAGÉE ET INSPIRANTE.',
    heroCopy: 'Move Hard est un écosystème éditorial indépendant qui connecte les marques du sport à des audiences fortes autour du trail, du running et du cyclisme.',
    ctaMedia: 'Découvrir nos médias',
    ctaContact: 'Nous contacter',

    stats1Value: '3',
    stats1Label: 'Médias spécialisés',
    stats2Value: '1',
    stats2Label: 'Écosystème média',
    stats3Value: '100%',
    stats3Label: 'Sport & communauté',

    mediaEyebrow: 'Média',
    mediaTitle: 'Trois univers, une même vision',
    mediaIntro: 'Chaque média parle à une communauté précise, avec un ton, des formats et des contenus pensés pour raconter le sport autrement.',
    mediaTrailTitle: 'Trail Hard',
    mediaTrailText: 'Le média dédié au trail, aux athlètes, aux courses et à la culture outdoor.',
    mediaTrailMeta1: 'Trail running',
    mediaTrailMeta2: 'Communauté outdoor',
    mediaRunTitle: 'Run Hard',
    mediaRunText: 'Le média consacré au running, à l’entraînement, à la performance et à la route.',
    mediaRunMeta1: 'Running',
    mediaRunMeta2: 'Performance & lifestyle',
    mediaCyclingTitle: 'Cycling Hard',
    mediaCyclingText: 'Le média pensé pour le vélo, les pratiquants, les courses et la culture cycliste.',
    mediaCyclingMeta1: 'Cyclisme',
    mediaCyclingMeta2: 'Routes & communautés',

    projectsEyebrow: 'Projets',
    projectsTitle: 'Des collaborations qui prennent le sport au sérieux',
    projectsIntro: 'Campagnes, couvertures événementielles, lancements de produits et activations éditoriales.',
    project1Title: 'Campagne trail / lancement produit',
    project2Title: 'Couverture d’événement running',
    project3Title: 'Activation média cyclisme',

    servicesEyebrow: 'Services',
    servicesTitle: 'Des services pensés pour les marques du sport',
    servicesIntro: 'Nous concevons des contenus et des dispositifs éditoriaux adaptés aux marques, événements et acteurs du sport.',
    service1Title: 'Stratégie éditoriale',
    service1Text: 'Positionnement, formats, ligne éditoriale et calendrier de diffusion.',
    service2Title: 'Production de contenu',
    service2Text: 'Vidéos, carrousels, interviews, formats sociaux et contenus brandés.',
    service3Title: 'Activation média',
    service3Text: 'Diffusion via nos médias et mise en avant ciblée selon la discipline.',
    service4Title: 'Storytelling de marque',
    service4Text: 'Raconter un produit, une course, une vision ou un lancement avec justesse.',

    contactEyebrow: 'Contact',
    contactTitle: 'Parlons de votre prochain projet',
    contactText: 'Vous êtes une marque, un organisateur ou un acteur du sport et vous cherchez une approche éditoriale plus forte ?',
    footerTag: 'Le sport, plus fort'
  },

  en: {
    brandTag: 'Sport, made stronger',

    navMedia: 'Media',
    navProjects: 'Projects',
    navServices: 'Services',
    navContact: 'Contact',

    heroEyebrow: 'SPORTS MEDIA AGENCY',
    heroTitle: 'WE BUILD A FREE, ENGAGED AND INSPIRING SPORTS COMMUNITY.',
    heroCopy: 'Move Hard is an independent editorial ecosystem connecting sports brands with strong audiences around trail, running and cycling.',
    ctaMedia: 'Discover our media',
    ctaContact: 'Contact us',

    stats1Value: '3',
    stats1Label: 'Specialist media brands',
    stats2Value: '1',
    stats2Label: 'Media ecosystem',
    stats3Value: '100%',
    stats3Label: 'Sport & community',

    mediaEyebrow: 'Media',
    mediaTitle: 'Three worlds, one vision',
    mediaIntro: 'Each media brand speaks to a specific community, with its own tone, formats and storytelling approach.',
    mediaTrailTitle: 'Trail Hard',
    mediaTrailText: 'The media brand dedicated to trail, athletes, races and outdoor culture.',
    mediaTrailMeta1: 'Trail running',
    mediaTrailMeta2: 'Outdoor community',
    mediaRunTitle: 'Run Hard',
    mediaRunText: 'The media brand focused on running, training, performance and the road.',
    mediaRunMeta1: 'Running',
    mediaRunMeta2: 'Performance & lifestyle',
    mediaCyclingTitle: 'Cycling Hard',
    mediaCyclingText: 'The media brand built for cycling, riders, races and bike culture.',
    mediaCyclingMeta1: 'Cycling',
    mediaCyclingMeta2: 'Roads & communities',

    projectsEyebrow: 'Projects',
    projectsTitle: 'Collaborations built with sport in mind',
    projectsIntro: 'Campaigns, event coverage, product launches and editorial activations.',
    project1Title: 'Trail campaign / product launch',
    project2Title: 'Running event coverage',
    project3Title: 'Cycling media activation',

    servicesEyebrow: 'Services',
    servicesTitle: 'Services built for sports brands',
    servicesIntro: 'We design content and editorial systems adapted to brands, events and sports organisations.',
    service1Title: 'Editorial strategy',
    service1Text: 'Positioning, formats, editorial direction and publishing rhythm.',
    service2Title: 'Content production',
    service2Text: 'Videos, carousels, interviews, social formats and branded content.',
    service3Title: 'Media activation',
    service3Text: 'Distribution through our media brands with targeted visibility by discipline.',
    service4Title: 'Brand storytelling',
    service4Text: 'Turning a product, race, vision or launch into a clear and compelling story.',

    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk about your next project',
    contactText: 'If you are a brand, organiser or sports actor looking for a stronger editorial approach, let’s talk.',
    footerTag: 'Sport, made stronger'
  }
};

const root = document.documentElement;
const toggle = document.querySelector('.lang-toggle');
let currentLang = 'fr';

function applyTranslations(lang) {
  root.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

toggle?.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyTranslations(currentLang);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

applyTranslations(currentLang);
