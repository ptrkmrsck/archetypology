// quiz.js: Find Your Type personality quiz
// All quiz logic: question data, scoring, state management, DOM rendering

(function () {
  'use strict';

  // ============================================================
  // TYPE DATA
  // ============================================================

  const TYPES = {
    INFJ: { title: 'The Seer at the Threshold', stack: ['Ni','Fe','Ti','Se','Ne','Fi','Te','Si'] },
    INTJ: { title: 'The Architect of the Unseen', stack: ['Ni','Te','Fi','Se','Ne','Ti','Fe','Si'] },
    ISFJ: { title: 'The Keeper of the Living Archive', stack: ['Si','Fe','Ti','Ne','Se','Fi','Te','Ni'] },
    ISTJ: { title: 'The Keeper of the Threshold Stone', stack: ['Si','Te','Fi','Ne','Se','Ti','Fe','Ni'] },
    ENFP: { title: 'The Wanderer Who Loves', stack: ['Ne','Fi','Te','Si','Ni','Fe','Ti','Se'] },
    ENTP: { title: 'The Eternal Prometheid', stack: ['Ne','Ti','Fe','Si','Ni','Te','Fi','Se'] },
    ESFP: { title: 'The Body That Sings', stack: ['Se','Fi','Te','Ni','Si','Fe','Ti','Ne'] },
    ESTP: { title: 'The God Who Bleeds', stack: ['Se','Ti','Fe','Ni','Si','Te','Fi','Ne'] },
    INFP: { title: 'The Psalm-Keeper in the Forest', stack: ['Fi','Ne','Si','Te','Fe','Ni','Se','Ti'] },
    ISFP: { title: 'The Quiet Flame in the Body of the World', stack: ['Fi','Se','Ni','Te','Fe','Si','Ne','Ti'] },
    INTP: { title: 'The Architect of Invisible Cathedrals', stack: ['Ti','Ne','Si','Fe','Te','Ni','Se','Fi'] },
    ISTP: { title: 'The Hand That Thinks', stack: ['Ti','Se','Ni','Fe','Te','Si','Ne','Fi'] },
    ENFJ: { title: 'The Conductor of Souls', stack: ['Fe','Ni','Se','Ti','Fi','Ne','Si','Te'] },
    ESFJ: { title: "The Hearthkeeper's Vigil", stack: ['Fe','Si','Ne','Ti','Fi','Se','Ni','Te'] },
    ENTJ: { title: 'The Architect of Kingdoms', stack: ['Te','Ni','Se','Fi','Ti','Ne','Si','Fe'] },
    ESTJ: { title: "The Magistrate's Hidden Garden", stack: ['Te','Si','Ne','Fi','Ti','Se','Ni','Fe'] }
  };

  const ARCHETYPES = [
    { name: 'Hero / Heroine', id: 'hero' },
    { name: 'Good Parent', id: 'good-parent' },
    { name: 'Eternal Child', id: 'eternal-child' },
    { name: 'Anima / Animus', id: 'anima' },
    { name: 'Opposing Personality', id: 'opposing-personality' },
    { name: 'Senex / Witch', id: 'senex' },
    { name: 'Trickster', id: 'trickster' },
    { name: 'Daimon / Demon', id: 'daimon' }
  ];

  const FUNCTION_NAMES = {
    Ni: 'Introverted Intuition', Ne: 'Extraverted Intuition',
    Si: 'Introverted Sensation', Se: 'Extraverted Sensation',
    Ti: 'Introverted Thinking', Te: 'Extraverted Thinking',
    Fi: 'Introverted Feeling', Fe: 'Extraverted Feeling'
  };

  // Inferior function for each dominant
  const INFERIOR_MAP = {
    Ni: 'Se', Ne: 'Si', Si: 'Ne', Se: 'Ni',
    Ti: 'Fe', Te: 'Fi', Fi: 'Te', Fe: 'Ti'
  };


  // ============================================================
  // QUESTION DATA
  // ============================================================

  // Phase 1: "What Breaks" (Q1-4) -- Inferior Function Anchoring
  // Phase 2: "What You Lead With" (Q5-8) -- Dominant Function Identification
  // Phase 3: "The Axes" (Q9-12) -- Attitude Discrimination

  const QUESTIONS = [

    // ── Phase 1: What Breaks ────────────────────────────────────
    // Attitude-neutral: identify the AXIS of weakness, not the specific function.
    // Phase 3 resolves the attitude (i vs e) later.

    {
      phase: 1,
      phaseLabel: 'What Breaks',
      text: 'Which of these broad domains feels more like a struggle: something you can learn to do, but that requires disproportionate effort compared to your natural gifts?',
      options: [
        {
          text: 'The concrete and sensory world: maintaining routines, attending to physical details, staying grounded in what is tangible, proven, and immediately present.',
          scores: { Si: 2, Se: 2 },
          explanation: 'Difficulty with the sensing domain suggests your natural home is in the intuitive world: the realm of pattern, possibility, and abstraction.'
        },
        {
          text: "The abstract and intuitive world: trusting hunches, reading between the lines, navigating hidden patterns, envisioning what hasn't happened yet.",
          scores: { Ni: 2, Ne: 2 },
          explanation: 'Difficulty with the intuitive domain suggests your natural home is in the sensing world: the realm of concrete experience, proven methods, and tangible reality.'
        }
      ]
    },

    {
      phase: 1,
      phaseLabel: 'What Breaks',
      text: 'And on the other axis: which of these feels more like foreign territory?',
      options: [
        {
          text: 'The world of impersonal logic: building analytical frameworks, demanding structural consistency, reasoning that sets aside the human dimension.',
          scores: { Ti: 2, Te: 2 },
          explanation: 'Difficulty with the thinking domain suggests your natural strength lies in the feeling world: values, relationships, and emotional attunement.'
        },
        {
          text: 'The world of values and emotion: knowing what you authentically feel, navigating relationships gracefully, tending to the moral and relational dimension of life.',
          scores: { Fi: 2, Fe: 2 },
          explanation: 'Difficulty with the feeling domain suggests your natural strength lies in the thinking world: logic, analysis, and systematic reasoning.'
        }
      ]
    },

    {
      phase: 1,
      phaseLabel: 'What Breaks',
      text: 'Under prolonged stress, which of these patterns do you recognize in yourself?',
      subtext: 'When stress persists long enough, a side of us we barely recognize can take over, acting out in ways that feel foreign to our usual self.',
      options: [
        {
          text: 'I get hijacked by the concrete: either fixating obsessively on bodily symptoms and rigid routines, or plunging into reckless sensory excess. The physical world overwhelms me in ways that feel foreign.',
          scores: { Si: 3, Se: 3 },
          explanation: 'When the sensing function floods an intuitive psyche, the body and the concrete world demand their due: crudely, urgently, in ways the ego cannot control.'
        },
        {
          text: 'I get hijacked by abstraction: either spiraling into catastrophic worst-case possibilities, or seized by dark portentous visions of doom. The meaning-making goes haywire.',
          scores: { Ni: 3, Ne: 3 },
          explanation: 'When the intuitive function floods a sensing psyche, meaning and possibility overwhelm: ominous, ungrounded, in ways the ego cannot direct.'
        }
      ]
    },

    {
      phase: 1,
      phaseLabel: 'What Breaks',
      text: 'And when your defenses are down, which failure mode do you recognize?',
      options: [
        {
          text: "Logic becomes a weapon: either harsh critical outbursts about competence, or cold analytical withdrawal that contradicts your usual warmth. The thinking function turns destructive.",
          scores: { Te: 3, Ti: 3 },
          explanation: 'When the thinking function floods a feeling psyche, logic arrives without nuance: blunt, harsh, and severed from its usual relational context.'
        },
        {
          text: 'Emotion overwhelms: either being blindsided by intense personal feelings wildly out of proportion, or erupting with desperate relational need that feels foreign. The feeling function floods everything.',
          scores: { Fi: 3, Fe: 3 },
          explanation: "When the feeling function floods a thinking psyche, emotion arrives without skill: raw, disproportionate, and untethered from the ego's usual composure."
        }
      ]
    },

    // ── Phase 2: What You Lead With ─────────────────────────────

    {
      phase: 2,
      phaseLabel: 'What You Lead With',
      text: 'When you encounter something genuinely new and unfamiliar, what is your first instinct?',
      options: [
        {
          text: 'See what it connects to: branch outward into possibilities, tangential ideas, and contexts no one else has considered. One thing becomes many.',
          scores: { Ne: 3 },
          explanation: 'This divergent branching is the signature of extraverted intuition: the function that sees what could be.'
        },
        {
          text: 'Let it settle inward: wait for a singular pattern, a convergence, a symbolic resonance to emerge from beneath conscious thought.',
          scores: { Ni: 3 },
          explanation: 'This convergent inner knowing is the signature of introverted intuition: the function that perceives what is becoming.'
        },
        {
          text: 'Engage it directly: touch it, try it, immerse in its full sensory reality right now. Understanding begins with contact.',
          scores: { Se: 3 },
          explanation: 'This direct sensory engagement is the signature of extraverted sensation: the function that lives in what is.'
        },
        {
          text: 'Compare it to what you know: check it against your internal archive of lived experience, prior instances, and trusted precedents.',
          scores: { Si: 3 },
          explanation: 'This referencing of accumulated experience is the signature of introverted sensation: the function that preserves what has been.'
        }
      ]
    },

    {
      phase: 2,
      phaseLabel: 'What You Lead With',
      text: 'When you must make an important decision, where does your mind go first?',
      options: [
        {
          text: 'To internal logical coherence: does this make sense on its own terms? Is the reasoning structurally sound, independent of convention or consensus?',
          scores: { Ti: 3 },
          explanation: 'This demand for internal consistency is the signature of introverted thinking: the function that builds frameworks from first principles.'
        },
        {
          text: 'To measurable effectiveness: what actually works? What are the outcomes, the metrics, the most efficient path to results?',
          scores: { Te: 3 },
          explanation: 'This orientation toward results is the signature of extraverted thinking: the function that organizes the external world.'
        },
        {
          text: 'To personal values: does this align with what I know to be right in my core? Can I live with this choice and still be who I am?',
          scores: { Fi: 3 },
          explanation: 'This consultation of an inner moral compass is the signature of introverted feeling: the function that knows what matters.'
        },
        {
          text: "To the group's needs: who is affected? What does the social fabric need? How will this decision land with the people involved?",
          scores: { Fe: 3 },
          explanation: 'This attunement to collective needs is the signature of extraverted feeling: the function that tends the relational field.'
        }
      ]
    },

    {
      phase: 2,
      phaseLabel: 'What You Lead With',
      text: 'Which of these activities gives you the most energy rather than draining you?',
      options: [
        {
          text: 'Brainstorming sessions where one idea leads to seven: tangents, hypotheticals, unexpected connections across seemingly unrelated domains.',
          scores: { Ne: 3 },
          explanation: 'If divergent exploration energizes you, extraverted intuition may occupy a leading archetypal position.'
        },
        {
          text: 'Deep contemplation where scattered data collapses into a singular insight: the moment when you suddenly see where everything is converging.',
          scores: { Ni: 3 },
          explanation: 'If convergent insight energizes you, introverted intuition may occupy a leading archetypal position.'
        },
        {
          text: 'Direct physical engagement: sports, hands-on work, navigating real-world environments with full sensory awareness and responsive precision.',
          scores: { Se: 3 },
          explanation: 'If sensory immersion energizes you, extraverted sensation may occupy a leading archetypal position.'
        },
        {
          text: 'Revisiting and refining what you know: organizing accumulated experience, applying tested methods, bringing depth and detail to familiar territory.',
          scores: { Si: 3 },
          explanation: 'If building on proven experience energizes you, introverted sensation may occupy a leading archetypal position.'
        }
      ]
    },

    {
      phase: 2,
      phaseLabel: 'What You Lead With',
      text: 'Which role do you slip into most naturally, even without trying?',
      options: [
        {
          text: 'The one who sees the flaw in the argument: who notices when reasoning is unsound, a model is incomplete, or a principle has been violated.',
          scores: { Ti: 3 },
          explanation: 'A natural orientation toward logical precision suggests introverted thinking is prominent in your stack.'
        },
        {
          text: 'The one who gets things organized: who creates plans, delegates effectively, and makes systems work better for everyone involved.',
          scores: { Te: 3 },
          explanation: 'A natural orientation toward practical organization suggests extraverted thinking is prominent in your stack.'
        },
        {
          text: 'The one who knows what matters: who quietly holds a moral center, who senses when something is sacred or when a boundary has been crossed.',
          scores: { Fi: 3 },
          explanation: 'A natural moral compass suggests introverted feeling is prominent in your stack.'
        },
        {
          text: 'The one who reads the room: who attunes to what others need, who creates warmth and cohesion, who tends the emotional atmosphere.',
          scores: { Fe: 3 },
          explanation: 'A natural gift for emotional attunement suggests extraverted feeling is prominent in your stack.'
        }
      ]
    },

    // ── Phase 3: The Axes ───────────────────────────────────────

    {
      phase: 3,
      phaseLabel: 'The Axes',
      text: 'Two people both call themselves "intuitive." Which description fits you?',
      options: [
        {
          text: 'My intuition is divergent: one thing becomes many. I see six possible meanings, seven connections, a web radiating outward. The thrill is in the branching. I rarely arrive at one answer; I arrive at a field of possibilities.',
          scores: { Ne: 3, Ni: -1 },
          explanation: 'Divergent intuition, the multiplication of possibility, is the signature of extraverted intuition (Ne).'
        },
        {
          text: 'My intuition is convergent: many things become one. Disparate pieces collapse into a singular pattern, a felt sense of "this is where it is going." I arrive at certainty I cannot fully explain.',
          scores: { Ni: 3, Ne: -1 },
          explanation: 'Convergent intuition, the crystallization of pattern, is the signature of introverted intuition (Ni).'
        }
      ]
    },

    {
      phase: 3,
      phaseLabel: 'The Axes',
      text: 'Two people both value "experience." Which description fits you?',
      options: [
        {
          text: 'Experience means the live moment: the full sensory voltage of right now. I trust what I can see, touch, taste. The present is where reality lives. I respond to what is happening.',
          scores: { Se: 3, Si: -1 },
          explanation: 'Present-tense sensory engagement, reality as immediate encounter, is the signature of extraverted sensation (Se).'
        },
        {
          text: 'Experience means the accumulated record: what I have lived through, verified, and stored. I trust what has been tested. The past is where authority lives. I draw on what I know.',
          scores: { Si: 3, Se: -1 },
          explanation: 'Accumulated experiential wisdom, reality as verified archive, is the signature of introverted sensation (Si).'
        }
      ]
    },

    {
      phase: 3,
      phaseLabel: 'The Axes',
      text: 'Two people both value "logic." Which description fits you?',
      options: [
        {
          text: 'My logic is external and results-oriented. Does it work? Is it efficient? Can I measure it? I organize the outside world. If a framework is elegant but produces no results, it is useless.',
          scores: { Te: 3, Ti: -1 },
          explanation: 'Logic oriented toward external effectiveness and measurable outcomes is the signature of extraverted thinking (Te).'
        },
        {
          text: 'My logic is internal and coherence-oriented. Does it make sense on its own terms? Is the model consistent? I build internal architectures. If a result is achieved through unsound reasoning, it is illegitimate.',
          scores: { Ti: 3, Te: -1 },
          explanation: 'Logic oriented toward internal consistency and structural integrity is the signature of introverted thinking (Ti).'
        }
      ]
    },

    {
      phase: 3,
      phaseLabel: 'The Axes',
      text: 'Two people both care about "values." Which description fits you?',
      options: [
        {
          text: 'My values are interpersonal: I read the room, attune to what others need, and create harmony. What matters is how people are doing. I experience ethics as a social fabric.',
          scores: { Fe: 3, Fi: -1 },
          explanation: 'Values oriented toward collective harmony and relational attunement is the signature of extraverted feeling (Fe).'
        },
        {
          text: 'My values are personal: I consult an inner compass that is mine alone. What matters is whether I can live with myself. I experience ethics as individual authenticity.',
          scores: { Fi: 3, Fe: -1 },
          explanation: 'Values oriented toward personal authenticity and inner conviction is the signature of introverted feeling (Fi).'
        }
      ]
    }
  ];


  // ── Phase 4: Validation questions (generated dynamically) ─────

  // Q13: Dom-inferior axis polarity check
  const VALIDATION_DOM = {
    Ne: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be seeing possibilities everywhere: connections, potentials, and meanings that radiate outward from everything you encounter. Does your greatest vulnerability involve the opposite: maintaining consistent routines, honoring bodily needs, and staying grounded in the concrete details of daily life?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between possibility and routine feels like a central theme of my life.', confirm: true, explanation: 'This confirms the Ne-Si axis: extraverted intuition as Hero with introverted sensation as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Ni: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be seeing where things are converging: a deep, often inexplicable knowing about patterns and trajectories. Does your greatest vulnerability involve the opposite: engaging the raw sensory world, responding to physical demands, and staying present in the immediate moment?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between inner vision and outer physicality feels like a central theme.', confirm: true, explanation: 'This confirms the Ni-Se axis: introverted intuition as Hero with extraverted sensation as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Se: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be engaging the world in its full sensory immediacy: responding to what is happening right now with precision and presence. Does your greatest vulnerability involve the opposite: trusting abstract long-range vision, reading symbolic meaning in events, and planning for a future you cannot yet see?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between present engagement and abstract foresight feels central.', confirm: true, explanation: 'This confirms the Se-Ni axis: extraverted sensation as Hero with introverted intuition as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Si: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be your extraordinary fidelity to lived experience: a detailed inner archive of what has been tested and proven over time. Does your greatest vulnerability involve the opposite: navigating open-ended novelty, entertaining wild possibilities, and trusting ideas that have no precedent?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between trusted experience and untested possibility feels central.', confirm: true, explanation: 'This confirms the Si-Ne axis: introverted sensation as Hero with extraverted intuition as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Te: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be organizing the external world: creating effective systems, measurable outcomes, and efficient structures. Does your greatest vulnerability involve the opposite: navigating your own private emotional landscape, knowing what you authentically feel, and expressing personal values directly?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between external order and inner feeling feels central.', confirm: true, explanation: 'This confirms the Te-Fi axis: extraverted thinking as Hero with introverted feeling as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Ti: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be building internal logical architectures: frameworks that must cohere on their own terms, independent of convention. Does your greatest vulnerability involve the opposite: reading emotional atmospheres, managing social dynamics, and navigating the interpersonal world with ease?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between internal logic and social harmony feels central.', confirm: true, explanation: 'This confirms the Ti-Fe axis: introverted thinking as Hero with extraverted feeling as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Fe: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be reading and orchestrating the emotional atmosphere: creating harmony, tending to relationships, and ensuring everyone feels seen. Does your greatest vulnerability involve the opposite: cold impersonal logic, analytical detachment, and reasoning that ignores the human dimension?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between relational warmth and analytical detachment feels central.', confirm: true, explanation: 'This confirms the Fe-Ti axis: extraverted feeling as Hero with introverted thinking as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    },
    Fi: {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'Your greatest gift seems to be your deep inner moral compass: a felt sense of what is sacred, what is authentic, and what deserves allegiance. Does your greatest vulnerability involve the opposite: institutional systems, bureaucratic efficiency, performance metrics, and organizing the external world?',
      options: [
        { text: 'Yes, that resonates strongly. The tension between inner values and external systems feels central.', confirm: true, explanation: 'This confirms the Fi-Te axis: introverted feeling as Hero with extraverted thinking as the inferior Anima/Animus.' },
        { text: 'Not really. That tension does not feel central to my experience.', confirm: false, explanation: 'This may suggest a different dominant function. The scores will reveal more.' }
      ]
    }
  };

  // Q14 compares the two Parent/Child pairings possible for each Hero.
  const ROLE_EXAMPLES = {
    Ti: { care: 'I help them find the assumption their decision turns on.', play: 'taking an argument apart to see whether it holds together' },
    Fi: { care: 'I give them room to name what they would regret giving up.', play: 'trying on a character or a song to see what feels true to me' },
    Fe: { care: 'I help them find words for the conversation they need to have.', play: 'getting a laugh and seeing who picks up the joke' },
    Te: { care: 'I help them design a small test that will tell them what works.', play: 'turning a stray idea into a contest or a working prototype' },
    Ne: { care: 'I offer another way to frame the choice, then see what possibilities open up.', play: 'following a far-fetched idea just to see where it goes' },
    Ni: { care: 'I help them trace where their choices seem to be taking them.', play: 'letting an image unfold until a hidden theme comes into view' },
    Se: { care: 'I try the next step alongside them so they can feel what it involves.', play: 'improvising with whatever is within reach' },
    Si: { care: 'I recall a similar moment with them and ask what helped last time.', play: 'recreating a familiar ritual down to the little details' }
  };

  // Keep option order stable for previously shared answer links.
  const AUX_PAIRS = {
    Ne: ['Ti', 'Fi'], Ni: ['Te', 'Fe'], Se: ['Ti', 'Fi'], Si: ['Te', 'Fe'],
    Te: ['Ni', 'Si'], Ti: ['Ne', 'Se'], Fe: ['Ni', 'Si'], Fi: ['Ne', 'Se']
  };

  function auxiliaryQuestion(hero) {
    return {
      phase: 4, phaseLabel: 'The Whole Pattern',
      text: 'A friend is stuck on a decision. Once you understand the problem, what help do you keep offering?',
      subtext: 'Think of someone you know well. The second part of each answer describes what comes out when you can play.',
      options: AUX_PAIRS[hero].map(function (parent) {
        var child = INFERIOR_MAP[parent];
        return {
          text: ROLE_EXAMPLES[parent].care + ' On my own, I enjoy ' + ROLE_EXAMPLES[child].play + '.',
          scores: { [parent]: 2 },
          explanation: 'In this pairing, ' + FUNCTION_NAMES[parent] + ' takes the Good Parent role. ' +
            FUNCTION_NAMES[child] + ' has the more playful freedom of the Eternal Child.'
        };
      })
    };
  }

  // ============================================================
  // STATE
  // ============================================================

  var scores = { Ne: 0, Ni: 0, Se: 0, Si: 0, Te: 0, Ti: 0, Fe: 0, Fi: 0 };
  var inferiorScores = { Ne: 0, Ni: 0, Se: 0, Si: 0, Te: 0, Ti: 0, Fe: 0, Fi: 0 };
  var questions = [];
  var currentIndex = 0;
  var tentativeDominant = null;
  var answers = [];


  // ============================================================
  // DOM HELPERS
  // ============================================================

  function $(sel) { return document.querySelector(sel); }

  function fadeIn(el) {
    el.style.display = '';
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }

  function fadeOut(el) {
    return new Promise(function (resolve) {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-8px)';
      setTimeout(function () {
        el.style.display = 'none';
        resolve();
      }, 400);
    });
  }

  function ordinal(n) {
    if (n === 1) return '1st';
    if (n === 2) return '2nd';
    if (n === 3) return '3rd';
    return n + 'th';
  }


  // ============================================================
  // TYPE DETERMINATION
  // ============================================================

  function findDominant() {
    var best = null, bestScore = -Infinity;
    for (var fn in scores) {
      var inf = INFERIOR_MAP[fn];
      var combined = scores[fn] * 2 + (inferiorScores[inf] || 0);
      if (combined > bestScore) {
        bestScore = combined;
        best = fn;
      }
    }
    return best;
  }

  function rankTypes() {
    var ranked = [];
    for (var code in TYPES) {
      var stack = TYPES[code].stack;
      var dom = stack[0], aux = stack[1], tert = stack[2], inf = stack[3];

      // Positive signal: direct scores for ego-syntonic functions
      var fit = scores[dom] * 3 + scores[aux] * 2 + scores[tert] * 1;

      // Inferior signal: high inferior score from Phase 1 SUPPORTS this type
      fit += inferiorScores[inf] * 2;

      // Shadow penalty: if shadow functions outscore ego-syntonic ones
      var shadowPenalty = 0;
      for (var s = 4; s < 8; s++) {
        if (scores[stack[s]] > scores[dom]) shadowPenalty += 2;
        if (scores[stack[s]] > scores[aux]) shadowPenalty += 1;
      }
      fit -= shadowPenalty;

      ranked.push({ code: code, fit: fit, title: TYPES[code].title, stack: stack });
    }
    ranked.sort(function (a, b) { return b.fit - a.fit; });
    return ranked;
  }


  // ============================================================
  // RENDERING
  // ============================================================

  function renderProgress() {
    var total = QUESTIONS.length + 2; // Two final questions depend on the first twelve answers.
    var dots = '';
    for (var i = 0; i < total; i++) {
      var cls = i < currentIndex ? 'done' : i === currentIndex ? 'current' : '';
      dots += '<span class="quiz-dot ' + cls + '"></span>';
    }
    return '<div class="quiz-progress" aria-hidden="true">' + dots + '</div>';
  }

  function renderQuestion(q) {
    var container = $('#quiz-container');
    container.innerHTML =
      renderProgress() +
      '<div class="quiz-phase-label">' + 'Question ' + (currentIndex + 1) + ' of ' + (QUESTIONS.length + 2) + ' · ' + q.phaseLabel + '</div>' +
      '<h2 id="quiz-question" class="quiz-question-text">' + q.text + '</h2>' +
      (q.subtext ? '<p class="quiz-question-subtext">' + q.subtext + '</p>' : '') +
      '<p class="quiz-instruction" id="quiz-instruction">Choose one answer.</p>' +
      '<div class="quiz-options" role="radiogroup" aria-labelledby="quiz-question" aria-describedby="quiz-instruction">' +
        q.options.map(function (opt, i) {
          return '<label class="quiz-option">' +
                   '<input type="radio" name="quiz-answer" value="' + i + '">' +
                   '<span>' + opt.text + '</span>' +
                 '</label>';
        }).join('') +
      '</div>' +
      '<div class="quiz-explanation" style="display: none"></div>';

    fadeIn(container);

    container.querySelectorAll('input[name="quiz-answer"]').forEach(function (input) {
      input.addEventListener('change', function () {
        handleAnswer(q, Number(input.value));
      });
    });
  }

  var currentSelection = null; // tracks selected option index for the current question

  function applyScores(q, opt, sign) {
    if (opt.scores) {
      var target = q.phase === 1 ? inferiorScores : scores;
      for (var fn in opt.scores) {
        target[fn] += opt.scores[fn] * sign;
      }
    }
    if (opt.confirm !== undefined && tentativeDominant) {
      var delta = opt.confirm ? 1 : -1;
      scores[tentativeDominant] += delta * sign;
    }
  }

  function handleAnswer(q, optIndex) {
    // Reverse previous selection if changing answer
    if (currentSelection !== null) {
      applyScores(q, q.options[currentSelection], -1);
    }

    currentSelection = optIndex;
    var opt = q.options[optIndex];

    // Apply scores for new selection
    applyScores(q, opt, 1);

    // Show explanation
    var expEl = $('.quiz-explanation');
    expEl.textContent = opt.explanation;
    expEl.style.display = '';
    fadeIn(expEl);

    // Show Continue button (only once per question)
    if (!document.querySelector('.quiz-continue')) {
      var continueBtn = document.createElement('button');
      continueBtn.className = 'quiz-continue';
      continueBtn.textContent = 'Continue';
      continueBtn.addEventListener('click', function () { advance(); });
      expEl.parentNode.insertBefore(continueBtn, expEl.nextSibling);
    }
  }

  function advance() {
    answers[currentIndex] = currentSelection;
    currentSelection = null;
    currentIndex++;

    // After Phase 3 (12 static questions answered): generate validation questions
    if (currentIndex === 12 && !tentativeDominant) {
      tentativeDominant = findDominant();
      if (VALIDATION_DOM[tentativeDominant]) {
        questions.push(VALIDATION_DOM[tentativeDominant]);
      }
      questions.push(auxiliaryQuestion(tentativeDominant));
    }

    // Quiz complete
    if (currentIndex >= questions.length) {
      fadeOut($('#quiz-container')).then(function () {
        showResults();
      });
      return;
    }

    fadeOut($('#quiz-container')).then(function () {
      renderQuestion(questions[currentIndex]);
    });
  }


  // ============================================================
  // RESULTS
  // ============================================================

  function showResults() {
    var ranked = rankTypes();
    var primary = ranked[0];
    var type = TYPES[primary.code];
    var dom = type.stack[0];
    var aux = type.stack[1];
    var inf = type.stack[3];

    // Stack table
    var stackRows = type.stack.map(function (fn, i) {
      var arch = ARCHETYPES[i];
      var shadowClass = i >= 4 ? ' class="shadow-row"' : '';
      var shadowLabel = i === 4
        ? '<tr><td colspan="3"><span class="shadow-label">Shadow Functions</span></td></tr>'
        : '';
      return shadowLabel +
        '<tr' + shadowClass + '>' +
          '<td class="pos">' + ordinal(i + 1) + '</td>' +
          '<td class="fn">' + fn + '</td>' +
          '<td class="archetype"><a href="../archetypes/index.html#' + arch.id + '">' + arch.name + '</a></td>' +
        '</tr>';
    }).join('');

    // Top matches
    var topMatches = ranked.slice(0, 3).map(function (r, i) {
      return '<a href="../types/' + r.code.toLowerCase() + '/" class="quiz-match' + (i === 0 ? ' quiz-match-primary' : '') + '">' +
        '<span class="quiz-match-code">' + r.code + '</span>' +
        '<span class="quiz-match-title">' + r.title + '</span>' +
      '</a>';
    }).join('');

    // Close-result advisory
    var gap = ranked[0].fit - ranked[1].fit;
    var closeAdvisory = '';
    if (gap <= 3) {
      closeAdvisory =
        '<div class="quiz-close-result">' +
          '<p>Your results were close between <strong>' + ranked[0].code + '</strong> and <strong>' + ranked[1].code + '</strong>. ' +
          (primary.stack[0] === ranked[1].stack[0]
            ? 'Both lead with ' + dom + '. Compare what each Good Parent offers a friend: “' +
              ROLE_EXAMPLES[aux].care + '” or “' + ROLE_EXAMPLES[ranked[1].stack[1]].care + '”'
            : 'Think of a moment when you felt most like yourself. Which came first, ' +
              FUNCTION_NAMES[dom] + ' or ' + FUNCTION_NAMES[ranked[1].stack[0]] + '?') + '</p>' +
        '</div>';
    }

    var container = $('#quiz-container');
    container.style.display = '';
    container.innerHTML =
      '<div class="quiz-results">' +
        '<div class="divider">' +
          '<span class="line"></span>' +
          '<span class="dot"></span>' +
          '<span class="line"></span>' +
        '</div>' +

        '<h2 class="quiz-result-heading">' + primary.code + ': <em>' + type.title + '</em></h2>' +

        '<div class="quiz-reasoning">' +
          '<p>In the ' + primary.code + ' portrait, the Hero leads with <strong>' + FUNCTION_NAMES[dom] + '</strong>. ' +
          'The Good Parent offers ' + FUNCTION_NAMES[aux] + '. Think of a time a friend depended on you. ' +
          'Would they recognize this offer of help? “' + ROLE_EXAMPLES[aux].care + '”</p>' +
          '<p>The Eternal Child finds pleasure in ' + ROLE_EXAMPLES[type.stack[2]].play + '. ' +
          'The Anima/Animus carries <strong>' + FUNCTION_NAMES[inf] + '</strong>. ' +
          'Consider when you long for someone else to bring that quality into your life, as well as when it feels difficult under stress.</p>' +
        '</div>' +

        closeAdvisory +

        '<h3 class="quiz-section-label">Your Archetypal Map</h3>' +
        '<div class="stack-wrapper">' +
          '<table class="stack-table">' +
            '<thead><tr><th>Position</th><th>Function</th><th>Archetype</th></tr></thead>' +
            '<tbody>' + stackRows + '</tbody>' +
          '</table>' +
        '</div>' +

        '<h3 class="quiz-section-label">Explore Your Matches</h3>' +
        '<div class="quiz-matches">' + topMatches + '</div>' +

        '<div class="quiz-links">' +
          '<a href="../archetypes/" class="index-archetype-link">Learn about the Archetypes</a>' +
          '<button class="quiz-copy-link" onclick="this.textContent=\'Copied!\';navigator.clipboard.writeText(window.location.href);setTimeout(function(){document.querySelector(\'.quiz-copy-link\').textContent=\'Copy Link\'},2000)">Copy Link</button>' +
        '</div>' +

        '<div class="quiz-caveat">' +
          '<p>This quiz is a starting point for exploration, not a diagnosis. The best way ' +
          'to confirm your type is to read the full portrait and see whether the ' +
          'archetypal dynamics resonate, particularly the shadow functions, which reveal ' +
          'as much about a type as the Hero does. No fourteen questions can map the full ' +
          'complexity of a psyche; what they can do is point you toward the right door.</p>' +
        '</div>' +

        '<div class="quiz-retake">' +
          '<a href="' + window.location.pathname + '">Retake Quiz</a>' +
        '</div>' +
      '</div>';

    fadeIn(container);

    // Save answers to URL for persistence
    if (answers.length > 0) {
      history.replaceState(null, '', '#r=' + answers.join(''));
    }
  }


  // ============================================================
  // URL REPLAY
  // ============================================================

  function replayFromURL(answerStr) {
    // Replay the 12 static questions
    for (var i = 0; i < 12; i++) {
      var optIndex = parseInt(answerStr[i]);
      var q = questions[i];
      if (isNaN(optIndex) || optIndex >= q.options.length) return false;
      applyScores(q, q.options[optIndex], 1);
      answers[i] = optIndex;
    }

    // Generate validation questions (same path as advance())
    tentativeDominant = findDominant();
    if (VALIDATION_DOM[tentativeDominant]) {
      questions.push(VALIDATION_DOM[tentativeDominant]);
    }
    questions.push(auxiliaryQuestion(tentativeDominant));

    // Replay validation questions
    for (var i = 12; i < answerStr.length && i < questions.length; i++) {
      var optIndex = parseInt(answerStr[i]);
      var q = questions[i];
      if (isNaN(optIndex) || optIndex >= q.options.length) return false;
      applyScores(q, q.options[optIndex], 1);
      answers[i] = optIndex;
    }

    currentIndex = questions.length;
    return true;
  }


  // ============================================================
  // INIT
  // ============================================================

  function init() {
    questions = QUESTIONS.slice();

    var preface = $('#quiz-preface');
    var container = $('#quiz-container');

    // Check for saved results in URL hash
    var hash = window.location.hash;
    if (hash && hash.indexOf('#r=') === 0) {
      var answerStr = hash.substring(3);
      if (/^[0-3]{14}$/.test(answerStr) && replayFromURL(answerStr)) {
        preface.style.display = 'none';
        showResults();
        return;
      }
    }

    var beginBtn = $('#quiz-begin');
    beginBtn.addEventListener('click', function () {
      fadeOut(preface).then(function () {
        container.style.display = '';
        renderQuestion(questions[0]);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
