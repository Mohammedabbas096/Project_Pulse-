import { TechCategory } from '@/types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: '01 / FRONTEND',
    items: [
      { name: 'Next.js 14+', label: 'App Router', highlight: true },
      { name: 'TypeScript', label: 'Strict Mode' },
      { name: 'Tailwind CSS', label: 'Design Tokens' },
    ],
  },
  {
    id: 'backend',
    title: '02 / BACKEND & API',
    items: [
      { name: 'Next.js API', label: 'Route Handlers', highlight: true },
      { name: 'Server Actions', label: 'Mutations' },
      { name: 'Node.js Runtime', label: 'Execution' },
    ],
  },
  {
    id: 'database',
    title: '03 / DATABASE (PLANNED)',
    items: [
      { name: 'PostgreSQL', label: 'Relational', highlight: true },
      { name: 'Prisma ORM', label: 'Type Safety' },
      { name: 'Connection Pool', label: 'Neon / Cloud' },
    ],
  },
  {
    id: 'intelligence',
    title: '04 / INTELLIGENCE & AUTH (PLANNED)',
    items: [
      { name: 'Clerk', label: 'Authentication', highlight: true },
      { name: 'OpenAI API', label: 'Risk Analysis' },
      { name: 'Structured Output', label: 'JSON Schema' },
    ],
  },
  {
    id: 'versioning',
    title: '05 / VERSIONING & CI',
    items: [
      { name: 'Git & GitHub', label: 'Version Control' },
      { name: 'GitHub Actions', label: 'CI Workflows' },
    ],
  },
  {
    id: 'deployment',
    title: '06 / DEPLOYMENT',
    items: [
      { name: 'Vercel', label: 'Edge Hosting', highlight: true },
      { name: 'Cloudflare DNS', label: 'Global Edge' },
    ],
  },
  {
    id: 'design',
    title: '07 / DESIGN & SPEC',
    items: [
      { name: 'Figma / Stitch', label: 'UI Wireframes' },
      { name: 'Design Tokens', label: 'Fluid System' },
    ],
  },
  {
    id: 'testing',
    title: '08 / TESTING & TOOLS',
    items: [
      { name: 'Postman', label: 'Endpoint Tests' },
      { name: 'VS Code', label: 'IDE Environment' },
    ],
  },
  {
    id: 'pm',
    title: '09 / PROJECT MANAGEMENT',
    items: [
      { name: 'Jira / Trello', label: 'Sprint & Backlog', highlight: true },
      { name: 'Agile Kanban', label: 'Lifecycle Workflow' },
    ],
  },
];
