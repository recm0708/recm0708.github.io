(() => {
  'use strict';

  /* ==========================================================
     CURRÍCULOS — COMPORTAMIENTO COMPARTIDO
     Este archivo es reutilizado por los CV Eléctrico, Redes y General.
     Controla apariencia, impresión, navegación interna, retorno arriba
     y la declaración de copyright común.
     ========================================================== */

  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const printButton = document.querySelector('[data-print]');
  const year = document.querySelector('[data-year]');

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  let theme = savedTheme || (prefersLight ? 'light' : 'dark');

  function instalarPaletaClara() {
    if (document.querySelector('#cv-light-palette')) return;
    const style = document.createElement('style');
    style.id = 'cv-light-palette';
    style.textContent = `
      html[data-theme="light"]{
        --bg:#dfe6e4;--bg-soft:#d4dddb;--surface:rgba(230,237,235,.92);--surface-strong:#e7edeb;--text:#13211f;--text-soft:#566964;--line:rgba(20,55,49,.15);--shadow:0 24px 70px rgba(35,62,56,.12);
        --n-bg:#dbe6e8;--n-bg2:#cfdddf;--n-panel:#e5edef;--n-panel2:#dfe9ea;--n-ink:#12262c;--n-muted:#587079;--n-line:rgba(25,82,98,.16);--n-line2:rgba(25,82,98,.31);--n-cyan:#08738f;--n-green:#14745b;--n-amber:#8f6209;--n-blue:#355aa9;
        --g-paper:#e4ded2;--g-ink:#202724;--g-muted:#656e69;--g-line:#bbb7ab;--g-card:#ece7dc;--g-accent:#86413b;--g-accent2:#356662;--g-dark:#19201d;
      }
    `;
    document.head.appendChild(style);
  }

  function applyTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    if (themeButton) {
      themeButton.textContent = theme === 'dark' ? '◐' : '◑';
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      themeButton.title = theme === 'dark' ? 'Tema claro' : 'Tema oscuro';
    }
  }

  function volverAlInicio() {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    if (window.location.hash === '#top') history.replaceState(null, document.title, window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousBehavior; });
  }

  function instalarVolverArriba() {
    if (!document.body.id) document.body.id = 'top';
    document.querySelectorAll('a[href="#top"]').forEach((link) => {
      link.addEventListener('click', (event) => { event.preventDefault(); volverAlInicio(); });
    });
    if (document.querySelector('[data-site-back-top]')) return;

    const style = document.createElement('style');
    style.id = 'cv-back-top-styles';
    style.textContent = `
      .site-back-top{position:fixed;right:18px;bottom:18px;z-index:1600;display:flex;align-items:center;gap:8px;min-height:42px;padding:0 13px;border:1px solid rgba(255,255,255,.18);background:rgba(10,14,16,.9);backdrop-filter:blur(12px);color:#f3f7f6;font:800 .68rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,border-color .2s ease}
      .site-back-top.is-visible{opacity:1;pointer-events:auto;transform:none}.site-back-top:hover{border-color:rgba(255,255,255,.55)}.site-back-top svg{width:16px;height:16px}
      html[data-theme="light"] .site-back-top{background:rgba(218,228,225,.96);color:#17231f;border-color:rgba(25,65,56,.24)}
      html[data-theme="light"] .site-back-top:hover{border-color:rgba(15,95,78,.55)}
      @media(max-width:560px){.site-back-top span{display:none}.site-back-top{width:44px;padding:0;justify-content:center}}
      @media print{.site-back-top{display:none!important}}
    `;
    document.head.appendChild(style);

    const button = document.createElement('button');
    const english = document.documentElement.lang?.toLowerCase().startsWith('en');
    button.type = 'button';
    button.className = 'site-back-top';
    button.dataset.siteBackTop = '';
    button.setAttribute('aria-label', english ? 'Back to top' : 'Volver arriba');
    button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg><span>${english ? 'Back to top' : 'Volver arriba'}</span>`;
    button.addEventListener('click', volverAlInicio);
    document.body.appendChild(button);
    const actualizarVisibilidad = () => button.classList.toggle('is-visible', window.scrollY > 520);
    window.addEventListener('scroll', actualizarVisibilidad, { passive: true });
    actualizarVisibilidad();
  }

  function instalarNavegacionInterna() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        if (targetId === '#top') { event.preventDefault(); volverAlInicio(); return; }
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* Copyright común para los seis currículos, también visible al imprimir. */
  function instalarCopyright() {
    if (document.querySelector('[data-site-copyright]')) return;
    const style = document.createElement('style');
    style.id = 'cv-copyright-styles';
    style.textContent = `
      .site-copyright{padding:18px 20px 22px;border-top:1px solid rgba(128,145,140,.2);text-align:center;color:var(--text-soft,#81908c);font:600 .68rem/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.02em}
      html[data-theme="light"] .site-copyright{color:#66736f;border-top-color:rgba(35,65,57,.16)}
      @media print{.site-copyright{padding:10px 0 0;border-top:1px solid #ccc;color:#555;font-size:8pt}}
    `;
    document.head.appendChild(style);
    const english = document.documentElement.lang?.toLowerCase().startsWith('en');
    const copyright = document.createElement('div');
    copyright.className = 'site-copyright';
    copyright.dataset.siteCopyright = '';
    copyright.textContent = `© ${new Date().getFullYear()} Rubén Enrique Cañizares Miranda · ${english ? 'All rights reserved.' : 'Todos los derechos reservados.'}`;
    document.body.appendChild(copyright);
  }

  themeButton?.addEventListener('click', () => { applyTheme(theme === 'dark' ? 'light' : 'dark'); });
  printButton?.addEventListener('click', () => window.print());

  instalarPaletaClara();
  instalarNavegacionInterna();
  instalarVolverArriba();
  instalarCopyright();
  if (year) year.textContent = new Date().getFullYear();
  applyTheme(theme);
})();