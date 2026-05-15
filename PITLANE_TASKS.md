# Pitlane Cursor Work Plan
## Cursor execution rule

When I say “continue”, do only the next unfinished task.
Do not jump to later tasks.
Do not rewrite files that are already working unless necessary.

## Important rule
Do not edit the whole project at once.
Work step by step.
When asked to continue, complete only the next task.

## Project goal
Redesign Pitlane React app to be inspired by the Formula 1 official results page style, but with an original premium dark Pitlane identity.

Do not copy Formula1.com exactly.

Design direction:
- Dark background
- Red racing accents
- White typography
- Official motorsport dashboard feel
- Tables mixed with modern cards
- Clean spacing
- Responsive mobile layout
- Premium but not childish

## Tasks

### Task 1 — Routing
Update only the app structure and routing.

Routes:
- / → Home
- /calendrier → Calendar
- /calendrier/:raceId → RaceDetail
- /mongarage → Garage
- /masaison → Season
- * → NotFound

### Task 2 — Race data
Create or update src/data/racesData.js.

Add 24 Formula 1 2026 races with:
id, round, name, country, flag, circuit, dates, startDate, continent, type, laps, circuitLength, isNewCircuit, description.

Sprint weekends:
China, Miami, Canada, Great Britain, Netherlands, Singapore.

### Task 3 — LocalStorage hooks
Create or update:
- useFavorites
- useWatchedRaces

Keys:
- pitlane-favorites
- pitlane-watched

Each hook supports:
- check
- add
- remove
- toggle

### Task 4 — Calendar page
Redesign only /calendrier.

Add:
- Season header “Formula 1 2026”
- Filters: continent and Sprint/Standard
- Race list with 24 rounds
- Each row/card shows round, Grand Prix name, flag, country, circuit, date, weekend type, Details, Favorite, Watched.
Do not implement GSAP here. Only prepare class names/refs if needed.

### Task 5 — Race detail page
Redesign only /calendrier/:raceId.

Show:
- Grand Prix title
- country flag and country
- circuit
- dates
- round number
- laps
- circuit length
- weekend type
- description
- Add to Garage button
- Mark as Watched button
- Section “Race Weekend Info”

### Task 6 — Garage page
Redesign only /mongarage.

Show favorite races from localStorage in a premium dark results-style list/table.

Each row/card:
- round
- race name
- date
- circuit
- country flag
- remove button

Add empty state if no favorites exist.

### Task 7 — Season page
Redesign only /masaison.

Show watched races from localStorage as chronological timeline/log.

Filters:
- continent
- Sprint/Standard

Each item:
- race name
- date watched
- circuit
- country flag
- country
- weekend type
- badge: J’ai regardé ça ✓

### Task 8 — CSS polish
Improve only CSS.

Use:
- black and charcoal backgrounds
- red racing accents
- white typography
- clean tables/cards
- responsive mobile design
- professional spacing
- subtle hover effects
Match the quality of the Stitch reference: premium, cinematic, polished, not basic.

### Task 9 — GSAP animations
Add GSAP animations carefully.

Use:
- @gsap/react
- useGSAP
- ScrollTrigger
- Flip if needed

Add:
- page entrance animation
- calendar cards reveal
- timeline reveal
- garage smooth feel

### Task 10 — Final check
Check:
- broken imports
- React Router errors
- localStorage bugs
- filter bugs
- responsive issues
- console errors
- missing CSS classes

Fix only real problems.
Make sure npm run dev works.

Do not add new features during final check. Only fix bugs and polish inconsistencies.