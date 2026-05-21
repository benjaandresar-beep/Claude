'use strict';

// ── Scientific Data — all items cite peer-reviewed AACC / giftedness literature ──

const TRIGGERS = [
  {
    id: 'sensory',
    emoji: '🔊',
    label: 'Sobreexcit. Sensorial',
    intensity: 3,
    color: '#E91E63',
    cite: 'Dabrowski (1964); Gere et al. (2009)',
    mechanism: 'La sobreexcitabilidad sensorial genera respuestas neurológicas amplificadas ante ruido, texturas o luces.',
    speech: ['¡El ruido me duele!', '¡Es demasiado para mí!', '¡Necesito silencio ya!'],
    particles: ['🔊', '💥', '📢'],
  },
  {
    id: 'boredom',
    emoji: '🧩',
    label: 'Infraestimulación',
    intensity: 3,
    color: '#9C27B0',
    cite: 'Webb et al. (2016); Neihart et al. (2002)',
    mechanism: 'El desajuste entre capacidad intelectual y el nivel de reto genera frustración y conductas disruptivas.',
    speech: ['Esto es muy fácil…', '¡Me aburro mucho!', '¿Para qué sirve esto?'],
    particles: ['😴', '🧩', '⏳'],
  },
  {
    id: 'perfectionism',
    emoji: '⭐',
    label: 'Perfeccionismo',
    intensity: 4,
    color: '#FF5722',
    cite: 'Greenspon (2002); Silverman (2002)',
    mechanism: 'El perfeccionismo autoimputado genera vergüenza intensa ante errores mínimos y estados de colapso.',
    speech: ['¡No me salió perfecto!', '¡Soy un fracasado!', '¡No debí cometer ese error!'],
    particles: ['⭐', '💔', '😤'],
  },
  {
    id: 'isolation',
    emoji: '👤',
    label: 'Aislamiento Social',
    intensity: 3,
    color: '#607D8B',
    cite: 'Neihart et al. (2002)',
    mechanism: 'La dificultad para encontrar pares intelectuales y el rechazo social producen depresión y desregulación.',
    speech: ['Nadie me entiende…', 'No encajo en ningún grupo', '¿Por qué soy tan diferente?'],
    particles: ['👤', '💔', '🌧️'],
  },
  {
    id: 'injustice',
    emoji: '⚖️',
    label: 'Injusticia Percibida',
    intensity: 3,
    color: '#795548',
    cite: 'Piechowski (1989); Silverman (2002)',
    mechanism: 'La sensibilidad moral elevada hace que la injusticia percibida desencadene estados de desesperación o ira.',
    speech: ['¡Eso no es justo!', '¡Las reglas no tienen sentido!', '¡Alguien tiene que arreglarlo!'],
    particles: ['⚖️', '😠', '❗'],
  },
  {
    id: 'async',
    emoji: '🔀',
    label: 'Desincronía Evolutiva',
    intensity: 3,
    color: '#FF9800',
    cite: 'Silverman (2002); Columbus Group (1991)',
    mechanism: 'El desfase entre madurez cognitiva y emocional genera conflicto interno y confusión regulatoria.',
    speech: ['¡Lo entiendo pero no puedo con mis emociones!', 'Sé lo que pasa pero no puedo parar', '¡Quiero controlarme!'],
    particles: ['🔀', '⚡', '🌀'],
  },
  {
    id: 'routine',
    emoji: '📅',
    label: 'Cambio de Rutina',
    intensity: 2,
    color: '#009688',
    cite: 'Dabrowski (1964); Daniels & Piechowski (2009)',
    mechanism: 'La sobreexcitabilidad psicomotriz y emocional hace que los cambios imprevistos desencadenen ansiedad intensa.',
    speech: ['¡Esto no es lo habitual!', '¡No avisaron del cambio!', '¡Necesito que las cosas sean predecibles!'],
    particles: ['📅', '❓', '⚠️'],
  },
  {
    id: 'mislabel',
    emoji: '🚫',
    label: 'Incomprensión Adulta',
    intensity: 4,
    color: '#F44336',
    cite: 'Webb et al. (2016); Daniels & Piechowski (2009)',
    mechanism: 'La interpretación errónea de la intensidad emocional como patología (TDAH, TOC) genera vergüenza y desconfianza.',
    speech: ['Nadie me cree…', '¡No estoy loco, es real!', 'No entienden cómo me siento'],
    particles: ['🚫', '😔', '💢'],
  },
];

