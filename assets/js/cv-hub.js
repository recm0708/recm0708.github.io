(() => {
  'use strict';

  const root = document.documentElement;
  const THEME_KEY = 'portfolio-theme';
  const LANG_KEY = 'portfolio-language';
  const langBtn = document.querySelector('[data-lang]');

  const textos = {
    es: {
      about:'Acerca de mí',areas:'Áreas',projects:'Proyectos',cv:'Currículum Vitae',contact:'Contacto',
      kicker:'CURRÍCULUM VITAE',title:'Selecciona un perfil profesional.',
      electrical:'Sistemas Eléctricos y Automatización',network:'Redes Informáticas',integral:'Perfil Profesional Integral',
      footer:'Diseñado y construido por mí, con ayuda de buenas herramientas y muchas pruebas.',top:'Volver arriba ↑',rights:'Todos los derechos reservados.'
    },
    en: {
      about:'About me',areas:'Areas',projects:'Projects',cv:'Curriculum Vitae',contact:'Contact',
      kicker:'CURRICULUM VITAE',title:'Select a professional profile.',
      electrical:'Electrical Systems & Automation',network:'Computer Networks',integral:'Comprehensive Professional Profile',
      footer:'Designed and built by me, with the help of good tools and plenty of testing.',top:'Back to top ↑',rights:'All rights reserved.'
    }
  };

  let lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  function aplicarIdioma(next, guardar = true) {
    lang = next === 'en' ? 'en' : 'es';
    root.lang = lang;
    const tx = textos[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const clave = el.dataset.i18n;
      if (tx[clave]) el.textContent = tx[clave];
    });
    if (langBtn) {
      langBtn.textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';
      langBtn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    }
    const electrical = document.querySelector('[data-electrical-link]');
    const network = document.querySelector('[data-network-link]');
    const general = document.querySelector('[data-general-link]');
    if (electrical) electrical.href = lang === 'es' ? '/es/electrica/' : '/en/electrical/';
    if (network) network.href = lang === 'es' ? '/cv/es/redes/' : '/cv/en/networks/';
    if (general) general.href = lang === 'es' ? '/es/general/' : '/en/general/';
    const footerFirst = document.querySelector('.footer-layout > div:first-child');
    if (footerFirst) footerFirst.textContent = `© ${new Date().getFullYear()} Rubén Enrique Cañizares Miranda · ${tx.rights}`;
    document.title = lang === 'es' ? 'Currículum Vitae | Rubén Cañizares' : 'Curriculum Vitae | Rubén Cañizares';
    if (guardar) localStorage.setItem(LANG_KEY, lang);
  }

  langBtn?.addEventListener('click', () => aplicarIdioma(lang === 'es' ? 'en' : 'es'));
  window.SiteShell?.activarMenu(document);
  window.SiteShell?.activarTema(document);
  document.querySelector('a[href="#top"]')?.addEventListener('click', (event) => { event.preventDefault(); window.SiteShell?.volverArriba(); });

  window.addEventListener('storage', (event) => {
    if (event.key === THEME_KEY && (event.newValue === 'light' || event.newValue === 'dark')) root.dataset.theme = event.newValue;
    if (event.key === LANG_KEY && (event.newValue === 'es' || event.newValue === 'en')) aplicarIdioma(event.newValue, false);
  });

  aplicarIdioma(lang, false);
})();