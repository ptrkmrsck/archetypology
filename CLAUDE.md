# ArcheTypology

Depth-psychological portraits of the sixteen MBTI types through John Beebe's eight-function model and James Hillman's archetypal psychology. Static site: pure HTML/CSS/JS, no build tools, no dependencies.

## Project Structure

```
index.html              Homepage: intro prose + nav to all 16 types
css/style.css           Single shared stylesheet (dark theme, serif, responsive)
archetypes/index.html   Reference page for the 8 archetypal positions
types/{type}/index.html 16 type portrait pages (~730 lines each, identical structure)
quiz/index.html         Shell for interactive quiz
quiz/quiz.js            Quiz logic, scoring, and all question data
```

All type pages share the same DOM skeleton:

1. Hero section with dominant function sigil (e.g., `<span>Ni</span>`)
2. Section I: Eight Archetypal Positions table + prose on each position
3. Section II: Governing Deity (mythological figure for the dominant)
4. Section III: Inferior Function as soul-longing
5. Section IV: Demonic/Daimonic eighth function
6. Section V: Shadow Chorus (positions 5, 6, 7 as h3 subsections)
7. Section VI: Spirit and Soul tension
8. Section VII: Synthesis
9. Section VIII: Governing Image (in `.governing-image` dark section)
10. `<section class="related-types">` with four cross-type links (see below)
11. `<nav class="type-nav">` with prev/next links

Dividers (`div.divider > span.line + span.dot + span.line`) separate every major section.

## Theoretical Framework

**John Beebe** extended Jung's four-function model to eight. Every type uses all eight cognitive functions, each in an archetypal role: Hero (1st), Good Parent (2nd), Eternal Child (3rd), Anima/Animus (4th), then four shadow positions: Opposing Personality (5th), Senex/Witch (6th), Trickster (7th), Daimon/Demon (8th). Shadow functions mirror conscious ones: the 5th opposes the 1st, the 6th shadows the 2nd, etc. What matters is the _relational tension_ between positions, not just the ordering.

**James Hillman** provides the depth lens. His archetypal psychology is polytheistic: the psyche is not a single ego integrating parts but a parliament of autonomous figures, each with legitimate claims. Key Hillman moves this site relies on:

