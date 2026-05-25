'use strict';

// ── Datos — lenguaje adaptado para niño AACC + TEA de 10 años ───────────────
// Las citas científicas se mantienen para educadores/familias (tooltip inferior)

// ── Recomendaciones por nivel del volcán (0=sol … 4=volcán) ─────────────────
const RECOMMENDATIONS = [
  {
    badge: '☀️ Nivel 1 · Sol',
    title: '¡Estás bien! Así se siente estar regulado',
    color: '#2E7D32', bg: '#E8F5E9', accent: '#4CAF50',
    cite: 'Neihart et al. (2002); Silverman (2002)',
    nna: [
      { icon: '📝', text: 'Anota o dibuja cómo te sientes ahora — así podrás recordarlo cuando lleguen las nubes' },
      { icon: '⭐', text: 'Haz algo que te encante: tu proyecto favorito, tu libro, tu juego — eso recarga la batería' },
      { icon: '🌬️', text: 'Practica la respiración: 4 segundos entro, 4 aguanto, 4 suelto — así cuando lleguen las nubes ya sabrás hacerlo' },
      { icon: '🔍', text: '¿Qué hace que hoy estés bien? Piénsalo — ese dato es muy valioso para ti' },
    ],
    school: [
      { icon: '🧩', text: 'Ofrecer retos intelectuales nuevos y difíciles — el cerebro AACC necesita desafíos reales para mantenerse bien' },
      { icon: '📅', text: 'Anticipar los cambios de horario o rutina con suficiente tiempo de antelación' },
      { icon: '🪑', text: 'Permitir elegir dónde sentarse y cómo organizar su trabajo' },
      { icon: '🎯', text: 'Conectar los contenidos con sus intereses especiales cuando sea posible' },
    ],
    family: [
      { icon: '🔄', text: 'Mantener la rutina diaria — la predictibilidad es como un ancla de seguridad para el cerebro AACC + TEA' },
      { icon: '💛', text: 'Compartir tiempo de calidad en sus intereses especiales, sin presión de tiempo' },
      { icon: '🎉', text: 'Celebrar este momento de bienestar — sin presionar para que "siempre sea así"' },
      { icon: '🗣️', text: 'Hablar en un momento tranquilo sobre qué cosas le ayudan a sentirse bien — crear su "mapa de la calma"' },
    ],
  },
  {
    badge: '🌤️ Nivel 2 · Nubecita',
    title: 'Algo molesta — actúa pronto antes de que crezca',
    color: '#558B2F', bg: '#F9FBE7', accent: '#8BC34A',
    cite: 'Lind (2001); Daniels & Piechowski (2009)',
    nna: [
      { icon: '🔤', text: 'Pon nombre a lo que sientes: ¿es ruido? ¿aburrimiento? ¿algo injusto? Nombrar la emoción la hace más pequeña' },
      { icon: '🎧', text: 'Busca tus auriculares, tu objeto favorito o tu manta suave — los objetos de regulación funcionan de verdad' },
      { icon: '⏸️', text: 'Pide un descanso de 5 minutos — puedes decir exactamente esto: "Necesito un momento"' },
      { icon: '🤝', text: 'Dile a alguien de confianza: "Algo me está molestando" — no tienes que explicar todo' },
    ],
    school: [
      { icon: '🎧', text: 'Ofrecer auriculares anti-ruido o espacio tranquilo sin pedir explicaciones ni preguntas' },
      { icon: '🌅', text: 'Reducir estímulos del aula: bajar persianas, volumen más bajo, menos movimiento alrededor' },
      { icon: '✅', text: 'Hacer check-in breve con el adulto de confianza — una pregunta, sin presión' },
      { icon: '⏳', text: 'Dar tiempo extra en las tareas — la presión de tiempo empeora la sobrecarga' },
    ],
    family: [
      { icon: '🔇', text: 'Bajar el volumen de la casa: menos ruidos, televisión más baja, voz calmada' },
      { icon: '💬', text: 'Validar sin minimizar: "Tiene sentido que eso te moleste" — no decir "no es para tanto"' },
      { icon: '🛁', text: 'Ofrecer actividades reguladoras: agua caliente (ducha, baño), música suave, movimiento ligero' },
      { icon: '🚫', text: 'Evitar añadir más obligaciones o preguntas — menos exigencias es más ayuda en este momento' },
    ],
  },
  {
    badge: '☁️ Nivel 3 · Nubes grises',
    title: '¡Hay demasiado! Es el momento de actuar',
    color: '#F57F17', bg: '#FFFDE7', accent: '#FFC107',
    cite: 'Gere et al. (2009); Webb et al. (2016)',
    nna: [
      { icon: '🌬️', text: 'Respiración cuadrada: 4 segundos entro, 4 aguanto, 4 suelto, 4 espero — repite 4 veces seguidas' },
      { icon: '🏠', text: 'Ve a tu espacio seguro — ese lugar donde puedes ser tú sin que nadie te observe ni te pida nada' },
      { icon: '🏃', text: 'Mueve el cuerpo: salta 10 veces, camina rápido o aprieta fuerte algo blando con las manos' },
      { icon: '📢', text: 'Di en voz alta o escríbelo: "Ahora mismo hay demasiado de ___" — poner palabras ayuda al cerebro' },
    ],
    school: [
      { icon: '🚶', text: 'Llevar al niño/a a la sala de calma — sin castigo, sin explicaciones largas, sin tono de reproche' },
      { icon: '🤫', text: 'No añadir nuevas demandas — esperar a que baje la activación antes de cualquier tarea' },
      { icon: '❓', text: 'Evitar preguntas o pedir explicaciones — el cerebro activado no puede procesar palabras bien' },
      { icon: '📋', text: 'Usar apoyos visuales o tarjetas en lugar de instrucciones verbales' },
    ],
    family: [
      { icon: '📺', text: 'Apagar pantallas y reducir todos los ruidos del hogar — cada estímulo extra suma carga emocional' },
      { icon: '🗣️', text: 'Hablar menos y con voz muy baja — el tono del adulto regula directamente el sistema nervioso del niño/a' },
      { icon: '⏰', text: 'Anticipar la siguiente transición con mucho tiempo: "En 10 minutos vamos a hacer X"' },
      { icon: '🤲', text: 'Ofrecer presión profunda si le gusta: abrazo firme, manta pesada, masaje en hombros' },
    ],
  },
  {
    badge: '⛈️ Nivel 4 · Tormenta',
    title: '¡No puedo más! Necesito ayuda ahora mismo',
    color: '#E65100', bg: '#FFF3E0', accent: '#FF9800',
    cite: 'Webb et al. (2016); Siegel & Bryson (2012)',
    nna: [
      { icon: '🏃', text: 'Ve a tu lugar seguro AHORA — no tienes que hablar ni explicar nada a nadie' },
      { icon: '🤐', text: 'No tienes que hablar — solo estar en el sitio seguro hasta que baje la tormenta sola' },
      { icon: '🆘', text: 'Si puedes, dile a alguien exactamente esto: "Necesito ayuda, estoy al límite"' },
      { icon: '🎧', text: 'Pon tu música de calma, agarra tu objeto sensorial — lo que te funcione a ti' },
    ],
    school: [
      { icon: '🚶', text: 'Sacar al niño/a del ambiente con pocas palabras — una acción clara, no un discurso' },
      { icon: '🌑', text: 'Sala de calma: luz tenue o apagada, sin ruidos, sin demandas, sin preguntas' },
      { icon: '📵', text: 'Presencia tranquila del adulto — sin intentar solucionar nada todavía' },
      { icon: '📞', text: 'Avisar a la familia — el protocolo de coordinación colegio-familia debe activarse ahora' },
    ],
    family: [
      { icon: '😤', text: 'Lo más importante: mantener TU calma — la regulación del adulto regula al niño/a (Siegel & Bryson, 2012)' },
      { icon: '🚫', text: 'No añadir demandas, no razonar, no gritar — el cerebro no puede procesar instrucciones ahora' },
      { icon: '🤲', text: 'Presencia tranquila: "Estoy aquí. No pasa nada. Puedes descansar"' },
      { icon: '🔒', text: 'Asegurar el entorno — dar espacio y retirar objetos que puedan causar daño' },
    ],
  },
  {
    badge: '🌋 Nivel 5 · Volcán',
    title: '🌋 VOLCÁN — Seguridad primero',
    color: '#B71C1C', bg: '#FFEBEE', accent: '#F44336',
    cite: 'Dabrowski (1964); Neihart et al. (2002); Webb et al. (2016)',
    nna: [
      { icon: '💛', text: 'Esto siempre termina. Siempre. No estás roto/a — es tu cerebro haciendo lo que sabe cuando es demasiado' },
      { icon: '⏸️', text: 'No tienes que hacer nada ahora mismo. Solo dejar que la lava baje sola, poco a poco' },
      { icon: '🏃', text: 'Si puedes moverte, ve a donde no haya nadie ni ruido — el espacio físico ayuda mucho' },
      { icon: '🔮', text: 'Después, cuando estés tranquilo/a, hablaremos de qué pasó y de cómo evitarlo la próxima vez' },
    ],
    school: [
      { icon: '🛡️', text: 'Seguridad primero — dar espacio físico amplio y retirar objetos peligrosos' },
      { icon: '🤐', text: 'Presencia tranquila y silenciosa — sin palabras, sin preguntas, sin amenazas, sin sermones' },
      { icon: '🚫', text: 'NO intentar razonar, NO castigar, NO aumentar la presión — esto prolonga la crisis' },
      { icon: '📋', text: 'Documentar qué desencadenó la crisis para crear un plan de prevención con la familia' },
    ],
    family: [
      { icon: '💨', text: 'Respira hondo tú también — tu sistema nervioso le habla directamente al suyo (Siegel & Bryson, 2012)' },
      { icon: '🚫', text: 'No razonar, no castigar, no gritar — el cerebro en volcán no puede procesar ninguna instrucción' },
      { icon: '⏳', text: 'Esperar a que pase — después viene la reconexión tranquila, sin reproches ni "lecciones"' },
      { icon: '🩺', text: 'Si las crisis son frecuentes, buscar orientación de un psicólogo especializado en AACC y TEA' },
    ],
  },
];

