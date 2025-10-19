This repository uses SvelteKit + Tailwind + Cloudflare Workers (wrangler). The instructions below are targeted at automated coding agents (Copilot-style) that will make changes in this codebase.

Keep this short, actionable, and specific to the project conventions.

1) Big picture (what this repo is and runtime)
- This is a SvelteKit app (Svelte 5) built to run as a Cloudflare Worker using @sveltejs/adapter-cloudflare. The worker entry is produced under `.svelte-kit/cloudflare` and wrangler.jsonc configures deployment.
- Frontend UI lives under `src/routes` (page components) and shared primitives / UI live under `src/lib` (see `src/lib/components/ui/*`). Assets are in `src/lib/assets`.

2) Important files and commands
- Dev server: `npm run dev` (starts Vite + SvelteKit dev). Build: `npm run build`. Preview (local Cloudflare worker dev): `npm run preview`.
- Deploy to Cloudflare: `npm run deploy` (runs `vite build` then `wrangler deploy`). Wrangler config: `wrangler.jsonc`.
- Type checking / lint: `npm run check`, `npm run lint`, `npm run format`.

3) Project-specific patterns and conventions
- TypeScript + SvelteKit: prefer `lang="ts"` in Svelte files. Top-level imports often use the `$lib` alias (e.g. `import * as Carousel from '$lib/components/ui/carousel/index.js'`). Use .js imports in some components (the project compiles TS -> JS for Svelte runtime bundles).
- UI primitives: `src/lib/components/ui` contains building-block components (button, carousel). These use `tailwind-variants` for variant systems (see `button.svelte` and the `buttonVariants` tv config). When changing styles, update the tv config and class usage.
- CSS utilities: `src/lib/utils.ts` exports `cn(...)` (clsx + twMerge) for merging classes. Use it to compose Tailwind classes.
- Assets: static imagery is stored under `src/lib/assets` and imported directly in components (Vite handles bundling).

4) Code structure notes that matter for automation
- Routes: `src/routes` follow SvelteKit conventions. Server-only logic (load, actions) lives in `+page.server.ts` next to `+page.svelte` when present.
- Module vs instance script in Svelte components: some components use `script lang="ts" module` for module-level exports (see `src/lib/components/ui/button/button.svelte`). Preserve `export` semantics when refactoring.
- Packaged build target: Cloudflare Worker bundle requires adapter-cloudflare; changes that affect SSR/output should be validated with `npm run build` and `npm run preview`.

5) Tests, type checks and quick validation
- There are no unit tests in the repo. Minimum validation for PRs: run `npm run check` and `npm run build` (or `npm run preview` for runtime smoke). After codegen, run the linter `npm run lint` and `npm run format`.

6) Typical small tasks and how to do them safely
- Add a new UI component: place files under `src/lib/components/ui/<name>/`, export an `index.ts` that re-exports the component, import via `$lib/components/ui/<name>` in routes.
- Modify route UI only: edit `src/routes/.../+page.svelte`. Preserve `script` module exports and server-side files (`+page.server.ts`) if present.
- Update Cloudflare bindings or worker config: edit `wrangler.jsonc` and run `npm run preview` to validate locally.

7) Examples to copy when generating code
- Use `cn(...)` from `src/lib/utils.ts` for class merging.
- Follow `button.svelte` for a canonical accessible button: tv-based variants, `href` fallback, `bind:this={ref}` pattern.
- For carousels, re-use `src/lib/components/ui/carousel/*` API: `Carousel.Root`, `Carousel.Content`, `Carousel.Item` and pass `plugins` like Autoplay.

8) Security / secrets / env
- Do not add secrets to source. Wrangler secrets and environment variables belong in wrangler or Cloudflare. `wrangler.jsonc` may reference bindings; keep secrets out of the repo.

9) When creating PRs as an agent
- Keep changes small and focused. Run `npm run check` and `npm run build` before proposing changes. Mention any runtime implications (SSR, Cloudflare bundle size). If adding dependencies, update package.json deps and keep devDependencies vs dependencies correct.

If anything above is unclear or you need more detail about any area (build steps, deploy, component contracts), tell me which file or behavior you want expanded and I will add it.

## MCP Svelte (mcp_svelte-mcp) tools
These helper tools provide authoritative Svelte 5 / SvelteKit documentation and automated Svelte code checks. Use them when you need Svelte-specific guidance or to validate generated components.

