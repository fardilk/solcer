# SolusIcerai.com - Project Setup Guide

## Overview
This is a React + TypeScript + Tailwind CSS v4 project for the SolusIcerai.com law firm website.

## Technologies Used
- **React 19**: UI framework
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS v4**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **ESLint**: Code quality and style checking

## Project Structure

```
solcer-web/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components (Button, Card, etc.)
│   │   └── layout/          # Layout components (Header, Footer, Nav)
│   ├── pages/               # Page components
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── constants/           # Constants and config values
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles (Tailwind)
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint to check code quality

## Development Guidelines

### Styling
- Use Tailwind CSS utility classes for all styling
- Avoid inline CSS or separate CSS files when possible
- Follow the design system specifications in `/requirements/global.md`
- Use custom utility classes defined in `src/index.css`

### Components
- Create reusable components in `src/components/common`
- Create layout components in `src/components/layout`
- Use TypeScript for all components - define interfaces for props
- Keep components focused and single-responsibility

### TypeScript
- Use strict mode
- Define types for all function parameters and return values
- Avoid using `any` type
- Use interfaces for component props

### File Naming
- Components: PascalCase (e.g., `Button.tsx`, `Header.tsx`)
- Utils/Constants: camelCase (e.g., `formatDate.ts`, `colors.ts`)
- Pages: PascalCase (e.g., `HomePage.tsx`, `AboutPage.tsx`)

## Git Workflow

### Commits
Follow conventional commit format:
- `feat(scope): description` - New feature
- `fix(scope): description` - Bug fix
- `docs(scope): description` - Documentation
- `style(scope): description` - Style changes
- `refactor(scope): description` - Code refactoring

Example:
```
feat(header): add mobile navigation menu
fix(homepage): correct hero image alignment
docs(setup): update installation instructions
```

### Branches
- Feature: `feature/description`
- Fix: `fix/description`
- Refactor: `refactor/description`

## Resources

- [Requirements Documentation](/requirements/README.md)
- [Design System](/requirements/global.md)
- [Homepage Specifications](/requirements/homepage.md)
- [About Us Page](/requirements/about-us.md)
- [Services Page](/requirements/our-service.md)
- [Contact Page](/requirements/contact-us.md)
- [Articles Page](/requirements/article.md)
- [Claude Guidelines](../CLAUDE.md)
- [Workflow Documentation](../AGENTS.md)

## Helpful Links

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

## Common Tasks

### Adding a New Component

1. Create component file in `src/components/[feature]/[ComponentName].tsx`
2. Define TypeScript interface for props
3. Export component as default
4. Add Tailwind CSS classes for styling
5. Use in pages or other components

Example:
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition-all';
  const variantStyles = variant === 'primary'
    ? 'bg-solusi-blue-900 text-white hover:bg-solusi-blue-900'
    : 'border-2 border-solusi-blue-600 text-solusi-blue-600 hover:bg-solusi-blue-50';

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
}
```

### Adding a New Page

1. Create page component in `src/pages/[PageName].tsx`
2. Add route to routing configuration (when routing is set up)
3. Import and use layout components (Header, Footer)
4. Build page sections using component composition

### Environment Variables

Create `.env.local` in project root for local development:
```
VITE_API_URL=http://localhost:3000
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port.

### Module Not Found
Make sure:
1. File extension is included (`.tsx`, `.ts`, `.js`)
2. Path is correct (use relative or absolute imports)
3. Import matches export

### TypeScript Errors
- Check that all types are properly imported
- Verify component prop interfaces match usage
- Run `npm run lint` to check for issues

## Support & Documentation

For detailed specifications and requirements, refer to the `/requirements` folder:
- Requirements overview: `README.md`
- Design system: `global.md`
- Page specifications: `homepage.md`, `about-us.md`, `our-service.md`, `contact-us.md`, `article.md`

For workflow and process information, see:
- Claude behavior guidelines: `../CLAUDE.md`
- Project workflow: `../AGENTS.md`

---

**Last Updated**: 2026-01-11
**Version**: 1.0
