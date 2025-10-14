---
title: "Building My Personal Website with Deno Fresh"
tags: ["web-development", "typescript", "deno", "fresh"]
date: "2025-10-06"
summary: "A deep dive into creating unknownhost.name using Deno Fresh, TypeScript, and Tailwind CSS - my journey in building a modern, performant personal website."
---

## Building My Personal Website with Deno Fresh

Over the past few years, I've been working on my personal website,
**unknownhost.name**, as a showcase for my projects and technical work. Built
with **Deno Fresh**, **TypeScript**, and **Tailwind CSS**, this site represents
my exploration into modern web development practices and full-stack JavaScript
ecosystems.

## Why Deno Fresh?

Fresh is a full-stack web framework built on Deno that emphasizes **islands
architecture** and **server-side rendering**. Unlike traditional React
applications that hydrate the entire page, Fresh uses Preact islands that only
hydrate interactive components when needed. This approach provides:

- **Excellent performance** out of the box
- **Zero configuration** development experience
- **Type-safe** routing and data fetching
- **Built-in optimization** for production builds

## Architecture Decisions

The site follows a file-system based routing pattern where each route in the
`routes/` directory automatically becomes a page. Content is managed through
markdown files in `static/md/` with YAML frontmatter for metadata.

Key architectural patterns include:

- **Typed page definitions** using Fresh's `define.page()` wrapper
- **Island components** for interactivity (clocks, splash text displays)
- **Server-side markdown rendering** with for GitHub-flavored markdown
- **Responsive design** with Tailwind CSS and mobile-first approach

## Technical Highlights

### State Management with Preact Signals

Interactive components use Preact Signals for reactive state management:

```typescript
import { useSignal } from "@preact/signals";

function Clock() {
  const time = useSignal(new Date());
  // ... reactive updates
}
```

### Content Processing

Blog posts and project descriptions are processed server-side:

```typescript
// Parse YAML frontmatter
const metadata = parseFrontmatter(content);
// Render markdown to HTML
const html = render(markdownContent);
```

### Styling Philosophy

The design uses a dark theme with carefully chosen colors:

- Primary: `#363f47` (text)
- Background: `#e9debb`
- Monospace font globally for that technical feel

## Challenges and Learnings

Building with Fresh taught me about:

- **Edge computing** and server-side rendering patterns
- **Component hydration** strategies
- **Static site generation** vs dynamic rendering
- **TypeScript** integration in modern frameworks

## Future Plans

I'm continuing to evolve the site with:

- Enhanced content management features
- Better SEO optimization
- Performance monitoring and analytics
- Additional interactive components

The codebase is open source on
[GitLab](https://gitlab.com/Chrono-byte/personal-site-alyx) if you're interested
in the implementation details!
