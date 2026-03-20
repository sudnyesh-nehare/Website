# SymbiansLab — Design Document

> Design decisions, creative direction, and visual philosophy behind the site.

---

## Design Philosophy

The site is built around one idea — **restraint**.

Most startup sites try to say everything. This one says almost nothing — and means all of it.

Black and white only. No color. No gradients (except subtle overlays). No icons except in the contact section. The pixel game is the only "loud" element — everything else is quiet and intentional.

---

## Visual Identity

### Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#000000` | Entire site background |
| Primary text | `#FFFFFF` | Headlines, important text |
| Muted text | `rgba(255,255,255,0.4)` | Body copy, descriptions |
| Very muted | `rgba(255,255,255,0.2)` | Labels, captions, metadata |
| Borders | `rgba(255,255,255,0.08)` | Section dividers, stat borders |
| Outlined text | `WebkitTextStroke: 1px rgba(255,255,255,0.2)` | Ghost headline lines |

No accent color. No brand color. Pure black and white — the restraint is the identity.

---

## Typography

### Fonts

| Font | Type | Usage |
|---|---|---|
| Press Start 2P | Display / Pixel | Section headlines only |
| Courier Prime | Monospace | All body text, labels, captions, buttons |

### Why this combination?

`Press Start 2P` is aggressive and distinctive — it signals "builder", "coder", "maker". But it is completely unreadable at small sizes.

`Courier Prime` is warm monospace — readable at any size, has a typewriter/terminal quality that matches the pixel aesthetic without being harsh.

The two fonts never compete — pixel font is always large, mono font is always small. Extreme size contrast creates hierarchy without needing color.

### Size Scale
```
Section labels    — 10px mono, 0.4em letter spacing, uppercase
Body copy         — 13-15px mono, relaxed line height
Process titles    — 15px pixel
Stat values       — clamp(1.4rem, 5vw, 2rem) pixel
Section headlines — clamp(1.6rem, 6vw, 2.8rem) pixel
Hero name         — 7.5vw pixel
```

---

## Layout Principles

### Spacing
Every section uses `gap-16` between internal elements on mobile. This creates breathing room so content does not feel cramped. Sections themselves use `py-24` on mobile, `py-40` on desktop.

### Grid
- Mobile — single column, full width
- Desktop — two column where content benefits from comparison (About stats)
- Contact icons — 2 column on mobile (easy to tap), flex wrap on desktop

### Max Width
All content is constrained to `max-w-4xl` to prevent lines from becoming too long on wide screens. Reading comfort is the priority.

---

## Animation System

All animations use Framer Motion with two patterns:

### Load animations (Hero)
```js
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.9, delay: 0.1 * index }
```
Each element staggers by 0.1-0.2s, creating a waterfall reveal.

### Scroll animations (all other sections)
```js
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
```
`once: true` means the animation only plays the first time the element enters view — not every time you scroll back.

---

## The Pixel Game

The background animation is the single most distinctive element of the site.

### Why a pixel game?
- It tells the visitor immediately — this person builds things
- It creates movement without distraction — it lives behind the content
- It is completely custom — no library, no asset, pure canvas code
- It fits the "coder" identity without being a cliché

### Visual layers (back to front)
```
1. Black background
2. Scrolling stars (slow)
3. Pixel moon (static)
4. Pixel clouds (very slow)
5. City buildings with lit windows (medium speed)
6. Ground line + dashes
7. Running character (fixed x position, animated legs)
8. Gradient overlay (fades top and bottom to black)
9. Site content (text, buttons)
```

### Pixel rendering
All coordinates are snapped to a 4px grid using:
```js
function rect(x, y, w, h, color) {
  ctx.fillRect(
    Math.round(x / PX) * PX,
    Math.round(y / PX) * PX,
    Math.round(w / PX) * PX,
    Math.round(h / PX) * PX
  )
}
```
This ensures everything looks intentionally pixelated — not blurry.

---

## Section by Section

### Hero
Full viewport. Game background at 100% opacity behind a gradient overlay. Name is the largest element on the page. Founder credit in small mono below. One line tagline. Two buttons — primary (solid white) and secondary (outlined).

### About
Breaks into 3 clear levels of hierarchy — label, headline, body. Stats are separated with top borders so they feel like individual data points, not a random grid.

### How We Work
Three steps. Each step has a number (tiny, muted), a bold pixel title, and a mono description. The steps are separated by bottom borders. On hover the title fades — a subtle reward for interaction.

### Contact
Headline + one sentence + social icons. Icons are horizontal (icon + label side by side) for easy scanning and tapping on mobile. 2 column grid on mobile ensures even layout for 5 icons.

### Final Screen
Uses `final-bg.jpg` (dark corridor) at 10% opacity as a cinematic backdrop. Three lines of text at different opacity levels create depth. Single CTA button. This screen exists to give the visitor a moment to feel something before they leave.

### Footer
Proper footer — brand identity, navigation, connect links, divider, copyright, live IST clock. The clock is a personal touch — it tells the visitor exactly where in the world this studio is, right now.

---

## Mobile Design Decisions

- Font sizes use `vw` units and `clamp()` — never fixed px for headlines
- Buttons are full width on mobile for easy tapping
- Contact icons are 2-column grid — balanced and large enough to tap
- Section padding reduces from `py-40` to `py-24` on mobile
- Stats grid stays 2-column but with more gap for breathing room
- The pixel game scales automatically with canvas resize handler

---

## What Was Intentionally Left Out

- No navbar — visitors scroll, they do not navigate
- No color — restraint is the identity
- No hover tooltips — keeps it clean
- No loading screen — fast is better
- No animations on the pixel game character — just walk cycle, no jumps or interactions
- No dark/light mode toggle — dark only, always

---

## Author

**Sudnyesh Nehare** — Founder, SymbiansLab
Nagpur, India — 2025
