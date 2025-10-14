# Copilot Instructions for personal-site-alyx

## Project Overview

Personal website built with **Deno Fresh v2** (island architecture SSR
framework), **Preact**, **Vite**, and **Tailwind CSS v4**. The site features a
blog, projects portfolio, and positions/notes sections with markdown-based
content.

## Architecture & Key Patterns

### Fresh Framework Setup

- **Entry points**: `main.ts` (app definition), `client.ts` (CSS imports),
  `vite.config.ts` (build config)
- Uses Fresh's **typed define pattern** via `utils.ts`: All routes/pages use
  `define.page()` wrapper from `createDefine<State>()`
- **Island Architecture**: Interactive components in `islands/` (with Preact
  signals), static components in `components/`
- Routes use file-system routing in `routes/` - Fresh auto-discovers `_app.tsx`,
  `_error.tsx`, and page routes

### State Management & Interactivity

- **Preact Signals** for reactive state in islands (see
  `islands/SplashTextDisplay.tsx`, `islands/Clock.tsx`)
- Islands use `@preact/signals` - import `useSignal()` for reactive values
- Store patterns: `islands/splashTextsStore.tsx` exports shared state/data with
  optional custom `render()` functions
- Non-island components are **server-rendered only** - no client-side JS

### Content Management Pattern

- **Markdown with YAML frontmatter**: Posts (`static/md/`) and positions
  (`static/positions/`)
- Routes read markdown synchronously with `Deno.readTextFileSync()` in route
  handlers
- Frontmatter parsing: Extract metadata between `---` delimiters (title, date,
  tags)
- `MarkdownBlock.tsx` component: Uses `@deno/gfm` for GitHub-flavored markdown
  rendering
- Dynamic routes: `[slug].tsx` pattern maps to `static/{section}/{slug}.md`
  files

### Data & Projects

- Projects are stored in `static/projects.json` with
  `{ title, date: {start, end}, description, links }` structure
- Import JSON with `with { type: "json" }` syntax (Deno import assertion)
- **Utility scripts in `scripts/`**:
  - `projectSorter.ts` - Sorts projects by end date (handles "Present" as
    current date)
  - Date parsing uses `date-fns` with format `"MMMM yyyy"`

### Styling Conventions

- **Tailwind CSS v4** with Vite plugin (`@tailwindcss/vite`)
- Use as little pure CSS as possible. Use Tailwind wherever possible.
- Primary theme: `color: #363f47`, `backgroundColor: "#f3dfc1"` (set in
  `_app.tsx` body)
- Font: `font-mono` globally
- Component-specific: `.markdown-box` for GFM content, `.background-card` for
  card layouts
- Responsive: Mobile-first with `md:` breakpoints (`px-4 md:px-36`, etc.)

### API Routes

- RSS/Atom feed: `routes/api/feed.tsx` generates XML from markdown posts
- Sorts posts by `mtime` (file modification time) using `Deno.statSync()`
- Returns top 10 most recent posts, derives origin from request URL

## Development Workflow

### Essential Commands (from `deno.json`)

```bash
deno task dev       # Start Vite dev server with HMR
deno task build     # Production build (outputs to _fresh/)
deno task start     # Serve production build from _fresh/server.js
deno task check     # Format check, lint, and type-check
deno task update    # Update Fresh framework
```

### Build Output Structure

- `_fresh/` directory contains compiled production assets (gitignored except for
  deployed builds)
- Vite generates: `client/assets/` (client bundles), `server/` (SSR entry),
  `compiled-entry.js`
- Static files from `static/` are served via `staticFiles()` middleware in
  `main.ts`

### Working with Content

- **Add blog post**: Create `static/md/{slug}.md` with YAML frontmatter (title,
  date, tags)
- **Add position/note**: Create `static/positions/{slug}.md`
- **Add project**: Edit `static/projects.json`, then run
  `deno run -A scripts/projectSorter.ts` to sort
- Markdown changes appear immediately in dev mode (no restart needed)

## Import Conventions

- **Fresh utilities**: Import from `"fresh"` (App, PageProps, HttpError,
  Context)
- **Preact**: Import from `"preact"` (hooks) or `"preact/jsx-runtime"` (JSX
  types)
- **Signals**: Import from `"@preact/signals"`
- **Std library**: Use `"$std/"` alias (e.g., `"$std/path/mod.ts"`)
- **Icons**: `@preact-icons/tb` for Tabler icons (e.g., `TbBrandGithub`)
- **Local components**: Relative imports with `.tsx` extension

## Common Gotchas

- **Fresh v2 uses Vite**: Old Fresh v1 patterns (fresh.gen.ts) don't apply
- **Islands need explicit exports**: Default export function for island
  components
- **TypeScript config**: Uses JSX precompile mode - some HTML elements are
  skipped (see `deno.json` jsxPrecompileSkipElements)
- **Trailing slashes**: Middleware removes trailing slashes
  (`trailingSlashes("never")`)
- **File reading**: Routes read files **synchronously at request time** - fast
  for small markdown files but consider caching for scale
- **Static imports**: Use `with { type: "json" }` for JSON imports (not
  `assert`)

## Key Files Reference

- `utils.ts` - Fresh typed define helper (State interface)
- `routes/_app.tsx` - Root HTML wrapper, global styles
- `components/MarkdownBlock.tsx` - GFM rendering with metadata display
- `components/Footer/Footer.tsx` - Social links with icon components
- `components/Header/Header.tsx` - Navigation breadcrumbs and menu

# Git Assistant Prompt

You are an expert Git assistant. Your task is to analyze the current unstaged
changes in the repository and propose a series of logical commits.

## Workflow

1. **Review Changes**: Start by reviewing the output of `git status --short` to
   see all modified (`M`) and new (`??`) files.
2. **Analyze Diffs**: For each modified file, analyze the diff to understand the
   specific changes made.
3. **Group Changes**: Group related changes together into atomic commits. A
   single commit should represent one logical change (e.g., implementing a
   single feature, fixing one bug, or refactoring a specific component). Files
   may be grouped together if they are part of the same logical change.
4. **Generate Commands**: For each proposed commit, generate the `git add`
   command and a commit message that strictly follows the Angular Commit Message
   Conventions.

## Angular Commit Message Rules

The commit message must follow this exact structure:

```
<type>(<scope>): <subject>
```

- **Type**: Must be one of the following keywords:
  - `feat`: A new feature.
  - `fix`: A bug fix.
  - `docs`: Documentation only changes.
  - `style`: Changes that do not affect the meaning of the code (white-space,
    formatting, etc.).
  - `refactor`: A code change that neither fixes a bug nor adds a feature.
  - `perf`: A code change that improves performance.
  - `test`: Adding or correcting tests.
  - `build`: Changes that affect the build system or external dependencies.
  - `ci`: Changes to CI configuration files and scripts.
  - `chore`: Other changes that don't modify `src` or `test` files.
- **Scope (optional)**: A noun specifying the part of the codebase affected. For
  example: `homepage`, `component`, `deps`, `docs`.
- **Subject**: A concise, imperative, lowercase description of the change. Do
  not end with a period.

Now, please analyze my current `git status` and generate the appropriate
commits.
