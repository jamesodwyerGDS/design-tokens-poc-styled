# Design Tokens POC (Vite + React + Style Dictionary + Token Studio JSON)

A tiny repo to **demo the speed of design tokens** with brand switching (great for white‑labelling demos).

## What it shows
- Four‑layer model: **Core → Brand → Semantic → (Component ready)**.
- **Per‑brand CSS variables** generated via Style Dictionary under `[data-theme="brand"]`.
- **Runtime theme switcher** toggles Ticketmaster and Live Nation instantly.
- Clear mapping from Token Studio JSON → platform code.

## Quick start
```bash
npm i
npm run build:tokens
npm run dev
```
Open http://localhost:5173 and use the theme dropdown.

## Token workflow
1) Export/sync Token Studio tokens to `tokens/` (JSON).  
2) Run `npm run build:tokens` to generate:
   - `src/tokens/variables.ticketmaster.css`
   - `src/tokens/variables.livenation.css`
   - `src/tokens/index.css` (semantic aliases)
3) The app uses semantic variables only; swapping brands doesn’t change component code.

## Where to plug your real tokens
- `tokens/core.json`: raw scales (colour, space, radius, elevation, typography).  
- `tokens/semantic.json`: role‑based aliases (bg, fg, title, label, etc.).  
- `tokens/brands/*`: per‑brand overrides (e.g., brand.primary, fg/bg).

## Notes
- You can add a **Style Dictionary watch** or GH Action to auto‑build on token changes.
- Drop this into Storybook to demo atoms with brand‑switching in place.

## styled-components atoms
This POC includes base atoms built with **styled-components** that consume only **semantic CSS variables**:
- `src/atoms/Button.tsx`
- `src/atoms/Card.tsx`
- `src/atoms/Text.tsx`

Atoms never hardcode brand values, so swapping `data-theme` (Ticketmaster ↔ Live Nation) instantly re-themes the UI.
Install deps and run:
```bash
npm i
npm run build:tokens
npm run dev
```
