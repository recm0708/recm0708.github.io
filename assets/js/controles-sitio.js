(() => {
  'use strict';

  /* ==========================================================
     CONTROLES GLOBALES DEL SITIO
     Unifica idioma y tema en las subpáginas sin modificar la
     identidad visual de cada sección.

     IMPORTANTE:
     El elemento <html> usa data-theme para almacenar el tema activo.
     Por eso esta capa solo puede seleccionar BOTONES con ese atributo.
     ========================================================== */

  const raiz = document.documentElement;
  const iconoTema = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="18" height="18" style="width:18px;height:18px;display:block;max-width:18px;max-height:18px;flex:0 0 18px" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9c0-.5-.04-1-.12-1.48A7 7 0 0 1 12 3Z"/></svg>';

  function idiomaActual() {
    return raiz.lang?.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function obtenerBotonTema() {
    return document.querySelector('button[data-theme-toggle], button[data-theme]');
  }

  function normalizarTema() {
    const boton = obtenerBotonTema();
    if (!boton) return;

    boton.classList.add('site-theme-control');
    boton.style.width = '40px';
    boton.style.minWidth = '40px';
    boton.style.maxWidth = '40px';
    boton.style.height = '39px';
    boton.style.minHeight = '39px';
    boton.style.overflow = 'hidden';
    boton.innerHTML = iconoTema;

    const idioma = idiomaActual();
    const tema = raiz.dataset.theme === 'light' ? 'light' : 'dark';
    boton.setAttribute('aria-label', idioma === 'en'
      ? (tema === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
      : (tema === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'));
    boton.title = idioma === 'en'
      ? (tema === 'dark' ? 'Light theme' : 'Dark theme')
      : (tema === 'dark' ? 'Tema claro' : 'Tema oscuro');
  }

  function normalizarIdiomaCV() {
    const contenedor = document.querySelector('.cv-nav-meta, .net-actions, .g-actions');
    if (!contenedor) return;

    contenedor.classList.add('site-control-group');
    const enlaces = Array.from(contenedor.querySelectorAll('a.cv-lang, a.net-lang, a.g-lang'));
    if (enlaces.length < 2) return;

    const idioma = idiomaActual();
    const actual = enlaces.find((enlace) => enlace.matches('[aria-current="page"]'));
    const destino = enlaces.find((enlace) => enlace !== actual) || enlaces[0];
    if (!destino) return;

    const enlaceUnico = document.createElement('a');
    enlaceUnico.className = 'site-language-control';
    enlaceUnico.href = destino.href;
    enlaceUnico.textContent = idioma === 'en' ? 'EN / ES' : 'ES / EN';
    enlaceUnico.setAttribute('aria-label', idioma === 'en' ? 'Cambiar a español' : 'Cambiar a inglés');

    enlaces.forEach((enlace) => enlace.remove());
    const botonTema = contenedor.querySelector('button[data-theme-toggle]');
    contenedor.insertBefore(enlaceUnico, botonTema || contenedor.firstChild);
  }

  function normalizarCentroCV() {
    const contenedor = document.querySelector('.hub-actions');
    if (!contenedor) return;

    contenedor.classList.add('site-control-group');
    contenedor.querySelector('button[data-lang]')?.classList.add('site-language-control');
    contenedor.querySelector('button[data-theme]')?.classList.add('site-theme-control');
  }

  function instalarControles404() {
    if (!document.querySelector('main.error') || document.querySelector('[data-error-controls]')) return;

    const barra = document.createElement('div');
    barra.dataset.errorControls = '';
    barra.className = 'site-control-group';
    barra.style.cssText = 'position:fixed;top:18px;right:18px;z-index:20;color:var(--ink)';

    const idiomaBtn = document.createElement('button');
    idiomaBtn.type = 'button';
    idiomaBtn.className = 'site-language-control';

    const temaBtn = document.createElement('button');
    temaBtn.type = 'button';
    temaBtn.className = 'site-theme-control';
    temaBtn.dataset.themeToggle = '';
    temaBtn.innerHTML = iconoTema;

    const textos = {
      es: {
        h2: 'Esta ruta no llegó a destino.',
        p: 'La dirección que intentaste abrir no existe, cambió de ubicación o todavía no forma parte de mi sitio. Puedes volver al inicio o entrar directamente al área de Currículum Vitae.',
        inicio: '← Volver al inicio',
        cv: 'Currículum Vitae →',
        derechos: 'Todos los derechos reservados.'
      },
      en: {
        h2: 'This route did not reach its destination.',
        p: 'The address you tried to open does not exist, moved, or is not yet part of my site. You can return home or go directly to the Curriculum Vitae area.',
        inicio: '← Back to home',
        cv: 'Curriculum Vitae →',
        derechos: 'All rights reserved.'
      }
    };

    const guardado = localStorage.getItem('portfolio-language');
    let estadoIdioma = guardado === 'en' || guardado === 'es' ? guardado : idiomaActual();

    function aplicarIdioma404() {
      const dic = textos[estadoIdioma];
      const titulo = document.querySelector('.content h2');
      const parrafo = document.querySelector('.content > p:not(.code)');
      const enlaces = document.querySelectorAll('.links a');
      const copyright = document.querySelector('.copyright');

      if (titulo) titulo.textContent = dic.h2;
      if (parrafo) parrafo.textContent = dic.p;
      if (enlaces[0]) enlaces[0].textContent = dic.inicio;
      if (enlaces[1]) enlaces[1].textContent = dic.cv;
      if (copyright) copyright.innerHTML = `© <span id="copyright-year">${new Date().getFullYear()}</span> Rubén Enrique Cañizares Miranda · ${dic.derechos}`;

      raiz.lang = estadoIdioma;
      idiomaBtn.textContent = estadoIdioma === 'en' ? 'EN / ES' : 'ES / EN';
      idiomaBtn.setAttribute('aria-label', estadoIdioma === 'en' ? 'Cambiar a español' : 'Cambiar a inglés');
      normalizarTema();
    }

    idiomaBtn.addEventListener('click', () => {
      estadoIdioma = estadoIdioma === 'es' ? 'en' : 'es';
      localStorage.setItem('portfolio-language', estadoIdioma);
      aplicarIdioma404();
    });

    temaBtn.addEventListener('click', () => {
      const nuevo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
      raiz.dataset.theme = nuevo;
      localStorage.setItem('portfolio-theme', nuevo);
      normalizarTema();
    });

    barra.append(idiomaBtn, temaBtn);
    document.body.appendChild(barra);
    aplicarIdioma404();
  }

  normalizarIdiomaCV();
  normalizarCentroCV();
  normalizarTema();
  instalarControles404();

  new MutationObserver(normalizarTema).observe(raiz, {
    attributes: true,
    attributeFilter: ['data-theme', 'lang']
  });
})();