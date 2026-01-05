# Memories v1 — UX Specification

> **Purpose**  
Define and lock the UX contract for the **Memories** feature before implementation.  
This document describes *what exists*, *how it behaves*, and *how users move between views*.

---

## Overview

**Memories** is a calm, time-oriented way to browse family moments.

Core principles:
- Time anchors navigation (year → month)
- Photos lead emotion
- Stories add depth *on demand*
- No dead ends, no frustration

---

## Information Architecture

**Primary navigation**
- Memories
- Recipes
- Favorites

Memories replaces:
- Gallery
- Stories

---

## View 1 — Memories List (Entry View)

**Purpose:** orient and browse

### Layout
- Page title: **Memories**
- Search bar (always visible)
- Filter chips:
  - All
  - Years (dynamic)
  - Optional: Has story

### Content
- Memories grouped by **Year**
- Each memory rendered as a **Memory Card**

### Memory Card
- Cover photo
- Title
- Month + year
- Entire card is tappable

### Behavior
- Vertical scroll
- Search and filters update the list in place

### Exit
- System / browser back → Home

**Reference mockup (design image):**  
`docs/images/memories-list.png`

![Memories list view](./images/memories-list.png)

---

## View 2 — Memory View (Inside a Memory)

**Purpose:** explore one moment

### Header
- Back arrow
- Memory title
- Month + year

### Content
- **Masonry / grid** of photos (always shown)
- Subtle **story handle** for discoverability

Example:
```
─── Story ───
```

### Behavior
- Scroll grid freely
- Tap photo → Fullscreen Photo View
- Tap story handle → Story Drawer

### Exit
- Back arrow / system back → Memories List

**Reference mockup (design image):**  
`docs/images/memory-grid.png`

![Memory grid view](./images/memory-grid.png)

---

## View 3 — Photo View (Fullscreen)

**Purpose:** emotional focus

### Content
- Single photo fullscreen
- Dark background
- Subtle memory context overlay:

```
Garden · August 2010
```

### Gestures (Locked)
- Swipe left / right → next / previous photo (same memory)
- Tap background OR swipe down → return to Memory View

### Rules
- No scrolling
- No secondary UI

**Reference mockup (design image):**  
`docs/images/photo-fullscreen.png`

![Fullscreen photo view](./images/photo-fullscreen.png)

---

## View 4 — Story View (Drawer + Fullscreen)

**Purpose:** read the narrative

### 4a. Story Drawer (Collapsed)
- Slides up over photo or grid
- Scrollable text
- “Read more” affordance

### 4b. Story Fullscreen
- Fullscreen reading mode
- Clear **Close** button

### Gestures (Locked)
- Scroll text normally
- Swipe down closes only when scrolled to top
- Close button returns to previous view

**Reference mockups (design images):**  
`docs/images/story-drawer.png`  
`docs/images/story-fullscreen.png`

![Story drawer](./images/story-drawer.png)

![Story fullscreen](./images/story-fullscreen.png)

---

## Gesture Priority Rules (Critical)

| Context | Gesture | Result |
|------|--------|--------|
| Grid | Vertical scroll | Scroll grid |
| Photo fullscreen | Horizontal swipe | Next / previous photo |
| Photo fullscreen | Vertical swipe | Exit fullscreen |
| Story drawer | Vertical scroll | Scroll text |
| Story drawer | Swipe down at top | Close drawer |

These rules prevent accidental exits and gesture conflicts.

---

## Search & Filtering

### Search
- Searches:
  - memory title
  - story text
  - year / month
- Results are **memories**, not photos
- Search never opens a new view

### Filters
- Year-based chips
- Optional: Has story
- Non-modal

---

## Exit & Back Behavior

- Each view exits **one level only**
- Browser / system back closes the topmost layer
- Swipe-down gestures supported where appropriate

No dead ends.

---

## Edge & Empty States

- No memories yet
- No search results
- Memory with one photo
- Memory with no story

All handled without special-case UX.

---

## Explicitly Out of Scope (v1)

- Sharing
- Tags / people / locations
- Slideshow / autoplay
- Social interactions
- Timeline-only view

---

## Final Note

This document is the **UX contract** for Memories v1.

Implementation should follow this spec without reinterpreting behavior or gestures.

