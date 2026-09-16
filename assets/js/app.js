import React, {useEffect, useMemo, useState} from 'https://esm.sh/react@18.3.1';
import {createRoot} from 'https://esm.sh/react-dom@18.3.1/client?deps=react@18.3.1';
import htm from 'https://esm.sh/htm@3.1.1';
import {site, socialGroups, cvProfiles, labels} from './content.js';

const html = htm.bind(React.createElement);
const THEME_KEY = 'recm0708-theme-v5';
const LANG_KEY = 'recm0708-lang-v5';

function routeInfo(){
  const p = window.location.pathname.replace(/\/+$/,'/') || '/';
  if(p === '/') return {page:'home'};
  if(p === '/cv/' || p === '/cv') return {page:'hub'};
  if(p === '/cv/es/redes/') return {page:'cv',profile:'networks',lang:'es'};
  if(p === '/cv/en/networks/') return {page:'cv',profile:'networks',lang:'en'};
  if(p === '/cv/es/electrica/') return {page:'cv',profile:'electrical',lang:'es'};
  if(p === '/cv/en/electrical/') return {page:'cv',profile:'electrical',lang:'en'};
  if(p === '/cv/es/integral/') return {page:'cv',profile:'integral',lang:'es'};
  if(p === '/cv/en/comprehensive/') return {page:'cv',profile:'integral',lang:'en'};
  return {page:'404'};
}

function Icon({name}){
  return html`<i className=${name} aria-hidden="true"></i>`;
}

