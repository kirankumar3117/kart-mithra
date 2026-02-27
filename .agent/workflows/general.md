---
description: General development workflow for Kart Mithra landing page
---

# Kart Mithra General Workflow

## 1. Local Development
Start the local development server:
```bash
// turbo
npm run dev
```
The app will be available at `http://localhost:3000`.

## 2. Managing Translations (i18n)
The app uses a lightweight custom i18n system powered by React Context located in `src/i18n/`.
- English dictionary: `src/i18n/en.ts`
- Telugu dictionary: `src/i18n/te.ts`
- Hindi dictionary: `src/i18n/hi.ts`

**To add or modify text:**
1. First, define the new key and English value in `src/i18n/en.ts` (this drives TypeScript types).
2. Add the corresponding translations for the same key in `src/i18n/te.ts` and `src/i18n/hi.ts`.
3. In components, use the `useLanguage` hook replacing raw text:

```tsx
import { useLanguage } from "@/i18n/LanguageProvider";

export default function MyComponent() {
  const { t } = useLanguage();
  return <p>{t.home.heroSubtext}</p>; // Use nested keys as defined in en.ts
}
```

## 3. Styling Guidelines
- The app uses **Tailwind CSS v4**.
- Custom theme variables (`brand`, `accent`, `surface`, `muted`) are defined in `src/app/globals.css`.
- Always use semantic color utilities instead of generic colors:
  - Text: `text-white`, `text-muted`, `text-muted-foreground`
  - Accents: `bg-brand`, `text-accent`, `from-brand to-accent`
  - Backgrounds & Borders: `bg-surface`, `bg-surface-card`, `border-surface-border`
- All significant visual interactions use `framer-motion` (keep components as `"use client"` when animating).

## 4. Production Build
To create an optimized production build and verify there are no type or linting errors:
```bash
// turbo
npm run build
```

## 5. Deployment
The app is a standard Next.js (App Router) project and can be deployed directly to Vercel:
```bash
npx vercel --prod
```
