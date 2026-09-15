(() => {
  'use strict';
  const t={
    es:{home:'Volver al sitio personal',kicker:'CURRÍCULUM VITAE · PERFILES PROFESIONALES',title1:'Tres formas de contar',title2:'la misma trayectoria.',lead:'Cada currículo prioriza experiencia, competencias y formación distintas según el tipo de oportunidad. No son copias con otro color: cada perfil tiene su propia estructura e identidad visual.',eTitle:'Eléctrica y Automatización',eCopy:'Experiencia, formación y competencias orientadas a instalaciones eléctricas, mantenimiento, baja tensión, automatización y documentación técnica.',nTitle:'Redes Informáticas',nCopy:'Versión web completa con networking, infraestructura, routing, switching, servicios, Linux, virtualización, contenedores, SDN, observabilidad y automatización.',gTitle:'Perfil General',gCopy:'Perfil multidisciplinario completo para posiciones donde conviene presentar juntas la experiencia eléctrica, tecnológica, de soporte e infraestructura.',available:'Disponible',building:'En construcción',noteCode:'CÓMO USARLO',note:'Selecciona el perfil más cercano al tipo de vacante o contexto profesional. Las versiones web son amplias y muestran proyectos y contexto técnico; más adelante los PDF ATS estarán disponibles como documentos separados y concisos.',footer:'Rubén Enrique Cañizares Miranda · Currículum Vitae',back:'Inicio',top:'Volver arriba'},
    en:{home:'Back to personal site',kicker:'CURRICULUM VITAE · PROFESSIONAL PROFILES',title1:'Three ways to present',title2:'the same career path.',lead:'Each résumé prioritizes different experience, skills and education depending on the opportunity. These are not color-swapped copies: each profile has its own structure and visual identity.',eTitle:'Electrical & Automation',eCopy:'Experience, education and skills focused on electrical installations, maintenance, low voltage, automation and technical documentation.',nTitle:'Computer Networks',nCopy:'Complete web profile covering networking, infrastructure, routing, switching, services, Linux, virtualization, containers, SDN, observability and automation.',gTitle:'General Profile',gCopy:'Complete multidisciplinary profile for roles where electrical, technology, support and infrastructure experience should be presented together.',available:'Available',building:'In progress',noteCode:'HOW TO USE IT',note:'Choose the profile closest to the role or professional context. The web versions are intentionally comprehensive and include projects and technical context; concise ATS PDFs will be added later as separate documents.',footer:'Rubén Enrique Cañizares Miranda · Curriculum Vitae',back:'Home',top:'Back to top'}
  };
  const root=document.documentElement;
  const langBtn=document.querySelector('[data-lang]');
  const themeBtn=document.querySelector('[data-theme]');
  let lang=localStorage.getItem('portfolio-language')||'es';
  let theme=localStorage.getItem('portfolio-theme')||'dark';

  function installBackToTop(){
    const style=document.createElement('style');
    style.textContent=`
      .site-back-top{position:fixed;right:18px;bottom:18px;z-index:1600;display:flex;align-items:center;gap:8px;min-height:42px;padding:0 13px;border:1px solid rgba(255,255,255,.18);background:rgba(16,18,17,.92);backdrop-filter:blur(12px);color:#f6f4ee;font:800 .68rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,border-color .2s ease}
      .site-back-top.is-visible{opacity:1;pointer-events:auto;transform:none}.site-back-top:hover{border-color:rgba(255,255,255,.55)}.site-back-top svg{width:16px;height:16px}
      @media(max-width:560px){.site-back-top span{display:none}.site-back-top{width:44px;padding:0;justify-content:center}}
    `;
    document.head.appendChild(style);
    const btn=document.createElement('button');
    btn.type='button';btn.className='site-back-top';btn.dataset.backTop='';
    btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg><span data-back-top-label>Volver arriba</span>';
    btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
    document.body.appendChild(btn);
    const update=()=>btn.classList.toggle('is-visible',window.scrollY>420);
    window.addEventListener('scroll',update,{passive:true});update();
  }

  function setLang(next){
    lang=t[next]?next:'es';
    root.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[lang][k])el.textContent=t[lang][k]});
    const topLabel=document.querySelector('[data-back-top-label]');if(topLabel)topLabel.textContent=t[lang].top;
    const topButton=document.querySelector('[data-back-top]');if(topButton)topButton.setAttribute('aria-label',t[lang].top);
    if(langBtn)langBtn.textContent=lang==='es'?'ES / EN':'EN / ES';
    const electrical=document.querySelector('[data-electrical-link]');
    const network=document.querySelector('[data-network-link]');
    const general=document.querySelector('[data-general-link]');
    if(electrical)electrical.href=lang==='es'?'/es/electrica/':'/en/electrical/';
    if(network)network.href=lang==='es'?'/es/redes/':'/en/networks/';
    if(general)general.href=lang==='es'?'/es/general/':'/en/general/';
    document.title=lang==='es'?'Currículum Vitae | Rubén Cañizares':'Curriculum Vitae | Rubén Cañizares';
    localStorage.setItem('portfolio-language',lang);
  }
  function setTheme(next){theme=next==='light'?'light':'dark';root.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)}
  langBtn?.addEventListener('click',()=>setLang(lang==='es'?'en':'es'));
  themeBtn?.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
  installBackToTop();setTheme(theme);setLang(lang);
})();