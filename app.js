'use strict';

// ── Datos — lenguaje adaptado para niño AACC + TEA de 10 años ───────────────

// ── Recomendaciones por nivel del volcán ─────────────────────────────────────
// Estructura: cada nivel → 3 audiencias → 2 áreas (psicológica + sensorial)
const RECOMMENDATIONS = [
  {
    // ☀️ Nivel 0 — Calma
    badge: '☀️ Nivel 1 · Sol',
    title: '¡Estás bien! Este es el mejor momento para practicar y prevenir',
    color: '#2E7D32', bg: '#E8F5E9', accent: '#4CAF50',
    cite: 'Kuypers (2011); Wilbarger & Wilbarger (1991); Siegel & Bryson (2012)',
    nna: {
      psych: [
        { icon: '📝', text: 'Escribe o dibuja cómo te sientes ahora mismo — así podrás recordarlo cuando lleguen las nubes grises' },
        { icon: '🌬️', text: 'Practica la respiración cuadrada: 4 segundos entro, 4 aguanto, 4 suelto — es como entrenar antes del partido' },
        { icon: '🔍', text: '¿Qué está haciendo que hoy estés bien? Anótalo — ese es tu "mapa personal de la calma"' },
      ],
      sensory: [
        { icon: '🎵', text: 'Crea tu playlist de calma ahora que estás bien — la música que sabes que te regula cuando las cosas se ponen difíciles' },
        { icon: '🏃', text: 'Haz 15 minutos de movimiento intenso cada día: saltar, columpiarse, correr, nadar — es como cargar la batería sensorial' },
        { icon: '🧸', text: 'Explora qué texturas te calman y guárdalas en un kit — piedra lisa, tela suave, arcilla, pelota antiestrés — tu kit de regulación sensorial' },
      ],
    },
    school: {
      psych: [
        { icon: '🧩', text: 'Ofrecer retos intelectuales reales y difíciles — el cerebro AACC necesita desafíos auténticos para mantenerse en zona de calma' },
        { icon: '📅', text: 'Anticipar todos los cambios de horario o rutina con tiempo — avisar siempre, cambiar nunca sin previo aviso' },
        { icon: '🗣️', text: 'Usar lenguaje directo y literal: "Haz X porque Y pasará" — sin sarcasmo ni dobles sentidos. El cerebro autista entiende causa-efecto' },
      ],
      sensory: [
        { icon: '🪑', text: 'Permitir cojines de movimiento o bandas elásticas en la pata de la silla — el movimiento no es distracción, es regulación sensorial activa' },
        { icon: '⏰', text: 'Anunciar transiciones 5 minutos antes con aviso visual y verbal: "En 5 minutos cambiamos a matemáticas" — la predictibilidad regula el sistema nervioso' },
        { icon: '🔇', text: 'Identificar y reducir fuentes de ruido innecesarias del aula: silla que chirría, ventilador, ruido de pasillos' },
      ],
    },
    family: {
      psych: [
        { icon: '🗺️', text: 'Crear juntos el "mapa de la calma": qué situaciones, rutinas y personas le hacen sentir bien — usarlo como guía preventiva' },
        { icon: '🔄', text: 'Mantener la rutina diaria con horarios predecibles — la predictibilidad es el mejor antídoto contra la desregulación en AACC + TEA' },
        { icon: '💛', text: 'Pasar tiempo de calidad en sus intereses especiales sin presión — la conexión emocional en calma es la mejor vacuna' },
      ],
      sensory: [
        { icon: '🏠', text: 'Diseñar juntos un kit sensorial domiciliar: auriculares, objetos táctiles, manta pesada, aromas favoritos — tenerlo listo ANTES de necesitarlo' },
        { icon: '🚶', text: 'Planificar 15 minutos diarios de "trabajo pesado" en casa: jardinería, cargar bolsas, empujar muebles, nadar, trepar — esto organiza el sistema sensorial' },
        { icon: '🌿', text: 'Crear un rincón de calma en casa: poca luz, objeto sensorial favorito, privacidad — que el niño/a ayude a diseñarlo y que sea solo suyo' },
      ],
    },
  },

  {
    // 🌤️ Nivel 1 — Leve
    badge: '🌤️ Nivel 2 · Nubecita',
    title: 'Algo molesta — actúa pronto, antes de que las nubes crezcan',
    color: '#558B2F', bg: '#F9FBE7', accent: '#8BC34A',
    cite: 'Kuypers (2011); Ayres (1972); Wilbarger & Wilbarger (1991)',
    nna: {
      psych: [
        { icon: '🔤', text: 'Pon nombre exacto a lo que sientes: ¿ruido? ¿aburrimiento? ¿injusticia? Nombrar la emoción la hace más pequeña — el cerebro funciona mejor cuando sabe qué pasa' },
        { icon: '🗣️', text: 'Usa tu palabra-señal con el adulto de confianza — puede ser cualquier palabra, como "ámbar" — eso avisa sin tener que explicar todo' },
        { icon: '⏸️', text: 'Pide un descanso de 5 minutos antes de que sea urgente — puedes decir exactamente esto: "Necesito un momento"' },
      ],
      sensory: [
        { icon: '🎧', text: 'Ponte los auriculares anti-ruido o pon tu música de calma — el sonido correcto cambia el estado del sistema nervioso' },
        { icon: '✋', text: 'Aprieta fuerte algo con las manos durante 10 segundos y suelta — el input propioceptivo dice al cuerpo "estás seguro/a"' },
        { icon: '🧸', text: 'Saca tu objeto de regulación sensorial favorito (fidget, piedra, tela) y tenlo contigo — no esperes a que sea urgente' },
      ],
    },
    school: {
      psych: [
        { icon: '✅', text: 'Hacer check-in breve con el adulto de confianza: una pregunta, sin presión, sin grupo — "¿Estás bien?" con opción de señal de mano' },
        { icon: '📤', text: 'Tener disponible una "tarjeta de salida" que el alumno/a pueda usar sin pedir permiso verbal — salida de 5 minutos previene crisis mayores' },
        { icon: '⏳', text: 'Reducir la presión de tiempo en las tareas — la urgencia temporal es un factor de sobrecarga especialmente alto en AACC + TEA' },
      ],
      sensory: [
        { icon: '🌅', text: 'Reducir estímulos del aula: bajar persianas, bajar el volumen, pedir al resto que use voz interior — menos input sensorial = más espacio cerebral' },
        { icon: '🚶', text: 'Ofrecer 2 minutos de movimiento: "¿Quieres dar una vuelta al pasillo?" — el movimiento propioceptivo es regulador, no premio' },
        { icon: '🧊', text: 'Tener disponible una caja de herramientas sensoriales accesible: pop-it, pelota antiestrés, fidget spinner — el alumno/a elige sin preguntar' },
      ],
    },
    family: {
      psych: [
        { icon: '💬', text: 'Validar sin minimizar: "Tiene sentido que eso te moleste" — nunca decir "no es para tanto" — la validación baja la intensidad emocional' },
        { icon: '🛋️', text: 'Tener una rutina de descompresión en casa al llegar del colegio: silencio, su espacio, sin preguntas durante los primeros 20 minutos' },
        { icon: '🚫', text: 'Evitar añadir nuevas exigencias cuando hay signos leves — este no es el momento de recordar deberes, correcciones o tareas pendientes' },
      ],
      sensory: [
        { icon: '🍎', text: 'Ofrecer un snack crujiente o masticable: zanahoria, manzana, chicle, fruta seca — la masticación da input propioceptivo y regula' },
        { icon: '💧', text: 'Hacer UNA actividad de la dieta sensorial: 10 min de baile, empujar una pared, nadar, columpiarse — planificada, no improvisada' },
        { icon: '🔇', text: 'Bajar el volumen general de la casa: TV más baja, hablar en voz calmada, reducir ruidos de electrodomésticos — menos estímulos sensoriales = más margen' },
      ],
    },
  },

  {
    // ☁️ Nivel 2 — Moderado
    badge: '☁️ Nivel 3 · Nubes grises',
    title: '¡Hay demasiado! Es el momento de actuar, no de esperar',
    color: '#F57F17', bg: '#FFFDE7', accent: '#FFC107',
    cite: 'Ayres (1972); Wilbarger & Wilbarger (1991); Siegel & Bryson (2012)',
    nna: {
      psych: [
        { icon: '🛑', text: 'PARA lo que estás haciendo y di en voz alta o escrito: "Hay demasiado de ___" — nombrar activa el córtex prefrontal y baja la alarma' },
        { icon: '🌬️', text: 'Respiración cuadrada: 4 entro, 4 aguanto, 4 suelto, 4 espero — repite 4 veces seguidas — esto activa el sistema nervioso parasimpático' },
        { icon: '🏠', text: 'Ve a tu espacio seguro — ese lugar donde no tienes que explicar nada ni responder a nadie — el espacio físico regula el sistema nervioso' },
      ],
      sensory: [
        { icon: '💪', text: 'Haz trabajo pesado AHORA: empuja una pared 30 segundos, haz flexiones de pared, aprieta un cojín con toda tu fuerza — los músculos necesitan presión' },
        { icon: '🛌', text: 'Métete bajo la manta pesada o el saco de dormir — la presión profunda dice al sistema nervioso "estás seguro/a" y baja la activación' },
        { icon: '🎧', text: 'Auriculares con música de calma o ruido blanco — bloquear el sonido del entorno reduce la carga sensorial inmediatamente' },
      ],
    },
    school: {
      psych: [
        { icon: '🚪', text: 'Acompañar al alumno/a a la sala de calma SIN reproches, SIN explicaciones, SIN tono de castigo — la retirada previene la crisis' },
        { icon: '🗣️', text: 'Usar frases cortísimas: "Vamos a la sala tranquila", "Estás seguro/a" — el cerebro sobrecargado no puede procesar instrucciones largas' },
        { icon: '☑️', text: 'Ofrecer solo 2 opciones concretas: "¿Sala de calma o pasillo?" — el cerebro sobrecargado no puede elegir entre muchas opciones' },
      ],
      sensory: [
        { icon: '🏠', text: 'Vaciar el entorno: retirar otros alumnos, cerrar la puerta, bajar luces, apagar sonidos — menos inputs = más velocidad de recuperación' },
        { icon: '🧘', text: 'Ofrecer manta pesada, cojín de presión o lap pad en la sala de calma — dejar al alumno/a elegir la posición (suelo, silla, rincón) sin corregirla' },
        { icon: '🪨', text: 'Proporcionar input propioceptivo de alta intensidad: bandas de resistencia, push-ups de pared, apretar arcilla — el cuerpo necesita trabajar para calmarse' },
      ],
    },
    family: {
      psych: [
        { icon: '😤', text: 'Regúlate tú primero: baja tus hombros, respira despacio, baja la voz — tu sistema nervioso regula directamente el suyo' },
        { icon: '💬', text: 'Valida ANTES de resolver: "Veo que estás muy agobiado/a. Tiene todo el sentido." — espera 5 minutos antes de buscar soluciones' },
        { icon: '🚫', text: 'NO hablar de lo que pasó ahora ni esta noche — el aprendizaje ocurre DESPUÉS de que el cerebro vuelva a la calma, nunca durante la sobrecarga' },
      ],
      sensory: [
        { icon: '🚿', text: 'Ofrecer una ducha o baño caliente — el agua, la temperatura y la presión del chorro son reguladores sensoriales muy potentes' },
        { icon: '🤲', text: 'Presión firme en hombros o espalda si el niño/a lo acepta — preguntar primero: "¿Puedo darte un abrazo fuerte?"' },
        { icon: '📺', text: 'Apagar todas las pantallas y reducir al máximo los ruidos del hogar — cada estímulo adicional suma carga al sistema nervioso ya saturado' },
      ],
    },
  },

  {
    // ⛈️ Nivel 3 — Alto
    badge: '⛈️ Nivel 4 · Tormenta',
    title: '¡No puedo más! Necesita ayuda ahora mismo',
    color: '#E65100', bg: '#FFF3E0', accent: '#FF9800',
    cite: 'Siegel & Bryson (2012); Wilbarger & Wilbarger (1991); Ayres (1972)',
    nna: {
      psych: [
        { icon: '🏃', text: 'Ve a tu lugar seguro AHORA — no tienes que explicar nada ni hablar con nadie — solo llegar allí' },
        { icon: '🆘', text: 'Si puedes, dile a alguien exactamente esto: "Necesito ayuda, estoy al límite" — con esas palabras exactas' },
        { icon: '🤐', text: 'No tienes que hablar — solo estar en el sitio seguro hasta que la tormenta baje sola — no la puedes parar con más palabras' },
      ],
      sensory: [
        { icon: '💥', text: 'Movimiento muy intenso durante 2 minutos: corre en sitio, salta fuerte, empuja con toda tu fuerza — el cuerpo necesita descargar la energía sensorial acumulada' },
        { icon: '🛌', text: 'Presión máxima: manta pesada encima, envolverse apretado en una manta, saco de dormir — la contención profunda baja la activación del sistema nervioso' },
        { icon: '🎧', text: 'Auriculares CON música muy fuerte que ya conozcas, o silencio total con tapones — controlar lo que entra por los oídos es prioritario ahora' },
      ],
    },
    school: {
      psych: [
        { icon: '🚶', text: 'Retirada inmediata del aula — pocas palabras, sin negociación, sin reproches: "Vamos" — la acción es más útil que el discurso ahora' },
        { icon: '🤐', text: 'Presencia silenciosa del adulto — no intentar razonar, no explicar, no preguntar — el cerebro no puede procesar nada de eso en este momento' },
        { icon: '📞', text: 'Avisar a la familia ahora — el protocolo de coordinación colegio-familia debe activarse — este nivel requiere coordinación adulta' },
      ],
      sensory: [
        { icon: '🌑', text: 'Sala de calma con iluminación mínima o apagada, sin ruidos, sin objetos nuevos — solo el espacio vacío y un adulto tranquilo' },
        { icon: '🛡️', text: 'Ofrecer únicamente los objetos sensoriales que el alumno/a ya conoce y le funcionan — no introducir estímulos nuevos en este momento' },
        { icon: '🧘', text: 'Permitir cualquier posición corporal: suelo, debajo de la mesa, en rincón — el cuerpo busca la posición que más input propioceptivo le da' },
      ],
    },
    family: {
      psych: [
        { icon: '😤', text: 'Regúlate tú primero — respira hondo, baja los hombros — tu calma es la herramienta más potente que tienes ahora mismo' },
        { icon: '🤐', text: 'Sin hablar, sin razonar, sin instrucciones — solo presencia física tranquila: "Estoy aquí, no pasa nada, puedes descansar"' },
        { icon: '🔒', text: 'Asegurar el entorno físico: dar espacio amplio, retirar objetos que puedan causar daño — seguridad antes que todo' },
      ],
      sensory: [
        { icon: '🛏️', text: 'Preparar un "nido": habitación oscura y silenciosa, manta pesada, temperatura fresca — el sistema nervioso necesita mínima estimulación y máxima contención' },
        { icon: '🌡️', text: 'Temperatura como regulador: paño frío en frente si hay mucho calor, o baño caliente si tiembla — el contraste térmico activa el nervio vago' },
        { icon: '🚫', text: 'Cero demandas sensoriales adicionales: sin música nueva, sin pantallas, sin personas extra en el espacio — el sistema sensorial ya está al límite' },
      ],
    },
  },

  {
    // 🌋 Nivel 4 — Crisis
    badge: '🌋 Nivel 5 · Volcán',
    title: '🌋 VOLCÁN — Seguridad primero, siempre',
    color: '#B71C1C', bg: '#FFEBEE', accent: '#F44336',
    cite: 'Dabrowski (1964); Neihart et al. (2002); Webb et al. (2016); Ayres (1972)',
    nna: {
      psych: [
        { icon: '💛', text: 'Esto siempre termina. Siempre. No estás roto/a — tu cerebro está haciendo lo que sabe hacer cuando hay demasiado' },
        { icon: '⏸️', text: 'No tienes que hacer nada ahora mismo — solo dejar que la lava baje sola, poco a poco — no puedes apagarlo con la mente' },
        { icon: '🔮', text: 'Después, cuando estés tranquilo/a, hablaremos de qué pasó y de cómo evitarlo — ahora solo hay que esperar y estar seguro/a' },
      ],
      sensory: [
        { icon: '🏃', text: 'Si puedes moverte con seguridad, ve a un espacio grande y vacío — el espacio físico amplio reduce la sobrecarga sensorial' },
        { icon: '🧊', text: 'Agua muy fría en la cara o hielo en las manos — el frío intenso activa el reflejo de buceo y baja el ritmo cardíaco muy rápido' },
        { icon: '🤲', text: 'Si aceptas: presión muy firme (abrazo apretado, manta pesada) — si no: nada de contacto físico — respetar el límite sensorial siempre' },
      ],
    },
    school: {
      psych: [
        { icon: '🛡️', text: 'Seguridad primero: retirar objetos peligrosos, dar espacio físico grande, llamar a un segundo adulto' },
        { icon: '🤐', text: 'Palabras mínimas y calmadas: solo "Estás seguro/a. Estoy aquí." — repetir si es necesario — NO razonar, NO explicar, NO amenazar' },
        { icon: '📋', text: 'Documentar exactamente qué desencadenó la crisis — esa información es necesaria para el plan de prevención con la familia' },
      ],
      sensory: [
        { icon: '🏠', text: 'Sala de emergencia: lo más vacía posible, mínima luz, puerta con acceso visual del adulto — el espacio vació es el mayor regulador sensorial' },
        { icon: '🚫', text: 'Sin herramientas sensoriales nuevas — solo lo que el alumno/a ya conoce como calmante — los estímulos desconocidos pueden empeorar' },
        { icon: '📞', text: 'Avisar a la familia para recogida — si la crisis es severa o hay riesgo, llamar al servicio de urgencias de salud mental (protocolo de centro)' },
      ],
    },
    family: {
      psych: [
        { icon: '💨', text: 'Respira tú primero — tu sistema nervioso habla al suyo sin palabras — si tú te activas, él/ella se activa más' },
        { icon: '🚫', text: 'Sin razonar, sin castigar, sin gritar — el cerebro en volcán no puede procesar ninguna instrucción — eso viene después, no ahora' },
        { icon: '🩺', text: 'Si las crisis son frecuentes o hay riesgo de daño, buscar orientación de psicólogo especializado en AACC + TEA — esto es atención médica, no fracaso familiar' },
      ],
      sensory: [
        { icon: '🌊', text: 'Reset sensorial con agua: ducha fría o baño caliente según lo que el niño/a tolera — el agua es el regulador sensorial más potente y accesible' },
        { icon: '⏳', text: 'El volcán puede durar entre 20 minutos y 2 horas — no lo puedes parar, pero sí contenerlo — presencia tranquila sin demandas es lo mejor' },
        { icon: '🏥', text: 'Si las crisis con componente sensorial son frecuentes, solicitar evaluación de integración sensorial con terapeuta ocupacional especializado en TEA' },
      ],
    },
  },
];

