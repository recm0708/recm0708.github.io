import React, {useEffect, useMemo, useState} from 'https://esm.sh/react@18.3.1';
import {createRoot} from 'https://esm.sh/react-dom@18.3.1/client';
import htm from 'https://esm.sh/htm@3.1.1';
import {motion, AnimatePresence} from 'https://esm.sh/framer-motion@11.11.17?deps=react@18.3.1,react-dom@18.3.1';
import {site, socialGroups, cvProfiles, labels} from './content.js';

const html = htm.bind(React.createElement);
const THEME_KEY='recm0708-theme-v4';
const LANG_KEY='recm0708-lang-v4';
const M=motion;

function routeInfo(){
  const p=window.location.pathname.replace(/\/+$/,'/') || '/';
  if(p==='/') return {page:'home'};
  if(p==='/cv/'||p==='/cv') return {page:'hub'};
  if(p==='/cv/es/redes/') return {page:'cv',profile:'networks',lang:'es'};
  if(p==='/cv/en/networks/') return {page:'cv',profile:'networks',lang:'en'};
  if(p==='/cv/es/electrica/') return {page:'cv',profile:'electrical',lang:'es'};
  if(p==='/cv/en/electrical/') return {page:'cv',profile:'electrical',lang:'en'};
  if(p==='/cv/es/integral/') return {page:'cv',profile:'integral',lang:'es'};
  if(p==='/cv/en/comprehensive/') return {page:'cv',profile:'integral',lang:'en'};
  return {page:'404'};
}

function useScrollProgress(){
  const [value,setValue]=useState(0);
  useEffect(()=>{
    const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setValue(max>0?window.scrollY/max:0)};
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)};
  },[]);
  return value;
}

function Icon({name}){return html`<i className=${name} aria-hidden="true"></i>`}

function Header({page,lang,setLang,theme,setTheme,profile}){
  const [open,setOpen]=useState(false);
  const t=site[lang];
  const isHome=page==='home';
  const isCv=page==='cv';
  const profileData=isCv?cvProfiles[profile]:null;
  const toggleLang=()=>{
    const next=lang==='es'?'en':'es';
    localStorage.setItem(LANG_KEY,next);
    if(isCv){window.location.href=profileData.routes[next];return}
    setLang(next);
  };
  const nav=isHome?[
    ['#historia',t.nav.story],['#recorrido',t.nav.journey],['#perfiles',t.nav.areas],['#proyectos',t.nav.projects],['#vida',t.nav.life],['#redes-sociales',t.nav.socials]
  ]:[];
  return html`
    <header className="floating-header">
      <div className="navbar">
        <a className="brand" href="/">
          <span className="brand-mark">RC</span>
          <span className="brand-copy"><strong>Rubén Cañizares</strong><small>recm0708</small></span>
        </a>
        <nav className="nav-links" aria-label=${lang==='es'?'Navegación principal':'Main navigation'}>
          ${isHome?nav.map(([href,label])=>html`<a href=${href}>${label}</a>`):null}
          ${page==='cv'?html`<a href="/cv/" className="active">${labels[lang].cv}</a>`:null}
          ${page==='hub'?html`<a href="/" >${lang==='es'?'Blog personal':'Personal blog'}</a>`:null}
          ${page==='404'?html`<a href="/">${labels[lang].home}</a>`:null}
        </nav>
        <div className="nav-actions">
          ${isHome?html`<a className="pill-btn" href="/cv/">${t.nav.cv}</a>`:null}
          ${isCv?html`<a className="pill-btn" href="/cv/">${labels[lang].back}</a>`:null}
          <button className="pill-btn" onClick=${toggleLang} aria-label="Language">${lang.toUpperCase()} / ${lang==='es'?'EN':'ES'}</button>
          <button className="icon-btn" onClick=${()=>setTheme(theme==='dark'?'light':'dark')} aria-label=${lang==='es'?'Cambiar tema':'Change theme'}><${Icon} name=${theme==='dark'?'fa-solid fa-sun':'fa-solid fa-moon'} /></button>
          ${isHome?html`<button className="icon-btn menu-btn" onClick=${()=>setOpen(!open)} aria-expanded=${open} aria-label="Menu"><${Icon} name=${open?'fa-solid fa-xmark':'fa-solid fa-bars'} /></button>`:null}
        </div>
      </div>
      <${AnimatePresence}>
        ${open&&isHome?html`<${M.div} initial=${{opacity:0,y:-8}} animate=${{opacity:1,y:0}} exit=${{opacity:0,y:-8}} style=${{padding:'0 14px 14px'}}>
          <div className="soft-card" style=${{padding:'10px',display:'grid',gap:'4px'}}>${nav.map(([href,label])=>html`<a href=${href} onClick=${()=>setOpen(false)} style=${{padding:'10px 12px',fontWeight:800,fontSize:'.82rem'}}>${label}</a>`)}<a href="/cv/" style=${{padding:'10px 12px',fontWeight:800,fontSize:'.82rem'}}>${t.nav.cv}</a></div>
        </${M.div}>`:null}
      </${AnimatePresence}>
    </header>`;
}

