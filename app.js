'use strict';

// ── Data ────────────────────────────────────────────────────────────────────

const TRIGGERS = [
  { id: 'noise',    emoji: '🔊', label: 'Ruido excesivo',     intensity: 3, color: '#FF6B6B',
    speech: ['¡Demasiado ruido!', '¡Para el ruido!', '¡Me duele la cabeza!'],
    particles: ['💥', '📢', '🎵'] },
  { id: 'crowd',   emoji: '👥', label: 'Multitudes',         intensity: 2, color: '#FF9800',
    speech: ['Hay demasiada gente', 'Me agobia', 'Quiero irme'],
    particles: ['👤', '👤', '👤'] },
  { id: 'tired',   emoji: '😴', label: 'Cansancio',          intensity: 2, color: '#9C27B0',
    speech: ['Estoy muy cansado', 'No quiero más', '¡Quiero dormir!'],
    particles: ['💤', '⭐', '😪'] },
  { id: 'hungry',  emoji: '🍽️', label: 'Hambre',             intensity: 2, color: '#FF5722',
    speech: ['¡Tengo hambre!', '¡Quiero comer!', 'Mi barriga ruge'],
    particles: ['🍕', '🍎', '🌮'] },
  { id: 'routine', emoji: '🔄', label: 'Cambio de rutina',   intensity: 3, color: '#E91E63',
    speech: ['¡Esto no es lo de siempre!', '¡No quiero cambios!', '¿Por qué todo cambia?'],
    particles: ['❓', '⚠️', '🔀'] },
  { id: 'frustration', emoji: '😤', label: 'Frustración',   intensity: 3, color: '#F44336',
    speech: ['¡No puedo!', '¡Es imposible!', '¡No me sale!'],
    particles: ['💢', '😤', '🔥'] },
  { id: 'overstim', emoji: '✨', label: 'Sobreestimulación', intensity: 4, color: '#9C27B0',
    speech: ['¡Hay mucho!', '¡Para todo!', 'Me siento raro'],
    particles: ['⚡', '✨', '🌀'] },
  { id: 'conflict', emoji: '⚔️', label: 'Conflicto social',  intensity: 3, color: '#795548',
    speech: ['¡No es justo!', '¡Me pegó!', '¡No quiero jugar!'],
    particles: ['💔', '😠', '⚡'] },
];

const SYMPTOMS = {
  mild: [
    { id: 'fidget',    emoji: '🦵', label: 'Inquietud motriz',   color: '#8BC34A', border: '#689F38' },
    { id: 'irritable', emoji: '😒', label: 'Irritabilidad leve', color: '#FFC107', border: '#F9A825' },
  ],
  moderate: [
    { id: 'crying',    emoji: '😢', label: 'Llanto',             color: '#29B6F6', border: '#0288D1' },
    { id: 'yelling',   emoji: '😠', label: 'Gritos',             color: '#FF7043', border: '#E64A19' },
    { id: 'hiding',    emoji: '🙈', label: 'Ocultarse',          color: '#AB47BC', border: '#7B1FA2' },
  ],
  high: [
    { id: 'aggression', emoji: '👊', label: 'Agresividad',       color: '#EF5350', border: '#C62828' },
    { id: 'freezing',   emoji: '🥶', label: 'Parálisis',         color: '#26C6DA', border: '#00838F' },
    { id: 'breathing',  emoji: '💨', label: 'Hiperventilación',  color: '#EC407A', border: '#AD1457' },
  ],
  crisis: [
    { id: 'shutdown',   emoji: '⬛', label: 'Cierre total',      color: '#616161', border: '#212121' },
    { id: 'tantrum',    emoji: '🌋', label: 'Berrinche extremo', color: '#D32F2F', border: '#B71C1C' },
    { id: 'dissociate', emoji: '👻', label: 'Disociación',       color: '#7E57C2', border: '#4527A0' },
  ],
};

const STATES = [
  { key: 'calm',     emoji: '😊', label: 'Tranquilo',       sceneClass: 'state-calm',     scale: 1, color: '#4CAF50' },
  { key: 'mild',     emoji: '😟', label: 'Leve malestar',   sceneClass: 'state-mild',     scale: 2, color: '#8BC34A' },
  { key: 'moderate', emoji: '😣', label: 'Irritable',       sceneClass: 'state-moderate', scale: 3, color: '#FFC107' },
  { key: 'high',     emoji: '😨', label: 'Muy angustiado',  sceneClass: 'state-high',     scale: 4, color: '#FF9800' },
  { key: 'crisis',   emoji: '😱', label: 'Crisis total',    sceneClass: 'state-crisis',   scale: 5, color: '#F44336' },
];

// ── State ────────────────────────────────────────────────────────────────────

let activeTriggers = new Set();
let stressLevel = 0;
let currentStateIdx = 0;
let speechTimeout = null;
let particleInterval = null;

