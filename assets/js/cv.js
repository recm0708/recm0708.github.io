(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const printButton = document.querySelector('[data-print]');
  const year = document.querySelector('[data-year]');

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  let theme = savedTheme || (prefersLight ? 'light' : 'dark');

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

  function installBackToTop() {
    const style = document.createElement('style');
    style.textContent = `
      .site-back-top{position:fixed;right:18px;bottom:18px;z-index:1600;display:flex;align-items:center;gap:8px;min-height:42px;padding:0 13px;border:1px solid rgba(255,255,255,.18);background:rgba(10,14,16,.9);backdrop-filter:blur(12px);color:#f3f7f6;font:800 .68rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,border-color .2s ease}
      .site-back-top.is-visible{opacity:1;pointer-events:auto;transform:none}.site-back-top:hover{border-color:rgba(255,255,255,.55)}.site-back-top svg{width:16px;height:16px}
      @media(max-width:560px){.site-back-top span{display:none}.site-back-top{width:44px;padding:0;justify-content:center}}
      @media print{.site-back-top{display:none!important}}
    `;
    document.head.appendChild(style);

    const button = document.createElement('button');
    const english = document.documentElement.lang?.toLowerCase().startsWith('en');
    button.type = 'button';
    button.className = 'site-back-top';
    button.setAttribute('aria-label', english ? 'Back to top' : 'Volver arriba');
    button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg><span>${english ? 'Back to top' : 'Volver arriba'}</span>`;
    button.addEventListener('click', () => window.scrollTo({
      top: 0,
      behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    }));
    document.body.appendChild(button);

    const update = () => button.classList.toggle('is-visible', window.scrollY > 520);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  themeButton?.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  printButton?.addEventListener('click', () => window.print());

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (year) year.textContent = new Date().getFullYear();
  installBackToTop();
  applyTheme(theme);
})();