function Ambient(){return html`<div className="ambient" aria-hidden="true"><span className="orb one"></span><span className="orb two"></span><span className="orb three"></span></div>`}

function Footer({lang,profile}){
  const accentClass=profile?`cv-theme-${profile}`:'';
  return html`<footer className=${`footer-wrap ${accentClass}`}><div className="footer-card">
    <div>© 2026 Rubén Enrique Cañizares Miranda · ${lang==='es'?'Todos los derechos reservados.':'All rights reserved.'}</div>
    <div className="footer-social">
      <a href="https://github.com/recm0708" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><${Icon} name="fa-brands fa-github" /></a>
      <a href="https://www.linkedin.com/in/recm0708" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><${Icon} name="fa-brands fa-linkedin-in" /></a>
      <a href="mailto:ruben.canizares@outlook.com" aria-label="Email"><${Icon} name="fa-regular fa-envelope" /></a>
    </div>
    <a href="#top">${labels[lang].top} ↑</a>
  </div></footer>`;
}

const reveal={initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.16},transition:{duration:.6,ease:[.22,1,.36,1]}};

function SectionHead({label,title,intro}){return html`<div className="section-head"><div className="section-label">${label}</div><div><h2 className="display">${title}</h2>${intro?html`<p>${intro}</p>`:null}</div></div>`}

