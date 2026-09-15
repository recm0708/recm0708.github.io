(() => {
  'use strict';

  const translations = {
    es: {
      skip: 'Saltar al contenido principal',
      brandRole: 'Perfil profesional',
      navProfiles: 'Perfiles',
      navAbout: 'Acerca de mí',
      navFocus: 'Áreas',
      navContact: 'Contacto',
      heroEyebrow: 'PORTAFOLIO PROFESIONAL · PANAMÁ',
      heroLead: 'Profesional multidisciplinario con formación en sistemas eléctricos, automatización y redes informáticas, orientado a infraestructura, operación técnica y mejora continua.',
      tagElectrical: 'Sistemas eléctricos',
      tagAutomation: 'Automatización',
      tagNetworks: 'Redes informáticas',
      tagInfrastructure: 'Infraestructura',
      exploreProfiles: 'Explorar perfiles',
      contactMe: 'Contacto profesional',
      degreeOne: 'Licenciatura completada',
      degreeOneName: 'Sistemas Eléctricos y Automatización',
      degreeTwo: 'Segunda carrera en curso',
      degreeTwoName: 'Redes Informáticas',
      profileCount: 'Perfiles especializados',
      profileTypes: 'Eléctrico · Redes · General',
      profilesEyebrow: 'CURRÍCULOS ESPECIALIZADOS',
      profilesTitle: 'Un perfil adecuado para cada oportunidad.',
      profilesIntro: 'Cada currículo prioriza experiencia, conocimientos y proyectos relevantes para su área, manteniendo una identidad profesional coherente.',
      electricalKicker: 'INGENIERÍA · ENERGÍA · CONTROL',
      electricalTitle: 'Eléctrica y Automatización',
      electricalDesc: 'Perfil orientado a sistemas eléctricos, mantenimiento, automatización, documentación técnica e infraestructura electromecánica.',
      electricalSkill1: 'Instalaciones eléctricas',
      electricalSkill2: 'Automatización',
      electricalSkill3: 'Mantenimiento',
      networksKicker: 'NETWORKING · INFRAESTRUCTURA · AUTOMATIZACIÓN',
      networksTitle: 'Redes Informáticas',
      networksDesc: 'Perfil enfocado en redes, routing y switching, servicios, virtualización, contenedores, automatización e infraestructura TI.',
      generalKicker: 'PERFIL MULTIDISCIPLINARIO',
      generalTitle: 'Perfil General',
      generalDesc: 'Visión integrada de formación eléctrica, automatización, redes, soporte e infraestructura para posiciones técnicas multidisciplinarias.',
      generalSkill1: 'Infraestructura',
      generalSkill2: 'Soporte técnico',
      generalSkill3: 'Documentación',
      inPreparation: 'En preparación',
      available: 'Disponible',
      aboutEyebrow: 'PERFIL',
      aboutTitle: 'Ingeniería e infraestructura desde dos perspectivas complementarias.',
      aboutP1: 'Mi formación combina sistemas eléctricos y automatización con redes informáticas. Esta integración me permite analizar infraestructura física y tecnológica con una visión transversal, estructurada y orientada a la operación.',
      aboutP2: 'El objetivo de este portal es presentar la información profesional de forma clara y verificable, adaptando el énfasis del currículo al contexto de cada vacante sin duplicar contenido innecesario.',
      focusEyebrow: 'ÁREAS DE ENFOQUE',
      focusTitle: 'Competencias que conectan el entorno físico y digital.',
      focus1Title: 'Infraestructura eléctrica',
      focus1Desc: 'Sistemas, instalaciones, mantenimiento y documentación técnica.',
      focus2Title: 'Automatización',
      focus2Desc: 'Control, integración y mejora de procesos técnicos.',
      focus3Title: 'Redes e infraestructura TI',
      focus3Desc: 'Routing, switching, servicios, Linux, virtualización y contenedores.',
      focus4Title: 'Documentación y análisis',
      focus4Desc: 'Procedimientos, evidencias, evaluación técnica y trazabilidad.',
      contactEyebrow: 'CONTACTO PROFESIONAL',
      contactTitle: 'Conectemos experiencia, infraestructura y tecnología.',
      contactText: 'Los datos de contacto y enlaces profesionales se incorporarán en la siguiente fase junto con la validación final de los currículos.',
      siteBuilding: 'Portal profesional en construcción activa',
      footerRole: 'Sistemas Eléctricos · Automatización · Redes Informáticas',
      backTop: 'Volver arriba ↑'
    },
    en: {
      skip: 'Skip to main content',
      brandRole: 'Professional profile',
      navProfiles: 'Profiles',
      navAbout: 'About',
      navFocus: 'Focus',
      navContact: 'Contact',
      heroEyebrow: 'PROFESSIONAL PORTFOLIO · PANAMA',
      heroLead: 'Multidisciplinary professional with an academic background in electrical systems, automation and computer networks, focused on infrastructure, technical operations and continuous improvement.',
      tagElectrical: 'Electrical systems',
      tagAutomation: 'Automation',
      tagNetworks: 'Computer networks',
      tagInfrastructure: 'Infrastructure',
      exploreProfiles: 'Explore profiles',
      contactMe: 'Professional contact',
      degreeOne: 'Completed bachelor’s degree',
      degreeOneName: 'Electrical Systems and Automation',
      degreeTwo: 'Second degree in progress',
      degreeTwoName: 'Computer Networks',
      profileCount: 'Specialized profiles',
      profileTypes: 'Electrical · Networks · General',
      profilesEyebrow: 'SPECIALIZED RÉSUMÉS',
      profilesTitle: 'The right professional profile for each opportunity.',
      profilesIntro: 'Each résumé prioritizes experience, knowledge and projects relevant to its field while maintaining one coherent professional identity.',
      electricalKicker: 'ENGINEERING · ENERGY · CONTROL',
      electricalTitle: 'Electrical & Automation',
      electricalDesc: 'Profile focused on electrical systems, maintenance, automation, technical documentation and electromechanical infrastructure.',
      electricalSkill1: 'Electrical installations',
      electricalSkill2: 'Automation',
      electricalSkill3: 'Maintenance',
      networksKicker: 'NETWORKING · INFRASTRUCTURE · AUTOMATION',
      networksTitle: 'Computer Networks',
      networksDesc: 'Profile focused on networking, routing and switching, services, virtualization, containers, automation and IT infrastructure.',
      generalKicker: 'MULTIDISCIPLINARY PROFILE',
      generalTitle: 'General Profile',
      generalDesc: 'Integrated view of electrical, automation, networking, support and infrastructure knowledge for multidisciplinary technical positions.',
      generalSkill1: 'Infrastructure',
      generalSkill2: 'Technical support',
      generalSkill3: 'Documentation',
      inPreparation: 'In preparation',
      available: 'Available',
      aboutEyebrow: 'PROFILE',
      aboutTitle: 'Engineering and infrastructure from two complementary perspectives.',
      aboutP1: 'My academic background combines electrical systems and automation with computer networks. This integration allows me to analyze physical and technological infrastructure through a cross-functional, structured and operations-oriented perspective.',
      aboutP2: 'This portal presents professional information clearly and verifiably, adapting résumé emphasis to each opportunity without unnecessary duplication.',
      focusEyebrow: 'FOCUS AREAS',
      focusTitle: 'Skills that connect the physical and digital environments.',
      focus1Title: 'Electrical infrastructure',
      focus1Desc: 'Systems, installations, maintenance and technical documentation.',
      focus2Title: 'Automation',
      focus2Desc: 'Control, integration and improvement of technical processes.',
      focus3Title: 'Networks & IT infrastructure',
      focus3Desc: 'Routing, switching, services, Linux, virtualization and containers.',
      focus4Title: 'Documentation & analysis',
      focus4Desc: 'Procedures, evidence, technical evaluation and traceability.',
      contactEyebrow: 'PROFESSIONAL CONTACT',
      contactTitle: 'Connecting experience, infrastructure and technology.',
      contactText: 'Professional contact details and links will be added in the next phase together with final résumé validation.',
      siteBuilding: 'Professional portal under active development',
      footerRole: 'Electrical Systems · Automation · Computer Networks',
      backTop: 'Back to top ↑'
    }
  };

  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const languageButton = document.querySelector('.language-toggle');
  const languageCurrent = document.querySelector('.language-current');
  const languageAlt = document.querySelector('.language-alt');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const year = document.querySelector('#current-year');
  const electricalCard = document.querySelector('.profile-card.electrical');
  const electricalStatus = electricalCard?.querySelector('.status-chip');

  const savedLang = localStorage.getItem('portfolio-language');
  const browserLang = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
  let language = savedLang || browserLang;

  function electricalUrl() {
    return language === 'en' ? '/en/electrical/' : '/es/electrica/';
  }

  function applyLanguage(lang) {
    language = translations[lang] ? lang : 'es';
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[language][key]) node.textContent = translations[language][key];
    });
    if (languageCurrent) languageCurrent.textContent = language.toUpperCase();
    if (languageAlt) languageAlt.textContent = language === 'es' ? 'EN' : 'ES';
    if (electricalStatus) electricalStatus.textContent = translations[language].available;
    if (electricalCard) {
      electricalCard.setAttribute('aria-label', language === 'es' ? 'Abrir currículo de Eléctrica y Automatización' : 'Open Electrical & Automation résumé');
    }
    document.title = language === 'es'
      ? 'Rubén Enrique Cañizares Miranda | Portafolio Profesional'
      : 'Rubén Enrique Cañizares Miranda | Professional Portfolio';
    localStorage.setItem('portfolio-language', language);
  }

  languageButton?.addEventListener('click', () => {
    applyLanguage(language === 'es' ? 'en' : 'es');
  });

  if (electricalCard) {
    electricalCard.tabIndex = 0;
    electricalCard.setAttribute('role', 'link');
    electricalCard.style.cursor = 'pointer';
    electricalCard.addEventListener('click', () => { window.location.href = electricalUrl(); });
    electricalCard.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      window.location.href = electricalUrl();
    });
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  let theme = savedTheme || (prefersLight ? 'light' : 'dark');

  function applyTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    if (themeButton) {
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      themeButton.title = theme === 'dark' ? 'Tema claro' : 'Tema oscuro';
    }
  }

  themeButton?.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  function setMenu(open) {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
  }

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  function updateHeader() {
    header?.classList.toggle('scrolled', window.scrollY > 14);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const revealNodes = [...document.querySelectorAll('.reveal')];

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px' });
    revealNodes.forEach((node) => observer.observe(node));
  }

  if (year) year.textContent = new Date().getFullYear();
  applyTheme(theme);
  applyLanguage(language);
})();
