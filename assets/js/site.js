(() => {
  'use strict';

  /* ==========================================================
     PORTAFOLIO PROFESIONAL — LÓGICA GLOBAL ÚNICA
     Tema, idioma, menú móvil y retorno al inicio.
     No reescribe cabeceras ni pies: el HTML conserva su estructura.
     ========================================================== */

  const root = document.documentElement;
  const THEME_KEY = 'portfolio-theme';
  const LANG_KEY = 'portfolio-language';

  function aplicarTema(tema, guardar = true) {
    const valor = tema === 'light' ? 'light' : 'dark';
    root.dataset.theme = valor;
    if (guardar) localStorage.setItem(THEME_KEY, valor);
    actualizarMetaColor();
  }

  function alternarTema() {
    aplicarTema(root.dataset.theme === 'dark' ? 'light' : 'dark');
  }

  function actualizarMetaColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    requestAnimationFrame(() => {
      const color = getComputedStyle(document.body).getPropertyValue('--page').trim();
      if (color) meta.setAttribute('content', color);
    });
  }

  function aplicarIdioma(idioma, guardar = true) {
    const lang = idioma === 'en' ? 'en' : 'es';
    root.lang = lang;
    document.querySelectorAll('[data-lang-es][data-lang-en]').forEach((el) => {
      el.textContent = lang === 'es' ? el.dataset.langEs : el.dataset.langEn;
    });
    document.querySelectorAll('[data-html-es][data-html-en]').forEach((el) => {
      el.innerHTML = lang === 'es' ? el.dataset.htmlEs : el.dataset.htmlEn;
    });
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    });
    document.querySelectorAll('[data-href-es][data-href-en]').forEach((link) => {
      link.href = lang === 'es' ? link.dataset.hrefEs : link.dataset.hrefEn;
    });
    if (document.body.dataset.titleEs && document.body.dataset.titleEn) {
      document.title = lang === 'es' ? document.body.dataset.titleEs : document.body.dataset.titleEn;
    }
    if (guardar) localStorage.setItem(LANG_KEY, lang);
  }

  function alternarIdioma() {
    aplicarIdioma(root.lang === 'en' ? 'es' : 'en');
  }

  function prepararMenu() {
    const boton = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-nav]');
    if (!boton || !menu) return;
    boton.addEventListener('click', () => {
      const abierto = menu.classList.toggle('open');
      boton.setAttribute('aria-expanded', String(abierto));
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      boton.setAttribute('aria-expanded', 'false');
    }));
  }

  function prepararRetorno() {
    document.querySelectorAll('[data-back-top]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash === '#top') history.replaceState(null, document.title, location.pathname + location.search);
      });
    });
  }

  function prepararAnclas() {
    document.querySelectorAll('a[href^="#"]:not([data-back-top])').forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const destino = document.querySelector(id);
        if (!destino) return;
        event.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  const temaGuardado = localStorage.getItem(THEME_KEY);
  aplicarTema(temaGuardado === 'light' ? 'light' : 'dark', false);

  if (document.body.dataset.bilingual === 'true') {
    const idiomaGuardado = localStorage.getItem(LANG_KEY);
    aplicarIdioma(idiomaGuardado === 'en' ? 'en' : 'es', false);
  }

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', alternarTema));
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => btn.addEventListener('click', alternarIdioma));

  prepararMenu();
  prepararRetorno();
  prepararAnclas();

  window.addEventListener('storage', (event) => {
    if (event.key === THEME_KEY && (event.newValue === 'dark' || event.newValue === 'light')) aplicarTema(event.newValue, false);
    if (event.key === LANG_KEY && document.body.dataset.bilingual === 'true' && (event.newValue === 'es' || event.newValue === 'en')) aplicarIdioma(event.newValue, false);
  });
})();
