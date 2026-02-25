---
name: nextjs
description: Guidelines for working with Next.js 15+ App Router and React 19 rules in this project.
---

# Next.js Guidelines

This project uses Next.js 15+, leveraging the App Router and React 19 features. When building components or modifying functionality, follow these rules:

## 1. Defaults
- **Server Components by default:** All components inside the `app/` directory are React Server Components (RSC) by default.
- **`"use client"` directive:** Only add the `"use client"` directive when the component requires interactivity, browser APIs (like `window` or `document`), or React hooks (like `useState`, `useEffect`, `useContext`, or custom hooks like `useActionState`).
- Keep client components as small as possible and near the leaves of the component tree to minimize the client-side bundle size.

## 2. Next.js 15+ Conventions
- **Asynchronous Data Access:** In Next.js 15+, route parameters (`params`), search parameters (`searchParams`), and other runtime data APIs like `headers()` and `cookies()` must be treated as asynchronous. Await them before using their values:
  ```tsx
  // app/guides/[slug]/page.tsx
  export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;
    // ...
  }
  ```
- **Metadata Generation:** Always use `generateMetadata` (which should also treat `params` as asynchronous) when generating dynamic SEO metadata.
- Avoid using older Page Router conventions such as `getStaticProps` or `getServerSideProps`.

## 3. React 19 Hooks
- Prefer using the `use` hook when dealing with Promises and context passed from Server Components to Client Components.
- When dealing with forms, leverage the new `useActionState` and `useFormStatus` hooks rather than manual state management, where appropriate.