- `mcp_svelte-mcp_list-sections`
	- What: Returns a catalog of Svelte 5 / SvelteKit documentation sections (title, use_cases, path).
	- When to use: Run this first for any Svelte docs request — it helps pick which docs sections to fetch.

- `mcp_svelte-mcp_get-documentation`
	- What: Fetches the full content of one or more Svelte 5 / SvelteKit documentation sections.
	- When to use: After `list-sections`, request the specific section(s) you need (e.g., `$state`, `load functions`, `routing`).

- `mcp_svelte-mcp_svelte-autofixer`
	- What: Analyzes a Svelte component/module and returns suggestions/fixes to align with Svelte 5 conventions used by this project.
	- When to use: MUST be used whenever you ask to write Svelte code — run it on the final component before returning code to the user. Provide the component source and desired Svelte version (default: 5).

- `mcp_svelte-mcp_playground-link`
	- What: Generates a Svelte REPL/Playground link for a Svelte snippet (indicate Tailwind usage if applicable).
	- When to use: Offer this after producing a final snippet for quick user testing. Do NOT use this if the component was written directly into the repo files (the tool expects standalone snippets).

Quick rules:
- Always follow: `mcp_svelte-mcp_list-sections` -> choose sections -> `mcp_svelte-mcp_get-documentation`.
- Run `mcp_svelte-mcp_svelte-autofixer` on any Svelte component before presenting it to the user.
- Use the playground-link tool only for standalone snippets, not for code already written into the repo.

## Important task for svelte mcp

You are a Svelte expert tasked to build components and utilities for Svelte developers. If you need documentation for anything related to Svelte you can invoke the tool `get_documentation` with one of the following paths:
<available-docs>

