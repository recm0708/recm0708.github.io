(() => {
  'use strict';

  const THEME_KEY = 'recm0708-theme';
  const LANG_KEY = 'recm0708-lang';
  const root = document.documentElement;

  function systemTheme(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme){
    root.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const lang = root.lang === 'en' ? 'en' : 'es';
      btn.setAttribute('aria-label', theme === 'dark' ? (lang === 'es' ? 'Cambiar a tema claro' : 'Switch to light theme') : (lang === 'es' ? 'Cambiar a tema oscuro' : 'Switch to dark theme'));
    });
  }

  function applyLanguage(lang, persist = true){
    root.lang = lang;
    if(persist) localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = el.dataset.lang !== lang;
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
    });

    document.querySelectorAll('[data-href-es][data-href-en]').forEach(link => {
      link.href = lang === 'es' ? link.dataset.hrefEs : link.dataset.hrefEn;
    });

    document.querySelectorAll('[data-lang-link-es]').forEach(el => el.classList.toggle('active', lang === 'es'));
    document.querySelectorAll('[data-lang-link-en]').forEach(el => el.classList.toggle('active', lang === 'en'));

    applyTheme(root.dataset.theme || systemTheme());
  }

  applyTheme(localStorage.getItem(THEME_KEY) || systemTheme());

  const defaultLang = document.body?.dataset.defaultLang || root.lang || 'es';
  const canSwitchLanguage = !!document.querySelector('[data-lang-toggle]');
  const initialLang = canSwitchLanguage ? (localStorage.getItem(LANG_KEY) || defaultLang) : defaultLang;
  applyLanguage(initialLang, canSwitchLanguage);

  document.addEventListener('click', e => {
    const themeBtn = e.target.closest('[data-theme-toggle]');
    if(themeBtn){
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const langBtn = e.target.closest('[data-lang-toggle]');
    if(langBtn){
      applyLanguage(root.lang === 'es' ? 'en' : 'es');
      return;
    }

    const menuBtn = e.target.closest('[data-menu-toggle]');
    if(menuBtn){
      const menu = document.querySelector('[data-mobile-nav]');
      if(menu){
        const open = menu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
      }
      return;
    }

    if(e.target.closest('[data-mobile-nav] a')){
      document.querySelector('[data-mobile-nav]')?.classList.remove('open');
      document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded','false');
    }
  });

  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if(!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress);

  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  if(navLinks.length){
    const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const spy = () => {
      let current = '';
      sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 130) current = `#${section.id}`;
      });
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
    };
    spy();
    window.addEventListener('scroll', spy, {passive:true});
  }
})();