- The inferior function is not a weakness to develop but a _god to honor_. It is chthonic, it belongs to the underworld.
- Shadow functions are _persons to meet_, not problems to solve. Personification over integration.
- The spirit/soul distinction: spirit moves upward (abstraction, transcendence, clarity); soul moves downward (depth, body, ambiguity, the particular). Most types default to spirit. Soul-making happens in the descent.
- Pathology is the soul's voice. Symptoms are not failures but visitations, the neglected god making itself known.
- The daimon (from _The Soul's Code_): each person carries an acorn-image, a soul's intention that may work against the ego's comfort.
- Hillman's ideas are paraphrased and woven into prose. Do not attribute paraphrases as quotations. All blockquotes on the site are verified exact quotations; any new blockquote must also be verified exact wording from a real source.

## Cognitive Function Stacks (Canonical Reference)

This is the authoritative reference for all sixteen types. Every type portrait, quiz result, and cross-type link must be consistent with these stacks. Do not improvise function assignments; consult this table.

### The Eight Archetypal Positions

| Position | Archetype            | Role                                                                                                                      |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1st      | Hero                 | The dominant function; the ego's strongest and most conscious instrument.                                                 |
| 2nd      | Good Parent          | The auxiliary; nurturing, responsible, deployed in service of others.                                                     |
| 3rd      | Eternal Child (Puer) | The tertiary; playful, vulnerable, a source of both delight and immaturity.                                               |
| 4th      | Anima/Animus         | The inferior; the soul-image, least conscious of the ego-syntonic functions, gateway to the unconscious.                  |
| 5th      | Opposing Personality | Shadow of the 1st; same function, opposite attitude. Feels stubborn, contrary, blocking.                                  |
| 6th      | Senex/Witch          | Shadow of the 2nd; critical, controlling, capable of cursing what the Good Parent blesses.                                |
| 7th      | Trickster            | Shadow of the 3rd; deceiving, double-binding, but also the agent of unexpected transformation.                            |
| 8th      | Daimon/Demon         | Shadow of the 4th; the deepest shadow, destructive when denied, daimonic when honored. Opposite attitude of the inferior. |

The shadow stack (positions 5–8) mirrors the conscious stack (1–4) with each function's attitude flipped: if the Hero is Ni, the Opposing Personality is Ne; if the Good Parent is Fe, the Senex is Fi; and so on.

### Complete Eight-Function Stacks

Format: `Hero / Good Parent / Eternal Child / Anima-Animus | Opposing Personality / Senex-Witch / Trickster / Daimon-Demon`

| Type | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENFJ | Fe  | Ni  | Se  | Ti  | Fi  | Ne  | Si  | Te  |
| ENFP | Ne  | Fi  | Te  | Si  | Ni  | Fe  | Ti  | Se  |
| ENTJ | Te  | Ni  | Se  | Fi  | Ti  | Ne  | Si  | Fe  |
| ENTP | Ne  | Ti  | Fe  | Si  | Ni  | Te  | Fi  | Se  |
| ESFJ | Fe  | Si  | Ne  | Ti  | Fi  | Se  | Ni  | Te  |
| ESFP | Se  | Fi  | Te  | Ni  | Si  | Fe  | Ti  | Ne  |
| ESTJ | Te  | Si  | Ne  | Fi  | Ti  | Se  | Ni  | Fe  |
| ESTP | Se  | Ti  | Fe  | Ni  | Si  | Te  | Fi  | Ne  |
| INFJ | Ni  | Fe  | Ti  | Se  | Ne  | Fi  | Te  | Si  |
| INFP | Fi  | Ne  | Si  | Te  | Fe  | Ni  | Se  | Ti  |
| INTJ | Ni  | Te  | Fi  | Se  | Ne  | Ti  | Fe  | Si  |
| INTP | Ti  | Ne  | Si  | Fe  | Te  | Ni  | Se  | Fi  |
| ISFJ | Si  | Fe  | Ti  | Ne  | Se  | Fi  | Te  | Ni  |
| ISFP | Fi  | Se  | Ni  | Te  | Fe  | Si  | Ne  | Ti  |
| ISTJ | Si  | Te  | Fi  | Ne  | Se  | Ti  | Fe  | Ni  |
| ISTP | Ti  | Se  | Ni  | Fe  | Te  | Si  | Ne  | Fi  |

### Theoretical Grounding

When writing or editing portrait prose, read [THEORY.md](THEORY.md) for Jung's phenomenological descriptions of each function-attitude and each Jungian type portrait. These are the bedrock; every portrait must honor them.

### Structural Rules

These rules are non-negotiable; they derive from the mathematical logic of the Beebe model:

- Every type uses all eight cognitive functions: Se, Si, Ne, Ni, Te, Ti, Fe, Fi. No function is absent; each occupies exactly one position.
- The shadow stack (5–8) is the attitude-flipped mirror of the conscious stack (1–4). If position 1 is Ni, position 5 is Ne. If position 2 is Fe, position 6 is Fi. Always.
- The inferior function (4th) is always the opposite attitude _and_ opposite judgment/perception axis from the dominant. If the Hero is Ni (introverted perceiving), the Anima/Animus is Se (extraverted perceiving). If the Hero is Te (extraverted judging), the Anima/Animus is Fi (introverted judging).
- The Daimon (8th) is the opposite attitude of the inferior (4th), making it the same function-attitude as the Hero's axis-opposite in the other attitude. This is why it is the deepest shadow: it is the furthest point from conscious identity.
- Extraverts lead with an extraverted function (1st position is always e-); introverts lead with an introverted function (1st position is always i-).
- The J/P letter in the MBTI code refers to the _first extraverted judging or perceiving function_, not necessarily the dominant. For introverts, this means the J/P letter describes the auxiliary, not the dominant. INFJ leads with Ni (perceiving), not Fe (judging). INFP leads with Fi (judging), not Ne (perceiving). This is the most common source of confusion; always verify against the table above.

## Writing Voice

The voice is **declarative, dense, and mythologically alive**. It reads like a depth-psychologist lecturing with conviction, not an encyclopedia hedging. Refer to the writings of C.G. Jung, James Hillman, and John Beebe for stylistic reference.

### The Depth Poet Register

The voice on this site is not expository prose decorated with myth. It is **mythological prose that happens to be precise**. The difference matters. In expository mode, the writer explains and then reaches for a metaphor to illustrate. In the depth poet register, the image _is_ the argument. "Hermes slips through the cracked door of the inferior function" is not a colorful restatement of a Jungian idea; it is the idea, arrived at through image rather than abstraction. If you find yourself writing a concept and then appending a metaphor, reverse the order. Lead with the image. Let the reader's psyche do the translation.

**Rhetorical moves to internalize:**

**Stay with the image.** Hillman's cardinal rule. When a metaphor appears, do not explain it, do not "unpack" it, do not pivot to clinical language. Extend it. Let it breathe. If you write "the Trickster sets fire to the hero's certainty," the next sentence should smell like smoke, not like a textbook.

- _Wrong:_ "Ti-Trickster disrupts Fe-Hero's relational harmony. This can manifest as inappropriate bluntness in social situations."
- _Right:_ "Ti-Trickster slips a blade between every word the Fe-Hero offers. The sentence that was meant to soothe arrives with an edge; the handshake has a knife in it. The ENFJ does not know where the sharpness came from. The Trickster always knows."

**Personify, do not mechanize.** Cognitive functions are not software modules. They are figures with desires, moods, and pathologies. Ne does not "generate possibilities"; Ne _wanders into a room and opens every drawer looking for something it cannot name_. Se does not "attend to sensory data"; Se _presses its face against the glass of the immediate world and refuses to look away_.

**Rhythm: the long sentence and the short.** The characteristic cadence alternates between dense, clause-rich sentences that accumulate meaning and short declarative strikes that land the point. The long sentence circles; the short sentence stabs. Example: "The INTJ builds cathedrals in the mind, vast architectures of implication and consequence, every spire a deduction, every buttress a contingency, the whole structure oriented toward a future only Ni can see. And then Se-Inferior walks in, kicks the cornerstone, and the cathedral shudders." The pattern is: _gather, gather, gather, strike._

**Colons as revelation.** Use the colon not for lists but for unveiling. The clause before the colon sets the expectation; the clause after overturns or deepens it. "The INFP's wound is not that they feel too much: it is that the world does not feel enough."

**Descent, not ascent.** The default motion of this prose is downward. Spirit rises, soul descends, and this is a soul-making project. When you find the prose climbing toward abstraction, resolution, or integration, pull it back down into body, symptom, image, earth. The inferior function lives underground. Write from there.

**Mythological figures have grammar.** When a god or archetype appears, give it active verbs, sensory presence, and specific action. "Apollo presides over the ENTJ's tertiary Se" is dead. "Apollo walks the bright corridors of sensory life, naming each thing he touches, making the particular shine with the unbearable clarity of noon" is alive. The figure should feel like it could turn and look at you.

**Do not resolve the tension.** Every type portrait holds irreconcilable opposites: the Hero and the Daimon, spirit and soul, the dominant's confidence and the inferior's longing. Do not synthesize these into comfortable wholes. The synthesis section (VII) should feel like a truce, not a victory. The soul is not healed; it is deepened.

### Do

- Write in flowing paragraphs. No bullet points in portrait prose.
- Use commas and semicolons to build long, muscular sentences. Colons to introduce.
- Treat mythological figures as real presences with agency, not decorative metaphors. "Cassandra whispers," not "this is like Cassandra."
- Use `<em>` for psychological emphasis on key phrases. Use `<strong>` when _introducing_ a named concept for the first time.
- Address the type in third person: "The INFJ's soul-image is..." not "Your soul-image is..."
- Use Jungian vocabulary without apology: chthonic, ego-syntonic, numinous, individuation, psychopomp. Trust the reader.
- Let the metaphor carry the argument. "The fire is useless in the sky" is better than explaining what that means.
- Each shadow function in Section V gets a mythological personification (Cassandra, Saturn, Loki, etc.) appropriate to that type's specific dynamics.
- All blockquotes on the site are verified exact quotations. Paraphrases of Hillman belong in prose, not set apart as quotations. Any new blockquote must be verified exact wording from a real source.

### Do Not

**NEVER use em-dashes (---, —, –).** Use commas, semicolons, colons, or restructure the sentence. This is the single most important style rule.

- No filler: "It's worth noting," "Interestingly," "In other words," "It's important to understand that"
- No hedging: "might," "perhaps," "arguably," "it could be said." Be declarative. Say what is.
- No listicles or numbered steps in portrait prose. Structure comes from sections and paragraphs.
- No self-help framing: "tips for growth," "how to improve," "strengths and weaknesses." This is phenomenology, not advice.
- No pop-psychology softening: "and that's okay," "there's no wrong way," "everyone is valid." Treat the reader as an adult encountering difficult ideas.
- No exclamation marks.
- No emoji.
- Do not "balance" every observation with its opposite. Say the hard thing. If Se-Demonic erupts as binge drinking, say so.

### Section-Specific Rules

- **III (Inferior Function):** Lead with numinous longing, then pathology. Hillman's order is god-first, symptom-second. Never translate "honor the inferior as a god" into scheduled practices ("carve out hours," "a space in the schedule"). The god does not want an appointment; devotional lists domesticate the underworld figure into a wellness program.
- **IV (Daimon/Demon):** Always name the 4th/8th same-axis, opposite-attitude structural relationship explicitly (e.g., "Se-inferior and Si-Daimon share the sensation axis"). This is what makes the 8th the deepest shadow; without it the section loses its theoretical anchor.
- **V (Shadow Chorus):** Each shadow figure subsection must state its mirroring relationship locally (5th opposes 1st, 6th shadows 2nd, 7th shadows 3rd), not just imply it.
- **VII (Synthesis):** "Truce not victory" means: no named life-tasks, no celebratory tributes ("the great gift of the ESFJ"), no altar-building translated into a weekly planner. The synthesis holds the paradox; it does not resolve it.

## HTML Conventions

- Indent with 2 spaces
- All archetype links point to `../../archetypes/index.html#anchor`
- Shadow rows in the stack table use `class="shadow-row"` with a `shadow-label` divider row
- Section numbers are uppercase Roman numerals in `<span class="section-number">`
- The governing image (Section VIII) uses `<section class="governing-image"><div class="inner">` and lives outside `<main>`
- The Related Types block uses `<section class="related-types"><div class="related-types-inner"><dl class="related-list">` with four `<div class="related-item">` entries, each a `<dt>` label + `<dd>` link. It lives outside `<main>`, between the governing image and `<nav class="type-nav">`.
- SVG phi icon is inlined in `.hero-back`, not an external file

## Related Types

Each type page has a compact "Related Types" apparatus showing four structurally meaningful relationships within the Beebe model:

| Label                | Definition                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Functional Twin**  | E↔I flip: same 4 conscious functions, opposite dominant orientation. Description: `same four functions, [introverted/extraverted] polarity` |
| **Shadow Pair**      | Their conscious stack (1–4) = your shadow stack (5–8). Description: `their conscious stack is your shadow`                                  |
| **Dominant Sibling** | Same Hero function, different Good Parent. Description: `shared [Fn]-Hero, [X] rather than [Y]`                                             |
| **Soul Mirror**      | Their stack is yours reversed; their Hero = your Inferior. Description: `their Hero is your Inferior`                                       |

Complete data:

| Type | Functional Twin | Shadow Pair | Dominant Sibling     | Soul Mirror |
| ---- | --------------- | ----------- | -------------------- | ----------- |
| ENFJ | INFJ            | INFP        | ESFJ (Fe, Si not Ni) | ISTP        |
| ENFP | INFP            | INFJ        | ENTP (Ne, Ti not Fi) | ISTJ        |
| ENTJ | INTJ            | INTP        | ESTJ (Te, Si not Ni) | ISFP        |
| ENTP | INTP            | INTJ        | ENFP (Ne, Fi not Ti) | ISFJ        |
| ESFJ | ISFJ            | ISFP        | ENFJ (Fe, Ni not Si) | INTP        |
| ESFP | ISFP            | ISFJ        | ESTP (Se, Ti not Fi) | INTJ        |
| ESTJ | ISTJ            | ISTP        | ENTJ (Te, Ni not Si) | INFP        |
| ESTP | ISTP            | ISTJ        | ESFP (Se, Fi not Ti) | INFJ        |
| INFJ | ENFJ            | ENFP        | INTJ (Ni, Te not Fe) | ESTP        |
| INFP | ENFP            | ENFJ        | ISFP (Fi, Se not Ne) | ESTJ        |
| INTJ | ENTJ            | ENTP        | INFJ (Ni, Fe not Te) | ESFP        |
| INTP | ENTP            | ENTJ        | ISTP (Ti, Se not Ne) | ESFJ        |
| ISFJ | ESFJ            | ESFP        | ISTJ (Si, Te not Fe) | ENTP        |
| ISFP | ESFP            | ESFJ        | INFP (Fi, Ne not Se) | ENTJ        |
| ISTJ | ESTJ            | ESTP        | ISFJ (Si, Fe not Te) | ENFP        |
| ISTP | ESTP            | ESTJ        | INTP (Ti, Ne not Se) | ENFJ        |

## Quiz Debug URLs

Results can be loaded directly via `quiz/index.html#r=` followed by 14 digits (one per question, each digit is the chosen option index). Sample URLs for testing results pages:

```
ENTP  quiz/index.html#r=01011000010100
INFJ  quiz/index.html#r=01010110100110
INTJ  quiz/index.html#r=01010110010100
ISFP  quiz/index.html#r=10100011110110
ESTJ  quiz/index.html#r=10101001001001
```
