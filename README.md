# Portfolio Next.js 15 + Tailwind + Framer Motion

Portfolio fluide, accessible et SEO-friendly. Pile : **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**.

## 🚀 Démarrage rapide

```bash
pnpm i   # ou npm i / yarn
pnpm dev # http://localhost:3000
```

> Si Next 15 n'est pas encore disponible chez vous, remplacez la version de `next` par `"latest"` dans `package.json`.

## 🧩 Inclus

- App Router (`app/`), pages : Accueil, Projets, Détail projet, À propos, Contact.
- Données mock JSON (`app/(data)/projects.json`).
- Thème sombre/clair via `next-themes`.
- Animations Framer Motion (stagger, fade/slide).
- SEO : `generateMetadata`, `robots.ts`, `sitemap.ts`.
- Tests : Vitest + Testing Library.
- Tailwind configuré + styles globaux accessibles.

## 📁 Scripts

- `dev` – serveur de dev
- `build` – build production
- `start` – server production
- `lint` – lint
- `test` – tests Vitest

## 🖼️ Images distantes

Les images utilisent Unsplash/Picsum. Voir `next.config.ts` pour `remotePatterns`.

## 🧪 Tests

```bash
pnpm test
```

## 🔧 À personnaliser

- Remplacer `https://example.com` dans `metadataBase`, `robots.ts`, `sitemap.ts`.
- Modifier `app/(data)/projects.json` avec vos vrais projets.
- Adapter les styles Tailwind selon votre identité.
