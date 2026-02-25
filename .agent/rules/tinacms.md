---
name: tinacms
description: Instructions for modifying the TinaCMS schema and editing content within the project.
---

# TinaCMS Guidelines

This project uses TinaCMS for content management. Adhere to these rules when interacting with or configuring TinaCMS content.

## 1. Schema Updates (`tina/config.ts`)
- Whenever a new content type or field is proposed, the update must first be implemented in the `tina/config.ts` schema file.
- Before writing React components to render content, ensure the schema reflects the shape of the data needed.
- Define appropriate field types (e.g., `string`, `rich-text`, `image`) and validation requirements.
- Use explicit visual editing configurations (`ui.router`, etc.) where applicable.

## 2. Dev Server and Visual Editing
- When adding or modifying content via standard files or requiring visual editing, remember the dev server is started via a custom script (`npm run dev`). This runs Next.js inside the Tina dev server.
- Ensure any hardcoded content defaults (if provided in components) gracefully fall back to TinaCMS localized data when the CMS provides an overriding response.

## 3. Querying Content safely
- All page components must use `client.queries.<CollectionName>({ relativePath: 'file.md' })` rather than reading raw file contents with `fs` where applicable, unless explicitly fetching raw markdown outside the scope of TinaCMS capabilities.
- Always implement the proper `useTina` hook in Client Components or `tinaField` props in Server Components to enable visual editing in the layout.
