(() => {
  'use strict';

  /* ==========================================================
     CONTENIDO PERSONAL DE LA PORTADA
     Esta capa traduce únicamente la sección «Más allá de lo técnico».
     Se mantiene separada de home.js para que la biografía personal
     pueda evolucionar sin mezclarla con la lógica general del sitio.
     ========================================================== */

  const textos = {
    es: {
      kicker: 'MÁS ALLÁ DE LO TÉCNICO',
      title: 'También soy lo que pasa cuando cierro la terminal.',
      lead: 'Mi carrera ocupa una parte importante de mi vida, pero no la resume completa. Detrás de las redes, los tableros, los servidores y los proyectos hay una historia familiar, curiosidad, gustos, voluntariado y metas que también explican cómo pienso y por qué sigo aprendiendo.',
      story1: 'Nací y crecí en Panamá y actualmente vivo en Panamá Oeste, Arraiján. Soy hijo único —sí, también el consentido de la familia— y disfruto mucho compartir tiempo con los míos. Mi familia ha estado presente en decisiones importantes de mi camino, incluso en el origen de mi primera vocación técnica.',
      story2: 'Me considero una persona curiosa, detallista, perseverante, responsable y bastante directa. Cuando algo no funciona, me cuesta dejarlo simplemente en “no sirve”: normalmente quiero entender qué pasó, probar otra ruta y aprender algo del proceso. Esa forma de ser termina apareciendo tanto en mis proyectos técnicos como en la manera en que organizo mis metas personales.',
      locationLabel: 'Base',
      locationText: 'Panamá Oeste · Arraiján, Panamá',
      statusLabel: 'En este momento',
      statusText: 'En búsqueda de una oportunidad laboral formal y estable',
      familyLabel: 'Familia',
      familyText: 'Hijo único, muy cercano a mi familia',
      card1Title: 'Cuando tengo tiempo libre',
      card1Text: 'Alterno entre tareas universitarias, cursos del INADEH, tiempo con mi familia, cine, series y películas. A veces descansar significa realmente descansar; otras veces significa abrir una VM, probar una configuración o empezar a investigar algo que me dio curiosidad.',
      card2Title: 'Tecnología como afición',
      card2Text: 'La tecnología no se queda en el aula. Me gusta experimentar con computadoras, redes domésticas, servidores, virtualización, electrónica, reparación de equipos, programación y proyectos que me permitan desmontar un problema y entenderlo por dentro.',
      card3Title: 'Lo que suena de fondo',
      card3Text: 'Mi música cambia bastante según el momento: salsa, merengue, clásicos de los años 80, música en inglés, música católica y alabanzas. Prefiero una biblioteca variada antes que encerrarme en un solo género.',
      card4Title: 'Cine, series y pantalla',
      card4Text: 'Disfruto ir al cine y ver películas o series en casa. También consumo contenido en YouTube relacionado con tecnología, aprendizaje y entretenimiento. Mi forma de desconectarme suele combinar una buena historia con alguna curiosidad nueva que termine investigando después.',
      card5Title: 'Viajes que todavía faltan',
      card5Text: 'Todavía no he tenido la oportunidad de viajar fuera de Panamá, pero sí está entre las experiencias que quiero vivir. Me interesa conocer otros países, culturas y formas de hacer las cosas, abrir nuevos caminos y acumular experiencias que no se aprenden detrás de una pantalla.',
      card6Title: 'De dónde nació mi vocación',
      card6Text: 'Mi papá me animó a acercarme al mundo eléctrico porque él realizaba trabajos de electricidad y aquello despertó mi interés. Más adelante, un primo me enseñó varias cosas de computación y ese segundo mundo también se quedó conmigo. Con el tiempo terminé uniendo ambos caminos: energía, automatización, computación y redes.',
      goalsTitle: 'Lo que estoy construyendo a futuro',
      goalsText: 'En los próximos años quiero completar mi formación en Redes Informáticas, fortalecer mi ruta de certificaciones —con CCNA como una referencia importante— y consolidarme en un empleo estable relacionado con redes, infraestructura, automatización, soporte avanzado o entornos de centros de datos. A largo plazo quiero tener un perfil capaz de integrar disciplinas, asumir proyectos de mayor responsabilidad y seguir aprendiendo sin quedar atado a una sola tecnología.',
      valuesTitle: 'Lo que intento mantener en el camino',
      valuesText: 'Responsabilidad, honestidad, disciplina, curiosidad, estabilidad, respeto por el trabajo bien hecho, cercanía con mi familia y disposición para seguir aprendiendo. No me interesa acumular tecnologías por nombre; prefiero entender para qué sirven, cómo se conectan y qué problema real resuelven.',
      volunteerTitle: 'Experiencias de voluntariado',
      volunteer2019: 'Voluntario en JMJ Panamá 2019, una experiencia de servicio, organización y convivencia que forma parte de mi historia personal.',
      volunteer2020: 'Voluntario de Medios Digitales en ENRJ 2020, colaborando desde el área de comunicación y contenidos digitales.'
    },
    en: {
      kicker: 'BEYOND THE TECHNICAL SIDE',
      title: 'I am also what happens when I close the terminal.',
      lead: 'My career is an important part of my life, but it does not define all of it. Behind the networks, electrical panels, servers and projects there is a family story, curiosity, personal interests, volunteering and goals that also explain how I think and why I keep learning.',
      story1: 'I was born and raised in Panama and I currently live in Arraiján, Panama Oeste. I am an only child —and yes, the spoiled one in the family— and I genuinely enjoy spending time with the people closest to me. My family has been present in important decisions throughout my path, including the origin of my first technical vocation.',
      story2: 'I see myself as curious, detail-oriented, persistent, responsible and fairly direct. When something does not work, I rarely feel satisfied with simply saying “it is broken”: I usually want to understand what happened, try another route and learn something from the process. That mindset shows up both in my technical projects and in the way I organize my personal goals.',
      locationLabel: 'Based in',
      locationText: 'Arraiján · Panama Oeste, Panama',
      statusLabel: 'Right now',
      statusText: 'Looking for a formal and stable professional opportunity',
      familyLabel: 'Family',
      familyText: 'Only child, very close to my family',
      card1Title: 'When I have free time',
      card1Text: 'I alternate between university work, INADEH courses, time with my family, going to the movies, series and films. Sometimes resting actually means resting; other times it means opening a VM, testing a configuration or researching something that caught my attention.',
      card2Title: 'Technology as a hobby',
      card2Text: 'Technology does not stay in the classroom. I enjoy experimenting with computers, home networks, servers, virtualization, electronics, equipment repair, programming and projects that let me break a problem down and understand how it works.',
      card3Title: 'What plays in the background',
      card3Text: 'My music changes a lot depending on the moment: salsa, merengue, 1980s classics, music in English, Catholic music and worship songs. I prefer a varied library rather than staying inside a single genre.',
      card4Title: 'Movies, series and screens',
      card4Text: 'I enjoy going to the cinema and watching films or series at home. I also spend time on YouTube with technology, learning and entertainment content. My way of switching off often combines a good story with some new curiosity I end up researching later.',
      card5Title: 'Trips still ahead',
      card5Text: 'I have not had the opportunity to travel outside Panama yet, but it is one of the experiences I want to pursue. I would like to discover other countries, cultures and ways of doing things, open new paths and collect experiences that cannot be learned behind a screen.',
      card6Title: 'Where my vocation began',
      card6Text: 'My father encouraged me to explore electrical work because he used to take on electrical jobs, and that caught my attention. Later, a cousin taught me several things about computers and that second world stayed with me too. Over time, both paths came together: power, automation, computing and networks.',
      goalsTitle: 'What I am building toward',
      goalsText: 'Over the next few years I want to complete my Computer Networks degree, strengthen my certification path —with CCNA as an important reference— and establish myself in a stable role related to networking, infrastructure, automation, advanced support or data-center environments. In the long term I want a profile capable of integrating disciplines, taking on greater responsibility and continuing to learn without being tied to a single technology.',
      valuesTitle: 'What I try to keep along the way',
      valuesText: 'Responsibility, honesty, discipline, curiosity, stability, respect for work done well, closeness to my family and a willingness to keep learning. I am not interested in collecting technology names; I prefer understanding what they are for, how they connect and which real problem they solve.',
      volunteerTitle: 'Volunteer experiences',
      volunteer2019: 'Volunteer at World Youth Day Panama 2019, an experience of service, organization and community that remains part of my personal story.',
      volunteer2020: 'Digital Media volunteer at ENRJ 2020, collaborating with communication and digital-content activities.'
    }
  };

  function idiomaActual() {
    const guardado = localStorage.getItem('portfolio-language');
    if (guardado === 'en' || guardado === 'es') return guardado;
    return document.documentElement.lang?.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function aplicarTextosPersonales() {
    const idioma = idiomaActual();
    const diccionario = textos[idioma] || textos.es;

    document.querySelectorAll('[data-personal-key]').forEach((elemento) => {
      const clave = elemento.dataset.personalKey;
      if (diccionario[clave]) elemento.textContent = diccionario[clave];
    });
  }

  /* Reacciona tanto al cambio de lang como al botón ES / EN de la portada. */
  new MutationObserver(aplicarTextosPersonales).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });

  document.addEventListener('click', (evento) => {
    if (evento.target.closest('[data-lang-toggle]')) {
      window.setTimeout(aplicarTextosPersonales, 0);
    }
  });

  window.addEventListener('storage', aplicarTextosPersonales);
  aplicarTextosPersonales();
})();
