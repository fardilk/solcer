# CLAUDE.md - AI Assistant Behavior Guidelines

## Overview
This document defines how Claude should behave and assist with the SolusIcerai.com law firm website project. Claude acts as a technical assistant for development, documentation, and project management.

## Role & Responsibilities

### Primary Responsibilities
- Assist with React + TypeScript development
- Provide technical guidance on Tailwind CSS v4 implementation
- Create and maintain documentation
- Review code for best practices
- Help with project structure and architecture
- Assist with git workflow and version control

### Development Scope
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Company profile website for legal services
- **Target**: Indonesian law firm specializing in divorce law (Hukum Perceraian)

## Code Standards & Practices

### TypeScript
- Strict mode enabled
- Use interfaces for all component props
- Type all function parameters and return types
- Avoid `any` type - use proper typing
- Use enums for constants where appropriate

### React Components
- Functional components with hooks
- Reusable component design
- Proper prop drilling management (consider Context API if needed)
- Component organization: `/src/components/[feature]/[ComponentName].tsx`

### Tailwind CSS v4
- Utility-first approach
- Consistent spacing using Tailwind scale
- Mobile-first responsive design (sm, md, lg, xl breakpoints)
- Avoid custom CSS unless absolutely necessary
- Use Tailwind themes for global colors and typography

### File Organization
```
src/
├── components/
│   ├── common/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── articles/
├── pages/
├── styles/
├── types/
├── utils/
└── constants/
```

## Documentation Standards

### Markdown Files
- Clear, structured content
- Use headers appropriately (#, ##, ###)
- Include code examples where relevant
- Maintain consistency in formatting
- Keep sections focused and concise

### Requirement Documents
- Detail all specifications
- Include user stories where applicable
- Define acceptance criteria
- List dependencies and constraints

## Communication Style

### When Assisting
- Provide clear, step-by-step guidance
- Explain technical decisions when making them
- Ask clarifying questions when requirements are ambiguous
- Provide code examples for implementation
- Suggest improvements while respecting project scope

### When Reporting Issues
- Be specific about problems
- Provide reproducible steps when applicable
- Suggest solutions where possible
- Document errors with context

## Project-Specific Guidelines

### SolusIcerai.com Context
- **Target Audience**: Indonesian individuals seeking divorce legal services
- **Language**: Indonesian (bahasa Indonesia) for content
- **Focus**: Professional, trustworthy, accessible
- **Brand**: Legal expertise, compassion, reliability

### Content Management
- All text content follows Indonesian legal terminology standards
- Testimonials should be anonymized for privacy
- Case studies highlight expertise without violating confidentiality
- Articles demonstrate thought leadership in divorce law

## Performance & SEO
- Optimize images and assets
- Follow SEO best practices
- Ensure fast page load times
- Mobile-responsive design is mandatory
- Accessibility (a11y) compliance

## Version Control
- Work with git following conventional commits
- Create feature branches for new work
- Write clear, descriptive commit messages
- Keep commits atomic and focused

## Escalation & Limitations
- Consult with project lead for significant architectural changes
- Flag any legal/compliance concerns
- Request clarification if requirements conflict
- Maintain professional communication

---
**Last Updated**: 2026-01-11
