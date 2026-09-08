import svcWeb from "@/assets/svc-web.jpg";
import svcMobile from "@/assets/svc-mobile.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import svcCloud from "@/assets/svc-cloud.jpg";
import prodFlowdesk from "@/assets/prod-flowdesk.jpg";
import prodPulseboard from "@/assets/prod-pulseboard.jpg";
import prodCartsuite from "@/assets/prod-cartsuite.jpg";
import prodCustom from "@/assets/prod-custom.jpg";
import abstract1 from "@/assets/abstract-1.jpg";
import abstract2 from "@/assets/abstract-2.jpg";
import abstract3 from "@/assets/abstract-3.jpg";

export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  detail: string;
  points: string[];
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Why Us", to: "/why-us" },
  { label: "About", to: "/about" },
  { label: "Blogs", to: "/blogs" },
] as const;

export const services: CatalogItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and applications built on modern, maintainable foundations.",
    image: svcWeb,
    detail:
      "We design and build web platforms that stay fast under real traffic and stay pleasant to work on years later. Typed codebases, tested critical paths, and infrastructure chosen for the load it actually has to carry.",
    points: [
      "Marketing sites, portals and complex web apps",
      "Performance and accessibility budgets from day one",
      "Design systems that scale with the team",
    ],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Thoughtful iOS and Android experiences from prototype through store launch.",
    image: svcMobile,
    detail:
      "From first prototype to store release and beyond. We ship mobile products with a clear release process, instrumentation you can trust, and interaction detail that feels native on both platforms.",
    points: [
      "Native and cross-platform delivery",
      "Store submission, review and release management",
      "Crash, performance and adoption monitoring",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI & UX Design",
    description:
      "Research-led product design that makes complex workflows feel direct and intuitive.",
    image: svcDesign,
    detail:
      "Design that starts from the work people are actually doing. We map workflows, cut steps, and build interface systems that make a dense product feel obvious.",
    points: [
      "Discovery, interviews and workflow mapping",
      "Interactive prototypes before a line of code",
      "Component libraries handed over ready to build",
    ],
  },
  {
    slug: "cloud-data-ai",
    title: "Cloud, Data & AI",
    description:
      "Infrastructure, automation and applied intelligence designed around measurable value.",
    image: svcCloud,
    detail:
      "Pipelines, platforms and models scoped to a business outcome, not a demo. We build the data foundation first, then apply intelligence where it changes a number you care about.",
    points: [
      "Cloud architecture, IaC and cost control",
      "Data pipelines, warehousing and reporting",
      "Applied AI features with evaluation built in",
    ],
  },
];

export const products: CatalogItem[] = [
  {
    slug: "flowdesk",
    title: "FlowDesk",
    description:
      "A clear, lightweight project and task workspace for focused engineering teams.",
    image: prodFlowdesk,
    detail:
      "FlowDesk keeps planning close to the work. Boards, sprints and docs in one place, with none of the ceremony that slows a small team down.",
    points: ["Boards, backlog and sprints", "Docs beside the work", "Fast keyboard-first UI"],
  },
  {
    slug: "pulseboard",
    title: "Pulseboard",
    description:
      "Live business dashboards that bring essential signals into one dependable view.",
    image: prodPulseboard,
    detail:
      "Pulseboard connects the sources you already use and turns them into a single, dependable operating view — refreshed live, shareable with anyone.",
    points: ["Live metric streams", "Alerting on thresholds", "Shareable executive views"],
  },
  {
    slug: "cartsuite",
    title: "CartSuite",
    description:
      "A fast headless commerce foundation for brands ready to own their customer experience.",
    image: prodCartsuite,
    detail:
      "CartSuite handles catalog, cart, checkout and orders through a clean API, leaving the storefront entirely in your hands.",
    points: ["Headless catalog and checkout", "Payments and tax ready", "Edge-cached storefronts"],
  },
  {
    slug: "custom-platforms",
    title: "Custom Platforms",
    description:
      "Domain-specific systems built with the same product rigor as our own tools.",
    image: prodCustom,
    detail:
      "When nothing off the shelf fits, we build the platform your domain needs — with the discipline, testing and roadmap thinking we apply to our own products.",
    points: ["Discovery and domain modelling", "Phased delivery", "Ownership handover"],
  },
];

export const projects = [
  {
    name: "Northwind Logistics",
    result: "Rebuilt dispatch platform cut route planning time by 46%.",
    image: abstract1,
    tag: "Platform",
  },
  {
    name: "Ardent Health",
    result: "Patient intake app raised completed onboardings by 3.1x.",
    image: abstract2,
    tag: "Mobile",
  },
  {
    name: "Meridian Retail",
    result: "Headless storefront migration lifted conversion 28%.",
    image: abstract3,
    tag: "Commerce",
  },
  {
    name: "Cobalt Analytics",
    result: "Streaming data layer brought reporting lag from hours to seconds.",
    image: prodPulseboard,
    tag: "Data",
  },
  {
    name: "Sable Studio",
    result: "Design system rollout halved new feature build time.",
    image: svcDesign,
    tag: "Design",
  },
];

export const posts = [
  {
    slug: "shipping-small",
    title: "Shipping small: why our releases are boring on purpose",
    excerpt:
      "Large releases hide risk. Here is the delivery cadence we use to keep launches uneventful.",
    date: "12 Aug 2026",
    image: abstract1,
  },
  {
    slug: "design-systems-that-last",
    title: "Design systems that survive their second year",
    excerpt:
      "Most systems rot quietly. A few practices keep them useful long after the launch push.",
    date: "27 Jul 2026",
    image: svcDesign,
  },
  {
    slug: "ai-features-worth-building",
    title: "The AI features actually worth building",
    excerpt:
      "A simple test for separating genuinely useful intelligence from expensive novelty.",
    date: "09 Jul 2026",
    image: svcCloud,
  },
  {
    slug: "cost-of-fast",
    title: "The real cost of a fast product",
    excerpt: "Performance is a budget, not a sprint. How we hold the line during delivery.",
    date: "21 Jun 2026",
    image: abstract3,
  },
];

export const stats = [
  { value: "120+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "30+", label: "Products shipped" },
  { value: "6 yrs", label: "Building" },
];