// ── Triggers ──────────────────────────────────────────────────────────────────
const TRIGGERS = [
  {
    id: 'sensory', emoji: '🔊', label: 'Ruidos fuertes', intensity: 3, color: '#E91E63',
    cite: 'Dabrowski (1964); Gere et al. (2009)',
    kidDesc: 'Mis oídos captan TODO con mucha potencia, como si tuviera el volumen siempre al máximo. Los demás no lo escuchan igual que yo, pero para mí es real y me duele.',
    speech: ['¡El ruido me duele por dentro!', '¡Necesito que pare ya!', '¡Es demasiado para mis oídos!'],
    particles: ['🔊', '💥', '📢'],
  },
  {
    id: 'boredom', emoji: '🧩', label: 'Me aburro mucho', intensity: 3, color: '#9C27B0',
    cite: 'Webb et al. (2016); Neihart et al. (2002)',
    kidDesc: 'Mi cerebro necesita problemas difíciles. Cuando las cosas son muy fáciles o muy lentas, me desespero. Como intentar correr con las piernas atadas.',
    speech: ['Esto es demasiado fácil…', '¡Mi cerebro necesita más!', '¿Cuándo hacemos algo difícil de verdad?'],
    particles: ['😴', '🧩', '⏳'],
  },
  {
    id: 'perfectionism', emoji: '⭐', label: 'No me sale perfecto', intensity: 4, color: '#FF5722',
    cite: 'Greenspon (2002); Silverman (2002)',
    kidDesc: 'Cuando cometo un error, aunque sea pequeño, siento una emoción ENORME por dentro. Me cuesta mucho aceptar que no todo puede ser perfecto.',
    speech: ['¡No tendría que haberme equivocado!', '¡Tengo que hacerlo perfectamente!', '¡No puedo aceptar ese error!'],
    particles: ['⭐', '💔', '😤'],
  },
  {
    id: 'isolation', emoji: '👤', label: 'Nadie me entiende', intensity: 3, color: '#607D8B',
    cite: 'Neihart et al. (2002)',
    kidDesc: 'A veces pienso diferente a los demás niños y es muy difícil encontrar amigos que quieran hablar de las mismas cosas que yo. Me siento solo aunque haya gente.',
    speech: ['Nadie piensa como yo…', '¿Por qué soy tan diferente?', 'Me siento solo aunque haya gente'],
    particles: ['👤', '💔', '🌧️'],
  },
  {
    id: 'injustice', emoji: '⚖️', label: 'Algo no es justo', intensity: 3, color: '#795548',
    cite: 'Piechowski (1989); Silverman (2002)',
    kidDesc: 'Tengo una alarma muy potente dentro de mí que detecta cuando algo no es justo. Me afecta muchísimo, aunque no me pase a mí directamente. No puedo ignorarlo.',
    speech: ['¡Eso no es justo y hay que decirlo!', '¡Las normas no tienen sentido!', '¡No puedo ignorar que eso está mal!'],
    particles: ['⚖️', '😠', '❗'],
  },
  {
    id: 'async', emoji: '🔀', label: 'Mi cerebro va muy rápido', intensity: 3, color: '#FF9800',
    cite: 'Silverman (2002); Columbus Group (1991)',
    kidDesc: 'Mi cerebro entiende cosas muy complejas, pero mis emociones van más despacio. Es como un coche muy rápido con frenos lentos: a veces choco aunque no quiera.',
    speech: ['¡Lo entiendo todo pero no puedo controlar cómo me siento!', '¡Mi cabeza y mis emociones no van juntas!', 'Sé lo que pasa pero no puedo parar'],
    particles: ['🔀', '⚡', '🌀'],
  },
  {
    id: 'routine', emoji: '📅', label: 'Algo cambia sin avisar', intensity: 2, color: '#009688',
    cite: 'Dabrowski (1964); Daniels & Piechowski (2009)',
    kidDesc: 'Necesito saber qué va a pasar para sentirme seguro. Cuando algo cambia de repente, mi cerebro se alarma porque ese dato no estaba en mi plan.',
    speech: ['¡Esto no estaba en el plan!', '¡Necesito saber qué va a pasar!', '¡No avisaron del cambio!'],
    particles: ['📅', '❓', '⚠️'],
  },
  {
    id: 'mislabel', emoji: '🚫', label: 'No me creen', intensity: 4, color: '#F44336',
    cite: 'Webb et al. (2016); Daniels & Piechowski (2009)',
    kidDesc: 'Cuando los adultos piensan que exagero o que lo que siento no es verdad, me duele muchísimo. Mis emociones son 100% reales aunque los demás no las vean.',
    speech: ['¡No exagero, de verdad lo siento así!', '¿Por qué nadie me cree?', '¡Mis emociones son reales!'],
    particles: ['🚫', '😔', '💢'],
  },
];

