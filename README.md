# Tevexxo Build Studio

https://github.com/makilas157/tevexxo-build-studio
Tevexxo — Full Lovable Build Prompt

Paste this whole thing into Lovable (as one prompt, or split into a first prompt + follow-ups if it's too long).

---

Project brief

Build "Tevexxo" — a premium, dark-themed marketing website for a tech studio that does two things: builds software and ships digital products. Tone: confident, modern, minimal, slightly "SaaS/agency" premium — not playful, not cluttered.

Stack: React + TypeScript + Vite, TanStack Router (file-based routes), Tailwind CSS v4 (using `@utility` custom classes), shadcn/ui components, lucide-react icons.

Design system

- Theme: dark mode by default.
- Colors (use OKLCH):
  - Background: deep near-black charcoal — `oklch(0.13 0.02 40)`
  - Primary: warm amber/gold — `oklch(0.72 0.16 70)`
  - Accent: burnt orange/coral — `oklch(0.68 0.19 40)` — used for links, tags, glows, gradients
  - Secondary/card surfaces: slightly lighter charcoal with a warm tint — `oklch(0.20 0.03 50)`
- Fonts: "Space Grotesk" for headings/display text (`font-display`), a clean sans-serif for body.
- Signature visual details:
  - A small square "logo mark" next to the wordmark — a rounded square with a diagonal gradient from primary to accent and a soft accent glow.
  - "Section tag" style for eyebrow labels: small uppercase accent-colored text with wide letter-spacing and a pulsing dot before it.
  - `text-gradient` utility: gradient text from foreground color to accent, used on hero headline highlights.
  - A subtle animated dot/grid background effect that follows the cursor (a "cursor grid" component) used behind the navbar and hero.
  - Cards (`catalog-card`, `depth-card`) lift up and glow softly on hover (translateY + accent-tinted shadow + border highlight).
  - Glassmorphism panels: blurred, semi-transparent cards with an inset highlight.
  - Cursor spider: a small SVG spider (simple 8-leg icon, accent-colored, subtle glow) that follows the mouse cursor around the page with a slight lag/spring easing, so it feels like it's crawling to catch up. Legs animate/skitter as it moves, and it stays still (legs settled) when the cursor is idle. Keep it small (roughly 24–32px), on top of all content (`z-50`, `pointer-events-none`), hide it on mobile/touch devices, and give the user an easy way to remove/replace this later if it feels too playful for the brand.

Site structure — Navbar

Fixed, blurred-glass navbar at the top with the cursor-grid effect behind it. Left: logo mark + "tevexxo" wordmark linking home. Center/right: nav links — Home, Services, Products, Projects, Why Us, About, Blogs. Right-most: a solid "Contact us" button. On mobile, collapse into a hamburger menu that opens a full-width dropdown with the same links stacked plus a "Contact us" button.

Footer: logo + tagline "Build. Learn. Scale.", a row of the first few nav links, and a copyright line, in a simple 3-column layout on desktop.

Pages

1. Home (`/`)
- Hero: full-bleed background image (a luminous abstract tech/wave image) with a dark gradient shade over it and the cursor-grid effect on top. Eyebrow tag "Next-gen tech studio". Big headline: "We build the tech your business runs on." (last part gradient-highlighted). Sub-paragraph with a left accent border. Two CTA buttons: "Start a project →" (solid, links to Contact) and "See our products" (outline, links to Products). Below that, a stat row: 120+ Projects, 40+ Clients, 30+ Products shipped, 6 yrs Building.
- Services preview section: eyebrow "What we do", heading "Engineering that moves business forward.", intro line, then a 3-card grid pulling the first 3 services, with a "View all →" button linking to `/services`.
- Products preview section: eyebrow "Our products", heading "Tools shaped by real work.", 3-card grid of products, with a "View all →" button linking to `/products`.
- Social/connect section: on a tinted band with a radial pointer-follow glow. Heading "Follow what we're building." 2x2 (4 on desktop) grid of social cards for Instagram, WhatsApp, Facebook, Twitter/X, each with an icon and an arrow that slides on hover.

2. Services (`/services`)
Full catalog page/grid of services. Use this data:
1. Web Development — High-performance websites and applications built on modern, maintainable foundations.
2. Mobile Applications — Thoughtful iOS and Android experiences from prototype through store launch.
3. UI & UX Design — Research-led product design that makes complex workflows feel direct and intuitive.
4. Cloud, Data & AI — Infrastructure, automation and applied intelligence designed around measurable value.

3. Products (`/products`)
Catalog grid of in-house products:
1. FlowDesk — A clear, lightweight project and task workspace for focused engineering teams.
2. Pulseboard — Live business dashboards that bring essential signals into one dependable view.
3. CartSuite — A fast headless commerce foundation for brands ready to own their customer experience.
4. Custom Platforms — Domain-specific systems built with the same product rigor as our own tools.

Each catalog card across Services/Products: image on top, title, short description, subtle hover lift + accent glow, clicking opens a detail view for that item.

4. Projects (`/projects`)
A portfolio/case-study section — a carousel or grid of past project work with images, project name, one-line result/description. Include a project carousel component.

5. Why Us (`/why-us`)
A page making the case for choosing Tevexxo — value props in a 2–4 column grid (e.g. Senior-only teams, Transparent delivery, Product-thinking, Post-launch support), plus maybe a short stats or process section.

6. About (`/about`)
Company story — mission, small narrative section, team/values, maybe a timeline. Should feel like the most "editorial"/longest-form page.

7. Blogs (`/blogs`)
A blog index — grid or list of article cards (image, title, short excerpt, date) linking to individual posts.

8. Contact (`/contact`)
A contact page with a form (name, email, message / project details) styled to match the theme, plus company contact info and maybe the same social links row as the homepage.

Behavior & polish

- Smooth scroll-reveal animation for sections as they enter the viewport.
- Consistent max-width container (`max-w-7xl`) with generous vertical padding (`py-24` / `py-32` on large screens) across all sections.
- Buttons: solid primary style for main CTAs, outline style for secondary actions, both with an arrow icon that shifts right on hover.
- Fully responsive: stacked/mobile nav, 1-column cards on mobile scaling to 3–4 columns on desktop.
- SEO: unique page `<title>` and meta description per route, Open Graph tags on key pages.

What to ask me for (do this last)

Once the structure is in place, ask me for:
1. Real logo (or keep the gradient square mark).
2. Real hero image + category images for each service/product card.
3. Final copy review for About, Projects, Blogs, and Contact (currently placeholder-level).
4. Brand color confirmation (currently amber/orange on near-black).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/27c53a28-a298-4627-9d8c-1f00245db065).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
