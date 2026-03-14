# ArcheTypology

Depth-psychological portraits of the sixteen MBTI types through John Beebe's eight-function model and James Hillman's archetypal psychology. Static site: pure HTML/CSS/JS, no build tools, no dependencies.

## Project Structure

```
index.html              Homepage: intro prose + nav to all 16 types
css/style.css           Single shared stylesheet (dark theme, serif, responsive)
archetypes/index.html   Reference page for the 8 archetypal positions
types/{type}/index.html 16 type portrait pages (~700 lines each, identical template)
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
10. `<nav class="type-nav">` with prev/next links

Dividers (`div.divider > span.line + span.dot + span.line`) separate every major section.

## Theoretical Framework

**John Beebe** extended Jung's four-function model to eight. Every type uses all eight cognitive functions, each in an archetypal role: Hero (1st), Good Parent (2nd), Eternal Child (3rd), Anima/Animus (4th), then four shadow positions: Opposing Personality (5th), Senex/Witch (6th), Trickster (7th), Daimon/Demon (8th). Shadow functions mirror conscious ones: the 5th opposes the 1st, the 6th shadows the 2nd, etc. What matters is the *relational tension* between positions, not just the ordering.

**James Hillman** provides the depth lens. His archetypal psychology is polytheistic: the psyche is not a single ego integrating parts but a parliament of autonomous figures, each with legitimate claims. Key Hillman moves this site relies on:
- The inferior function is not a weakness to develop but a *god to honor*. It is chthonic, it belongs to the underworld.
- Shadow functions are *persons to meet*, not problems to solve. Personification over integration.
- The spirit/soul distinction: spirit moves upward (abstraction, transcendence, clarity); soul moves downward (depth, body, ambiguity, the particular). Most types default to spirit. Soul-making happens in the descent.
- Pathology is the soul's voice. Symptoms are not failures but visitations, the neglected god making itself known.
- The daimon (from *The Soul's Code*): each person carries an acorn-image, a soul's intention that may work against the ego's comfort.
- Quotes are paraphrased and attributed "After Hillman", not presented as direct quotations.

## Writing Voice

The voice is **declarative, dense, and mythologically alive**. It reads like a depth-psychologist lecturing with conviction, not an encyclopedia hedging. Study the ENTP and INFJ pages as the gold standard.

### Do

- Write in flowing paragraphs. No bullet points in portrait prose.
- Use commas and semicolons to build long, muscular sentences. Colons to introduce.
- Treat mythological figures as real presences with agency, not decorative metaphors. "Cassandra whispers," not "this is like Cassandra."
- Use `<em>` for psychological emphasis on key phrases. Use `<strong>` when *introducing* a named concept for the first time.
- Address the type in third person: "The INFJ's soul-image is..." not "Your soul-image is..."
- Use Jungian vocabulary without apology: chthonic, ego-syntonic, numinous, individuation, psychopomp. Trust the reader.
- Let the metaphor carry the argument. "The fire is useless in the sky" is better than explaining what that means.
- Each shadow function in Section V gets a mythological personification (Cassandra, Saturn, Loki, etc.) appropriate to that type's specific dynamics.
- Blockquotes are "After Hillman" paraphrases, except the rare direct quote (e.g., Heraclitus).

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
- SVG phi icon is inlined in `.hero-back`, not an external file

## Quiz Debug URLs

Results can be loaded directly via `quiz/index.html#r=` followed by 14 digits (one per question, each digit is the chosen option index). Sample URLs for testing results pages:

```
ENTP  quiz/index.html#r=01011000010100
INFJ  quiz/index.html#r=01010110100110
INTJ  quiz/index.html#r=01010110010100
ISFP  quiz/index.html#r=10100011110110
ESTJ  quiz/index.html#r=10101001001001
```
