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

      journeyIndex: '02 / TRAYECTORIA',
      journeyTitle: 'No cambié de rumbo: amplié la infraestructura que quería entender.',
      journeyLead: 'Mi recorrido mezcla trabajo técnico, formación universitaria y práctica de laboratorio. Cada etapa fue agregando una capa distinta a la forma en que hoy pienso la infraestructura.',
      journey2019Title: 'Servicios eléctricos independientes',
      journey2019Text: 'Desde 2019 realizo trabajos eléctricos residenciales y comerciales, mantenimiento, diagnóstico de fallas, levantamientos, planos, estimación de materiales y presupuestos.',
      journey2022Title: 'Primera licenciatura y soporte técnico',
      journey2022Text: 'Completé la Licenciatura en Sistemas Eléctricos y Automatización en la UTP. Ese mismo año trabajé como Técnico en Microsistemas en TECNASA, atendiendo usuarios, hardware, software, impresoras y preparación de equipos.',
      journey2025Title: 'Baja tensión y práctica de campo',
      journey2025Text: 'Completé 450 horas de formación como Electricista Liniero de Baja Tensión y 160 horas de práctica de campo con ARCE, contratista de Naturgy, acompañando actividades de operación y mantenimiento de redes de distribución.',
      journey2026Title: 'Redes, infraestructura y automatización',
      journey2026Text: 'Curso el cuarto año de Redes Informáticas y complemento la carrera con laboratorios de routing, switching, Linux, virtualización, Docker, almacenamiento, SDN, telemetría y automatización.',
      journeyCredential: 'Idoneidad profesional JTIA vigente',

      areasIndex: '03 / ÁREAS',
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

      labIndex: '04 / LABORATORIO',
      labTitle: 'Mi laboratorio no cabe en una sola herramienta.',
      labLead: 'Uso entornos reales y simulados para unir redes, sistemas, almacenamiento, observabilidad y automatización. La meta no es acumular nombres de herramientas, sino entender cómo se comportan juntas.',
      labNetTitle: 'Networking',
      labNetText: 'Cisco Packet Tracer, IPv4, VLAN, trunking, routing estático, OSPF, ACL, DHCP, NAT/PAT y diagnóstico de conectividad.',
      labSystemsTitle: 'Sistemas y virtualización',
      labSystemsText: 'Proxmox VE, VMware, Debian, Ubuntu Server, Windows Server, Active Directory, RRAS, IIS y servicios de infraestructura.',
      labContainersTitle: 'Contenedores y almacenamiento',
      labContainersText: 'Docker, redes bridge, volúmenes persistentes, Nginx, Redis, MariaDB/MySQL, TrueNAS, NFS e iSCSI.',
      labSdnTitle: 'SDN y observabilidad',
      labSdnText: 'Faucet, Gauge, Open vSwitch, FRR, Prometheus, Grafana, telemetría y visualización de topologías.',
      labAutomationTitle: 'Automatización y código',
      labAutomationText: 'Python, YAML, Git/GitHub, validación de intención, detección de drift y flujos declarativos para infraestructura.',

      projectsIndex: '05 / PROYECTOS',
      projectsTitle: 'Aprendo mejor cuando tengo algo real que construir.',
      projectsLead: 'Aquí iré conectando los repositorios y proyectos que representen mejor mi evolución. La lista crecerá a medida que publique más trabajo en GitHub.',
      projectAppType: 'APLICACIÓN',
      projectAppTitle: 'Mi Retiro Proyectado',
      projectAppDesc: 'Proyecto de software en evolución continua, con arquitectura, pruebas, diseño y mantenimiento versionado en GitHub.',
      projectSiteType: 'PORTAFOLIO',
      projectSiteTitle: 'Este sitio',
      projectSiteDesc: 'Mi espacio profesional en GitHub Pages, construido en HTML, CSS y JavaScript y pensado para crecer junto con mis proyectos.',
      projectNote: 'Más proyectos se irán incorporando aquí a medida que sus repositorios estén listos para mostrarse públicamente.',
      cvCode: '06 / CV',
      cvTitle: 'Mi experiencia, según el contexto.',
      cvText: 'No utilizo un único currículo para todo. Organicé mi experiencia en tres perfiles distintos para que cada versión destaque lo realmente relevante para la oportunidad: Eléctrica y Automatización, Redes Informáticas y Perfil General.',
      cvEnter: 'Entrar a Currículum Vitae',
      contactIndex: '07 / CONTACTO',
      contactTitle: 'Si algo de lo que hago conecta contigo, hablemos.',
      contactLead: 'Puedes escribirme por correo, revisar mi actividad en GitHub o encontrar mi perfil profesional en LinkedIn. Para oportunidades laborales, colaboración técnica o simplemente conversar sobre infraestructura y redes, estos son mis canales principales.',
      contactEmail: 'Correo',
      contactLinkedin: 'LinkedIn',
      contactGithub: 'GitHub',
      socialTitle: 'También me encuentras aquí.',
      socialLead: 'Además de mis canales profesionales, mantengo presencia en otras plataformas. Prefiero dejar todos los perfiles oficiales reunidos aquí para que sea fácil distinguirlos.',
      socialVisit: 'Abrir perfil',
      footerText: 'Diseñado y construido por mí, con ayuda de buenas herramientas y muchas pruebas.',
      backTop: 'Volver arriba'
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

      journeyIndex: '02 / JOURNEY',
      journeyTitle: 'I did not change direction; I expanded the infrastructure I wanted to understand.',
      journeyLead: 'My path combines technical work, university education and hands-on lab practice. Each stage added another layer to the way I think about infrastructure today.',
      journey2019Title: 'Independent electrical services',
      journey2019Text: 'Since 2019 I have worked on residential and commercial electrical services, maintenance, troubleshooting, surveys, drawings, material estimates and budgets.',
      journey2022Title: 'First degree and technical support',
      journey2022Text: 'I completed my degree in Electrical Systems and Automation at UTP. That same year I worked as a Microsystems Technician at TECNASA, supporting users, hardware, software, printers and equipment preparation.',
      journey2025Title: 'Low-voltage distribution and field practice',
      journey2025Text: 'I completed 450 hours of Low-Voltage Lineworker training plus 160 hours of field practice with ARCE, a Naturgy contractor, accompanying distribution-network operation and maintenance activities.',
      journey2026Title: 'Networks, infrastructure and automation',
      journey2026Text: 'I am in the fourth year of Computer Networks and complement my degree with labs in routing, switching, Linux, virtualization, Docker, storage, SDN, telemetry and automation.',
      journeyCredential: 'Active JTIA professional license',

      areasIndex: '03 / AREAS',
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

      labIndex: '04 / LAB',
      labTitle: 'My lab does not fit inside a single tool.',
      labLead: 'I use real and simulated environments to connect networking, systems, storage, observability and automation. The goal is not to collect tool names, but to understand how they behave together.',
      labNetTitle: 'Networking',
      labNetText: 'Cisco Packet Tracer, IPv4, VLANs, trunking, static routing, OSPF, ACLs, DHCP, NAT/PAT and connectivity troubleshooting.',
      labSystemsTitle: 'Systems & virtualization',
      labSystemsText: 'Proxmox VE, VMware, Debian, Ubuntu Server, Windows Server, Active Directory, RRAS, IIS and infrastructure services.',
      labContainersTitle: 'Containers & storage',
      labContainersText: 'Docker, bridge networks, persistent volumes, Nginx, Redis, MariaDB/MySQL, TrueNAS, NFS and iSCSI.',
      labSdnTitle: 'SDN & observability',
      labSdnText: 'Faucet, Gauge, Open vSwitch, FRR, Prometheus, Grafana, telemetry and topology visualization.',
      labAutomationTitle: 'Automation & code',
      labAutomationText: 'Python, YAML, Git/GitHub, intent validation, drift detection and declarative infrastructure workflows.',

      projectsIndex: '05 / PROJECTS',
      projectsTitle: 'I learn better when I have something real to build.',
      projectsLead: 'This is where I will connect the repositories and projects that best represent my progress. The list will grow as I publish more work on GitHub.',
      projectAppType: 'APPLICATION',
      projectAppTitle: 'Mi Retiro Proyectado',
      projectAppDesc: 'An evolving software project with architecture, testing, design and maintenance versioned on GitHub.',
      projectSiteType: 'PORTFOLIO',
      projectSiteTitle: 'This website',
      projectSiteDesc: 'My professional space on GitHub Pages, built with HTML, CSS and JavaScript and designed to grow alongside my projects.',
      projectNote: 'More projects will be added here as their repositories become ready for public presentation.',
      cvCode: '06 / CV',
      cvTitle: 'My experience, matched to the context.',
      cvText: 'I do not use one résumé for everything. I organized my experience into three distinct profiles so each version can emphasize what truly matters for the opportunity: Electrical & Automation, Computer Networks and General Profile.',
      cvEnter: 'Open Curriculum Vitae',
      contactIndex: '07 / CONTACT',
      contactTitle: 'If something I do connects with you, let’s talk.',
      contactLead: 'You can email me, review my GitHub activity or find my professional profile on LinkedIn. For career opportunities, technical collaboration or simply a conversation about infrastructure and networks, these are my main channels.',
      contactEmail: 'Email',
      contactLinkedin: 'LinkedIn',
      contactGithub: 'GitHub',
      socialTitle: 'You can also find me here.',
      socialLead: 'Beyond my professional channels, I maintain profiles on other platforms. I prefer keeping all official accounts together here so they are easy to identify.',
      socialVisit: 'Open profile',
      footerText: 'Designed and built by me, with good tools and a lot of testing.',
      backTop: 'Back to top'
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

  const icons = {
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 12h5l5-5M12 12l5 5"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="3" width="16" height="6" rx="1"/><rect x="4" y="15" width="16" height="6" rx="1"/><path d="M8 6h.01M8 18h.01M12 9v6"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-7"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>'
  };

  function installEnhancementStyles() {
    const style = document.createElement('style');
    style.id = 'home-enhancement-styles';
    style.textContent = `
      .journey-list{margin-top:64px;border-top:1px solid var(--line)}
      .journey-item{display:grid;grid-template-columns:130px 54px minmax(0,1fr);gap:24px;padding:28px 0;border-bottom:1px solid var(--line);align-items:start}
      .journey-year{color:var(--signal);font:800 .68rem/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em;text-transform:uppercase;padding-top:6px}
      .journey-node{position:relative;width:38px;height:38px;border:1px solid var(--line-strong);display:grid;place-items:center;color:var(--signal);background:var(--bg-alt)}
      .journey-node::after{content:"";position:absolute;top:38px;bottom:-29px;width:1px;background:var(--line)}
      .journey-item:last-child .journey-node::after{display:none}
      .journey-node svg{width:19px;height:19px}
      .journey-copy h3{margin:0;font-size:1.18rem;letter-spacing:-.02em}.journey-copy p{margin:8px 0 0;color:var(--muted);max-width:850px}
      .credential-strip{margin-top:28px;display:inline-flex;align-items:center;gap:10px;border:1px solid var(--line);padding:10px 13px;color:var(--signal);font:800 .7rem/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.06em}
      .credential-strip::before{content:"✓";width:20px;height:20px;border:1px solid var(--line-strong);display:grid;place-items:center;border-radius:50%}
      .lab-grid{margin-top:64px;display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
      .lab-card{grid-column:span 2;min-height:240px;padding:26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(145deg,var(--signal-dim),transparent 62%)}
      .lab-card:nth-child(4),.lab-card:nth-child(5){grid-column:span 3}
      .lab-card svg{width:26px;height:26px;color:var(--signal);margin-bottom:44px}.lab-card h3{margin:0;font-size:1.1rem}.lab-card p{margin:10px 0 0;color:var(--muted);font-size:.88rem}
      .social-block{margin-top:66px;padding-top:34px;border-top:1px solid var(--line)}
      .social-head{display:grid;grid-template-columns:minmax(0,.8fr) minmax(280px,.55fr);gap:50px;align-items:end;margin-bottom:28px}
      .social-head h3{margin:0;font-size:clamp(1.8rem,3.2vw,3.5rem);line-height:1;letter-spacing:-.04em}.social-head p{margin:0;color:var(--muted)}
      .social-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
      .social-card{min-height:128px;padding:20px;display:grid;grid-template-columns:34px 1fr 18px;gap:13px;align-items:start;border-right:1px solid var(--line);border-bottom:1px solid var(--line);text-decoration:none;transition:background .18s ease,transform .18s ease}
      .social-card:hover{background:var(--signal-dim);transform:translateY(-2px)}.social-card svg{width:23px;height:23px;color:var(--signal)}
      .social-card strong{display:block;font-size:.88rem}.social-card small{display:block;color:var(--muted);font-size:.72rem;margin-top:5px;overflow-wrap:anywhere}.social-card .out{color:var(--muted);width:16px;height:16px}
      .site-back-top{position:fixed;right:18px;bottom:18px;z-index:1300;display:flex;align-items:center;gap:8px;min-height:42px;padding:0 13px;border:1px solid rgba(255,255,255,.18);background:rgba(5,15,14,.9);backdrop-filter:blur(12px);color:#eafff8;font:800 .68rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,border-color .2s ease}
      .site-back-top.is-visible{opacity:1;pointer-events:auto;transform:none}.site-back-top:hover{border-color:#72f5cf}.site-back-top svg{width:16px;height:16px}
      @media(max-width:900px){.lab-grid{grid-template-columns:repeat(2,1fr)}.lab-card,.lab-card:nth-child(4),.lab-card:nth-child(5){grid-column:span 1}.social-grid{grid-template-columns:repeat(2,1fr)}.journey-item{grid-template-columns:100px 42px 1fr}.social-head{grid-template-columns:1fr}}
      @media(max-width:620px){.journey-item{grid-template-columns:1fr;gap:10px}.journey-node{display:none}.lab-grid,.social-grid{grid-template-columns:1fr}.site-back-top span{display:none}.site-back-top{width:44px;padding:0;justify-content:center}.social-card{min-height:108px}}
      @media print{.site-back-top{display:none!important}}
    `;
    document.head.appendChild(style);
  }

  function injectJourneyAndLab() {
    const about = document.querySelector('#acerca');
    const areas = document.querySelector('#areas');
    if (about && !document.querySelector('#trayectoria')) {
      about.insertAdjacentHTML('afterend', `
        <section class="section" id="trayectoria">
          <div class="container section-index">
            <div class="index-col" data-i18n="journeyIndex">02 / TRAYECTORIA</div>
            <div>
              <div class="reveal">
                <h2 class="section-title" data-i18n="journeyTitle">No cambié de rumbo: amplié la infraestructura que quería entender.</h2>
                <p class="section-lead" data-i18n="journeyLead"></p>
              </div>
              <div class="journey-list reveal">
                <article class="journey-item"><div class="journey-year">2019 — HOY</div><div class="journey-node">${icons.network}</div><div class="journey-copy"><h3 data-i18n="journey2019Title"></h3><p data-i18n="journey2019Text"></p></div></article>
                <article class="journey-item"><div class="journey-year">2022</div><div class="journey-node">${icons.server}</div><div class="journey-copy"><h3 data-i18n="journey2022Title"></h3><p data-i18n="journey2022Text"></p></div></article>
                <article class="journey-item"><div class="journey-year">2025</div><div class="journey-node">${icons.chart}</div><div class="journey-copy"><h3 data-i18n="journey2025Title"></h3><p data-i18n="journey2025Text"></p></div></article>
                <article class="journey-item"><div class="journey-year">2026</div><div class="journey-node">${icons.code}</div><div class="journey-copy"><h3 data-i18n="journey2026Title"></h3><p data-i18n="journey2026Text"></p></div></article>
              </div>
              <div class="credential-strip reveal" data-i18n="journeyCredential">Idoneidad profesional JTIA vigente</div>
            </div>
          </div>
        </section>`);
    }

    if (areas && !document.querySelector('#laboratorio')) {
      areas.insertAdjacentHTML('afterend', `
        <section class="section" id="laboratorio">
          <div class="container section-index">
            <div class="index-col" data-i18n="labIndex">04 / LABORATORIO</div>
            <div>
              <div class="reveal"><h2 class="section-title" data-i18n="labTitle"></h2><p class="section-lead" data-i18n="labLead"></p></div>
              <div class="lab-grid reveal">
                <article class="lab-card">${icons.network}<h3 data-i18n="labNetTitle"></h3><p data-i18n="labNetText"></p></article>
                <article class="lab-card">${icons.server}<h3 data-i18n="labSystemsTitle"></h3><p data-i18n="labSystemsText"></p></article>
                <article class="lab-card">${icons.box}<h3 data-i18n="labContainersTitle"></h3><p data-i18n="labContainersText"></p></article>
                <article class="lab-card">${icons.chart}<h3 data-i18n="labSdnTitle"></h3><p data-i18n="labSdnText"></p></article>
                <article class="lab-card">${icons.code}<h3 data-i18n="labAutomationTitle"></h3><p data-i18n="labAutomationText"></p></article>
              </div>
            </div>
          </div>
        </section>`);
    }
  }

  function socialIcon(type) {
    const map = {
      x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 4l14 16M19 4 5 20"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7h.01M11 17v-4a3 3 0 0 1 6 0v4M11 10v7"/></svg>',
      tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M14 4v10.5a4 4 0 1 1-3-3.87V8.5M14 4c1.2 2.2 2.7 3.4 5 3.7"/></svg>',
      github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M9 18c-1.4.5-2.5-.2-3-1.2M15 18v-2.2c0-1 .4-1.8 1.1-2.3M9 18v-2.2c0-1-.4-1.8-1.1-2.3M8 13.5c-1.3-1-1.8-2.5-1.4-4 .8-.3 1.6-.2 2.4.3 1.8-.8 4.2-.8 6 0 .8-.5 1.6-.6 2.4-.3.4 1.5-.1 3-1.4 4"/></svg>',
      reddit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="13" r="6"/><path d="M8.5 13h.01M15.5 13h.01M9 16c1.8 1.1 4.2 1.1 6 0M15 7l1-3 3 1M5 11l-2-1M19 11l2-1"/></svg>',
      spotify: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M7 10c3.8-1 7.8-.7 11 .9M7.7 13c3.2-.7 6.3-.5 9 .7M8.5 16c2.4-.5 4.8-.3 6.9.7"/></svg>',
      telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 4 3 11l7 2.5L13 20l3-4 4 3 1-15Z"/><path d="m10 13.5 6-5"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M14 21v-7h2.5l.5-3H14V9.4c0-.9.4-1.4 1.5-1.4H17V5.2c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.5-4 4.1V11H8v3h2.6v7"/></svg>',
      youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 9 5 3-5 3V9Z"/></svg>'
    };
    return map[type] || map.github;
  }

  function injectSocials() {
    const contact = document.querySelector('#contacto .section-index > div:last-child');
    if (!contact || document.querySelector('.social-block')) return;
    const profiles = [
      ['x', 'X', '@recm0708', 'https://x.com/recm0708'],
      ['linkedin', 'LinkedIn', 'linkedin.com/in/recm0708', 'https://www.linkedin.com/in/recm0708'],
      ['tiktok', 'TikTok', '@recm0708', 'https://www.tiktok.com/@recm0708'],
      ['github', 'GitHub', 'github.com/recm0708', 'https://github.com/recm0708'],
      ['reddit', 'Reddit', 'u/recm0708', 'https://www.reddit.com/user/recm0708'],
      ['spotify', 'Spotify', 'ruben_sten', 'https://open.spotify.com/user/ruben_sten'],
      ['telegram', 'Telegram', '@recm0708', 'https://t.me/recm0708'],
      ['facebook', 'Facebook', 'recm0708', 'https://www.facebook.com/recm0708'],
      ['youtube', 'YouTube', 'UCFbg9mH-XKQMbUwdUxxnz6g', 'https://www.youtube.com/channel/UCFbg9mH-XKQMbUwdUxxnz6g']
    ];
    const cards = profiles.map(([type,name,user,url]) => `
      <a class="social-card" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}: ${user}">
        ${socialIcon(type)}
        <span><strong>${name}</strong><small>${user}</small></span>
        <svg class="out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m7 17 10-10M9 7h8v8"/></svg>
      </a>`).join('');
    contact.insertAdjacentHTML('beforeend', `
      <div class="social-block reveal">
        <div class="social-head"><h3 data-i18n="socialTitle"></h3><p data-i18n="socialLead"></p></div>
        <div class="social-grid">${cards}</div>
      </div>`);
  }

  function installBackToTop() {
    document.querySelectorAll('a[href="#top"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
    if (document.querySelector('[data-site-back-top]')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'site-back-top';
    btn.dataset.siteBackTop = '';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg><span data-back-label>Volver arriba</span>';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
    document.body.appendChild(btn);
    const update = () => btn.classList.toggle('is-visible', window.scrollY > 520);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  installEnhancementStyles();
  injectJourneyAndLab();
  injectSocials();
  installBackToTop();

  function applyLanguage(next) {
    language = i18n[next] ? next : 'es';
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[language][key]) el.textContent = i18n[language][key];
    });
    const backLabel = document.querySelector('[data-back-label]');
    if (backLabel) backLabel.textContent = i18n[language].backTop;
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