const TRIGGERS = [
  {
    id: 'sensory',
    emoji: '🔊',
    label: 'Los ruidos fuertes',
    intensity: 3,
    color: '#E91E63',
    cite: 'Dabrowski (1964); Gere et al. (2009)',
    kidDesc: 'Mis oídos captan TODO con mucha potencia, como si tuviera el volumen siempre al máximo. Los demás no lo escuchan igual que yo, pero para mí es real y me duele.',
    speech: ['¡El ruido me duele por dentro!', '¡Necesito que pare ya!', '¡Es demasiado para mis oídos!'],
    particles: ['🔊', '💥', '📢'],
  },
  {
    id: 'boredom',
    emoji: '🧩',
    label: 'Me aburro mucho',
    intensity: 3,
    color: '#9C27B0',
    cite: 'Webb et al. (2016); Neihart et al. (2002)',
    kidDesc: 'Mi cerebro necesita problemas difíciles. Cuando las cosas son muy fáciles o muy lentas, me desespero. Como intentar correr con las piernas atadas.',
    speech: ['Esto es demasiado fácil…', '¡Mi cerebro necesita más!', '¿Cuándo hacemos algo difícil de verdad?'],
    particles: ['😴', '🧩', '⏳'],
  },
  {
    id: 'perfectionism',
    emoji: '⭐',
    label: 'No me sale perfecto',
    intensity: 4,
    color: '#FF5722',
    cite: 'Greenspon (2002); Silverman (2002)',
    kidDesc: 'Cuando cometo un error, aunque sea pequeño, siento una emoción ENORME por dentro. Me cuesta mucho aceptar que no todo puede ser perfecto.',
    speech: ['¡No tendría que haberme equivocado!', '¡Tengo que hacerlo perfectamente!', '¡No puedo aceptar ese error!'],
    particles: ['⭐', '💔', '😤'],
  },
  {
    id: 'isolation',
    emoji: '👤',
    label: 'Nadie me entiende',
    intensity: 3,
    color: '#607D8B',
    cite: 'Neihart et al. (2002)',
    kidDesc: 'A veces pienso diferente a los demás niños y es muy difícil encontrar amigos que quieran hablar de las mismas cosas que yo. Me siento solo aunque haya gente.',
    speech: ['Nadie piensa como yo…', '¿Por qué soy tan diferente?', 'Me siento solo aunque haya gente'],
    particles: ['👤', '💔', '🌧️'],
  },
  {
    id: 'injustice',
    emoji: '⚖️',
    label: 'Algo no es justo',
    intensity: 3,
    color: '#795548',
    cite: 'Piechowski (1989); Silverman (2002)',
    kidDesc: 'Tengo una alarma muy potente dentro de mí que detecta cuando algo no es justo. Me afecta muchísimo, aunque no me pase a mí directamente. No puedo ignorarlo.',
    speech: ['¡Eso no es justo y hay que decirlo!', '¡Las normas no tienen sentido!', '¡No puedo ignorar que eso está mal!'],
    particles: ['⚖️', '😠', '❗'],
  },
  {
    id: 'async',
    emoji: '🔀',
    label: 'Mi cerebro va muy rápido',
    intensity: 3,
    color: '#FF9800',
    cite: 'Silverman (2002); Columbus Group (1991)',
    kidDesc: 'Mi cerebro entiende cosas muy complejas, pero mis emociones van más despacio. Es como un coche muy rápido con frenos lentos: a veces choco aunque no quiera.',
    speech: ['¡Lo entiendo todo pero no puedo controlar cómo me siento!', '¡Mi cabeza y mis emociones no van juntas!', 'Sé lo que pasa pero no puedo parar'],
    particles: ['🔀', '⚡', '🌀'],
  },
  {
    id: 'routine',
    emoji: '📅',
    label: 'Algo cambia sin avisar',
    intensity: 2,
    color: '#009688',
    cite: 'Dabrowski (1964); Daniels & Piechowski (2009)',
    kidDesc: 'Necesito saber qué va a pasar para sentirme seguro. Cuando algo cambia de repente, mi cerebro se alarma porque ese dato no estaba en mi plan.',
    speech: ['¡Esto no estaba en el plan!', '¡Necesito saber qué va a pasar!', '¡No avisaron del cambio!'],
    particles: ['📅', '❓', '⚠️'],
  },
  {
    id: 'mislabel',
    emoji: '🚫',
    label: 'No me creen',
    intensity: 4,
    color: '#F44336',
    cite: 'Webb et al. (2016); Daniels & Piechowski (2009)',
    kidDesc: 'Cuando los adultos piensan que exagero o que lo que siento no es verdad, me duele muchísimo. Mis emociones son 100% reales aunque los demás no las vean.',
    speech: ['¡No exagero, de verdad lo siento así!', '¿Por qué nadie me cree?', '¡Mis emociones son reales!'],
    particles: ['🚫', '😔', '💢'],
  },
];