function Home({lang}){
  const t=site[lang];
  const marquee=['CCNA','Networking','Infraestructura','Linux','Docker','Electricidad','Automatización','Python','Virtualización','Soporte técnico','Power BI','GitHub'];
  return html`<main className="home">
    <section className="hero"><div className="page-shell hero-grid">
      <${M.div} initial=${{opacity:0,x:-32}} animate=${{opacity:1,x:0}} transition=${{duration:.7}}>
        <p className="eyebrow">${t.hero.eyebrow}</p>
        <h1 className="display">${t.hero.titleA}<br/><span className="accent">${t.hero.titleB}</span></h1>
        <p className="hero-lead">${t.hero.lead}</p>
        <div className="cta-row"><a className="btn primary" href="#historia">${t.hero.cta1} <${Icon} name="fa-solid fa-arrow-down" /></a><a className="btn" href="/cv/">${t.hero.cta2} <${Icon} name="fa-solid fa-arrow-up-right-from-square" /></a><a className="btn" href="#contacto">${t.hero.cta3}</a></div>
        <div className="scroll-cue"><span><i></i></span>${t.hero.scroll}</div>
      </${M.div}>
      <${M.div} className="hero-visual" initial=${{opacity:0,scale:.96}} animate=${{opacity:1,scale:1}} transition=${{duration:.8,delay:.12}}>
        <div className="portrait-wrap"><img src="https://avatars.githubusercontent.com/u/220997176?v=4" alt="Rubén Cañizares" /></div>
        <${M.div} className="float-card one" animate=${{y:[0,-8,0]}} transition=${{repeat:Infinity,duration:4,ease:'easeInOut'}}><strong>${t.hero.status[0]}</strong><span className="muted">UTP · 2026</span></${M.div}>
        <${M.div} className="float-card two" animate=${{y:[0,8,0]}} transition=${{repeat:Infinity,duration:4.8,ease:'easeInOut'}}><strong>${t.hero.status[1]}</strong><span style=${{display:'flex',gap:'7px',alignItems:'center'}}><i className="pulse-dot"></i><span className="muted">Open to work</span></span></${M.div}>
        <${M.div} className="float-card three" animate=${{x:[0,6,0]}} transition=${{repeat:Infinity,duration:5,ease:'easeInOut'}}><strong>${t.hero.status[2]}</strong><span className="muted">Panamá</span></${M.div}>
      </${M.div}>
    </div></section>
    <div className="marquee"><div className="marquee-track">${[...marquee,...marquee].map((x,i)=>html`<span key=${i}><b>✦</b> ${x}</span>`)}</div></div>

    <section className="section" id="historia"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.story.label} title=${t.story.title} intro=${t.story.intro}/><div className="story-grid">${t.story.cards.map((c,i)=>html`<${M.article} className=${`story-card ${i===0?'big':''}`} whileHover=${{y:-5}}><div className="icon-blob" style=${{marginBottom:'26px'}}><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p>${i===0?html`<div className="mini-meta"><span className="chip"><${Icon} name="fa-solid fa-location-dot"/> Panamá</span><span className="chip"><${Icon} name="fa-solid fa-heart"/> ${lang==='es'?'Hijo único':'Only child'}</span></div>`:null}</${M.article}>`)}</div></${M.div}></section>

    <section className="section" id="recorrido"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.journey.label} title=${t.journey.title} intro=${t.journey.intro}/><div className="timeline">${t.journey.items.map(x=>html`<div className="timeline-item"><div className="timeline-year">${x[0]}</div><span className="timeline-dot"></span><div className="timeline-body"><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`)}</div></${M.div}></section>

    <section className="section" id="perfiles"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.areas.label} title=${t.areas.title} intro=${t.areas.intro}/><div className="profile-grid">${t.areas.cards.map(c=>html`<${M.a} href=${c.href} className=${`profile-card ${c.kind}`} whileHover=${{y:-8,rotate:.3}}><span className="go"><${Icon} name="fa-solid fa-arrow-up-right-from-square"/></span><div className="icon-blob"><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p></${M.a}>`)}</div></${M.div}></section>

    <section className="section" id="proyectos"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.projects.label} title=${t.projects.title} intro=${t.projects.intro}/><div className="project-grid">${t.projects.items.map(p=>html`<${M.article} className="project-card" whileHover=${{y:-6}}><small>${p.kicker}</small><h3>${p.title}</h3><p>${p.text}</p><div className="project-tags">${p.tags.map(tag=>html`<span>${tag}</span>`)}</div></${M.article}>`)}</div></${M.div}></section>

    <section className="section" id="metas"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.goals.label} title=${t.goals.title}/><div className="goals-wrap"><div className="goal-panel"><h3>${t.goals.lead}</h3><p>${lang==='es'?'Quiero construir una carrera donde la estabilidad y el aprendizaje puedan crecer juntos.':'I want to build a career where stability and learning can grow together.'}</p></div><div className="goal-list">${t.goals.items.map(g=>html`<div className="goal-item"><strong>${g[0]}</strong><span>${g[1]}</span></div>`)}</div></div></${M.div}></section>

    <section className="section" id="vida"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.life.label} title=${t.life.title} intro=${t.life.intro}/><div className="life-grid">${t.life.items.map(c=>html`<${M.article} className="life-card" whileHover=${{y:-6}}><div className="icon-blob"><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p></${M.article}>`)}</div></${M.div}></section>

    <section className="section"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.volunteer.label} title=${t.volunteer.title}/><div className="volunteer">${t.volunteer.items.map((v,i)=>html`<article className="soft-card"><span className="eyebrow">${i===0?'2019':'2020'}</span><h3>${v[0]}</h3><p>${v[1]}</p></article>`)}</div></${M.div}></section>

    <section className="section" id="redes-sociales"><${M.div} className="page-shell" ...${reveal}><${SectionHead} label=${t.socials.label} title=${t.socials.title} intro=${t.socials.intro}/><div className="social-sections">${socialGroups.map(g=>html`<section className="social-group"><h3>${g[lang]}</h3><div className="social-grid">${g.items.map(s=>html`<a className="social-link" href=${s[2]} target="_blank" rel="noopener noreferrer"><span className="social-icon"><${Icon} name=${s[1]}/></span>${s[0]}</a>`)}</div></section>`)}</div></${M.div}></section>

    <section className="section" id="contacto"><${M.div} className="page-shell" ...${reveal}><div className="contact-card"><div><p className="eyebrow">${t.contact.label}</p><h2 className="display">${t.contact.title}</h2><p>${t.contact.text}</p></div><div className="contact-actions"><a className="btn primary" href="mailto:ruben.canizares@outlook.com"><${Icon} name="fa-regular fa-envelope"/> ${t.contact.mail}</a><a className="btn" href="https://www.linkedin.com/in/recm0708" target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-linkedin-in"/> ${t.contact.linkedin}</a><a className="btn" href="https://github.com/recm0708" target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-github"/> ${t.contact.github}</a></div></div></${M.div}></section>
  </main>`;
}