function useScrollProgress(){
  const [value,setValue] = useState(0);
  useEffect(()=>{
    const update = ()=>{
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setValue(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    return ()=>{
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  },[]);
  return value;
}

function Header({page,lang,setLang,theme,setTheme,profile}){
  const [open,setOpen] = useState(false);
  const t = site[lang];
  const isHome = page === 'home';
  const isCv = page === 'cv';
  const toggleLang = ()=>{
    const next = lang === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_KEY,next);
    if(isCv && profile){
      window.location.href = cvProfiles[profile].routes[next];
      return;
    }
    setLang(next);
  };
  const nav = isHome ? [
    ['#historia',t.nav.story],
    ['#recorrido',t.nav.journey],
    ['#perfiles',t.nav.areas],
    ['#proyectos',t.nav.projects],
    ['#vida',t.nav.life],
    ['#redes-sociales',t.nav.socials]
  ] : [];

  return html`
    <header className="floating-header">
      <div className="navbar">
        <a className="brand" href="/">
          <span className="brand-mark">RC</span>
          <span className="brand-copy"><strong>Rubén Cañizares</strong><small>recm0708</small></span>
        </a>
        <nav className="nav-links" aria-label=${lang==='es'?'Navegación principal':'Main navigation'}>
          ${isHome ? nav.map(([href,label])=>html`<a href=${href}>${label}</a>`) : null}
          ${page==='cv' ? html`<a className="active" href="/cv/">${labels[lang].cv}</a>` : null}
          ${page==='hub' ? html`<a href="/">${lang==='es'?'Blog personal':'Personal blog'}</a>` : null}
          ${page==='404' ? html`<a href="/">${labels[lang].home}</a>` : null}
        </nav>
        <div className="nav-actions">
          ${isHome ? html`<a className="pill-btn" href="/cv/">${t.nav.cv}</a>` : null}
          ${isCv ? html`<a className="pill-btn" href="/cv/">${labels[lang].back}</a>` : null}
          <button className="pill-btn" type="button" onClick=${toggleLang}>${lang.toUpperCase()} / ${lang==='es'?'EN':'ES'}</button>
          <button className="icon-btn" type="button" onClick=${()=>setTheme(theme==='dark'?'light':'dark')} aria-label=${lang==='es'?'Cambiar tema':'Change theme'}>
            <${Icon} name=${theme==='dark'?'fa-solid fa-sun':'fa-solid fa-moon'} />
          </button>
          ${isHome ? html`<button className="icon-btn menu-btn" type="button" onClick=${()=>setOpen(!open)} aria-expanded=${open} aria-label="Menu"><${Icon} name=${open?'fa-solid fa-xmark':'fa-solid fa-bars'} /></button>` : null}
        </div>
      </div>
      ${open && isHome ? html`
        <div style=${{padding:'0 14px 14px'}}>
          <div className="soft-card" style=${{padding:'10px',display:'grid',gap:'4px'}}>
            ${nav.map(([href,label])=>html`<a href=${href} onClick=${()=>setOpen(false)} style=${{padding:'10px 12px',fontWeight:800,fontSize:'.82rem'}}>${label}</a>`)}
            <a href="/cv/" style=${{padding:'10px 12px',fontWeight:800,fontSize:'.82rem'}}>${t.nav.cv}</a>
          </div>
        </div>` : null}
    </header>`;
}

function Ambient(){
  return html`<div className="ambient" aria-hidden="true"><span className="orb one"></span><span className="orb two"></span><span className="orb three"></span></div>`;
}

function Footer({lang,profile}){
  const accentClass = profile ? `cv-theme-${profile}` : '';
  return html`
    <footer className=${`footer-wrap ${accentClass}`}>
      <div className="footer-card">
        <div>© 2026 Rubén Enrique Cañizares Miranda · ${lang==='es'?'Todos los derechos reservados.':'All rights reserved.'}</div>
        <div className="footer-social">
          <a href="https://github.com/recm0708" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><${Icon} name="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/recm0708" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><${Icon} name="fa-brands fa-linkedin-in" /></a>
          <a href="mailto:ruben.canizares@outlook.com" aria-label="Email"><${Icon} name="fa-regular fa-envelope" /></a>
        </div>
        <a href="#top">${labels[lang].top} ↑</a>
      </div>
    </footer>`;
}

function SectionHead({label,title,intro}){
  return html`<div className="section-head"><div className="section-label">${label}</div><div><h2 className="display">${title}</h2>${intro ? html`<p>${intro}</p>` : null}</div></div>`;
}

function Home({lang}){
  const t = site[lang];
  const marquee = ['CCNA','Networking','Infraestructura','Linux','Docker','Electricidad','Automatización','Python','Virtualización','Soporte técnico','Power BI','GitHub'];
  return html`
    <main className="home">
      <section className="hero">
        <div className="page-shell hero-grid">
          <div>
            <p className="eyebrow">${t.hero.eyebrow}</p>
            <h1 className="display">${t.hero.titleA}<br/><span className="accent">${t.hero.titleB}</span></h1>
            <p className="hero-lead">${t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn primary" href="#historia">${t.hero.cta1} <${Icon} name="fa-solid fa-arrow-down" /></a>
              <a className="btn" href="/cv/">${t.hero.cta2} <${Icon} name="fa-solid fa-arrow-up-right-from-square" /></a>
              <a className="btn" href="#contacto">${t.hero.cta3}</a>
            </div>
            <div className="scroll-cue"><span><i></i></span>${t.hero.scroll}</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-wrap"><img src="https://avatars.githubusercontent.com/u/220997176?v=4" alt="Rubén Cañizares" /></div>
            <div className="float-card one"><strong>${t.hero.status[0]}</strong><span className="muted">UTP · 2026</span></div>
            <div className="float-card two"><strong>${t.hero.status[1]}</strong><span style=${{display:'flex',gap:'7px',alignItems:'center'}}><i className="pulse-dot"></i><span className="muted">Open to work</span></span></div>
            <div className="float-card three"><strong>${t.hero.status[2]}</strong><span className="muted">Panamá</span></div>
          </div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track">${[...marquee,...marquee].map((x,i)=>html`<span key=${i}><b>✦</b> ${x}</span>`)}</div></div>

      <section className="section" id="historia"><div className="page-shell reveal-block"><${SectionHead} label=${t.story.label} title=${t.story.title} intro=${t.story.intro} /><div className="story-grid">${t.story.cards.map((c,i)=>html`<article className=${`story-card ${i===0?'big':''}`}><div className="icon-blob" style=${{marginBottom:'26px'}}><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p>${i===0?html`<div className="mini-meta"><span className="chip"><${Icon} name="fa-solid fa-location-dot"/> Panamá</span><span className="chip"><${Icon} name="fa-solid fa-heart"/> ${lang==='es'?'Hijo único':'Only child'}</span></div>`:null}</article>`)}</div></div></section>

      <section className="section" id="recorrido"><div className="page-shell reveal-block"><${SectionHead} label=${t.journey.label} title=${t.journey.title} intro=${t.journey.intro}/><div className="timeline">${t.journey.items.map(x=>html`<div className="timeline-item"><div className="timeline-year">${x[0]}</div><span className="timeline-dot"></span><div className="timeline-body"><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`)}</div></div></section>

      <section className="section" id="perfiles"><div className="page-shell reveal-block"><${SectionHead} label=${t.areas.label} title=${t.areas.title} intro=${t.areas.intro}/><div className="profile-grid">${t.areas.cards.map(c=>html`<a href=${c.href} className=${`profile-card ${c.kind}`}><span className="go"><${Icon} name="fa-solid fa-arrow-up-right-from-square"/></span><div className="icon-blob"><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p></a>`)}</div></div></section>

      <section className="section" id="proyectos"><div className="page-shell reveal-block"><${SectionHead} label=${t.projects.label} title=${t.projects.title} intro=${t.projects.intro}/><div className="project-grid">${t.projects.items.map(p=>html`<article className="project-card"><small>${p.kicker}</small><h3>${p.title}</h3><p>${p.text}</p><div className="project-tags">${p.tags.map(tag=>html`<span>${tag}</span>`)}</div></article>`)}</div></div></section>

      <section className="section" id="metas"><div className="page-shell reveal-block"><${SectionHead} label=${t.goals.label} title=${t.goals.title}/><div className="goals-wrap"><div className="goal-panel"><h3>${t.goals.lead}</h3><p>${lang==='es'?'Quiero construir una carrera donde la estabilidad y el aprendizaje puedan crecer juntos.':'I want to build a career where stability and learning can grow together.'}</p></div><div className="goal-list">${t.goals.items.map(g=>html`<div className="goal-item"><strong>${g[0]}</strong><span>${g[1]}</span></div>`)}</div></div></div></section>

      <section className="section" id="vida"><div className="page-shell reveal-block"><${SectionHead} label=${t.life.label} title=${t.life.title} intro=${t.life.intro}/><div className="life-grid">${t.life.items.map(c=>html`<article className="life-card"><div className="icon-blob"><${Icon} name=${c.icon}/></div><h3>${c.title}</h3><p>${c.text}</p></article>`)}</div></div></section>

      <section className="section"><div className="page-shell reveal-block"><${SectionHead} label=${t.volunteer.label} title=${t.volunteer.title}/><div className="volunteer">${t.volunteer.items.map((v,i)=>html`<article className="soft-card"><span className="eyebrow">${i===0?'2019':'2020'}</span><h3>${v[0]}</h3><p>${v[1]}</p></article>`)}</div></div></section>

      <section className="section" id="redes-sociales"><div className="page-shell reveal-block"><${SectionHead} label=${t.socials.label} title=${t.socials.title} intro=${t.socials.intro}/><div className="social-sections">${socialGroups.map(g=>html`<section className="social-group"><h3>${g[lang]}</h3><div className="social-grid">${g.items.map(s=>html`<a className="social-link" href=${s[2]} target="_blank" rel="noopener noreferrer"><span className="social-icon"><${Icon} name=${s[1]}/></span>${s[0]}</a>`)}</div></section>`)}</div></div></section>

      <section className="section" id="contacto"><div className="page-shell reveal-block"><div className="contact-card"><div><p className="eyebrow">${t.contact.label}</p><h2 className="display">${t.contact.title}</h2><p>${t.contact.text}</p></div><div className="contact-actions"><a className="btn primary" href="mailto:ruben.canizares@outlook.com"><${Icon} name="fa-regular fa-envelope"/> ${t.contact.mail}</a><a className="btn" href="https://www.linkedin.com/in/recm0708" target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-linkedin-in"/> ${t.contact.linkedin}</a><a className="btn" href="https://github.com/recm0708" target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-github"/> ${t.contact.github}</a></div></div></div></section>
    </main>`;
}

function Hub({lang}){
  const l = labels[lang];
  const order = ['electrical','networks','integral'];
  return html`
    <main className="hub">
      <div className="page-shell">
        <div className="hub-head"><p className="eyebrow">${l.cv}</p><h1 className="display">${l.selectorTitle}</h1><p className="muted">${l.selectorIntro}</p></div>
        <div className="selector-grid">
          ${order.map(key=>{
            const p = cvProfiles[key];
            const d = p[lang];
            return html`<a href=${p.routes[lang]} className=${`selector-card ${p.theme}`}><div className="selector-art"><${Icon} name=${p.icon}/></div><p className="eyebrow">${d.role}</p><h2>${d.title}</h2><p>${d.summary}</p><span className="btn">${l.open} <${Icon} name="fa-solid fa-arrow-right"/></span></a>`;
          })}
        </div>
      </div>
    </main>`;
}

function CvPage({profile,lang}){
  const p = cvProfiles[profile];
  const d = p[lang];
  const l = labels[lang];
  return html`
    <main className=${`cv-page cv-theme-${p.theme}`}>
      <div className="page-shell">
        <article className="cv-sheet">
          <section className="cv-hero">
            <div className="cv-photo"><div className="photo-placeholder"><strong>RC</strong><span>${l.photo}</span></div></div>
            <div className="cv-intro"><p className="eyebrow">${l.cv}</p><h1 className="display">Rubén Enrique Cañizares Miranda</h1><p className="cv-role">${d.title}</p><p className="cv-subrole">${d.role}</p><p className="cv-summary">${d.summary}</p><div className="cv-contact"><span><${Icon} name="fa-solid fa-location-dot"/> ${p.contact.location}</span><a href="tel:+50767936570"><${Icon} name="fa-solid fa-phone"/> ${p.contact.phone}</a><a href=${`mailto:${p.contact.email}`}><${Icon} name="fa-regular fa-envelope"/> ${p.contact.email}</a><a href=${p.contact.linkedin} target="_blank" rel="noopener noreferrer"><${Icon} name="fa-brands fa-linkedin-in"/> LinkedIn</a></div></div>
          </section>

          <div className="cv-layout">
            <aside className="cv-sidebar">
              <section className="cv-side-section"><h2>${l.data}</h2><dl className="cv-data">${d.data.map(([a,b])=>html`<div><dt>${a}</dt><dd>${b}</dd></div>`)}</dl></section>
              <section className="cv-side-section"><h2>${l.skills}</h2><div className="skill-cloud">${d.skills.map(x=>html`<span>${x}</span>`)}</div></section>
              <section className="cv-side-section"><h2>${l.tools}</h2>${d.tools.map(([a,b])=>html`<div className="tool-block"><strong>${a}</strong><p>${b}</p></div>`)}</section>
              <section className="cv-side-section"><h2>${l.languages}</h2><div className="language-card"><strong>ES</strong><span>${l.spanish}</span></div><div className="language-card"><strong>EN</strong><span>${l.english}</span></div></section>
            </aside>

            <div className="cv-main">
              <section className="cv-section"><p className="cv-number">01</p><h2>${l.profile}</h2>${d.profile.map(x=>html`<p>${x}</p>`)}</section>
              <section className="cv-section"><p className="cv-number">02</p><h2>${l.experience}</h2><div className="cv-timeline">${d.experience.map(([date,title,org,text])=>html`<article><div className="cv-date">${date}</div><div><h3>${title}</h3><h4>${org}</h4><p>${text}</p></div></article>`)}</div></section>
              <section className="cv-section"><p className="cv-number">03</p><h2>${l.education}</h2><div className="cv-timeline compact">${d.education.map(([date,title,org])=>html`<article><div className="cv-date">${date}</div><div><h3>${title}</h3><h4>${org}</h4></div></article>`)}</div></section>
              <section className="cv-section"><p className="cv-number">04</p><h2>${l.credentials}</h2><div className="credential-grid">${d.credentials.map(([name,meta,state])=>html`<article className="credential-card"><div className="credential-icon"><${Icon} name="fa-solid fa-award"/></div><strong>${name}</strong><span>${meta}</span><small>${state}</small></article>`)}</div></section>
              <section className="cv-section"><p className="cv-number">05</p><h2>${l.knowledge}</h2><div className="knowledge-cloud">${d.knowledge.map(x=>html`<span>${x}</span>`)}</div></section>
              <section className="cv-section"><p className="cv-number">06</p><h2>${l.references}</h2><p>${l.referenceText}</p></section>
            </div>
          </div>
        </article>
      </div>
    </main>`;
}

function Error404({lang}){
  const l = labels[lang];
  return html`
    <main className="error-page">
      <div className="error-card">
        <div className="error-visual"><div className="error-orbit"><span>4</span><i className="fa-regular fa-compass"></i><span>4</span></div></div>
        <p className="eyebrow">Error 404</p>
        <h1 className="display">${l.notFound}</h1>
        <p>${l.notFoundText}</p>
        <div className="cta-row" style=${{justifyContent:'center'}}><a className="btn primary" href="/">${l.home}</a><a className="btn" href="/cv/">${l.cv}</a></div>
      </div>
    </main>`;
}

function App(){
  const route = useMemo(routeInfo,[]);
  const defaultLang = route.lang || localStorage.getItem(LANG_KEY) || 'es';
  const [lang,setLang] = useState(defaultLang === 'en' ? 'en' : 'es');
  const [theme,setTheme] = useState(()=>localStorage.getItem(THEME_KEY) || 'dark');
  const progress = useScrollProgress();

  useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY,theme);
  },[theme]);

  useEffect(()=>{
    localStorage.setItem(LANG_KEY,lang);
    document.documentElement.lang = lang;
  },[lang]);

  useEffect(()=>{
    const nodes = [...document.querySelectorAll('.reveal-block')];
    if(!('IntersectionObserver' in window)){
      nodes.forEach(n=>n.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}
      });
    },{threshold:.1});
    nodes.forEach(n=>io.observe(n));
    return ()=>io.disconnect();
  },[route.page,lang]);

  const profile = route.profile || null;
  return html`
    <div className=${profile?`cv-theme-${profile}`:''}>
      <div className="progress" style=${{transform:`scaleX(${progress})`}}></div>
      <${Ambient} />
      <${Header} page=${route.page} lang=${lang} setLang=${setLang} theme=${theme} setTheme=${setTheme} profile=${profile} />
      ${route.page==='home' ? html`<${Home} lang=${lang} />` : null}
      ${route.page==='hub' ? html`<${Hub} lang=${lang} />` : null}
      ${route.page==='cv' ? html`<${CvPage} profile=${profile} lang=${lang} />` : null}
      ${route.page==='404' ? html`<${Error404} lang=${lang} />` : null}
      <${Footer} lang=${lang} profile=${profile} />
    </div>`;
}

const rootNode = document.getElementById('app');
if(rootNode){
  createRoot(rootNode).render(html`<${App} />`);
}