const SYMPTOMS = {
  mild: [
    {
      id: 'psychomotor',
      emoji: '🦵',
      label: 'No puedo quedarme quieto',
      color: '#8BC34A',
      border: '#558B2F',
      cite: 'Dabrowski (1964)',
      kidDesc: 'Mi cuerpo tiene mucha energía dentro que necesita salir. Me muevo, golpeteo, me retuerzo. No lo hago adrede: es mi cuerpo buscando una salida.',
    },
    {
      id: 'racing',
      emoji: '💭',
      label: 'Mi cabeza no para de pensar',
      color: '#26C6DA',
      border: '#00838F',
      cite: 'Dabrowski (1964); Lind (2001)',
      kidDesc: 'Tengo miles de pensamientos a la vez. Es como un ordenador con 100 pestañas abiertas al mismo tiempo. A veces no puedo dormir por eso.',
    },
  ],
  moderate: [
    {
      id: 'somatic',
      emoji: '🤢',
      label: 'Me duele la barriga o la cabeza',
      color: '#FFCA28',
      border: '#F9A825',
      cite: 'Lind (2001); Dabrowski (1964)',
      kidDesc: 'Cuando estoy muy agobiado, mi cuerpo lo nota: dolor de barriga, dolor de cabeza o me sudan las manos. Es mi cuerpo diciéndome que hay demasiado.',
    },
    {
      id: 'reactivity',
      emoji: '⚡',
      label: 'Mis emociones son enormes',
      color: '#FF7043',
      border: '#BF360C',
      cite: 'Piechowski (1989); Webb et al. (2016)',
      kidDesc: 'Siento las cosas MUCHO más fuerte que los demás. Una pequeña cosa puede hacerme sentir un montón. No lo puedo controlar: así funciona mi cerebro.',
    },
    {
      id: 'hypersensory',
      emoji: '👂',
      label: 'Algunas cosas me molestan mucho',
      color: '#AB47BC',
      border: '#6A1B9A',
      cite: 'Gere et al. (2009)',
      kidDesc: 'Ciertos sonidos, texturas de ropa, luces o smells se sienten para mí como si estuvieran a volumen 100. Los demás no lo sienten igual porque mis sensores son más potentes.',
    },
    {
      id: 'rigid',
      emoji: '🧱',
      label: 'Me cuesta cambiar de plan',
      color: '#78909C',
      border: '#37474F',
      cite: 'Dabrowski (1964); Silverman (2002)',
      kidDesc: 'Cuando tengo una idea o un plan en la cabeza, cambiarlo es muy difícil, aunque quiera. Es como intentar borrar algo escrito con tinta permanente.',
    },
  ],
  high: [
    {
      id: 'meltdown',
      emoji: '🌋',
      label: 'Exploto como un volcán',
      color: '#EF5350',
      border: '#B71C1C',
      cite: 'Dabrowski (1964); Webb et al. (2016)',
      kidDesc: 'Cuando se acumula demasiado, la emoción sale de golpe y muy fuerte, como un volcán. No lo planifico: simplemente pasa cuando ya no cabe más.',
    },
    {
      id: 'anger',
      emoji: '😡',
      label: 'Me pongo muy muy enfadado',
      color: '#FF6F00',
      border: '#E65100',
      cite: 'Dabrowski (1964); Webb et al. (2016)',
      kidDesc: 'La ira se siente como fuego dentro. Es especialmente fuerte cuando algo es injusto o cuando no me escuchan. No soy malo: solo siento mucho.',
    },
    {
      id: 'withdrawal',
      emoji: '🚪',
      label: 'Necesito alejarme de todos',
      color: '#546E7A',
      border: '#263238',
      cite: 'Neihart et al. (2002)',
      kidDesc: 'Cuando hay demasiado, mi cuerpo me pide estar solo un rato para recuperarme. Como recargar la batería. No es que me caiga mal la gente.',
    },
  ],
  crisis: [
    {
      id: 'shutdown',
      emoji: '⬛',
      label: 'Me quedo en blanco',
      color: '#616161',
      border: '#212121',
      cite: 'Webb et al. (2016); Daniels & Piechowski (2009)',
      kidDesc: 'A veces me desconecto de todo, como si apagara el ordenador. No es que no quiera responder: es que no puedo. Necesito tiempo para volver a encenderse.',
    },
    {
      id: 'aggression',
      emoji: '👊',
      label: 'Hago cosas que no quiero hacer',
      color: '#D32F2F',
      border: '#7F0000',
      cite: 'Webb et al. (2016)',
      kidDesc: 'A veces, cuando la emoción es demasiado grande, el cuerpo actúa solo antes de que pueda pensar. Después me arrepiento. No soy malo: mi emoción fue más rápida que yo.',
    },
    {
      id: 'despair',
      emoji: '🖤',
      label: 'Siento que nada tiene sentido',
      color: '#4527A0',
      border: '#1A0072',
      cite: 'Neihart et al. (2002); Silverman (2002)',
      kidDesc: 'Cuando estoy muy cansado de todo y siento que nada va a mejorar. Esta es la señal más importante de que necesito ayuda de alguien de confianza ahora.',
    },
  ],
};

