# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Brady Barker's personal portfolio website - a React SPA built with Vite and Tailwind CSS v4. The site features a gamified achievement system, interactive data visualizations, and a dark-mode-first design aesthetic.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Routing & Pages
Routes are defined in `src/App.jsx` using React Router v7. Pages are lazy-loaded for code splitting:
- `/` - Home (galaxy animation landing page)
- `/resume` - Resume with sidebar navigation
- `/projects` - Personal projects showcase
- `/achievements` - Gamification achievements page
- `/game` - Hidden easter egg game

### State Management
Two React Context providers wrap the app (in `src/App.jsx`):
- **ThemeContext** (`src/context/ThemeContext.jsx`) - Dark/light mode toggle, persists to localStorage
- **AchievementContext** (`src/context/AchievementContext.jsx`) - Gamification system with toast notifications and confetti effects

### Data Layer
- `src/data/profile.json` - Primary resume/profile data (JSON)
- `src/data/resumeData.js` - Enriches profile.json with icon mappings and exports `impactData` for visualizations
- `src/data/personalProjects.js` - Personal project data for the Projects page
- `src/constants/achievements.js` - Achievement definitions (IDs, titles, descriptions)

### Component Organization
```
src/components/
├── common/        # Shared components (ErrorBoundary, SectionHeader)
├── icons/         # Custom icon wrapper components
├── layout/        # Navbar, Footer, Sidebar, MobileNav
└── sections/      # Page sections (HeroSection, ExperienceSection, etc.)
```

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no separate config file needed)
- Custom CSS classes in `src/index.css`:
  - `.text-gradient-primary`, `.text-gradient-secondary` - Gradient text effects
  - `.tech-tag`, `.tech-tag-dashed` - Technology badge styling
  - `.bg-grid-pattern`, `.bg-dot-pattern`, `.bg-circuit-pattern` - Background patterns
  - `.geometric-corners`, `.corner-brackets` - Decorative corner effects
- Fonts: Inter (body), Space Grotesk (`.font-display`), system monospace (`.font-mono`)

### Key Patterns
- Achievement triggers are spread throughout components - call `unlockAchievement(id)` from the `useAchievements` hook
- Icons use lucide-react directly or custom wrapper components in `src/components/icons/`
- Toast notifications via react-hot-toast with custom styled toasts in AchievementContext
- Charts use Recharts library for data visualizations in the Impact section