// ── DOM References ───────────────────────────────────────────────────────────

const triggersGrid    = document.getElementById('triggersGrid');
const symptomsList    = document.getElementById('symptomsList');
const stressBar       = document.getElementById('stressBar');
const stressLabel     = document.getElementById('stressLabel');
const stateEmoji      = document.getElementById('stateEmoji');
const stateText       = document.getElementById('stateText');
const speechBubble    = document.getElementById('speechBubble');
const speechText      = document.getElementById('speechText');
const symptomBubbles  = document.getElementById('symptomBubbles');
const childWrap       = document.getElementById('childWrap');
const scene           = document.getElementById('scene');
const envEffects      = document.getElementById('envEffects');
const toast           = document.getElementById('toast');
const btnReset        = document.getElementById('btnReset');
const btnCalm         = document.getElementById('btnCalm');

// SVG elements
const mouth  = document.getElementById('mouth');
const blushL = document.getElementById('blushL');
const blushR = document.getElementById('blushR');
const tearL  = document.getElementById('tearL');
const tearR  = document.getElementById('tearR');
const sweat  = document.getElementById('sweat');
const eyeLbrow = document.getElementById('eyeLbrow');
const eyeRbrow = document.getElementById('eyeRbrow');
const eyeLpupil = document.getElementById('eyeLpupil');
const eyeRpupil = document.getElementById('eyeRpupil');

// ── Init ─────────────────────────────────────────────────────────────────────

function init() {
  renderTriggers();
  setupNav();
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
    btn.innerHTML = `
      <span class="trigger-emoji">${trigger.emoji}</span>
      <span>${trigger.label}</span>
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

  // State label
  stateEmoji.textContent = state.emoji;
  stateText.textContent  = state.label;
  stateText.style.color  = state.color;

  // Remove all state classes from scene
  STATES.forEach(s => scene.classList.remove(s.sceneClass));
  scene.classList.add(state.sceneClass);

  // Animate SVG face
  updateFace(idx);
}

function updateFace(idx) {
  // Mouth: 0=smile, 1=flat, 2=slight frown, 3=frown, 4=big frown
  const mouths = [
    'M85 143 Q100 153 115 143',  // smile
    'M85 147 Q100 147 115 147',  // flat
    'M85 150 Q100 144 115 150',  // slight frown
    'M85 153 Q100 143 115 153',  // frown
    'M82 158 Q100 142 118 158',  // big frown
  ];
  mouth.setAttribute('d', mouths[idx]);

  // Eyebrows: normal → furrowed
  const browsL = [
    'M70 103 Q82 98 94 103',   // neutral
    'M70 105 Q82 100 94 104',  // slight furrow
    'M70 107 Q82 100 94 105',  // furrow
    'M70 108 Q82 99 94 106',   // deep furrow
    'M70 110 Q82 99 94 107',   // extreme furrow
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

  // Blush
  const blushOpacity = idx >= 3 ? (idx === 4 ? 0.8 : 0.5) : 0;
  blushL.setAttribute('opacity', blushOpacity);
  blushR.setAttribute('opacity', blushOpacity);

  // Tears
  const tearOpacity = idx >= 2 ? (idx >= 3 ? 0.9 : 0.5) : 0;
  tearL.setAttribute('opacity', tearOpacity);
  tearR.setAttribute('opacity', tearOpacity);

  // Sweat
  sweat.setAttribute('opacity', idx >= 3 ? 0.9 : 0);

  // Pupil size (fear = bigger pupils)
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
      <div class="no-symptoms">
        <span>✅</span>
        <p>Sin síntomas activos</p>
      </div>`;
    return;
  }

  activeSymptoms.forEach(s => {
    const item = document.createElement('div');
    item.className = 'symptom-item';
    item.style.borderLeftColor = s.border;
    item.style.color = s.border;
    item.innerHTML = `<span class="symptom-item-emoji">${s.emoji}</span><span>${s.label}</span>`;
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

  const count = Math.min(pool.length, idx + 1);
  const selected = pool.slice(0, count);

  const positions = [
    { top: '5%',  left: '-80px' },
    { top: '15%', right: '-90px' },
    { top: '45%', left: '-100px' },
    { top: '55%', right: '-95px' },
    { top: '72%', left: '-85px' },
    { top: '80%', right: '-90px' },
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
    const el = document.getElementById(`step${i}`);
    el.classList.toggle('active', i === idx + 1);
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
  speechTimeout = setTimeout(() => speechBubble.classList.add('hidden'), 3000);
}

// ── Scale Step highlight ──────────────────────────────────────────────────────

// (called inside updateScaleSteps above)

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
  if (currentStateIdx === 0) { showToast('El niño ya está tranquilo 😊'); return; }
  showSpeech('Me siento mejor… gracias 💚');
  resetAll();
  showToast('¡El niño se ha calmado! 💚');
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