// ── Symptoms ──────────────────────────────────────────────────────────────────
const SYMPTOMS = {
  mild: [
    { id: 'psychomotor', emoji: '🦵', label: 'No puedo quedarme quieto', color: '#8BC34A', border: '#558B2F', cite: 'Dabrowski (1964)', kidDesc: 'Mi cuerpo tiene mucha energía dentro que necesita salir. Me muevo, golpeteo, me retuerzo. No lo hago adrede: es mi cuerpo buscando una salida.' },
    { id: 'racing', emoji: '💭', label: 'Mi cabeza no para de pensar', color: '#26C6DA', border: '#00838F', cite: 'Dabrowski (1964); Lind (2001)', kidDesc: 'Tengo miles de pensamientos a la vez. Es como un ordenador con 100 pestañas abiertas al mismo tiempo. A veces no puedo dormir por eso.' },
  ],
  moderate: [
    { id: 'somatic', emoji: '🤢', label: 'Me duele la barriga o la cabeza', color: '#FFCA28', border: '#F9A825', cite: 'Lind (2001); Dabrowski (1964)', kidDesc: 'Cuando estoy muy agobiado, mi cuerpo lo nota: dolor de barriga, dolor de cabeza o me sudan las manos. Es mi cuerpo diciéndome que hay demasiado.' },
    { id: 'reactivity', emoji: '⚡', label: 'Mis emociones son enormes', color: '#FF7043', border: '#BF360C', cite: 'Piechowski (1989); Webb et al. (2016)', kidDesc: 'Siento las cosas MUCHO más fuerte que los demás. Una pequeña cosa puede hacerme sentir un montón. No lo puedo controlar: así funciona mi cerebro.' },
    { id: 'hypersensory', emoji: '👂', label: 'Algunas cosas me molestan mucho', color: '#AB47BC', border: '#6A1B9A', cite: 'Gere et al. (2009)', kidDesc: 'Ciertos sonidos, texturas de ropa, luces o smells se sienten para mí como si estuvieran a volumen 100. Los demás no lo sienten igual porque mis sensores son más potentes.' },
    { id: 'rigid', emoji: '🧱', label: 'Me cuesta cambiar de plan', color: '#78909C', border: '#37474F', cite: 'Dabrowski (1964); Silverman (2002)', kidDesc: 'Cuando tengo una idea o un plan en la cabeza, cambiarlo es muy difícil, aunque quiera. Es como intentar borrar algo escrito con tinta permanente.' },
  ],
  high: [
    { id: 'meltdown', emoji: '🌋', label: 'Exploto como un volcán', color: '#EF5350', border: '#B71C1C', cite: 'Dabrowski (1964); Webb et al. (2016)', kidDesc: 'Cuando se acumula demasiado, la emoción sale de golpe y muy fuerte, como un volcán. No lo planifico: simplemente pasa cuando ya no cabe más.' },
    { id: 'anger', emoji: '😡', label: 'Me pongo muy muy enfadado', color: '#FF6F00', border: '#E65100', cite: 'Dabrowski (1964); Webb et al. (2016)', kidDesc: 'La ira se siente como fuego dentro. Es especialmente fuerte cuando algo es injusto o cuando no me escuchan. No soy malo: solo siento mucho.' },
    { id: 'withdrawal', emoji: '🚪', label: 'Necesito alejarme de todos', color: '#546E7A', border: '#263238', cite: 'Neihart et al. (2002)', kidDesc: 'Cuando hay demasiado, mi cuerpo me pide estar solo un rato para recuperarme. Como recargar la batería. No es que me caiga mal la gente.' },
  ],
  crisis: [
    { id: 'shutdown', emoji: '⬛', label: 'Me quedo en blanco', color: '#616161', border: '#212121', cite: 'Webb et al. (2016); Daniels & Piechowski (2009)', kidDesc: 'A veces me desconecto de todo, como si apagara el ordenador. No es que no quiera responder: es que no puedo. Necesito tiempo para volver a encenderse.' },
    { id: 'aggression', emoji: '👊', label: 'Hago cosas que no quiero hacer', color: '#D32F2F', border: '#7F0000', cite: 'Webb et al. (2016)', kidDesc: 'A veces, cuando la emoción es demasiado grande, el cuerpo actúa solo antes de que pueda pensar. Después me arrepiento. No soy malo: mi emoción fue más rápida que yo.' },
    { id: 'despair', emoji: '🖤', label: 'Siento que nada tiene sentido', color: '#4527A0', border: '#1A0072', cite: 'Neihart et al. (2002); Silverman (2002)', kidDesc: 'Cuando estoy muy cansado de todo y siento que nada va a mejorar. Esta es la señal más importante de que necesito ayuda de alguien de confianza ahora.' },
  ],
};