// Escala del volcán — metáfora concreta y visual para TEA/AACC
const STATES = [
  { key: 'calm',     emoji: '☀️', label: 'Estoy bien',       sceneClass: 'state-calm',     scale: 1, color: '#4CAF50' },
  { key: 'mild',     emoji: '🌤️', label: 'Algo me molesta',  sceneClass: 'state-mild',     scale: 2, color: '#8BC34A' },
  { key: 'moderate', emoji: '☁️', label: '¡Hay demasiado!', sceneClass: 'state-moderate', scale: 3, color: '#FFC107' },
  { key: 'high',     emoji: '⛈️', label: '¡No puedo más!',  sceneClass: 'state-high',     scale: 4, color: '#FF9800' },
  { key: 'crisis',   emoji: '🌋', label: '¡VOLCÁN!',         sceneClass: 'state-crisis',   scale: 5, color: '#F44336' },
];

// ── State ────────────────────────────────────────────────────────────────────

let activeTriggers = new Set();
let stressLevel = 0;
let currentStateIdx = 0;
let speechTimeout = null;

// ── DOM References ───────────────────────────────────────────────────────────

const triggersGrid   = document.getElementById('triggersGrid');
const symptomsList   = document.getElementById('symptomsList');
const stressBar      = document.getElementById('stressBar');
const stressLabel    = document.getElementById('stressLabel');
const stateEmoji     = document.getElementById('stateEmoji');
const stateText      = document.getElementById('stateText');
const speechBubble   = document.getElementById('speechBubble');
const speechText     = document.getElementById('speechText');
const symptomBubbles = document.getElementById('symptomBubbles');
const scene          = document.getElementById('scene');
const envEffects     = document.getElementById('envEffects');
const toast          = document.getElementById('toast');
const btnReset       = document.getElementById('btnReset');
const btnCalm        = document.getElementById('btnCalm');
const tooltip        = document.getElementById('tooltip');
const tooltipTitle   = document.getElementById('tooltipTitle');
const tooltipCite    = document.getElementById('tooltipCite');
const tooltipDesc    = document.getElementById('tooltipDesc');

