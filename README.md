# Komsolution SA - Website V3

Site web officiel de Komsolution SA, bureau d'études télécom spécialisé en Fibre (FTTx) & Wireless.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    page.tsx        # Page principale
    layout.tsx      # Layout global
    globals.css     # Styles globaux
  components/
    KomsolutionSA.jsx  # Composant principal
public/
  images/
    hero-office.jpg    # Image Hero 1
    hero-building.jpg  # Image Hero 2
    logo.png           # Logo
    favicon.png        # Favicon
  team/
    # Photos équipe
```

## Images requises

Ajouter dans `public/images/`:
- `hero-office.jpg` - Photo du bureau
- `hero-building.jpg` - Photo du bâtiment
- `logo.png` - Logo Komsolution
- `favicon.png` - Favicon
- `fibers-wave.png` - Image décorative

Ajouter dans `public/team/`:
- Photos de l'équipe (format recommandé: 400x400px)
