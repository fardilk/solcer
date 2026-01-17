# AGENTS.md - Workflow & Process Documentation

## Project Workflow Overview

This document details how the SolusIcerai.com website project flows, from requirements through development and deployment.

## Development Phases

### Phase 1: Requirements & Planning
**Status**: In Progress

**Activities**:
- Define website sections and features
- Document technical requirements
- Plan information architecture
- Design global design system

**Artifacts**:
- `/requirements/` folder with detailed specifications
- Design system in `global.md`
- Component specifications

**Team Members**:
- Product/Client (requirements definition)
- Developer (technical specifications)

---

### Phase 2: Project Setup
**Status**: Upcoming

**Activities**:
- Initialize React + TypeScript project
- Configure Tailwind CSS v4
- Set up git repository
- Create directory structure
- Install dependencies

**Tasks**:
- [ ] Create React + TypeScript boilerplate
- [ ] Configure Tailwind CSS
- [ ] Create folder structure
- [ ] Initialize git and create initial commit
- [ ] Set up package.json scripts

**Tools Used**:
- React 18+
- TypeScript
- Tailwind CSS v4
- Git

---

### Phase 3: Component Development
**Status**: Upcoming

**Activities**:
- Build reusable components
- Implement layout components (Header, Footer, Nav)
- Create page-specific components
- Integrate global design system

**Component Categories**:
1. **Common Components**: Reusable UI elements
   - Button
   - Card
   - Container
   - Hero Section

2. **Layout Components**: Global layout structure
   - Header
   - Navigation
   - Footer
   - Sidebar (if needed)

3. **Feature Components**: Page-specific
   - HomePage components (Banner, Services, Testimonials, etc.)
   - AboutPage components
   - ServicesPage components
   - ContactPage components
   - ArticlesPage components

**Development Approach**:
- Start with common/layout components
- Build page components top-down
- Test responsive design across breakpoints
- Integrate global design system

---

### Phase 4: Page Implementation
**Status**: Upcoming

**Pages to Implement**:
1. **Homepage** (`/`)
   - Banner/Hero section
   - About message (with link to full About page)
   - Services preview
   - Testimonials
   - Case studies
   - CTA sections
   - Contact form snippet

2. **About Us** (`/about`)
   - Detailed about message
   - Company values/mission
   - Team information (if applicable)
   - Expertise highlights

3. **Services** (`/services`)
   - Service listings
   - Service details
   - Process explanation
   - Benefits highlight
   - CTA to contact

4. **Contact** (`/contact`)
   - Contact form (name, email, message)
   - Call to action for booking services
   - Location/contact information
   - Response time expectations

5. **Articles** (`/articles`)
   - Article listing page
   - Article detail page
   - Category/filtering (optional)
   - Related articles

6. **Additional Pages**:
   - Privacy Policy
   - Terms of Service
   - Sitemap (optional)

**Development Order**:
1. Layout components (Header, Footer, Nav)
2. Common components (Button, Card, Hero, etc.)
3. Homepage
4. About page
5. Services page
6. Contact page
7. Articles page

---

### Phase 5: Content Integration
**Status**: Upcoming

**Activities**:
- Write content for all sections
- Prepare images and media
- Integrate testimonials
- Add case studies
- Create initial articles

**Content Areas**:
- Hero banners
- About messages
- Service descriptions
- Testimonials (anonymized)
- Case studies (confidentiality maintained)
- Articles/blog posts
- Contact information

---

### Phase 6: Testing & QA
**Status**: Upcoming

**Testing Scope**:
- Responsive design (mobile, tablet, desktop)
- Cross-browser compatibility
- Performance optimization
- SEO meta tags
- Accessibility (a11y)
- Form functionality
- Page load times

**Tools**:
- Manual testing
- Chrome DevTools
- Lighthouse for performance/accessibility
- SEO checker tools

---

### Phase 7: Deployment Preparation
**Status**: Upcoming

**Activities**:
- Build optimization
- Asset optimization (images, fonts)
- Environment configuration
- Deployment strategy planning
- CI/CD setup (if needed)

**Considerations**:
- Hosting platform selection
- Domain configuration (solusicerai.com)
- SSL/HTTPS setup
- CDN for static assets

---

## Workflow Dependencies & Relationships

```
Requirements Definition
    ↓
Project Setup
    ↓
Component Library Development
    ├── Common Components
    ├── Layout Components
    └── Feature Components
    ↓
Page Implementation
    ├── Homepage
    ├── About Page
    ├── Services Page
    ├── Contact Page
    └── Articles Page
    ↓
Content Integration
    ↓
Testing & QA
    ↓
Deployment Preparation
    ↓
Launch
```

## Communication & Updates

### Daily Updates
- Development progress
- Blockers or issues encountered
- Questions for clarification
- Completed tasks

### Code Review Checklist
- [ ] Code follows TypeScript standards
- [ ] Components follow React best practices
- [ ] Tailwind CSS used for all styling
- [ ] Responsive design implemented
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Accessibility considerations met

### Git Workflow
**Branch Naming**:
- Feature: `feature/description`
- Fix: `fix/description`
- Refactor: `refactor/description`

**Commit Convention**:
```
type(scope): description

feat(header): add mobile navigation menu
fix(homepage): correct hero image alignment
docs(requirements): update about-us specifications
style(global): update color palette
```

**Branch Protection**:
- All changes via pull requests
- Code review before merge
- Tests pass before merge
- Main branch always deployable

---

## Tools & Technologies

### Development Tools
- **Node.js/npm**: Package management
- **React**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling
- **Git**: Version control
- **VSCode**: IDE (recommended)

### Development Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0"
}
```

### Development Scripts
```bash
npm start          # Start dev server
npm run build      # Production build
npm run test       # Run tests (if applicable)
npm run lint       # Lint code
npm run format     # Format code
```

---

## Key Checkpoints & Deliverables

### Checkpoint 1: Requirements Complete ✓
- All requirement documents written
- Design system defined
- Team alignment on scope

### Checkpoint 2: Project Setup
- Project initialized
- Dependencies installed
- Directory structure created
- Git configured

### Checkpoint 3: Component Library
- Common components built and tested
- Layout components complete
- Storybook/component showcase (optional)

### Checkpoint 4: MVP Pages
- Homepage complete
- About page complete
- Services page complete
- Contact page complete

### Checkpoint 5: Full Site
- All pages complete
- Content integrated
- Testing complete
- Performance optimized

### Checkpoint 6: Live
- Site deployed
- DNS configured
- SSL active
- Monitoring set up

---

## Issue Tracking & Resolution

**Types of Issues**:
- 🐛 Bug: Something broken
- ✨ Feature: New functionality
- 📚 Documentation: Docs updates
- 🎨 Design: UI/UX improvements
- ⚡ Performance: Speed optimization

**Resolution Process**:
1. Document the issue clearly
2. Identify root cause
3. Develop solution
4. Test thoroughly
5. Document the fix
6. Close issue

---

## Success Criteria

- Website is fully responsive (mobile to desktop)
- All pages function correctly
- Load time < 3 seconds
- Accessibility score > 90
- SEO best practices implemented
- Professional, trustworthy appearance
- Easy navigation and user experience
- Mobile-first design philosophy

---

**Last Updated**: 2026-01-11
**Version**: 1.0