const STATES = [
  { key: 'calm',     emoji: '☀️', label: 'Estoy bien',       sceneClass: 'state-calm',     scale: 1, color: '#4CAF50' },
  { key: 'mild',     emoji: '🌤️', label: 'Algo me molesta',  sceneClass: 'state-mild',     scale: 2, color: '#8BC34A' },
  { key: 'moderate', emoji: '☁️', label: '¡Hay demasiado!', sceneClass: 'state-moderate', scale: 3, color: '#FFC107' },
  { key: 'high',     emoji: '⛈️', label: '¡No puedo más!',  sceneClass: 'state-high',     scale: 4, color: '#FF9800' },
  { key: 'crisis',   emoji: '🌋', label: '¡VOLCÁN!',         sceneClass: 'state-crisis',   scale: 5, color: '#F44336' },
];

// ── State ─────────────────────────────────────────────────────────────────────
let activeTriggers = new Set();
let stressLevel = 0;
let currentStateIdx = 0;
let speechTimeout = null;

// ── DOM References ────────────────────────────────────────────────────────────
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

// Recommendations
const recSection     = document.getElementById('recSection');
const recHeader      = document.getElementById('recHeader');
const recBadge       = document.getElementById('recBadge');
const recTitle       = document.getElementById('recTitle');
const recCite        = document.getElementById('recCite');

