# Capitec Branch Locator Map

A responsive map-based web app for finding the nearest Capitec Bank branch. Built with Next.js, React-Leaflet, and mock data—suitable for demos and front-end evaluation.

## Repository (GitHub)

- **Repo name:** `capitec-branch-locator`
- **Description:** Interactive map-based web app to find the nearest Capitec Bank branch. Next.js, React-Leaflet, search, geolocation & saved branches.

## Features

- **Interactive map** (OpenStreetMap via React-Leaflet) with custom red markers
- **Search** by branch name or address; list updates in real time
- **Branch list** sidebar (collapsible on mobile) with Framer Motion animations
- **Branch detail modal** (address, hours, services) on marker or list click
- **Geolocation on load** – map centers on your location and branches sort by distance (with optional “My location” button to re-center)
- **Save branches** – bookmark branches in memory (in-app state) from the list or detail modal
- **Accessibility**: ARIA labels, keyboard support, semantic HTML

## Tech Stack

- **Next.js 15** (App Router), **TypeScript** (strict)
- **Zod** – validation for branch data
- **Zustand** – search query, selected branch, sidebar state
- **TanStack Query** + **Axios** – simulated API (1s delay) for branches
- **Framer Motion** – loading, list, and modal animations
- **Tailwind CSS** – Capitec theme (primary red/blue, Nunito Sans font)
- **React-Leaflet** – map and markers (no API key; OSM tiles only)

## Prerequisites

- Node.js 20+
- npm (or yarn)

## Build

```bash
cd capitec
npm ci
npm run build
```

## Run

**Development:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production:**

```bash
npm start
```

## Docker

Build and run with Docker:

```bash
docker build -t capitec-branch-locator .
docker run -p 3000:3000 capitec-branch-locator
```

Then open [http://localhost:3000](http://localhost:3000).

## Testing

No automated test suite is included. Manual QA is recommended: search, click list items and markers, open/close modal, resize for mobile/desktop, and use “My location” (with browser location allowed).

## Project Structure

```
capitec/
├── Dockerfile
├── README.md
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Nunito Sans font, QueryClientProvider
│   │   ├── page.tsx        # Entry → BranchLocatorLayout
│   │   └── globals.css     # Tailwind + Leaflet CSS, theme
│   ├── components/
│   │   ├── map/            # BranchMap (Leaflet), MapLoading, MapError
│   │   ├── layout/         # BranchLocatorLayout (map + sidebar)
│   │   ├── search-bar.tsx
│   │   ├── branch-list.tsx
│   │   ├── branch-detail-modal.tsx
│   │   ├── error-boundary.tsx
│   │   └── providers/      # QueryProvider
│   ├── lib/
│   │   ├── api/client.ts   # fetchBranches (mock 1s delay + Zod)
│   │   └── schemas/branch.ts
│   ├── store/
│   │   └── branch-locator-store.ts
│   ├── hooks/
│   │   ├── use-branches-query.ts
│   │   └── use-filtered-branches.ts
│   └── data/
│       └── branches.ts     # Mock SA branches
```

## Author

- **Brandon N Nkawu** – Developed with hopes for a job opportunity.
- **LinkedIn**: [https://www.linkedin.com/in/brandonnkawu/](https://www.linkedin.com/in/brandonnkawu/)
- **Email**: [brandonnkawu01@gmail.com](mailto:brandonnkawu01@gmail.com)
- **Website**: [https://www.orrbit.co.za/](https://www.orrbit.co.za/)
- **Hobbies**: Everything to do with software, drones, AI and automation.
- **License**: Owned by Orrbit Systems.

## Design

- **Colors**: Capitec primary red (`#E51718`) for markers/accents, primary blue (`#2F70EF`) for controls and search; white background, dark gray text, light gray for lists.
- **Font**: Nunito Sans (Google Fonts).
- **UI**: 8px rounded corners, light shadows, responsive grid (map prominent; sidebar collapsible on small screens).
