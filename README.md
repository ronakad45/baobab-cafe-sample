# Baobab Café — Sample Marketing Website

A demo/portfolio project showcasing a mobile-first marketing website for a fictional café — Baobab Café & Kitchen, set in Oyster Bay, Dar es Salaam, Tanzania.

This is a **sample website** built to demonstrate a modern static site stack for a small hospitality business.

## Stack

- [Astro 5](https://astro.build/) — static site generator, minimal JS output
- [Tailwind CSS v4](https://tailwindcss.com/) — via `@tailwindcss/vite`, no separate config file
- No UI frameworks — `.astro` components only

## Features

- Mobile-first, responsive layout
- Warm earthy brand palette (terracotta, cream, deep green)
- Sections: Hero, About, Menu Highlights, Gallery, Location, Footer
- WhatsApp reservation button (floating on mobile)
- Google Maps embed (no JS Maps API)
- i18n-ready — all strings in `src/i18n/en.ts`, Swahili can be added without touching component logic
- Performance-focused: WebP images, lazy loading, no render-blocking JS, `font-display: swap`

## Getting Started

```bash
npm install
npm run dev       # Dev server at http://localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Project Structure

```
src/
  components/     # Reusable .astro components (Navbar, Hero, MenuCard, etc.)
  layouts/
    Layout.astro  # Base HTML shell
  pages/
    index.astro   # Composes all page sections
  styles/
    global.css    # Tailwind + CSS custom properties for brand palette
  i18n/
    en.ts         # All English strings
public/
  images/         # Optimised WebP assets
```

## Notes

- All contact details (phone number, Instagram, WhatsApp) are placeholders.
- The café and its details are fictional — for demo purposes only.