const SYMPTOMS = {
  mild: [
    {
      id: 'psychomotor',
      emoji: '🦵',
      label: 'Inquietud Psicomotriz',
      color: '#8BC34A',
      border: '#558B2F',
      cite: 'Dabrowski (1964)',
      desc: 'Exceso de energía, movimiento compulsivo, dificultad para quedarse quieto. Sobreexcitabilidad psicomotriz.',
    },
    {
      id: 'racing',
      emoji: '💭',
      label: 'Pensamiento Acelerado',
      color: '#26C6DA',
      border: '#00838F',
      cite: 'Dabrowski (1964); Lind (2001)',
      desc: 'Torrente de ideas imparable, dificultad para dormir, monólogo interno intenso. Sobreexcitabilidad intelectual.',
    },
  ],
  moderate: [
    {
      id: 'somatic',
      emoji: '🤢',
      label: 'Ansiedad Somática',
      color: '#FFCA28',
      border: '#F9A825',
      cite: 'Lind (2001); Dabrowski (1964)',
      desc: 'Cefaleas, dolor abdominal y tensión muscular como expresión física de la sobrecarga emocional.',
    },
    {
      id: 'reactivity',
      emoji: '⚡',
      label: 'Reactividad Emocional',
      color: '#FF7043',
      border: '#BF360C',
      cite: 'Piechowski (1989); Webb et al. (2016)',
      desc: 'Respuestas emocionales desproporcionadas ante estímulos menores. Sobreexcitabilidad emocional amplificada.',
    },
    {
      id: 'hypersensory',
      emoji: '👂',
      label: 'Hipersensibilidad Sensorial',
      color: '#AB47BC',
      border: '#6A1B9A',
      cite: 'Gere et al. (2009)',
      desc: 'Sensibilidad elevada y medible ante ruidos, texturas, olores y cambios de temperatura. Hallazgo neurobiológico.',
    },
    {
      id: 'rigid',
      emoji: '🧱',
      label: 'Rigidez Cognitiva',
      color: '#78909C',
      border: '#37474F',
      cite: 'Dabrowski (1964); Silverman (2002)',
      desc: 'Dificultad para ajustarse cuando la realidad no coincide con la lógica interna. Pensamiento inflexible bajo estrés.',
    },
  ],
  high: [
    {
      id: 'meltdown',
      emoji: '🌋',
      label: 'Colapso Emocional',
      color: '#EF5350',
      border: '#B71C1C',
      cite: 'Dabrowski (1964); Webb et al. (2016)',
      desc: 'Pérdida aguda del control emocional por acumulación de desbordamiento sensorial y emocional. «Meltdown».',
    },
    {
      id: 'anger',
      emoji: '😡',
      label: 'Ira Intensa',
      color: '#FF6F00',
      border: '#E65100',
      cite: 'Dabrowski (1964); Webb et al. (2016)',
      desc: 'Ira profunda ante injusticia percibida o falta de reconocimiento intelectual. Puede confundirse con TOD.',
    },
    {
      id: 'withdrawal',
      emoji: '🚪',
      label: 'Retirada Social',
      color: '#546E7A',
      border: '#263238',
      cite: 'Neihart et al. (2002)',
      desc: 'Aislamiento progresivo tras rechazo reiterado de pares. Aumenta riesgo de depresión crónica.',
    },
  ],
  crisis: [
    {
      id: 'shutdown',
      emoji: '⬛',
      label: 'Cierre Emocional Total',
      color: '#616161',
      border: '#212121',
      cite: 'Webb et al. (2016); Daniels & Piechowski (2009)',
      desc: 'Desconexión completa del entorno ante desregulación severa acumulada. Requiere intervención especializada.',
    },
    {
      id: 'aggression',
      emoji: '👊',
      label: 'Agresividad Conductual',
      color: '#D32F2F',
      border: '#7F0000',
      cite: 'Webb et al. (2016)',
      desc: 'Agresión física o destructiva cuando la desregulación es extrema. Frecuentemente confundida con trastorno de conducta.',
    },
    {
      id: 'despair',
      emoji: '🖤',
      label: 'Desesperanza / Depresión',
      color: '#4527A0',
      border: '#1A0072',
      cite: 'Neihart et al. (2002); Silverman (2002)',
      desc: 'Depresión severa por aislamiento crónico, perfeccionismo no tratado y necesidades educativas no cubiertas.',
    },
  ],
};

