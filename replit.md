# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### Alford's Glen Wedding Barn (`artifacts/alfords-glen`)
- **Type**: react-vite, presentation-first (no backend)
- **Preview path**: `/`
- **Description**: Complete 7-page wedding venue website for Alford's Glen Wedding Barn in Garrettsville, Ohio
- **Pages**: Home, Rental Info (/rental), Vendors (/vendors), Gallery (/gallery), Our Couples (/couples), History (/history), Contact (/contact)
- **Key features**: Cinematic hero with parallax, gallery lightbox, vendor tabs, history timeline, contact form with validation, sticky nav
- **Design**: Warm Ivory + Accent Gold + Deep Forest Green palette, Playfair Display + Lato + Great Vibes fonts, Framer Motion animations

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
