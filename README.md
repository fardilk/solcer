# SolusIcerai.com - Law Firm Website

A professional legal services website built with React, TypeScript, and Tailwind CSS v4 for **SolusIcerai**, an Indonesian law firm specializing in divorce law (Hukum Perceraian).

## 🌐 Website Overview

**Company**: Solusi Icerai
**Specialization**: Divorce Law & Family Legal Services in Indonesia
**Contact**:
- 📱 Phone: 081908804009
- 📧 Email: solusicerai@gmail.com
- 🚨 Emergency (24/7): 081908804009

## 📋 Pages & Features

### Main Pages
- **Homepage** (`/`) - Hero banner, services preview, testimonials, case studies
- **About Us** (`/about`) - Company story, mission, values, team, why choose us
- **Services** (`/services`) - 6 legal services with detailed descriptions
- **Contact** (`/contact`) - Contact form, office info, emergency hotline
- **Articles** (`/articles`) - Blog/article listing and detail pages

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ React Router for multi-page navigation
- ✅ Font Awesome icons for professional appearance
- ✅ Pexels CDN images (free, high-quality)
- ✅ Contact form with validation
- ✅ Article search and filtering
- ✅ WCAG AA contrast compliance
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.3 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Tailwind CSS | 4.1.18 | Styling |
| React Router | 7.12.0 | Navigation |
| Font Awesome | 7.1.0 | Professional Icons |
| Vite | 7.3.1 | Build Tool |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Install Dependencies
```bash
pnpm install
```

### Development Server
```bash
pnpm run dev
```
Open http://localhost:5175 in your browser.

### Build for Production
```bash
pnpm run build
```

### Preview Production Build
```bash
pnpm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Hero.tsx
│   │   ├── Icon.tsx
│   │   └── SectionTitle.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ContactPage.tsx
│   └── ArticlesPage.tsx
├── constants/
│   └── mockData.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

### Color Palette
- Primary Blue: #003366 (trust, professional)
- Secondary Blue: #0066CC (actions)
- Light Blue: #E8F4F8 (backgrounds)
- Success: #00AA44
- Error: #DD0000
- Warning: #FF9900

### Typography
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700
- Sizes: 12px - 48px scale

### Components
- Buttons (4 variants)
- Cards (2 variants)
- Icons (Font Awesome)
- Hero sections
- Responsive grids

## 📸 Images

All images are from **Pexels CDN**:
- Free, high-quality stock photos
- No attribution required
- Fast CDN delivery

Articles use Pexels photos:
- Article 1: pexels-photo-3808517
- Article 2: pexels-photo-3183150
- Article 3: pexels-photo-3755517

## 📱 Responsive Design

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Mobile-first approach with touch-friendly interface.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Color contrast > 4.5:1
- Semantic HTML
- Keyboard navigation
- Focus states
- Alt text on images

## 🚀 Available Scripts

```bash
pnpm run dev         # Start dev server
pnpm run build       # Build for production
pnpm run preview     # Preview production
pnpm run lint        # Run ESLint
pnpm install         # Install dependencies
```

## 📊 Performance

- Lighthouse Score: 85+
- Load Time: < 3 seconds
- CSS: 25.72KB gzipped
- JS: 86.75KB gzipped

## 🔧 Configuration

- **tailwind.config.js** - Tailwind CSS config
- **postcss.config.js** - PostCSS plugins
- **vite.config.ts** - Vite configuration
- **tsconfig.json** - TypeScript options

## 📞 Contact Information

**Update in `src/constants/mockData.ts`:**
```typescript
export const contactInfo = {
  phone: "081908804009",
  email: "solusicerai@gmail.com",
  emergencyPhone: "081908804009",
  address: "Jl. Sudirman No. 123, Jakarta Pusat, 12190",
};
```

## 🐛 Troubleshooting

### Port in Use
```bash
pnpm run dev  # Vite will use next available port
```

### Build Errors
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

## 📝 Recent Updates

**Latest (v1.1.0)**:
- Added Font Awesome icons (@fortawesome/fontawesome-free 7.1.0)
- Integrated Pexels CDN for images
- Updated contact info (Phone: 081908804009, Email: solusicerai@gmail.com)
- Improved color contrast (WCAG AA compliant)
- Better accessibility throughout

## 📄 License

Copyright © 2026 Solusi Icerai. All rights reserved.

## 📞 Support

- Phone: 081908804009
- Email: solusicerai@gmail.com
- Emergency (24/7): 081908804009

---

**Last Updated**: January 11, 2026  
**Status**: ✅ Production Ready
