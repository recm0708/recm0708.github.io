(() => {
  'use strict';

  const i18n = {
    es: {
      skip: 'Saltar al contenido principal',
      navAbout: 'Acerca de mí',
      navAreas: 'Áreas',
      navProjects: 'Proyectos',
      navCv: 'Currículum Vitae',
      navContact: 'Contacto',
      heroPre: 'DESDE PANAMÁ · CONSTRUYENDO EN RED',
      heroHello: 'Hola, soy',
      heroIntro: 'Soy un profesional de sistemas eléctricos y automatización que decidió ampliar su campo hacia las redes informáticas. Hoy conecto dos mundos que me apasionan: la infraestructura física que hace funcionar un entorno y la infraestructura digital que permite que todo se comunique.',
      heroIntroStrong: 'Este sitio es mi espacio para mostrar quién soy, qué estoy aprendiendo y qué estoy construyendo.',
      heroAbout: 'Conóceme',
      heroProjects: 'Ver proyectos',
      portraitRole: 'Redes Informáticas · Sistemas Eléctricos',
      portraitSignal: 'EN LÍNEA',
      sideLabel: 'routing · switching · linux · automation',
      aboutIndex: '01 / ACERCA DE MÍ',
      aboutTitle: 'Mi camino empezó con la energía. Hoy también pasa por la red.',
      aboutLead: 'No veo la electricidad y las redes como caminos separados. Para mí son capas distintas de una misma infraestructura: energía, control, conectividad, servicios y operación.',
      aboutP1: 'Soy Rubén Enrique Cañizares Miranda. Me gradué en Sistemas Eléctricos y Automatización en la Universidad Tecnológica de Panamá y actualmente curso la Licenciatura en Redes Informáticas. Esa segunda etapa de formación nació de algo bastante natural: quería entender no solo cómo alimentar y controlar una infraestructura, sino también cómo comunicarla, administrarla y hacerla más resiliente.',
      aboutP2: 'Me interesa aprender haciendo. Gran parte de lo que encontrarás aquí nace de laboratorios, proyectos y entornos que he construido para practicar routing, switching, Linux, virtualización, contenedores, automatización, SDN y evaluación de redes. También conservo mi base eléctrica, porque sigue siendo una parte importante de mi perfil profesional.',
      aboutP3: 'Este portal irá creciendo conmigo. Cada proyecto publicado, certificación, laboratorio o nueva experiencia que valga la pena documentar tendrá un espacio aquí.',
      nowStudy: 'Ahora mismo',
      nowStudyText: 'Cuarto año de Redes Informáticas · UTP',
      nowPath: 'Ruta técnica',
      nowPathText: 'Routing, switching y fundamentos alineados con CCNA',
      nowLab: 'Laboratorio personal',
      nowLabText: 'Linux, Docker, virtualización, SDN y automatización',
      nowBase: 'Base profesional',
      nowBaseText: 'Sistemas Eléctricos y Automatización',
      areasIndex: '02 / ÁREAS',
      areasTitle: 'Lo que estudio, practico y conecto.',
      areasLead: 'Estas son las áreas que hoy definen mi perfil. Algunas vienen de mi primera carrera; otras forman parte de la especialización que estoy desarrollando en redes.',
      area1: 'Redes informáticas',
      area1Desc: 'Routing, switching, IPv4, VLAN, OSPF, ACL, DHCP, NAT/PAT y diseño de topologías en entornos Cisco.',
      area2: 'Infraestructura y sistemas',
      area2Desc: 'Linux, servicios de red, virtualización, Proxmox, almacenamiento, Docker y operación de infraestructura.',
      area3: 'Automatización y SDN',
      area3Desc: 'Automatización declarativa, contenedores, FRR, OVS, Faucet, telemetría y principios de redes programables.',
      area4: 'Electricidad y control',
      area4Desc: 'Instalaciones eléctricas, mantenimiento, diagnóstico, documentación técnica, baja tensión y fundamentos de automatización.',
      projectsIndex: '03 / PROYECTOS',
      projectsTitle: 'Aprendo mejor cuando tengo algo real que construir.',
      projectsLead: 'Aquí iré conectando los repositorios y proyectos que representen mejor mi evolución. La lista crecerá a medida que publique más trabajo en GitHub.',
      projectAppType: 'APLICACIÓN',
      projectAppTitle: 'Mi Retiro Proyectado',
      projectAppDesc: 'Proyecto de software en evolución continua, con arquitectura, pruebas, diseño y mantenimiento versionado en GitHub.',
      projectSiteType: 'PORTAFOLIO',
      projectSiteTitle: 'Este sitio',
      projectSiteDesc: 'Mi espacio profesional en GitHub Pages, construido en HTML, CSS y JavaScript y pensado para crecer junto con mis proyectos.',
      projectNote: 'Más proyectos se irán incorporando aquí a medida que sus repositorios estén listos para mostrarse públicamente.',
      cvCode: '04 / CV',
      cvTitle: 'Mi experiencia, según el contexto.',
      cvText: 'No utilizo un único currículo para todo. Organicé mi experiencia en tres perfiles distintos para que cada versión destaque lo realmente relevante para la oportunidad: Eléctrica y Automatización, Redes Informáticas y Perfil General.',
      cvEnter: 'Entrar a Currículum Vitae',
      contactIndex: '05 / CONTACTO',
      contactTitle: 'Si algo de lo que hago conecta contigo, hablemos.',
      contactLead: 'Puedes escribirme por correo, revisar mi actividad en GitHub o encontrar mi perfil profesional en LinkedIn. Para oportunidades laborales, colaboración técnica o simplemente conversar sobre infraestructura y redes, estos son mis canales principales.',
      contactEmail: 'Correo',
      contactLinkedin: 'LinkedIn',
      contactGithub: 'GitHub',
      footerText: 'Diseñado y construido por mí, con ayuda de buenas herramientas y muchas pruebas.',
      backTop: 'Volver arriba ↑'
    },
    en: {
      skip: 'Skip to main content',
      navAbout: 'About me',
      navAreas: 'Areas',
      navProjects: 'Projects',
      navCv: 'Curriculum Vitae',
      navContact: 'Contact',
      heroPre: 'FROM PANAMA · BUILDING IN NETWORK',
      heroHello: "Hi, I'm",
      heroIntro: 'I am an Electrical Systems and Automation professional who decided to expand into computer networks. Today I connect two fields I genuinely enjoy: the physical infrastructure that keeps an environment running and the digital infrastructure that allows everything to communicate.',
      heroIntroStrong: 'This site is my space to show who I am, what I am learning and what I am building.',
      heroAbout: 'Get to know me',
      heroProjects: 'View projects',
      portraitRole: 'Computer Networks · Electrical Systems',
      portraitSignal: 'ONLINE',
      sideLabel: 'routing · switching · linux · automation',
      aboutIndex: '01 / ABOUT ME',
      aboutTitle: 'My path started with power. Today it also runs through the network.',
      aboutLead: 'I do not see electrical systems and networking as separate paths. To me, they are different layers of the same infrastructure: power, control, connectivity, services and operations.',
      aboutP1: 'I am Rubén Enrique Cañizares Miranda. I graduated in Electrical Systems and Automation from Universidad Tecnológica de Panamá and I am currently pursuing a degree in Computer Networks. That second stage came naturally: I wanted to understand not only how infrastructure is powered and controlled, but also how it communicates, is administered and becomes more resilient.',
      aboutP2: 'I prefer learning by building. Much of what you will find here comes from labs, projects and environments I have created to practice routing, switching, Linux, virtualization, containers, automation, SDN and network evaluation. I also keep my electrical background active because it remains an important part of my professional profile.',
      aboutP3: 'This portal will grow with me. Every project, certification, lab or new experience worth documenting will eventually have a place here.',
      nowStudy: 'Right now',
      nowStudyText: 'Fourth year of Computer Networks · UTP',
      nowPath: 'Technical path',
      nowPathText: 'Routing, switching and fundamentals aligned with CCNA',
      nowLab: 'Personal lab',
      nowLabText: 'Linux, Docker, virtualization, SDN and automation',
      nowBase: 'Professional foundation',
      nowBaseText: 'Electrical Systems and Automation',
      areasIndex: '02 / AREAS',
      areasTitle: 'What I study, practice and connect.',
      areasLead: 'These are the areas that define my profile today. Some come from my first degree; others belong to the specialization I am developing in networking.',
      area1: 'Computer networks',
      area1Desc: 'Routing, switching, IPv4, VLANs, OSPF, ACLs, DHCP, NAT/PAT and topology design in Cisco environments.',
      area2: 'Infrastructure & systems',
      area2Desc: 'Linux, network services, virtualization, Proxmox, storage, Docker and infrastructure operations.',
      area3: 'Automation & SDN',
      area3Desc: 'Declarative automation, containers, FRR, OVS, Faucet, telemetry and programmable-network principles.',
      area4: 'Electrical & control',
      area4Desc: 'Electrical installations, maintenance, diagnostics, technical documentation, low voltage and automation fundamentals.',
      projectsIndex: '03 / PROJECTS',
      projectsTitle: 'I learn better when I have something real to build.',
      projectsLead: 'This is where I will connect the repositories and projects that best represent my progress. The list will grow as I publish more work on GitHub.',
      projectAppType: 'APPLICATION',
      projectAppTitle: 'Mi Retiro Proyectado',
      projectAppDesc: 'An evolving software project with architecture, testing, design and maintenance versioned on GitHub.',
      projectSiteType: 'PORTFOLIO',
      projectSiteTitle: 'This website',
      projectSiteDesc: 'My professional space on GitHub Pages, built with HTML, CSS and JavaScript and designed to grow alongside my projects.',
      projectNote: 'More projects will be added here as their repositories become ready for public presentation.',
      cvCode: '04 / CV',
      cvTitle: 'My experience, matched to the context.',
      cvText: 'I do not use one résumé for everything. I organized my experience into three distinct profiles so each version can emphasize what truly matters for the opportunity: Electrical & Automation, Computer Networks and General Profile.',
      cvEnter: 'Open Curriculum Vitae',
      contactIndex: '05 / CONTACT',
      contactTitle: 'If something I do connects with you, let’s talk.',
      contactLead: 'You can email me, review my GitHub activity or find my professional profile on LinkedIn. For career opportunities, technical collaboration or simply a conversation about infrastructure and networks, these are my main channels.',
      contactEmail: 'Email',
      contactLinkedin: 'LinkedIn',
      contactGithub: 'GitHub',
      footerText: 'Designed and built by me, with good tools and a lot of testing.',
      backTop: 'Back to top ↑'
    }
  };

  const root = document.documentElement;
  const langBtn = document.querySelector('[data-lang-toggle]');
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('#mobile-nav');
  const header = document.querySelector('.site-header');
  const year = document.querySelector('[data-year]');
  const metaDescription = document.querySelector('meta[name="description"]');

  let language = localStorage.getItem('portfolio-language') || (navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es');
  let theme = localStorage.getItem('portfolio-theme') || (window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function applyLanguage(next) {
    language = i18n[next] ? next : 'es';
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[language][key]) el.textContent = i18n[language][key];
    });
    if (langBtn) langBtn.textContent = language === 'es' ? 'ES / EN' : 'EN / ES';
    document.title = language === 'es'
      ? 'Rubén Cañizares | Redes, Infraestructura y Automatización'
      : 'Rubén Cañizares | Networks, Infrastructure & Automation';
    if (metaDescription) metaDescription.content = language === 'es'
      ? 'Sitio personal de Rubén Enrique Cañizares Miranda: redes informáticas, infraestructura, automatización, sistemas eléctricos, proyectos y currículum vitae.'
      : 'Personal website of Rubén Enrique Cañizares Miranda: computer networks, infrastructure, automation, electrical systems, projects and curriculum vitae.';
    localStorage.setItem('portfolio-language', language);
  }

  function applyTheme(next) {
    theme = next === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    themeBtn?.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  }

  langBtn?.addEventListener('click', () => applyLanguage(language === 'es' ? 'en' : 'es'));
  themeBtn?.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

  function setMenu(open) {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
  }
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const reveal = [...document.querySelectorAll('.reveal')];
  if (reduced || !('IntersectionObserver' in window)) {
    reveal.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    reveal.forEach((el) => observer.observe(el));
  }

  if (year) year.textContent = new Date().getFullYear();
  applyTheme(theme);
  applyLanguage(language);
})();
