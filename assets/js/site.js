(() => {
  'use strict';

  const THEME_KEY = 'recm0708-theme';
  const LANG_KEY = 'recm0708-lang';
  const LEGAL_KEY = 'recm0708-legal-notice-v1';
  const root = document.documentElement;
  let lastUpdatedDate = null;

  function storageGet(key){
    try{
      return localStorage.getItem(key);
    } catch(error){
      return null;
    }
  }

  function storageSet(key, value){
    try{
      localStorage.setItem(key, value);
      return true;
    } catch(error){
      return false;
    }
  }

  function storageRemove(key){
    try{
      localStorage.removeItem(key);
      return true;
    } catch(error){
      return false;
    }
  }

  function systemTheme(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function updateMobileMenuButton(open = false){
    const btn = document.querySelector('[data-menu-toggle]');
    if(!btn) return;
    const lang = root.lang === 'en' ? 'en' : 'es';
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label',
      open
        ? (lang === 'es' ? 'Cerrar menú' : 'Close menu')
        : (lang === 'es' ? 'Abrir menú' : 'Open menu')
    );
  }

  function closeMobileMenu({restoreFocus = false} = {}){
    const menu = document.querySelector('[data-mobile-nav]');
    const btn = document.querySelector('[data-menu-toggle]');
    if(!menu || !btn) return;
    menu.classList.remove('open');
    updateMobileMenuButton(false);
    if(restoreFocus) btn.focus({preventScroll:true});
  }

  function applyTheme(theme, persist = false){
    root.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
      meta.setAttribute('content', theme === 'dark' ? '#0b0d12' : '#f5f7fb');
    });
    if(persist) storageSet(THEME_KEY, theme);
    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const lang = root.lang === 'en' ? 'en' : 'es';
      btn.setAttribute('aria-label', theme === 'dark' ? (lang === 'es' ? 'Cambiar a tema claro' : 'Switch to light theme') : (lang === 'es' ? 'Cambiar a tema oscuro' : 'Switch to dark theme'));
    });
  }

  function refineHomeHero(){
    const chips = document.querySelectorAll('.hero-meta > .meta-chip');
    if(chips.length >= 3){
      const icon = chips[2].querySelector('i');
      const es = chips[2].querySelector('[data-lang="es"]');
      const en = chips[2].querySelector('[data-lang="en"]');
      if(icon) icon.className = 'fa-solid fa-briefcase';
      if(es) es.textContent = 'En búsqueda laboral';
      if(en) en.textContent = 'Open to work';
    }

    const floating = document.querySelector('.float-panel.two');
    if(floating){
      const es = floating.querySelector('strong[data-lang="es"]');
      if(es) es.textContent = 'En búsqueda laboral';
    }
  }

  function syncHeroMetaLayout(){
    const meta = document.querySelector('.hero-meta');
    if(!meta) return;

    const chips = [...meta.querySelectorAll(':scope > .meta-chip')];
    const desktopLayout = window.matchMedia('(min-width: 721px)').matches;

    if(desktopLayout){
      meta.style.display = 'flex';
      meta.style.flexWrap = 'wrap';
      meta.style.width = 'max-content';
      meta.style.maxWidth = '100%';
      meta.style.justifyContent = 'flex-start';
      meta.style.alignItems = 'center';

      chips.forEach(chip => {
        chip.style.flex = '0 0 auto';
        chip.style.width = 'max-content';
        chip.style.gridColumn = 'auto';
      });
      return;
    }

    ['display','flex-wrap','width','max-width','justify-content','align-items'].forEach(property => {
      meta.style.removeProperty(property);
    });
    chips.forEach(chip => {
      chip.style.removeProperty('flex');
      chip.style.removeProperty('width');
      chip.style.removeProperty('grid-column');
    });
  }

  function applyLanguage(lang, persist = true){
    root.lang = lang;
    if(persist) storageSet(LANG_KEY, lang);

    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = el.dataset.lang !== lang;
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
    });

    updateMobileMenuButton(!!document.querySelector('[data-mobile-nav].open'));

    const pageTitle = lang === 'en' ? document.body?.dataset.titleEn : document.body?.dataset.titleEs;
    if(pageTitle) document.title = pageTitle;

    if(lastUpdatedDate) renderLastUpdated();

    requestAnimationFrame(() => {
      document.querySelectorAll(`.localized-page[data-lang="${lang}"] .reveal`).forEach(el => el.classList.add('visible'));
    });

    applyTheme(root.dataset.theme || systemTheme(), false);
  }


  function isEditableTarget(target){
    return !!target?.closest?.('input,textarea,select,[contenteditable="true"]');
  }

  let protectionToastTimer;
  function showProtectionNotice(){
    let toast = document.querySelector('[data-protection-toast]');
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'protection-toast';
      toast.dataset.protectionToast = '';
      toast.setAttribute('role','status');
      toast.setAttribute('aria-live','polite');
      document.body.appendChild(toast);
    }
    toast.textContent = root.lang === 'en'
      ? 'Protected content. Copying and printing are restricted by the site owner.'
      : 'Contenido protegido. La copia y la impresión están restringidas por el propietario del sitio.';
    toast.classList.add('show');
    clearTimeout(protectionToastTimer);
    protectionToastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function enableContentProtection(){
    ['copy','cut','contextmenu','dragstart'].forEach(type => {
      document.addEventListener(type, e => {
        if(isEditableTarget(e.target)) return;
        e.preventDefault();
        showProtectionNotice();
      });
    });

    document.addEventListener('keydown', e => {
      if(isEditableTarget(e.target)) return;
      if(!(e.ctrlKey || e.metaKey)) return;
      const key = e.key.toLowerCase();
      if(['c','p','s','u'].includes(key)){
        e.preventDefault();
        showProtectionNotice();
      }
    });
  }


  function renderLastUpdated(){
    const el = document.querySelector('[data-last-updated]');
    if(!el || !lastUpdatedDate) return;
    const lang = root.lang === 'en' ? 'en' : 'es';
    const formatter = new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-PA', {
      dateStyle:'medium',
      timeStyle:'short',
      timeZone:'America/Panama'
    });
    el.textContent = lang === 'en'
      ? `Updated: ${formatter.format(lastUpdatedDate)} (Panama time)`
      : `Actualizado: ${formatter.format(lastUpdatedDate)} (hora de Panamá)`;
  }

  async function setupLastUpdated(){
    const host = document.querySelector('.footer-meta');
    if(!host) return;

    let el = host.querySelector('[data-last-updated]');
    if(!el){
      el = document.createElement('div');
      el.className = 'footer-updated';
      el.dataset.lastUpdated = '';
      host.insertBefore(el, host.querySelector('.footer-legal'));
    }

    try{
      const response = await fetch('https://api.github.com/repos/recm0708/recm0708.github.io/commits/main', {
        headers:{'Accept':'application/vnd.github+json'}
      });
      if(!response.ok) throw new Error('GitHub API unavailable');
      const data = await response.json();
      const stamp = data?.commit?.committer?.date || data?.commit?.author?.date;
      if(!stamp) throw new Error('Commit timestamp unavailable');
      lastUpdatedDate = new Date(stamp);
    } catch(error){
      const fallback = new Date(document.lastModified);
      if(!Number.isNaN(fallback.getTime())) lastUpdatedDate = fallback;
    }

    if(lastUpdatedDate) renderLastUpdated();
    else el.hidden = true;
  }

  function setupLegalNotice(){
    if(location.pathname.startsWith('/legal/')) return;
    if(storageGet(LEGAL_KEY) === 'acknowledged') return;

    const lang = root.lang === 'en' ? 'en' : 'es';
    const termsHref = '/legal/terminos/';
    const privacyHref = '/legal/privacidad/';

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const backdrop = document.createElement('div');
    backdrop.className = 'legal-notice-backdrop';
    backdrop.innerHTML = lang === 'en'
      ? `<section class="legal-notice" role="dialog" aria-modal="true" aria-labelledby="legal-notice-title" aria-describedby="legal-notice-description">
          <div class="eyebrow">Site notice</div>
          <h2 id="legal-notice-title">Before you continue</h2>
          <div id="legal-notice-description">
            <p>This professional site is owned, managed and maintained by Rubén Enrique Cañizares Miranda. Original content is protected by copyright and technical measures are used to discourage unauthorized copying or printing.</p>
            <p>The current version uses local browser storage for functional preferences and to remember this notice. No advertising or analytics cookies are currently implemented by this site.</p>
          </div>
          <div class="legal-notice-links"><a href="${termsHref}">Terms of Use</a><a href="${privacyHref}">Privacy & storage</a></div>
          <div class="legal-notice-actions"><button class="btn primary" type="button" data-legal-ack>Acknowledge and continue</button></div>
        </section>`
      : `<section class="legal-notice" role="dialog" aria-modal="true" aria-labelledby="legal-notice-title" aria-describedby="legal-notice-description">
          <div class="eyebrow">Aviso del sitio</div>
          <h2 id="legal-notice-title">Antes de continuar</h2>
          <div id="legal-notice-description">
            <p>Este sitio profesional pertenece, es administrado y mantenido por Rubén Enrique Cañizares Miranda. El contenido original está protegido por derechos de autor y se utilizan medidas técnicas para disuadir la copia o impresión no autorizada.</p>
            <p>La versión actual utiliza almacenamiento local del navegador para preferencias funcionales y para recordar este aviso. Este sitio no implementa actualmente cookies de publicidad ni analítica.</p>
          </div>
          <div class="legal-notice-links"><a href="${termsHref}">Términos de uso</a><a href="${privacyHref}">Privacidad y almacenamiento</a></div>
          <div class="legal-notice-actions"><button class="btn primary" type="button" data-legal-ack>Entendido y continuar</button></div>
        </section>`;

    document.body.appendChild(backdrop);
    document.body.classList.add('legal-notice-open');

    const inertSiblings = [...document.body.children]
      .filter(el => el !== backdrop && el.tagName !== 'SCRIPT')
      .map(el => ({el, wasInert: el.inert}));
    inertSiblings.forEach(({el}) => { el.inert = true; });

    const dialog = backdrop.querySelector('.legal-notice');
    const acknowledge = backdrop.querySelector('[data-legal-ack]');
    const focusable = [...dialog.querySelectorAll('a[href],button:not([disabled])')];

    const trapFocus = e => {
      if(e.key !== 'Tab' || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if(e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      } else if(!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener('keydown', trapFocus);
    acknowledge.addEventListener('click', () => {
      storageSet(LEGAL_KEY,'acknowledged');
      inertSiblings.forEach(({el, wasInert}) => { el.inert = wasInert; });
      document.body.classList.remove('legal-notice-open');
      backdrop.remove();

      const fallbackFocus = document.querySelector('.brand[href], a.brand, main a[href], main button');
      const target = previousFocus && previousFocus !== document.body && previousFocus.isConnected
        ? previousFocus
        : fallbackFocus;
      if(target instanceof HTMLElement){
        requestAnimationFrame(() => target.focus({preventScroll:true}));
      }
    });
    requestAnimationFrame(() => acknowledge.focus());
  }

  enableContentProtection();

  refineHomeHero();
  syncHeroMetaLayout();
  applyTheme(storageGet(THEME_KEY) || systemTheme(), false);

  const defaultLang = document.body?.dataset.defaultLang || root.lang || 'es';
  const canSwitchLanguage = !!document.querySelector('[data-lang-toggle]');
  const initialLang = canSwitchLanguage ? (storageGet(LANG_KEY) || defaultLang) : defaultLang;
  applyLanguage(initialLang, false);
  setupLegalNotice();
  setupLastUpdated();

  document.addEventListener('click', e => {
    const resetBtn = e.target.closest('[data-reset-preferences]');
    if(resetBtn){
      [THEME_KEY, LANG_KEY, LEGAL_KEY].forEach(key => storageRemove(key));
      window.location.assign('/');
      return;
    }

    const themeBtn = e.target.closest('[data-theme-toggle]');
    if(themeBtn){
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
      return;
    }

    const langBtn = e.target.closest('[data-lang-toggle]');
    if(langBtn){
      applyLanguage(root.lang === 'es' ? 'en' : 'es', true);
      return;
    }

    const menuBtn = e.target.closest('[data-menu-toggle]');
    if(menuBtn){
      const menu = document.querySelector('[data-mobile-nav]');
      if(menu){
        const open = menu.classList.toggle('open');
        updateMobileMenuButton(open);
        if(open && e.detail === 0){
          requestAnimationFrame(() => menu.querySelector('a[href]')?.focus());
        }
      }
      return;
    }

    const mobileNavLink = e.target.closest('[data-mobile-nav] a');
    if(mobileNavLink){
      const href = mobileNavLink.getAttribute('href') || '';
      closeMobileMenu();
      if(href.startsWith('#')){
        const target = document.querySelector(href);
        if(target instanceof HTMLElement){
          if(!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1');
          requestAnimationFrame(() => target.focus({preventScroll:true}));
        }
      }
      return;
    }

    const mobileMenu = document.querySelector('[data-mobile-nav].open');
    if(mobileMenu && !e.target.closest('[data-mobile-nav]')){
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && document.querySelector('[data-mobile-nav].open')){
      e.preventDefault();
      closeMobileMenu({restoreFocus:true});
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
  window.addEventListener('resize', () => {
    updateProgress();
    syncHeroMetaLayout();
  });

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

  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"], .mobile-nav a[href^="#"]')];
  if(navLinks.length){
    const sectionSelectors = [...new Set(navLinks.map(a => a.getAttribute('href')))];
    const sections = sectionSelectors.map(selector => document.querySelector(selector)).filter(Boolean);
    const spy = () => {
      let current = '';
      sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 130) current = `#${section.id}`;
      });
      navLinks.forEach(a => {
        const active = a.getAttribute('href') === current;
        a.classList.toggle('active', active);
        if(active) a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    };
    spy();
    window.addEventListener('scroll', spy, {passive:true});
  }
})();
