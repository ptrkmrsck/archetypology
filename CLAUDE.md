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

## Writing Voice

The voice is **declarative, dense, and mythologically alive**. It reads like a depth-psychologist lecturing with conviction, not an encyclopedia hedging. Refer to the writings of C.G. Jung, James Hillman, and John Beebe for stylistic reference.

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

**NEVER use em-dashes (---, \u2014, \u2013).** Use commas, semicolons, colons, or restructure the sentence. This is the single most important style rule.

- No filler: "It's worth noting," "Interestingly," "In other words," "It's important to understand that"
- No hedging: "might," "perhaps," "arguably," "it could be said." Be declarative. Say what is.
- No listicles or numbered steps in portrait prose. Structure comes from sections and paragraphs.
- No self-help framing: "tips for growth," "how to improve," "strengths and weaknesses." This is phenomenology, not advice.
- No pop-psychology softening: "and that's okay," "there's no wrong way," "everyone is valid." Treat the reader as an adult encountering difficult ideas.
- No exclamation marks.
- No emoji.
- Do not "balance" every observation with its opposite. Say the hard thing. If Se-Demonic erupts as binge drinking, say so.

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