- title: Overview, use_cases: project setup, creating new svelte apps, scaffolding, cli tools, initializing projects, path: cli/overview
- title: Frequently asked questions, use_cases: project setup, initializing new svelte projects, troubleshooting cli installation, package manager configuration, path: cli/faq
- title: sv create, use_cases: project setup, starting new sveltekit app, initializing project, creating from playground, choosing project template, path: cli/sv-create
- title: sv add, use_cases: project setup, adding features to existing projects, integrating tools, testing setup, styling setup, authentication, database setup, deployment adapters, path: cli/sv-add
- title: sv check, use_cases: code quality, ci/cd pipelines, error checking, typescript projects, pre-commit hooks, finding unused css, accessibility auditing, production builds, path: cli/sv-check
- title: sv migrate, use_cases: migration, upgrading svelte versions, upgrading sveltekit versions, modernizing codebase, svelte 3 to 4, svelte 4 to 5, sveltekit 1 to 2, adopting runes, refactoring deprecated apis, path: cli/sv-migrate
- title: devtools-json, use_cases: development setup, chrome devtools integration, browser-based editing, local development workflow, debugging setup, path: cli/devtools-json
- title: drizzle, use_cases: database setup, sql queries, orm integration, data modeling, postgresql, mysql, sqlite, server-side data access, database migrations, type-safe queries, path: cli/drizzle
- title: eslint, use_cases: code quality, linting, error detection, project setup, code standards, team collaboration, typescript projects, path: cli/eslint
- title: lucia, use_cases: authentication, login systems, user management, registration pages, session handling, auth setup, path: cli/lucia
- title: mdsvex, use_cases: blog, content sites, markdown rendering, documentation sites, technical writing, cms integration, article pages, path: cli/mdsvex
- title: paraglide, use_cases: internationalization, multi-language sites, i18n, translation, localization, language switching, global apps, multilingual content, path: cli/paraglide
- title: playwright, use_cases: browser testing, e2e testing, integration testing, test automation, quality assurance, ci/cd pipelines, testing user flows, path: cli/playwright
- title: prettier, use_cases: code formatting, project setup, code style consistency, team collaboration, linting configuration, path: cli/prettier
- title: storybook, use_cases: component development, design systems, ui library, isolated component testing, documentation, visual testing, component showcase, path: cli/storybook
- title: sveltekit-adapter, use_cases: deployment, production builds, hosting setup, choosing deployment platform, configuring adapters, static site generation, node server, vercel, cloudflare, netlify, path: cli/sveltekit-adapter
- title: tailwindcss, use_cases: project setup, styling, css framework, rapid prototyping, utility-first css, design systems, responsive design, adding tailwind to svelte, path: cli/tailwind
- title: vitest, use_cases: testing, unit tests, component testing, test setup, quality assurance, ci/cd pipelines, test-driven development, path: cli/vitest
- title: Introduction, use_cases: learning sveltekit, project setup, understanding framework basics, choosing between svelte and sveltekit, getting started with full-stack apps, path: kit/introduction
- title: Creating a project, use_cases: project setup, starting new sveltekit app, initial development environment, first-time sveltekit users, scaffolding projects, path: kit/creating-a-project
- title: Project types, use_cases: deployment, project setup, choosing adapters, ssg, spa, ssr, serverless, mobile apps, desktop apps, pwa, offline apps, browser extensions, separate backend, docker containers, path: kit/project-types
- title: Project structure, use_cases: project setup, understanding file structure, organizing code, starting new project, learning sveltekit basics, path: kit/project-structure
- title: Web standards, use_cases: always, any sveltekit project, data fetching, forms, api routes, server-side rendering, deployment to various platforms, path: kit/web-standards
- title: Routing, use_cases: routing, navigation, multi-page apps, project setup, file structure, api endpoints, data loading, layouts, error pages, always, path: kit/routing
- title: Loading data, use_cases: data fetching, api calls, database queries, dynamic routes, page initialization, loading states, authentication checks, ssr data, form data, content rendering, path: kit/load
- title: Form actions, use_cases: forms, user input, data submission, authentication, login systems, user registration, progressive enhancement, validation errors, path: kit/form-actions
- title: Page options, use_cases: prerendering static sites, ssr configuration, spa setup, client-side rendering control, url trailing slash handling, adapter deployment config, build optimization, path: kit/page-options
- title: State management, use_cases: sveltekit, server-side rendering, ssr, state management, authentication, data persistence, load functions, context api, navigation, component lifecycle, path: kit/state-management
- title: Remote functions, use_cases: data fetching, server-side logic, database queries, type-safe client-server communication, forms, user input, mutations, authentication, crud operations, optimistic updates, path: kit/remote-functions
- title: Building your app, use_cases: production builds, deployment preparation, build process optimization, adapter configuration, preview before deployment, path: kit/building-your-app
- title: Adapters, use_cases: deployment, production builds, hosting setup, choosing deployment platform, configuring adapters, path: kit/adapters
- title: Zero-config deployments, use_cases: deployment, production builds, hosting setup, choosing deployment platform, ci/cd configuration, path: kit/adapter-auto
- title: Node servers, use_cases: deployment, production builds, node.js hosting, custom server setup, environment configuration, reverse proxy setup, docker deployment, systemd services, path: kit/adapter-node
- title: Static site generation, use_cases: static site generation, ssg, prerendering, deployment, github pages, spa mode, blogs, documentation sites, marketing sites, path: kit/adapter-static
- title: Single-page apps, use_cases: spa mode, single-page apps, client-only rendering, static hosting, mobile app wrappers, no server-side logic, adapter-static setup, fallback pages, path: kit/single-page-apps
- title: Cloudflare, use_cases: deployment, cloudflare workers, cloudflare pages, hosting setup, production builds, serverless deployment, edge computing, path: kit/adapter-cloudflare
- title: Cloudflare Workers, use_cases: deploying to cloudflare workers, cloudflare workers sites deployment, legacy cloudflare adapter, wrangler configuration, cloudflare platform bindings, path: kit/adapter-cloudflare-workers
- title: Netlify, use_cases: deployment, netlify hosting, production builds, serverless functions, edge functions, static site hosting, path: kit/adapter-netlify
- title: Vercel, use_cases: deployment, vercel hosting, production builds, serverless functions, edge functions, isr, image optimization, environment variables, path: kit/adapter-vercel
- title: Writing adapters, use_cases: custom deployment, building adapters, unsupported platforms, adapter development, custom hosting environments, path: kit/writing-adapters
- title: Advanced routing, use_cases: advanced routing, dynamic routes, file viewers, nested paths, custom 404 pages, url validation, route parameters, multi-level navigation, path: kit/advanced-routing
- title: Hooks, use_cases: authentication, logging, error tracking, request interception, api proxying, custom routing, internationalization, database initialization, middleware logic, session management, path: kit/hooks
- title: Errors, use_cases: error handling, custom error pages, 404 pages, api error responses, production error logging, error tracking, type-safe errors, path: kit/errors
- title: Link options, use_cases: routing, navigation, multi-page apps, performance optimization, link preloading, forms with get method, search functionality, focus management, scroll behavior, path: kit/link-options
- title: Service workers, use_cases: offline support, pwa, caching strategies, performance optimization, precaching assets, network resilience, progressive web apps, path: kit/service-workers
- title: Server-only modules, use_cases: api keys, environment variables, sensitive data protection, backend security, preventing data leaks, server-side code isolation, path: kit/server-only-modules
- title: Snapshots, use_cases: forms, user input, preserving form data, multi-step forms, navigation state, preventing data loss, textarea content, input fields, comment systems, surveys, path: kit/snapshots
- title: Shallow routing, use_cases: modals, dialogs, image galleries, overlays, history-driven ui, mobile-friendly navigation, photo viewers, lightboxes, drawer menus, path: kit/shallow-routing
- title: Observability, use_cases: performance monitoring, debugging, observability, tracing requests, production diagnostics, analyzing slow requests, finding bottlenecks, monitoring server-side operations, path: kit/observability
- title: Packaging, use_cases: building component libraries, publishing npm packages, creating reusable svelte components, library development, package distribution, path: kit/packaging
- title: Auth, use_cases: authentication, login systems, user management, session handling, jwt tokens, protected routes, user credentials, authorization checks, path: kit/auth
- title: Performance, use_cases: performance optimization, slow loading pages, production deployment, debugging performance issues, reducing bundle size, improving load times, path: kit/performance
- title: Icons, use_cases: icons, ui components, styling, css frameworks, tailwind, unocss, performance optimization, dependency management, path: kit/icons
- title: Images, use_cases: image optimization, responsive images, performance, hero images, product photos, galleries, cms integration, cdn setup, asset management, path: kit/images
- title: Accessibility, use_cases: always, any sveltekit project, screen reader support, keyboard navigation, multi-page apps, client-side routing, internationalization, multilingual sites, path: kit/accessibility
- title: SEO, use_cases: seo optimization, search engine ranking, content sites, blogs, marketing sites, public-facing apps, sitemaps, amp pages, meta tags, performance optimization, path: kit/seo
- title: Frequently asked questions, use_cases: troubleshooting package imports, library compatibility issues, client-side code execution, external api integration, middleware setup, database configuration, view transitions, yarn configuration, path: kit/faq
- title: Integrations, use_cases: project setup, css preprocessors, postcss, scss, sass, less, stylus, typescript setup, adding integrations, tailwind, testing, auth, linting, formatting, path: kit/integrations
- title: Breakpoint Debugging, use_cases: debugging, breakpoints, development workflow, troubleshooting issues, vscode setup, ide configuration, inspecting code execution, path: kit/debugging
- title: Migrating to SvelteKit v2, use_cases: migration, upgrading from sveltekit 1 to 2, breaking changes, version updates, path: kit/migrating-to-sveltekit-2
- title: Migrating from Sapper, use_cases: migrating from sapper, upgrading legacy projects, sapper to sveltekit conversion, project modernization, path: kit/migrating
- title: Additional resources, use_cases: troubleshooting, getting help, finding examples, learning sveltekit, project templates, common issues, community support, path: kit/additional-resources
- title: Glossary, use_cases: rendering strategies, performance optimization, deployment configuration, seo requirements, static sites, spas, server-side rendering, prerendering, edge deployment, pwa development, path: kit/glossary
- title: @sveltejs/kit, use_cases: forms, form actions, server-side validation, form submission, error handling, redirects, json responses, http errors, server utilities, path: kit/@sveltejs-kit
- title: @sveltejs/kit/hooks, use_cases: middleware, request processing, authentication chains, logging, multiple hooks, request/response transformation, path: kit/@sveltejs-kit-hooks
- title: @sveltejs/kit/node/polyfills, use_cases: node.js environments, custom servers, non-standard runtimes, ssr setup, web api compatibility, polyfill requirements, path: kit/@sveltejs-kit-node-polyfills
- title: @sveltejs/kit/node, use_cases: node.js adapter, custom server setup, http integration, streaming files, node deployment, server-side rendering with node, path: kit/@sveltejs-kit-node
- title: @sveltejs/kit/vite, use_cases: project setup, vite configuration, initial sveltekit setup, build tooling, path: kit/@sveltejs-kit-vite
- title: $app/environment, use_cases: always, conditional logic, client-side code, server-side code, build-time logic, prerendering, development vs production, environment detection, path: kit/$app-environment
- title: $app/forms, use_cases: forms, user input, data submission, progressive enhancement, custom form handling, form validation, path: kit/$app-forms
- title: $app/navigation, use_cases: routing, navigation, multi-page apps, programmatic navigation, data reloading, preloading, shallow routing, navigation lifecycle, scroll handling, view transitions, path: kit/$app-navigation
- title: $app/paths, use_cases: static assets, images, fonts, public files, base path configuration, subdirectory deployment, cdn setup, asset urls, links, navigation, path: kit/$app-paths
- title: $app/server, use_cases: remote functions, server-side logic, data fetching, form handling, api endpoints, client-server communication, prerendering, file reading, batch queries, path: kit/$app-server
- title: $app/state, use_cases: routing, navigation, multi-page apps, loading states, url parameters, form handling, error states, version updates, page metadata, shallow routing, path: kit/$app-state
- title: $app/stores, use_cases: legacy projects, sveltekit pre-2.12, migration from stores to runes, maintaining older codebases, accessing page data, navigation state, app version updates, path: kit/$app-stores
- title: $app/types, use_cases: routing, navigation, type safety, route parameters, dynamic routes, link generation, pathname validation, multi-page apps, path: kit/$app-types
- title: $env/dynamic/private, use_cases: api keys, secrets management, server-side config, environment variables, backend logic, deployment-specific settings, private data handling, path: kit/$env-dynamic-private
- title: $env/dynamic/public, use_cases: environment variables, client-side config, runtime configuration, public api keys, deployment-specific settings, multi-environment apps, path: kit/$env-dynamic-public
- title: $env/static/private, use_cases: server-side api keys, backend secrets, database credentials, private configuration, build-time optimization, server endpoints, authentication tokens, path: kit/$env-static-private
- title: $env/static/public, use_cases: environment variables, public config, client-side data, api endpoints, build-time configuration, public constants, path: kit/$env-static-public
- title: $lib, use_cases: project setup, component organization, importing shared components, reusable ui elements, code structure, path: kit/$lib
- title: $service-worker, use_cases: offline support, pwa, service workers, caching strategies, progressive web apps, offline-first apps, path: kit/$service-worker
- title: Configuration, use_cases: project setup, configuration, adapters, deployment, build settings, environment variables, routing customization, prerendering, csp security, csrf protection, path configuration, typescript setup, path: kit/configuration
- title: Command Line Interface, use_cases: project setup, typescript configuration, generated types, ./$types imports, initial project configuration, path: kit/cli
- title: Types, use_cases: typescript, type safety, route parameters, api endpoints, load functions, form actions, generated types, jsconfig setup, path: kit/types
- title: Overview, use_cases: use title and path to estimate use case, path: mcp/overview
- title: Local setup, use_cases: use title and path to estimate use case, path: mcp/local-setup
- title: Remote setup, use_cases: use title and path to estimate use case, path: mcp/remote-setup
- title: Tools, use_cases: use title and path to estimate use case, path: mcp/tools
- title: Resources, use_cases: use title and path to estimate use case, path: mcp/resources
- title: Prompts, use_cases: use title and path to estimate use case, path: mcp/prompts
- title: Overview, use_cases: always, any svelte project, getting started, learning svelte, introduction, project setup, understanding framework basics, path: svelte/overview
- title: Getting started, use_cases: project setup, starting new svelte project, initial installation, choosing between sveltekit and vite, editor configuration, path: svelte/getting-started
- title: .svelte files, use_cases: always, any svelte project, component creation, project setup, learning svelte basics, path: svelte/svelte-files
- title: .svelte.js and .svelte.ts files, use_cases: shared reactive state, reusable reactive logic, state management across components, global stores, custom reactive utilities, path: svelte/svelte-js-files
- title: What are runes?, use_cases: always, any svelte 5 project, understanding core syntax, learning svelte 5, migration from svelte 4, path: svelte/what-are-runes
- title: $state, use_cases: always, any svelte project, core reactivity, state management, counters, forms, todo apps, interactive ui, data updates, class-based components, path: svelte/$state
- title: $derived, use_cases: always, any svelte project, computed values, reactive calculations, derived data, transforming state, dependent values, path: svelte/$derived
- title: $effect, use_cases: canvas drawing, third-party library integration, dom manipulation, side effects, intervals, timers, network requests, analytics tracking, path: svelte/$effect
- title: $props, use_cases: always, any svelte project, passing data to components, component communication, reusable components, component props, path: svelte/$props
- title: $bindable, use_cases: forms, user input, two-way data binding, custom input components, parent-child communication, reusable form fields, path: svelte/$bindable
- title: $inspect, use_cases: debugging, development, tracking state changes, reactive state monitoring, troubleshooting reactivity issues, path: svelte/$inspect
- title: $host, use_cases: custom elements, web components, dispatching custom events, component library, framework-agnostic components, path: svelte/$host
- title: Basic markup, use_cases: always, any svelte project, basic markup, html templating, component structure, attributes, events, props, text rendering, path: svelte/basic-markup
- title: {#if ...}, use_cases: always, conditional rendering, showing/hiding content, dynamic ui, user permissions, loading states, error handling, form validation, path: svelte/if
- title: {#each ...}, use_cases: always, lists, arrays, iteration, product listings, todos, tables, grids, dynamic content, shopping carts, user lists, comments, feeds, path: svelte/each
- title: {#key ...}, use_cases: animations, transitions, component reinitialization, forcing component remount, value-based ui updates, resetting component state, path: svelte/key
- title: {#await ...}, use_cases: async data fetching, api calls, loading states, promises, error handling, lazy loading components, dynamic imports, path: svelte/await
- title: {#snippet ...}, use_cases: reusable markup, component composition, passing content to components, table rows, list items, conditional rendering, reducing duplication, path: svelte/snippet
- title: {@render ...}, use_cases: reusable ui patterns, component composition, conditional rendering, fallback content, layout components, slot alternatives, template reuse, path: svelte/@render
- title: {@html ...}, use_cases: rendering html strings, cms content, rich text editors, markdown to html, blog posts, wysiwyg output, sanitized html injection, dynamic html content, path: svelte/@html
- title: {@attach ...}, use_cases: tooltips, popovers, dom manipulation, third-party libraries, canvas drawing, element lifecycle, interactive ui, custom directives, wrapper components, path: svelte/@attach
- title: {@const ...}, use_cases: computed values in loops, derived calculations in blocks, local variables in each iterations, complex list rendering, path: svelte/@const
- title: {@debug ...}, use_cases: debugging, development, troubleshooting, tracking state changes, monitoring variables, reactive data inspection, path: svelte/@debug
- title: bind:, use_cases: forms, user input, two-way data binding, interactive ui, media players, file uploads, checkboxes, radio buttons, select dropdowns, contenteditable, dimension tracking, path: svelte/bind
- title: use:, use_cases: custom directives, dom manipulation, third-party library integration, tooltips, click outside, gestures, focus management, element lifecycle hooks, path: svelte/use
- title: transition:, use_cases: animations, interactive ui, modals, dropdowns, notifications, conditional content, show/hide elements, smooth state changes, path: svelte/transition
- title: in: and out:, use_cases: animation, transitions, interactive ui, conditional rendering, independent enter/exit effects, modals, tooltips, notifications, path: svelte/in-and-out
- title: animate:, use_cases: sortable lists, drag and drop, reorderable items, todo lists, kanban boards, playlist editors, priority queues, animated list reordering, path: svelte/animate
- title: style:, use_cases: dynamic styling, conditional styles, theming, dark mode, responsive design, interactive ui, component styling, path: svelte/style
- title: class, use_cases: always, conditional styling, dynamic classes, tailwind css, component styling, reusable components, responsive design, path: svelte/class
- title: await, use_cases: async data fetching, loading states, server-side rendering, awaiting promises in components, async validation, concurrent data loading, path: svelte/await-expressions
- title: Scoped styles, use_cases: always, styling components, scoped css, component-specific styles, preventing style conflicts, animations, keyframes, path: svelte/scoped-styles
- title: Global styles, use_cases: global styles, third-party libraries, css resets, animations, styling body/html, overriding component styles, shared keyframes, base styles, path: svelte/global-styles
- title: Custom properties, use_cases: theming, custom styling, reusable components, design systems, dynamic colors, component libraries, ui customization, path: svelte/custom-properties
- title: Nested <style> elements, use_cases: component styling, scoped styles, dynamic styles, conditional styling, nested style tags, custom styling logic, path: svelte/nested-style-elements
- title: <svelte:boundary>, use_cases: error handling, async data loading, loading states, error recovery, flaky components, error reporting, resilient ui, path: svelte/svelte-boundary
- title: <svelte:window>, use_cases: keyboard shortcuts, scroll tracking, window resize handling, responsive layouts, online/offline detection, viewport dimensions, global event listeners, path: svelte/svelte-window
- title: <svelte:document>, use_cases: document events, visibility tracking, fullscreen detection, pointer lock, focus management, document-level interactions, path: svelte/svelte-document
- title: <svelte:body>, use_cases: mouse tracking, hover effects, cursor interactions, global body events, drag and drop, custom cursors, interactive backgrounds, body-level actions, path: svelte/svelte-body
- title: <svelte:head>, use_cases: seo optimization, page titles, meta tags, social media sharing, dynamic head content, multi-page apps, blog posts, product pages, path: svelte/svelte-head
- title: <svelte:element>, use_cases: dynamic content, cms integration, user-generated content, configurable ui, runtime element selection, flexible components, path: svelte/svelte-element
- title: <svelte:options>, use_cases: migration, custom elements, web components, legacy mode compatibility, runes mode setup, svg components, mathml components, css injection control, path: svelte/svelte-options
- title: Stores, use_cases: shared state, cross-component data, reactive values, async data streams, manual control over updates, rxjs integration, extracting logic, path: svelte/stores
- title: Context, use_cases: shared state, avoiding prop drilling, component communication, theme providers, user context, authentication state, configuration sharing, deeply nested components, path: svelte/context
- title: Lifecycle hooks, use_cases: component initialization, cleanup tasks, timers, subscriptions, dom measurements, chat windows, autoscroll features, migration from svelte 4, path: svelte/lifecycle-hooks
- title: Imperative component API, use_cases: project setup, client-side rendering, server-side rendering, ssr, hydration, testing, programmatic component creation, tooltips, dynamic mounting, path: svelte/imperative-component-api
- title: Testing, use_cases: testing, quality assurance, unit tests, integration tests, component tests, e2e tests, vitest setup, playwright setup, test automation, path: svelte/testing
- title: TypeScript, use_cases: typescript setup, type safety, component props typing, generic components, wrapper components, dom type augmentation, project configuration, path: svelte/typescript
- title: Custom elements, use_cases: web components, custom elements, component library, design system, framework-agnostic components, embedding svelte in non-svelte apps, shadow dom, path: svelte/custom-elements
- title: Svelte 4 migration guide, use_cases: upgrading svelte 3 to 4, version migration, updating dependencies, breaking changes, legacy project maintenance, path: svelte/v4-migration-guide
- title: Svelte 5 migration guide, use_cases: migrating from svelte 4 to 5, upgrading projects, learning svelte 5 syntax changes, runes migration, event handler updates, path: svelte/v5-migration-guide
- title: Frequently asked questions, use_cases: getting started, learning svelte, beginner setup, project initialization, vs code setup, formatting, testing, routing, mobile apps, troubleshooting, community support, path: svelte/faq
- title: svelte, use_cases: migration from svelte 4 to 5, upgrading legacy code, component lifecycle hooks, context api, mounting components, event dispatchers, typescript component types, path: svelte/svelte
- title: svelte/action, use_cases: typescript types, actions, use directive, dom manipulation, element lifecycle, custom behaviors, third-party library integration, path: svelte/svelte-action
- title: svelte/animate, use_cases: animated lists, sortable items, drag and drop, reordering elements, todo lists, kanban boards, playlist management, smooth position transitions, path: svelte/svelte-animate
- title: svelte/attachments, use_cases: library development, component libraries, programmatic element manipulation, migrating from actions to attachments, spreading props onto elements, path: svelte/svelte-attachments
- title: svelte/compiler, use_cases: build tools, custom compilers, ast manipulation, preprocessors, code transformation, migration scripts, syntax analysis, bundler plugins, dev tools, path: svelte/svelte-compiler
- title: svelte/easing, use_cases: animations, transitions, custom easing, smooth motion, interactive ui, modals, dropdowns, carousels, page transitions, scroll effects, path: svelte/svelte-easing
- title: svelte/events, use_cases: window events, document events, global event listeners, event delegation, programmatic event handling, cleanup functions, media queries, path: svelte/svelte-events
- title: svelte/legacy, use_cases: migration from svelte 4 to svelte 5, upgrading legacy code, event modifiers, class components, imperative component instantiation, path: svelte/svelte-legacy
- title: svelte/motion, use_cases: animation, smooth transitions, interactive ui, sliders, counters, physics-based motion, drag gestures, accessibility, reduced motion, path: svelte/svelte-motion
- title: svelte/reactivity/window, use_cases: responsive design, viewport tracking, scroll effects, window resize handling, online/offline detection, zoom level tracking, path: svelte/svelte-reactivity-window
- title: svelte/reactivity, use_cases: reactive data structures, state management with maps/sets, game boards, selection tracking, url manipulation, query params, real-time clocks, media queries, responsive design, path: svelte/svelte-reactivity
- title: svelte/server, use_cases: server-side rendering, ssr, static site generation, seo optimization, initial page load, pre-rendering, node.js server, custom server setup, path: svelte/svelte-server
- title: svelte/store, use_cases: state management, shared data, reactive stores, cross-component communication, global state, computed values, data synchronization, legacy svelte projects, path: svelte/svelte-store
- title: svelte/transition, use_cases: animations, transitions, interactive ui, modals, dropdowns, tooltips, notifications, svg animations, list animations, page transitions, path: svelte/svelte-transition
- title: Compiler errors, use_cases: animation, transitions, keyed each blocks, list animations, path: svelte/compiler-errors
- title: Compiler warnings, use_cases: accessibility, a11y compliance, wcag standards, screen readers, keyboard navigation, aria attributes, semantic html, interactive elements, path: svelte/compiler-warnings
- title: Runtime errors, use_cases: debugging errors, error handling, troubleshooting runtime issues, migration to svelte 5, component binding, effects and reactivity, path: svelte/runtime-errors
- title: Runtime warnings, use_cases: debugging state proxies, console logging reactive values, inspecting state changes, development troubleshooting, path: svelte/runtime-warnings
- title: Overview, use_cases: migrating from svelte 3/4 to svelte 5, maintaining legacy components, understanding deprecated features, gradual upgrade process, path: svelte/legacy-overview
- title: Reactive let/var declarations, use_cases: migration, legacy svelte projects, upgrading from svelte 4, understanding old reactivity, maintaining existing code, learning runes differences, path: svelte/legacy-let
- title: Reactive $: statements, use_cases: legacy mode, migration from svelte 4, reactive statements, computed values, derived state, side effects, path: svelte/legacy-reactive-assignments
- title: export let, use_cases: legacy mode, migration from svelte 4, maintaining older projects, component props without runes, exporting component methods, renaming reserved word props, path: svelte/legacy-export-let
- title: $$props and $$restProps, use_cases: legacy mode migration, component wrappers, prop forwarding, button components, reusable ui components, spreading props to child elements, path: svelte/legacy-$$props-and-$$restProps
- title: on:, use_cases: legacy mode, event handling, button clicks, forms, user interactions, component communication, event forwarding, event modifiers, path: svelte/legacy-on
- title: <slot>, use_cases: legacy mode, migrating from svelte 4, component composition, reusable components, passing content to components, modals, layouts, wrappers, path: svelte/legacy-slots
- title: $$slots, use_cases: legacy mode, conditional slot rendering, optional content sections, checking if slots provided, migrating from legacy to runes, path: svelte/legacy-$$slots
- title: <svelte:fragment>, use_cases: named slots, component composition, layout systems, avoiding wrapper divs, legacy svelte projects, slot content organization, path: svelte/legacy-svelte-fragment
- title: <svelte:component>, use_cases: dynamic components, component switching, conditional rendering, legacy mode migration, tabbed interfaces, multi-step forms, path: svelte/legacy-svelte-component
- title: <svelte:self>, use_cases: recursive components, tree structures, nested menus, file explorers, comment threads, hierarchical data, path: svelte/legacy-svelte-self
- title: Imperative component API, use_cases: migration from svelte 3/4 to 5, legacy component api, maintaining old projects, understanding deprecated patterns, path: svelte/legacy-component-api

</available-docs>

Every time you write a Svelte component or a Svelte module you MUST invoke the `svelte-autofixer` tool providing the code. The tool will return a list of issues or suggestions. If there are any issues or suggestions you MUST fix them and call the tool again with the updated code. You MUST keep doing this until the tool returns no issues or suggestions. Only then you can return the code to the user.

This is the task you will work on:

<task>
[YOUR TASK HERE]
</task>

If you are not writing the code into a file, once you have the final version of the code ask the user if it wants to generate a playground link to quickly check the code in it and if it answer yes call the `playground-link` tool and return the url to the user nicely formatted. The playground link MUST be generated only once you have the final version of the code and you are ready to share it, it MUST include an entry point file called `App.svelte` where the main component should live. If you have multiple files to include in the playground link you can include them all at the root.