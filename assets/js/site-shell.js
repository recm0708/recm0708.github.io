(() => {
  'use strict';

  /* ==========================================================
     CASCARÓN GLOBAL DEL SITIO
     Utilidades compartidas para cabecera, pie, retorno al inicio,
     contexto visual y simetría entre páginas.
     ========================================================== */

  const THEME_KEY = 'portfolio-theme';

  const textos = {
    es: {
      about: 'Acerca de mí', areas: 'Áreas', projects: 'Proyectos', cv: 'Currículum Vitae', contact: 'Contacto',
      lang: 'ES / EN', langLabel: 'Cambiar a inglés', theme: 'Cambiar tema', menu: 'Abrir menú',
      footer: 'Diseñado y construido por mí, con ayuda de buenas herramientas y muchas pruebas.',
      top: 'Volver arriba ↑', rights: 'Todos los derechos reservados.'
    },
    en: {
      about: 'About me', areas: 'Areas', projects: 'Projects', cv: 'Curriculum Vitae', contact: 'Contact',
      lang: 'EN / ES', langLabel: 'Switch to Spanish', theme: 'Change theme', menu: 'Open menu',
      footer: 'Designed and built by me, with the help of good tools and plenty of testing.',
      top: 'Back to top ↑', rights: 'All rights reserved.'
    }
  };

  function idiomaActual() {
    return document.documentElement.lang?.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function cargarHoja(hrefBase, hrefVersionada) {
    if (document.querySelector(`link[href^="${hrefBase}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = hrefVersionada;
    document.head.appendChild(link);
  }

  function cargarEstilos() {
    cargarHoja('/assets/css/site-shell.css', '/assets/css/site-shell.css?v=20260916-3');
    cargarHoja('/assets/css/palettes.css', '/assets/css/palettes.css?v=20260916-1');
  }

  function contextualizarPagina() {
    const body = document.body;
    if (!body) return;
    const path = window.location.pathname.replace(/\/+$/, '') || '/';

    if (path === '/') body.classList.add('portal-home');
    if (path === '/cv') body.classList.add('cv-hub-page');
    if (path === '/404.html' || document.querySelector('main.error')) body.classList.add('error-page');

    /* En el selector de CV no se muestra un enlace que apunte a sí mismo. */
    if (body.classList.contains('cv-hub-page')) {
      document.querySelector('.desktop-nav')?.remove();
      document.querySelector('#mobile-nav')?.remove();
      document.querySelector('[data-menu-toggle]')?.remove();
    }
  }

  function iconoTema() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9c0-.5-.04-1-.12-1.48A7 7 0 0 1 12 3Z"/></svg>';
  }

  function iconoMenu() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  }

  function construirCabecera({ languageHref = null, languageButtonAttr = '', currentSection = 'cv', minimal = null } = {}) {
    const lang = idiomaActual();
    const tx = textos[lang];
    const esCv = minimal ?? currentSection === 'cv';
    const actual = (clave) => clave === currentSection ? ' aria-current="page"' : '';
    const idioma = languageHref
      ? `<a class="control lang-control" href="${languageHref}" aria-label="${tx.langLabel}">${tx.lang}</a>`
      : `<button class="control lang-control" type="button" ${languageButtonAttr} aria-label="${tx.langLabel}">${tx.lang}</button>`;

    const navegacionEscritorio = esCv
      ? `<nav class="desktop-nav cv-only" aria-label="${lang === 'en' ? 'Curriculum Vitae navigation' : 'Navegación de Currículum Vitae'}"><a class="nav-cv" href="/cv/" aria-current="page">${tx.cv}</a></nav>`
      : `<nav class="desktop-nav" aria-label="${lang === 'en' ? 'Main navigation' : 'Navegación principal'}">
          <a href="/#acerca"${actual('about')}>${tx.about}</a>
          <a href="/#areas"${actual('areas')}>${tx.areas}</a>
          <a href="/#proyectos"${actual('projects')}>${tx.projects}</a>
          <a class="nav-cv" href="/cv/"${actual('cv')}>${tx.cv}</a>
          <a href="/#contacto"${actual('contact')}>${tx.contact}</a>
        </nav>`;

    const navegacionMovil = esCv
      ? `<nav class="mobile-nav cv-only" id="mobile-nav" aria-label="${lang === 'en' ? 'Curriculum Vitae navigation' : 'Navegación de Currículum Vitae'}" hidden><a href="/cv/">${tx.cv}</a></nav>`
      : `<nav class="mobile-nav" id="mobile-nav" aria-label="${lang === 'en' ? 'Mobile navigation' : 'Navegación móvil'}" hidden>
          <a href="/#acerca">${tx.about}</a><a href="/#areas">${tx.areas}</a><a href="/#proyectos">${tx.projects}</a><a href="/cv/">${tx.cv}</a><a href="/#contacto">${tx.contact}</a>
        </nav>`;

    const header = document.querySelector('header') || document.createElement('header');
    header.className = 'site-header shell-header scrolled';
    header.innerHTML = `
      <div class="container nav-shell">
        <a class="wordmark" href="/" aria-label="${lang === 'en' ? 'Home' : 'Inicio'}">
          <span>rubén<span class="slash">/</span>cañizares</span><small>recm0708</small>
        </a>
        ${navegacionEscritorio}
        <div class="header-actions">
          ${idioma}
          <button class="control theme-control" type="button" data-theme-toggle aria-label="${tx.theme}">${iconoTema()}</button>
          <button class="control menu-control" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="${tx.menu}">${iconoMenu()}</button>
        </div>
      </div>
      ${navegacionMovil}`;

    if (!header.isConnected) document.body.prepend(header);
    activarMenu(header);
    activarTema(header);
    return header;
  }

  function construirPie() {
    const lang = idiomaActual();
    const tx = textos[lang];
    let footer = document.querySelector('footer');
    if (!footer) {
      footer = document.createElement('footer');
      document.body.appendChild(footer);
    }
    footer.className = 'site-footer shell-footer';
    footer.innerHTML = `
      <div class="container footer-layout">
        <div>© ${new Date().getFullYear()} Rubén Enrique Cañizares Miranda · ${tx.rights}</div>
        <div>${tx.footer}</div>
        <a href="#top" data-shell-top>${tx.top}</a>
      </div>`;
    document.body.id ||= 'top';
    footer.querySelector('[data-shell-top]')?.addEventListener('click', (event) => {
      event.preventDefault();
      volverArriba();
    });
    return footer;
  }

  function volverArriba() {
    if (window.location.hash === '#top') history.replaceState(null, document.title, window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function activarMenu(contexto = document) {
    const boton = contexto.querySelector('[data-menu-toggle]');
    const menu = contexto.querySelector('#mobile-nav');
    if (!boton || !menu || boton.dataset.shellReady) return;
    boton.dataset.shellReady = '1';
    boton.addEventListener('click', () => {
      const abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', String(!abierto));
      menu.hidden = abierto;
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      menu.hidden = true;
      boton.setAttribute('aria-expanded', 'false');
    }));
  }

  function activarTema(contexto = document) {
    const boton = contexto.querySelector('button[data-theme-toggle]');
    if (!boton || boton.dataset.shellThemeReady) return;
    boton.dataset.shellThemeReady = '1';
    const root = document.documentElement;
    const guardado = localStorage.getItem(THEME_KEY);
    if (guardado === 'light' || guardado === 'dark') root.dataset.theme = guardado;
    boton.addEventListener('click', () => {
      const siguiente = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = siguiente;
      localStorage.setItem(THEME_KEY, siguiente);
    });
  }

  function limpiarRetornosDuplicados() {
    document.querySelectorAll('.site-back-top,[data-site-back-top],[data-back-top]').forEach((elemento) => elemento.remove());
    document.querySelectorAll('#cv-back-top-styles,#cv-hub-back-top-styles,#home-extra-styles').forEach((style) => {
      if (style.id !== 'home-extra-styles') style.remove();
    });
  }

  function normalizarPortada() {
    cargarEstilos();
    contextualizarPagina();
    limpiarRetornosDuplicados();
    construirPie();
    activarMenu(document);
    const observadorBotones = new MutationObserver(() => limpiarRetornosDuplicados());
    observadorBotones.observe(document.body, { childList: true, subtree: true });
    const observadorIdioma = new MutationObserver(() => construirPie());
    observadorIdioma.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  cargarEstilos();
  contextualizarPagina();

  window.SiteShell = { cargarEstilos, contextualizarPagina, construirCabecera, construirPie, limpiarRetornosDuplicados, activarMenu, activarTema, volverArriba, normalizarPortada };
})();