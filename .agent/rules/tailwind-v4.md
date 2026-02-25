---
name: tailwind-v4
description: Guidelines for styling components using Tailwind CSS v4 in this project.
---

# Tailwind CSS v4 Guidelines

This project uses **Tailwind CSS v4** without a traditional `tailwind.config.ts`. Here are the core styling rules:

## 1. No Config File
- Tailwind v4 handles configuration entirely inside CSS logic using the `@theme` directive, not a `tailwind.config.js` or `.ts` file. 
- Do not attempt to create or modify a `tailwind.config.ts` for theme changes.

## 2. CSS Variables (`app/globals.css`)
- We use custom CSS variables defined in `.root { ... }` or `.dark { ... }` in `globals.css` to manage colors, radii, and other dynamic theme elements.
- Always use utility classes corresponding to these variables (e.g., `bg-background`, `text-primary`, `border-border`) instead of hardcoding raw hex values or arbitrary values where a theme variable exists.

## 3. Styling Components
- When creating UI elements, ensure you rely heavily on the design tokens set in the `globals.css` rather than ad-hoc inline styles.
- Tailwind v4 has streamlined processing via PostCSS. Stick to standard utility class usage.
- If we use `@layer` components or custom utilities, define them directly inside the `globals.css` following PostCSS specs.