// Recommendations section
const recSection     = document.getElementById('recSection');
const recHeader      = document.getElementById('recHeader');
const recBadge       = document.getElementById('recBadge');
const recTitle       = document.getElementById('recTitle');
const recCite        = document.getElementById('recCite');
const recListNNA     = document.getElementById('recListNNA');
const recListSchool  = document.getElementById('recListSchool');
const recListFamily  = document.getElementById('recListFamily');

// SVG face
const mouth     = document.getElementById('mouth');
const blushL    = document.getElementById('blushL');
const blushR    = document.getElementById('blushR');
const tearL     = document.getElementById('tearL');
const tearR     = document.getElementById('tearR');
const sweat     = document.getElementById('sweat');
const eyeLbrow  = document.getElementById('eyeLbrow');
const eyeRbrow  = document.getElementById('eyeRbrow');
const eyeLpupil = document.getElementById('eyeLpupil');
const eyeRpupil = document.getElementById('eyeRpupil');

// ── Init ─────────────────────────────────────────────────────────────────────

function init() {
  renderTriggers();
  setupNav();
  setupTooltip();
  setupRecNav();
  btnReset.addEventListener('click', resetAll);
  btnCalm.addEventListener('click', calmChild);
  setStateVisuals(0);
  updateRecommendations(0);
}

