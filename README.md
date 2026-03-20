# SymbiansLab — Official Website

> We build what others overlook.

Live site for SymbiansLab — a creative dev studio founded by Sudnyesh Nehare, Nagpur, India.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Core framework — routing, SSR, file-based pages |
| React 19 | UI component architecture |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Scroll and load animations |
| shadcn/ui | Base component primitives |
| Google Fonts | Press Start 2P (pixel) + Courier Prime (mono) |
| HTML5 Canvas | Pixel city game background |
| Next.js Image | Optimized image loading |

---

## Folder Structure
```
my-startup/
├── public/
│   └── images/
│       ├── hero-bg.jpg       # Control room — Hero section background
│       ├── final-bg.jpg      # Dark corridor — Final closing screen
│       └── journey-bg.gif    # Blueprint animation — Journey section bg
│
├── src/
│   ├── app/
│   │   ├── layout.js         # Root layout — fonts, body, global wrapper
│   │   ├── page.js           # Homepage — imports and orders all sections
│   │   └── globals.css       # Global styles — scrollbar, fonts, animations
│   │
│   ├── components/
│   │   ├── Hero.jsx          # First screen — name, tagline, CTA buttons
│   │   ├── About.jsx         # Who we are — story + stats
│   │   ├── WhatsComing.jsx   # How we work — 3 step process
│   │   ├── Contact.jsx       # Contact + social icons + final closing screen
│   │   ├── Footer.jsx        # Footer — brand, links, live IST clock
│   │   └── PixelGame.jsx     # Canvas pixel city — animated background game
│   │
│   └── lib/
│       └── utils.js          # shadcn utility — className merger helper
│
├── components.json           # shadcn configuration
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation (this file)
└── DESIGN.md                 # Design decisions and creative direction
```

---

## Component Breakdown

### `layout.js`
Root layout wrapping every page. Loads both fonts as CSS variables and applies them globally. Sets black background and hides scrollbar.

### `page.js`
Homepage entry point. Simply imports and stacks all section components in order. Clean and minimal — no logic here.

### `Hero.jsx`
Full viewport first screen. Renders the pixel game canvas as a background layer. Staggered fade-in animations on every element using Framer Motion. Contains brand name, founder credit, tagline, and two CTA buttons.

### `About.jsx`
Two-part section. Left side — one clean sentence about SymbiansLab. Right side — 4 stats (DRDO, hackathons, research paper, problems). Each stat separated with a top border for clear visual hierarchy.

### `WhatsComing.jsx`
Three-step process section. Each step has a number, bold pixel headline, and a mono description. Separated by subtle bottom borders. Hover effect fades the title.

### `Contact.jsx`
Two sections in one component. First half — contact headline + description + 5 social icon buttons in a 2-column grid on mobile. Second half — full viewport cinematic closing screen with final-bg.jpg and the "being written" message.

### `Footer.jsx`
Full proper footer. Brand info on left, navigation and connect links in two columns, divider line, copyright and live IST clock at bottom. Clock updates every second using `setInterval`.

### `PixelGame.jsx`
Pure HTML5 Canvas animation running at 60fps. Draws a side-scrolling pixel city with stars, clouds, buildings with lit/unlit windows, antennas, a ground line, and an animated running character. No external libraries — all drawn with `ctx.fillRect`. Responds to window resize.

---

## Key Functions

### `PixelGame.jsx`

| Function | What it does |
|---|---|
| `resize()` | Resizes canvas to match window dimensions on load and resize |
| `rect(x, y, w, h, color)` | Core drawing function — snaps all coordinates to pixel grid for crisp rendering |
| `drawBuilding(b)` | Draws a single building with body, roof line, antenna, and per-floor windows |
| `drawRunner(x, y, frame)` | Draws the animated running character with 4 alternating leg/arm poses |
| `loop()` | Main animation loop — clears canvas, redraws all elements, increments offset and frame |

### `Footer.jsx`

| Function | What it does |
|---|---|
| `update()` | Gets current time in IST (Asia/Kolkata), formats as HH:MM:SS, sets state |
| `setInterval(update, 1000)` | Runs update every second for live clock |

---

## Creativity Used

- **Pixel city game** — fully custom HTML5 Canvas animation. No library. Buildings with realistic floor-by-floor windows, some lit, some dark. Running character with 4-frame walk cycle.
- **Dual font system** — `Press Start 2P` for headlines only (pixel aesthetic), `Courier Prime` for all body text (readable but techy). Extreme size contrast between the two.
- **Outlined text** — `WebkitTextStroke` used on alternating headline lines for a ghost/outline effect without any image.
- **Staggered animations** — every element on every section fades up with a different delay, creating a waterfall reveal effect on scroll.
- **Live IST clock** — footer shows real-time Nagpur time, ticking every second with a blinking cursor.
- **`clamp()` typography** — all font sizes use CSS `clamp()` for fluid scaling between mobile and desktop without breakpoints.
- **Mix of pixel + cinematic** — pixel game energy in the hero, cinematic dark photography in the final screen. Two different moods that tell a story arc.

---

## Scripts
```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Assets

All images are in `/public/images/` and optimized using ImageMagick before use:
```bash
# Resize and compress
convert hero-bg.jpg -resize 1920x1080^ -quality 85 hero-bg.jpg
convert final-bg.jpg -resize 1920x1080^ -quality 85 final-bg.jpg
convert journey-bg.gif -coalesce -resize 1200x675^ -layers optimize journey-bg.gif
```

---

## Author

**Sudnyesh Nehare**
Founder, SymbiansLab
Nagpur, India — 2025

[symbianslab@gmail.com](mailto:symbianslab@gmail.com) • [LinkedIn](https://linkedin.com/in/sudnyeshnehare) • [X](https://x.com/sudnyesh_) • [Instagram](https://www.instagram.com/iamsudnyesh) • [YouTube](https://www.youtube.com/@SymbiansLab)
