# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a **TradesTrek** landing page built with Next.js 14 using the **Pages Router** (not App Router).

### Tech Stack
- Next.js 14 with Pages Router
- TypeScript and JSX (mixed usage)
- Tailwind CSS
- React Query for data fetching
- Axios for API requests
- Framer Motion for animations
- react-hot-toast for notifications

### Project Structure

**Pages** (`src/pages/`): Each file maps to a route. Pages are thin wrappers that import page components and wrap them in `GeneralLaout`.

**Page Components** (`src/components/pagesComponent/[PageName]/`): Each page has a corresponding folder containing:
- `index.jsx` - Main page component
- `sections/` - Numbered section components (SectionOne, SectionTwo, etc.)

**API Layer** (`src/api/`):
- `axios.tsx` - Configured Axios instance pointing to `https://tradestrek.salitastech.com/api/v1`
- `general.api.tsx` - API functions for FAQs, pricing, testimonials, contact forms, newsletter signup, company info, and page content

**Layout** (`src/layout/GeneralLaout.tsx`): Wraps pages with Navbar and Footer. Note the typo in filename is intentional.

### Custom Tailwind Colors

Use these brand colors defined in `tailwind.config.ts`:
- `palette-one`: #E6CCFF (light purple)
- `palette-two`: #8000FF (purple - primary brand color)
- `palette-three`: #00F399FA (green)
- `palette-four`: #F45531 (red/orange)

### Data Fetching Pattern

Pages fetch data using React Query hooks. API functions are in `src/api/general.api.tsx`. The pattern:
```tsx
const { data } = useQuery('key', apiFunctionFromGeneralApi)
```