// Welcome modal
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeBtn     = document.getElementById('welcomeBtn');

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
  renderTriggers();
  setupNav();
  setupTooltip();
  setupRecNav();
  setupWelcome();
  btnReset.addEventListener('click', resetAll);
  btnCalm.addEventListener('click', calmChild);
  setStateVisuals(0);
  updateRecommendations(0);
}

// ── Welcome Modal ─────────────────────────────────────────────────────────────
function setupWelcome() {
  welcomeBtn.addEventListener('click', () => {
    welcomeOverlay.classList.add('fade-out');
    setTimeout(() => welcomeOverlay.classList.add('hidden'), 400);
  });
}

// ── Render Triggers ───────────────────────────────────────────────────────────
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
      <span class="trigger-intensity">+${trigger.intensity}</span>`;
    btn.addEventListener('click', () => toggleTrigger(trigger, btn));
    triggersGrid.appendChild(btn);
  });
}

// ── Toggle Trigger ────────────────────────────────────────────────────────────
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

// ── Stress Calculation ────────────────────────────────────────────────────────
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

// ── Child Visuals ─────────────────────────────────────────────────────────────
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
  const mouths = ['M85 143 Q100 153 115 143','M85 147 Q100 147 115 147','M85 150 Q100 144 115 150','M85 153 Q100 143 115 153','M82 158 Q100 142 118 158'];
  const browsL = ['M70 103 Q82 98 94 103','M70 105 Q82 100 94 104','M70 107 Q82 100 94 105','M70 108 Q82 99 94 106','M70 110 Q82 99 94 107'];
  const browsR = ['M106 103 Q118 98 130 103','M106 104 Q118 100 130 105','M106 105 Q118 100 130 107','M106 106 Q118 99 130 108','M106 107 Q118 99 130 110'];
  document.getElementById('mouth').setAttribute('d', mouths[idx]);
  document.getElementById('eyeLbrow').setAttribute('d', browsL[idx]);
  document.getElementById('eyeRbrow').setAttribute('d', browsR[idx]);
  document.getElementById('blushL').setAttribute('opacity', idx >= 3 ? (idx === 4 ? 0.8 : 0.5) : 0);
  document.getElementById('blushR').setAttribute('opacity', idx >= 3 ? (idx === 4 ? 0.8 : 0.5) : 0);
  document.getElementById('tearL').setAttribute('opacity', idx >= 2 ? (idx >= 3 ? 0.9 : 0.5) : 0);
  document.getElementById('tearR').setAttribute('opacity', idx >= 2 ? (idx >= 3 ? 0.9 : 0.5) : 0);
  document.getElementById('sweat').setAttribute('opacity', idx >= 3 ? 0.9 : 0);
  const pupilR = [7, 7, 8, 9, 10][idx];
  document.getElementById('eyeLpupil').setAttribute('r', pupilR);
  document.getElementById('eyeRpupil').setAttribute('r', pupilR);
}

// ── Symptoms ──────────────────────────────────────────────────────────────────
function updateSymptoms(idx) {
  let active = [];
  if (idx >= 1) active = [...active, ...SYMPTOMS.mild];
  if (idx >= 2) active = [...active, ...SYMPTOMS.moderate];
  if (idx >= 3) active = [...active, ...SYMPTOMS.high];
  if (idx >= 4) active = [...active, ...SYMPTOMS.crisis];
  symptomsList.innerHTML = '';
  if (active.length === 0) {
    symptomsList.innerHTML = `<div class="no-symptoms"><span>☀️</span><p>Todo está bien por ahora</p></div>`;
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
    item.innerHTML = `<span class="symptom-item-emoji">${s.emoji}</span><span class="symptom-item-text">${s.label}</span><span class="symptom-cite-tag">💡</span>`;
    symptomsList.appendChild(item);
  });
}

function spawnSymptomBubbles(idx) {
  symptomBubbles.innerHTML = '';
  if (idx === 0) return;
  let pool = [];
  if (idx >= 1) pool = [...pool, ...SYMPTOMS.mild];
  if (idx >= 2) pool = [...pool, ...SYMPTOMS.moderate];
  if (idx >= 3) pool = [...pool, ...SYMPTOMS.high];
  if (idx >= 4) pool = [...pool, ...SYMPTOMS.crisis];
  const positions = [
    { top: '5%',  left: '-120px' }, { top: '18%', right: '-130px' },
    { top: '38%', left: '-115px' }, { top: '52%', right: '-125px' },
    { top: '68%', left: '-110px' }, { top: '80%', right: '-120px' },
    { top: '88%', left: '-105px' },
  ];
  pool.slice(0, idx + 2).forEach((s, i) => {
    const bubble = document.createElement('div');
    bubble.className = 'symptom-bubble';
    bubble.style.borderColor = s.border;
    bubble.style.color = s.border;
    bubble.style.animationDelay = `${i * 0.3}s`;
    Object.assign(bubble.style, positions[i % positions.length]);
    bubble.innerHTML = `${s.emoji} <span>${s.label}</span>`;
    symptomBubbles.appendChild(bubble);
  });
}

function updateScaleSteps(idx) {
  for (let i = 1; i <= 5; i++)
    document.getElementById(`step${i}`).classList.toggle('active', i === idx + 1);
}

// ── Env Effects ───────────────────────────────────────────────────────────────
function addEnvEffect(trigger) {
  const container = document.createElement('div');
  container.dataset.triggerId = trigger.id;
  trigger.particles.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'env-particle';
    el.textContent = p;
    el.style.cssText = `font-size:${1+Math.random()}rem;left:${10+Math.random()*80}%;top:${5+Math.random()*60}%;animation-delay:${i*.4}s;animation-duration:${2+Math.random()*2}s;`;
    container.appendChild(el);
  });
  envEffects.appendChild(container);
}

function removeEnvEffect(id) {
  const el = envEffects.querySelector(`[data-trigger-id="${id}"]`);
  if (el) el.remove();
}

// ── Speech ────────────────────────────────────────────────────────────────────
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
  const pad = 16, tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
  let x = e.clientX + pad, y = e.clientY + pad;
  if (x + tw > window.innerWidth  - pad) x = e.clientX - tw - pad;
  if (y + th > window.innerHeight - pad) y = e.clientY - th - pad;
  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}

// ── Recommendations ───────────────────────────────────────────────────────────
function updateRecommendations(idx) {
  const rec = RECOMMENDATIONS[idx];
  recBadge.textContent = rec.badge;
  recTitle.textContent = rec.title;
  recCite.textContent  = '📚 ' + rec.cite;
  recHeader.style.background  = rec.bg;
  recHeader.style.borderColor = rec.accent;
  recBadge.style.background   = rec.accent;
  recSection.style.setProperty('--rec-accent', rec.accent);

  renderRecCard('recListNNA',    rec.nna);
  renderRecCard('recListSchool', rec.school);
  renderRecCard('recListFamily', rec.family);

  document.querySelectorAll('.rec-nav-btn').forEach(b => {
    const lvl = parseInt(b.dataset.level);
    b.classList.toggle('active', lvl === idx);
    b.style.setProperty('--btn-accent', RECOMMENDATIONS[lvl].accent);
  });
}

function renderRecCard(containerId, data) {
  const el = document.getElementById(containerId);
  el.innerHTML = `
    <li class="rec-area-title"><span>🧠</span> Área psicológica</li>
    ${data.psych.map(item => recItemHTML(item)).join('')}
    <li class="rec-area-divider"></li>
    <li class="rec-area-title"><span>🤲</span> Integración sensorial</li>
    ${data.sensory.map(item => recItemHTML(item)).join('')}
  `;
}

function recItemHTML({ icon, text }) {
  return `<li class="rec-item"><span class="rec-item-icon">${icon}</span><span class="rec-item-text">${text}</span></li>`;
}

function setupRecNav() {
  document.querySelectorAll('.rec-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => updateRecommendations(parseInt(btn.dataset.level)));
  });
  document.querySelectorAll('.scale-step').forEach(step => {
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      updateRecommendations(parseInt(step.dataset.level));
      recSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Nav ───────────────────────────────────────────────────────────────────────
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

// ── Reset / Calm ──────────────────────────────────────────────────────────────
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

function calmChild() {
  if (currentStateIdx === 0) { showToast('¡Ya estás bien! 😊 ☀️'); return; }
  showSpeech('Me siento mejor… gracias 💚');
  resetAll();
  showToast('¡Encontraste la calma! ☀️💚');
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 300); }, 2500);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

init();