// ── Render Triggers ──────────────────────────────────────────────────────────

function renderTriggers() {
  triggersGrid.innerHTML = '';
  TRIGGERS.forEach(trigger => {
    const btn = document.createElement('button');
    btn.className = 'trigger-btn';
    btn.dataset.id = trigger.id;
    btn.dataset.cite = trigger.cite;
    btn.dataset.desc = trigger.kidDesc;
    btn.dataset.titleTip = trigger.label;
    btn.innerHTML = `
      <span class="trigger-emoji">${trigger.emoji}</span>
      <span class="trigger-label">${trigger.label}</span>
      <span class="trigger-cite-tag">💡</span>
      <span class="trigger-intensity">+${trigger.intensity}</span>
    `;
    btn.addEventListener('click', () => toggleTrigger(trigger, btn));
    triggersGrid.appendChild(btn);
  });
}

// ── Toggle Trigger ───────────────────────────────────────────────────────────

function toggleTrigger(trigger, btn) {
  if (activeTriggers.has(trigger.id)) {
    activeTriggers.delete(trigger.id);
    btn.classList.remove('active');
    removeEnvEffect(trigger.id);
  } else {
    activeTriggers.add(trigger.id);
    btn.classList.add('active');
    addEnvEffect(trigger);
    showSpeech(pick(trigger.speech));
  }
  recalcStress();
}

// ── Stress Calculation ───────────────────────────────────────────────────────

function recalcStress() {
  let total = 0;
  activeTriggers.forEach(id => {
    const t = TRIGGERS.find(x => x.id === id);
    if (t) total += t.intensity;
  });

  const max = TRIGGERS.reduce((s, t) => s + t.intensity, 0);
  stressLevel = Math.min(100, Math.round((total / max) * 100));

  stressBar.style.width = stressLevel + '%';
  stressLabel.textContent = stressLevel + '%';

  const stateIdx = stressToStateIdx(stressLevel);
  setStateVisuals(stateIdx);
  updateSymptoms(stateIdx);
  updateScaleSteps(stateIdx);
  spawnSymptomBubbles(stateIdx);
}

function stressToStateIdx(pct) {
  if (pct === 0) return 0;
  if (pct < 25)  return 1;
  if (pct < 50)  return 2;
  if (pct < 75)  return 3;
  return 4;
}

// ── Child Visuals ────────────────────────────────────────────────────────────

function setStateVisuals(idx) {
  const state = STATES[idx];
  currentStateIdx = idx;
  stateEmoji.textContent = state.emoji;
  stateText.textContent  = state.label;
  stateText.style.color  = state.color;
  STATES.forEach(s => scene.classList.remove(s.sceneClass));
  scene.classList.add(state.sceneClass);
  updateFace(idx);
  updateRecommendations(idx);
}

