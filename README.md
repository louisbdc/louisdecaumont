# louisdecaumont.fr

Portfolio personnel de Louis de Caumont, developpeur full-stack freelance base a Lyon.

## Stack

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion + CSS Keyframes
- **Smooth Scroll** : Lenis
- **Icons** : Lucide React
- **Deploiement** : Vercel

## Fonctionnalites

- Hero immersif avec screenshots flottants en couches de profondeur
- Scroll horizontal des projets avec effet d'arc de cercle
- Scrollytelling (texte qui se revele automatiquement)
- Marquee infini des technologies (CSS pur)
- Header magnetique avec sliding indicator et shrink on scroll
- Blobs pastels fixes en arriere-plan (neumorphism light)
- Pages dediees : A propos, Equipe, Contact, Mentions legales
- SEO : sitemap.xml, robots.txt, JSON-LD, Open Graph, canonical URLs
- Responsive mobile-first
- `prefers-reduced-motion` respecte

## Lancer en local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Structure

```
src/
  app/              # Pages (App Router)
    a-propos/
    contact/
    equipe/
    mentions-legales/
  components/       # Composants React
    pages/          # Composants specifiques aux pages
  data/             # Donnees (projets)
public/
  screenshots/      # Captures des projets (WebP)
```

## Licence

Tous droits reserves. Code source prive.
