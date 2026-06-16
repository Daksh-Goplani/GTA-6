
# GTA VI-inspired Landing Page — SRS Report

## Project Overview

- **Title:** GTA VI-inspired landing page
- **Type:** Front-end prototype / visual landing experience
- **Description:** A visually immersive React landing page inspired by the aesthetic of the upcoming Grand Theft Auto installment. Built with React, GSAP for animations, and Tailwind CSS for layout and styling. The project focuses on a cinematic intro animation, interactive mouse-tracking parallax, and an immersive hero section.

## Current Status

- Project scaffold: completed (Vite + React).
- Core landing scene implemented: intro SVG mask animation, hero layout, background/foreground image layers, character image, navbar, and bottom call-to-action.
- Interactive features: GSAP-driven intro timeline and mouse-tracking parallax implemented. The mousemove handler has been moved into a React `useEffect` with proper cleanup to avoid leaks.

## Key Features (Implemented)

- Intro animation: SVG masked reveal using GSAP timeline that scales/rotates a text mask and transitions to the main UI.
- Mouse-tracking interactions: real-time parallax of text and layered images responding to cursor movement.
- Layered visual composition: separate `sky`, `bg`, and `char` layers to produce depth.
- Tailwind CSS utility-driven layout and responsive base styles.

## Technology Stack

- React (Vite) — UI and component structure
- GSAP — animation engine and timelines
- Tailwind CSS — utility styling and layout
- Remix Icon — iconography
- Vite — development server and build tooling

## Architecture & Key Components

- `src/App.jsx`: Central component holding the landing markup and GSAP logic. Recent changes:
	- Intro SVG mask animation remains in-place and toggles the main content when complete.
	- Mousemove parallax: previously attached directly within GSAP code; now attached via a React `useEffect` with a named handler and proper removal on unmount.
	- Hard-coded Tailwind transform utilities were simplified to allow to control scales/rotations via media queries.
- Static assets (images) are referenced via relative paths; verify they live in `public/` or update imports for bundlers.

## UI / Animation Details

- Intro timeline: rotates and scales a `VI` text mask with easing; when the mask reaches ~90% progress it removes the intro element and reveals the main scene.
- Parallax: cursor X position is converted into a horizontal offset applied to heading lines (`.main`), `.sky`, and `.bg` layers with different strengths to simulate depth. The handler uses `gsap.to(...)` to animate properties for smooth motion.

## How to Run (development)

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open the dev server URL printed by Vite (usually `http://localhost:5173`).

Notes:
- If icons are missing, install Remix Icon (already included in the project dependencies): `npm i remixicon`.
- If images don't load, confirm `public/` contains `bg.png`, `sky.png`, `girlbg.png`, `ps5.png`, and other referenced assets, or update imports to use `import` statements.

## Contribution & Notes

- This is an active prototype; contributions are welcome. Please open issues or PRs describing the change.
- For local development, ensure image assets referenced in `src/App.jsx` exist in the project root or update paths.

---

*Updated: README reflects recent responsive refactors, event-listener cleanup, and layout simplifications.*

---