function updateFace(idx) {
  const mouths = [
    'M85 143 Q100 153 115 143',
    'M85 147 Q100 147 115 147',
    'M85 150 Q100 144 115 150',
    'M85 153 Q100 143 115 153',
    'M82 158 Q100 142 118 158',
  ];
  mouth.setAttribute('d', mouths[idx]);

  const browsL = [
    'M70 103 Q82 98 94 103',
    'M70 105 Q82 100 94 104',
    'M70 107 Q82 100 94 105',
    'M70 108 Q82 99 94 106',
    'M70 110 Q82 99 94 107',
  ];
  const browsR = [
    'M106 103 Q118 98 130 103',
    'M106 104 Q118 100 130 105',
    'M106 105 Q118 100 130 107',
    'M106 106 Q118 99 130 108',
    'M106 107 Q118 99 130 110',
  ];
  eyeLbrow.setAttribute('d', browsL[idx]);
  eyeRbrow.setAttribute('d', browsR[idx]);

  blushL.setAttribute('opacity', idx >= 3 ? (idx === 4 ? 0.8 : 0.5) : 0);
  blushR.setAttribute('opacity', idx >= 3 ? (idx === 4 ? 0.8 : 0.5) : 0);
  tearL.setAttribute('opacity',  idx >= 2 ? (idx >= 3 ? 0.9 : 0.5) : 0);
  tearR.setAttribute('opacity',  idx >= 2 ? (idx >= 3 ? 0.9 : 0.5) : 0);
  sweat.setAttribute('opacity',  idx >= 3 ? 0.9 : 0);

  const pupilR = [7, 7, 8, 9, 10][idx];
  eyeLpupil.setAttribute('r', pupilR);
  eyeRpupil.setAttribute('r', pupilR);
}

// ── Symptoms Panel ───────────────────────────────────────────────────────────

function updateSymptoms(idx) {
  let active = [];
  if (idx >= 1) active = [...active, ...SYMPTOMS.mild];
  if (idx >= 2) active = [...active, ...SYMPTOMS.moderate];
  if (idx >= 3) active = [...active, ...SYMPTOMS.high];
  if (idx >= 4) active = [...active, ...SYMPTOMS.crisis];

  symptomsList.innerHTML = '';

  if (active.length === 0) {
    symptomsList.innerHTML = `
      <div class="no-symptoms"><span>✅</span><p>Todo está bien por ahora</p></div>`;
    return;
  }

  active.forEach(s => {
    const item = document.createElement('div');
    item.className = 'symptom-item has-tooltip';
    item.dataset.cite = s.cite;
    item.dataset.desc = s.kidDesc;
    item.dataset.titleTip = s.label;
    item.style.borderLeftColor = s.border;
    item.style.color = s.border;
    item.innerHTML = `
      <span class="symptom-item-emoji">${s.emoji}</span>
      <span class="symptom-item-text">${s.label}</span>
      <span class="symptom-cite-tag">💡</span>`;
    symptomsList.appendChild(item);
  });
}

// ── Symptom Bubbles around child ─────────────────────────────────────────────

function spawnSymptomBubbles(idx) {
  symptomBubbles.innerHTML = '';
  if (idx === 0) return;

  let pool = [];
  if (idx >= 1) pool = [...pool, ...SYMPTOMS.mild];
  if (idx >= 2) pool = [...pool, ...SYMPTOMS.moderate];
  if (idx >= 3) pool = [...pool, ...SYMPTOMS.high];
  if (idx >= 4) pool = [...pool, ...SYMPTOMS.crisis];

  const count = Math.min(pool.length, idx + 2);
  const selected = pool.slice(0, count);

  const positions = [
    { top: '5%',  left: '-120px' },
    { top: '18%', right: '-130px' },
    { top: '38%', left: '-115px' },
    { top: '52%', right: '-125px' },
    { top: '68%', left: '-110px' },
    { top: '80%', right: '-120px' },
    { top: '88%', left: '-105px' },
  ];

  selected.forEach((s, i) => {
    const pos = positions[i % positions.length];
    const bubble = document.createElement('div');
    bubble.className = 'symptom-bubble';
    bubble.style.borderColor = s.border;
    bubble.style.color = s.border;
    bubble.style.animationDelay = `${i * 0.3}s`;
    Object.assign(bubble.style, pos);
    bubble.innerHTML = `${s.emoji} <span>${s.label}</span>`;
    symptomBubbles.appendChild(bubble);
  });
}

// ── Regulation Scale ──────────────────────────────────────────────────────────

function updateScaleSteps(idx) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`step${i}`).classList.toggle('active', i === idx + 1);
  }
}

// ── Environment Effects ──────────────────────────────────────────────────────

function addEnvEffect(trigger) {
  const container = document.createElement('div');
  container.dataset.triggerId = trigger.id;

  trigger.particles.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'env-particle';
    el.textContent = p;
    el.style.cssText = `
      font-size: ${1 + Math.random()}rem;
      left: ${10 + Math.random() * 80}%;
      top: ${5 + Math.random() * 60}%;
      animation-delay: ${i * 0.4}s;
      animation-duration: ${2 + Math.random() * 2}s;
    `;
    container.appendChild(el);
  });

  envEffects.appendChild(container);
}