const STATES = [
  { key: 'calm',     emoji: '😊', label: 'Regulado',          sceneClass: 'state-calm',     scale: 1, color: '#4CAF50' },
  { key: 'mild',     emoji: '😟', label: 'Leve malestar',     sceneClass: 'state-mild',     scale: 2, color: '#8BC34A' },
  { key: 'moderate', emoji: '😣', label: 'Sobreexcitado',     sceneClass: 'state-moderate', scale: 3, color: '#FFC107' },
  { key: 'high',     emoji: '😨', label: 'Desbordado',        sceneClass: 'state-high',     scale: 4, color: '#FF9800' },
  { key: 'crisis',   emoji: '😱', label: 'Crisis / Meltdown', sceneClass: 'state-crisis',   scale: 5, color: '#F44336' },
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

// Tooltip
const tooltip        = document.getElementById('tooltip');
const tooltipTitle   = document.getElementById('tooltipTitle');
const tooltipCite    = document.getElementById('tooltipCite');
const tooltipDesc    = document.getElementById('tooltipDesc');

// SVG face elements
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
  btnReset.addEventListener('click', resetAll);
  btnCalm.addEventListener('click', calmChild);
  setStateVisuals(0);
}

// ── Render Triggers ──────────────────────────────────────────────────────────

function renderTriggers() {
  triggersGrid.innerHTML = '';
  TRIGGERS.forEach(trigger => {
    const btn = document.createElement('button');
    btn.className = 'trigger-btn';
    btn.dataset.id = trigger.id;
    btn.dataset.cite = trigger.cite;
    btn.dataset.desc = trigger.mechanism;
    btn.dataset.titleTip = trigger.label;
    btn.innerHTML = `
      <span class="trigger-emoji">${trigger.emoji}</span>
      <span class="trigger-label">${trigger.label}</span>
      <span class="trigger-cite-tag">📖</span>
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
  let activeSymptoms = [];
  if (idx >= 1) activeSymptoms = [...activeSymptoms, ...SYMPTOMS.mild];
  if (idx >= 2) activeSymptoms = [...activeSymptoms, ...SYMPTOMS.moderate];
  if (idx >= 3) activeSymptoms = [...activeSymptoms, ...SYMPTOMS.high];
  if (idx >= 4) activeSymptoms = [...activeSymptoms, ...SYMPTOMS.crisis];

  symptomsList.innerHTML = '';

  if (activeSymptoms.length === 0) {
    symptomsList.innerHTML = `
      <div class="no-symptoms"><span>✅</span><p>Sin síntomas activos</p></div>`;
    return;
  }

  activeSymptoms.forEach(s => {
    const item = document.createElement('div');
    item.className = 'symptom-item has-tooltip';
    item.dataset.cite = s.cite;
    item.dataset.desc = s.desc;
    item.dataset.titleTip = s.label;
    item.style.borderLeftColor = s.border;
    item.style.color = s.border;
    item.innerHTML = `
      <span class="symptom-item-emoji">${s.emoji}</span>
      <span class="symptom-item-text">${s.label}</span>
      <span class="symptom-cite-tag">📖</span>`;
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
    { top: '5%',  left: '-110px' },
    { top: '18%', right: '-120px' },
    { top: '38%', left: '-115px' },
    { top: '52%', right: '-120px' },
    { top: '68%', left: '-110px' },
    { top: '80%', right: '-115px' },
    { top: '88%', left: '-100px' },
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

// ── Tooltip ───────────────────────────────────────────────────────────────────

function setupTooltip() {
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('[data-cite]');
    if (!el) { tooltip.classList.add('hidden'); return; }

    tooltipTitle.textContent = el.dataset.titleTip || '';
    tooltipCite.textContent  = el.dataset.cite || '';
    tooltipDesc.textContent  = el.dataset.desc || '';
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
  showToast('Reiniciado ✅');
}

// ── Calm Child ────────────────────────────────────────────────────────────────

function calmChild() {
  if (currentStateIdx === 0) { showToast('El niño ya está regulado 😊'); return; }
  showSpeech('Me siento mejor… gracias 💚');
  resetAll();
  showToast('¡Regulación lograda! 💚');
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