function Hub({lang}){
  const l=labels[lang];const home=site[lang];
  const cards=[home.areas.cards[0],home.areas.cards[1],home.areas.cards[2]];
  return html`<main className="hub"><div className="page-shell"><${M.div} className="hub-head" initial=${{opacity:0,y:20}} animate=${{opacity:1,y:0}}><p className="eyebrow">${l.cv}</p><h1 className="display">${l.selectorTitle}</h1><p className="hero-lead">${l.selectorIntro}</p></${M.div}><div className="selector-grid">${cards.map(c=>html`<${M.a} href=${c.href} className=${`selector-card ${c.kind}`} whileHover=${{y:-9}}><div className="selector-art"><${Icon} name=${c.icon}/></div><div className="selector-copy"><p className="eyebrow">${c.kind==='networks'?'Networking':c.kind==='electrical'?(lang==='es'?'Electricidad':'Electrical'):(lang==='es'?'Perfil transversal':'Cross-functional')}</p><h2>${c.title}</h2><p>${c.text}</p></div><div className="open"><span>${l.open}</span><${Icon} name="fa-solid fa-arrow-right"/></div></${M.a}>`)}</div></div></main>`;
}

function CVPage({profile,lang}){
  const root=cvProfiles[profile],c=root[lang],l=labels[lang];
  const profileClass=`cv-theme-${root.theme}`;
  return html`<main className=${`cv-page ${profileClass}`}><div className="cv-wrap">
    <${M.section} className="cv-cover" initial=${{opacity:0,y:24}} animate=${{opacity:1,y:0}} transition=${{duration:.65}}>
      <div className="cv-photo"><div className="initials">RC</div><small>${l.photo}</small></div>
      <div className="cv-intro"><p className="eyebrow">${l.cv}</p><h1 className="display">Rubén Enrique Cañizares Miranda</h1><div className="cv-role">${c.role}</div><p className="cv-summary">${c.summary}</p><div className="contact-chips"><span><${Icon} name="fa-solid fa-location-dot"/> ${root.contact.location}</span><a href=${`tel:${root.contact.phone.replace(/\s/g,'')}`}><${Icon} name="fa-solid fa-phone"/> ${root.contact.phone}</a><a href=${`mailto:${root.contact.email}`}><${Icon} name="fa-regular fa-envelope"/> ${root.contact.email}</a><a href=${root.contact.linkedin} target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-linkedin-in"/> LinkedIn</a>${profile==='networks'||profile==='integral'?html`<a href=${root.contact.github} target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-github"/> GitHub</a>`:null}</div></div>
    </${M.section}>
    <nav className="cv-quicknav"><a href="#perfil">${l.profile}</a><a href="#experiencia">${l.experience}</a><a href="#formacion">${l.education}</a><a href="#credenciales">${l.credentials}</a><a href="#conocimientos">${l.knowledge}</a></nav>
    <div className="cv-layout">
      <aside className="cv-side">
        <${M.section} className="cv-card" ...${reveal}><h2><span>01.</span> ${l.data}</h2><div className="data-list">${c.data.map(d=>html`<div className="data-row"><small>${d[0]}</small><strong>${d[1]}</strong></div>`)}</div></${M.section}>
        <${M.section} className="cv-card" ...${reveal}><h2><span>02.</span> ${l.skills}</h2><div className="skill-list">${c.skills.map(s=>html`<span className="skill">${s}</span>`)}</div></${M.section}>
        <${M.section} className="cv-card" ...${reveal}><h2><span>03.</span> ${l.tools}</h2>${c.tools.map(t=>html`<div className="tool-block"><h3>${t[0]}</h3><p>${t[1]}</p></div>`)}</${M.section}>
        <${M.section} className="cv-card" ...${reveal}><h2><span>04.</span> ${l.languages}</h2><div className="data-list"><div className="data-row"><strong>${l.spanish}</strong></div><div className="data-row"><strong>${l.english}</strong></div></div></${M.section}>
      </aside>
      <div className="cv-main">
        <${M.section} className="cv-card cv-profile" id="perfil" ...${reveal}><h2><span>01.</span> ${l.profile}</h2>${c.profile.map(p=>html`<p>${p}</p>`)}</${M.section}>
        <${M.section} className="cv-card" id="experiencia" ...${reveal}><h2><span>02.</span> ${l.experience}</h2><div className="experience-list">${c.experience.map(e=>html`<article className="experience-item"><div className="experience-date">${e[0]}</div><div><h3>${e[1]}</h3><h4>${e[2]}</h4><p>${e[3]}</p></div></article>`)}</div></${M.section}>
        <${M.section} className="cv-card" id="formacion" ...${reveal}><h2><span>03.</span> ${l.education}</h2><div className="education-list">${c.education.map(e=>html`<div className="education-item"><div className="education-year">${e[0]}</div><div><h3>${e[1]}</h3><p>${e[2]}</p></div></div>`)}</div></${M.section}>
        <${M.section} className="cv-card" id="credenciales" ...${reveal}><h2><span>04.</span> ${l.credentials}</h2><div className="credential-grid">${c.credentials.map(x=>html`<article className="credential"><div className="credential-head"><span className="credential-icon"><${Icon} name="fa-solid fa-award"/></span><div><strong>${x[0]}</strong><small>${x[1]}</small></div></div><div className="credential-state">${x[2]}</div></article>`)}</div>${profile==='networks'?html`<a className="btn" style=${{marginTop:'16px'}} href="https://www.credly.com/users/recm0708/badges/credly" target="_blank" rel="noopener noreferrer"><${Icon} name="fa-solid fa-certificate"/> Credly ↗</a>`:null}</${M.section}>
        <${M.section} className="cv-card" id="conocimientos" ...${reveal}><h2><span>05.</span> ${l.knowledge}</h2><div className="knowledge">${c.knowledge.map(k=>html`<span>${k}</span>`)}</div></${M.section}>
        <${M.section} className="cv-card" ...${reveal}><h2><span>06.</span> ${l.references}</h2><p className="muted">${l.referenceText}</p></${M.section}>
      </div>
    </div>
  </div></main>`;
}

function ErrorPage({lang}){const l=labels[lang];return html`<main className="error-page"><${M.div} className="error-card" initial=${{opacity:0,scale:.96}} animate=${{opacity:1,scale:1}}><div className="error-num">404</div><p className="eyebrow">Error 404</p><h1>${l.notFound}</h1><p>${l.notFoundText}</p><div className="error-actions"><a className="btn primary" href="/">${l.home}</a><a className="btn" href="/cv/">${l.cv}</a></div></${M.div}></main>`}

function App(){
  const route=useMemo(routeInfo,[]);
  const savedLang=localStorage.getItem(LANG_KEY);
  const initialLang=route.lang||((savedLang==='en'||savedLang==='es')?savedLang:'es');
  const [lang,setLangState]=useState(initialLang);
  const [theme,setThemeState]=useState(()=>localStorage.getItem(THEME_KEY)||'dark');
  const progress=useScrollProgress();
  const setLang=v=>{setLangState(v);localStorage.setItem(LANG_KEY,v)};
  const setTheme=v=>{setThemeState(v);localStorage.setItem(THEME_KEY,v)};
  useEffect(()=>{document.documentElement.dataset.theme=theme;document.documentElement.lang=lang;const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',theme==='dark'?'#111216':'#f6f3ee')},[theme,lang]);
  const profile=route.profile?cvProfiles[route.profile].theme:null;
  return html`<>
    <div className="progress" style=${{transform:`scaleX(${progress})`}}></div><${Ambient}/>
    <${Header} page=${route.page} lang=${lang} setLang=${setLang} theme=${theme} setTheme=${setTheme} profile=${route.profile}/>
    ${route.page==='home'?html`<${Home} lang=${lang}/>`:route.page==='hub'?html`<${Hub} lang=${lang}/>`:route.page==='cv'?html`<${CVPage} profile=${route.profile} lang=${route.lang}/>`:html`<${ErrorPage} lang=${lang}/>`}
    <${Footer} lang=${route.lang||lang} profile=${profile}/>
  </>`;
}

createRoot(document.getElementById('app')).render(html`<${App}/>`);