function removeEnvEffect(triggerId) {
  const el = envEffects.querySelector(`[data-trigger-id="${triggerId}"]`);
  if (el) el.remove();
}

// ── Speech Bubble ─────────────────────────────────────────────────────────────

function showSpeech(text) {
  clearTimeout(speechTimeout);
  speechText.textContent = text;
  speechBubble.classList.remove('hidden');
  speechTimeout = setTimeout(() => speechBubble.classList.add('hidden'), 3500);
}

// ── Tooltip (explicación en lenguaje de niño + cita para adultos) ─────────────

function setupTooltip() {
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('[data-cite]');
    if (!el) { tooltip.classList.add('hidden'); return; }
    tooltipTitle.textContent = el.dataset.titleTip || '';
    tooltipDesc.textContent  = el.dataset.desc     || '';
    tooltipCite.textContent  = '📚 ' + (el.dataset.cite || '');
    tooltip.classList.remove('hidden');
    positionTooltip(e);
  });

  document.addEventListener('mousemove', e => {
    if (!tooltip.classList.contains('hidden')) positionTooltip(e);
  });

  document.addEventListener('mouseout', e => {
    if (!e.target.closest('[data-cite]')) tooltip.classList.add('hidden');
  });
}

function positionTooltip(e) {
  const pad = 16;
  const tw = tooltip.offsetWidth;
  const th = tooltip.offsetHeight;
  let x = e.clientX + pad;
  let y = e.clientY + pad;
  if (x + tw > window.innerWidth  - pad) x = e.clientX - tw - pad;
  if (y + th > window.innerHeight - pad) y = e.clientY - th - pad;
  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}

// ── Reset ─────────────────────────────────────────────────────────────────────

function resetAll() {
  activeTriggers.clear();
  document.querySelectorAll('.trigger-btn').forEach(b => b.classList.remove('active'));
  envEffects.innerHTML = '';
  stressLevel = 0;
  stressBar.style.width = '0%';
  stressLabel.textContent = '0%';
  setStateVisuals(0);
  updateSymptoms(0);
  updateScaleSteps(0);
  spawnSymptomBubbles(0);
  speechBubble.classList.add('hidden');
  showToast('Todo reiniciado ✅');
}

// ── Calm Child ────────────────────────────────────────────────────────────────

function calmChild() {
  if (currentStateIdx === 0) { showToast('¡Ya estás bien! 😊 ☀️'); return; }
  showSpeech('Me siento mejor… gracias 💚');
  resetAll();
  showToast('¡Encontraste la calma! ☀️💚');
}

// ── Toast ──────────────────────────────────────────────────────────────────────

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2500);
}

// ── Recommendations ───────────────────────────────────────────────────────────

function updateRecommendations(idx) {
  const rec = RECOMMENDATIONS[idx];

  recBadge.textContent = rec.badge;
  recTitle.textContent = rec.title;
  recCite.textContent  = '📚 ' + rec.cite;

  recHeader.style.background   = rec.bg;
  recHeader.style.borderColor  = rec.accent;
  recBadge.style.background    = rec.accent;
  recSection.style.setProperty('--rec-accent', rec.accent);

  renderRecList(recListNNA,    rec.nna);
  renderRecList(recListSchool, rec.school);
  renderRecList(recListFamily, rec.family);

  // Sync browse nav buttons
  document.querySelectorAll('.rec-nav-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.level) === idx);
    b.style.setProperty('--btn-accent', RECOMMENDATIONS[parseInt(b.dataset.level)].accent);
  });
}

function renderRecList(container, items) {
  container.innerHTML = items.map(item =>
    `<li class="rec-item">
       <span class="rec-item-icon">${item.icon}</span>
       <span class="rec-item-text">${item.text}</span>
     </li>`
  ).join('');
}

function setupRecNav() {
  document.querySelectorAll('.rec-nav-btn').forEach(btn => {
    const lvl = parseInt(btn.dataset.level);
    btn.addEventListener('click', () => {
      updateRecommendations(lvl);
    });
  });

  // Also make scale steps clickable to preview their recommendations
  document.querySelectorAll('.scale-step').forEach(step => {
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      const lvl = parseInt(step.dataset.level);
      updateRecommendations(lvl);
      recSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Nav ────────────────────────────────────────────────────────────────────────

function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      document.getElementById('platformView').classList.toggle('hidden', view !== 'platform');
      document.getElementById('infoView').classList.toggle('hidden', view !== 'info');
    });
  });
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── Start ──────────────────────────────────────────────────────────────────────

init();
