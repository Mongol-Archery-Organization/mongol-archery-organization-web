# Mongol Archery Organization Website

A bilingual (English/Mongolian) static website for "Mongol Archery Organization", built with Next.js and deployed on Vercel.

## Overview

This site serves existing members and prospective newcomers interested in traditional Mongolian archery. It features:

- **Full Bilingual Support**: Every page, section, and image has both English and Mongolian (Cyrillic) versions
- **Language Toggle**: Persistent language selection in the navigation
- **Static Export**: Built as a fully static site and deployed to Vercel
- **Responsive Design**: Mobile-friendly layout using CSS Modules

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Deployment**: [Vercel](https://vercel.com)
- **Runtime**: Node.js

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
```

This generates a fully static `/out` directory ready for deployment.

## Language System

The site uses React Context to manage the active language globally. Users toggle between **English** and **Монгол** (Mongolian Cyrillic) using tabs in the navigation bar. The selection persists across page navigation.

### Translation Files

All user-visible strings are stored in `src/lib/translations/`:

- `common.ts` - Navigation, status badges, footer text
- `home.ts` - Homepage content
- `about.ts` - About page content
- `schedule.ts` - Schedule page labels
- `resources.ts` - Resources page content

Each translation object has `en` and `mn` keys for English and Mongolian variants.

## Schedule Management

The practice schedule is managed in `src/lib/schedule.ts`:

```ts
export const SCHEDULE_CONFIG = {
  confirmedDates: ['2026-05-10', '2026-05-17'],
  cancelledDates: ['2026-05-24'],
};
```

Sessions are automatically generated for the next 10 Sundays. Sessions can have three statuses:

- **Planned** (gray) - Status will be confirmed by Thursday of that week
- **Confirmed** (green) - Session is happening
- **Cancelled** (red) - Session is cancelled

To update status, edit the arrays and push to `main`. Vercel redeploys automatically. This means that we deploy at minimum once a week.

## Design System

### Colors

- **Sky Blue** (`--color-sky`): Primary color. This is the official blue color in Mongolian Flag.
- **Steppe Cream** (`--color-steppe`): Background
- **Gold** (`--color-gold`): Accent color. This is a darker version of the yellow color in Mongolian Flag. The actual yellow does not look UI friendly.
- **Red** (`--color-red`): Cancelled status. This is the official red color in Mongolian Flag.
- **Green** (`--color-green`): Confirmed status.
- **Dark** (`--color-dark`): Body text.

### Typography

- **Display**: Playfair Display or Cormorant Garamond (headings)
- **Body**: Lora or Source Serif 4 (body text)
- **Mongolian**: Noto Sans Mongolian (Mongolian content)

## Deployment

The project is deployed on Vercel. Every push to the `main` branch triggers an automatic production deployment.

## Content Maintenance

### Updating Text

Edit the translation files in `src/lib/translations/`. Always update both English and Mongolian variants.

### Adding Images

Place images in `/public/images/`. For language-specific variants, use the naming convention:
- English: `filename-en.ext`
- Mongolian: `filename-mn.ext`

### Confirming/Cancelling Sessions

Edit `SCHEDULE_CONFIG.confirmedDates` or `SCHEDULE_CONFIG.cancelledDates` in `src/lib/schedule.ts`.

## License

All content and images are the property of the Mongolian Archery Organization.