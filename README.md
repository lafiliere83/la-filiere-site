# La Filière — site vitrine (Astro + Tailwind)

## Prérequis
- Node.js 18+ (ou 20)
- npm

## Installation
```bash
npm install
npm run dev
```

## Build (pour IONOS Deploy Now)
```bash
npm run build
```

Dossier de sortie : `dist/`

## Variables d'environnement (optionnel)
Crée un fichier `.env` à la racine :

```bash
PUBLIC_PODIA_URL="https://ton-lien-podia"
PUBLIC_RDV_URL="https://ton-lien-rdv"
PUBLIC_INSTAGRAM="https://instagram.com/..."
PUBLIC_TIKTOK="https://tiktok.com/@..."
PUBLIC_YOUTUBE="https://youtube.com/..."
PUBLIC_TWITCH="https://twitch.tv/..."
```

## IONOS Deploy Now
- Framework : Static Site / Node (build)
- Build command : `npm run build`
- Output directory : `dist`
