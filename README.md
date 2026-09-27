# ProjectPulse — AI Project Risk Manager

> **Identify. Assess. Mitigate. Manage.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 📌 Academic Project Context

- **Course**: CPSC 8820-01 — Planning and Management of Software Projects
- **Term**: Fall 2026
- **Institution**: Governors State University
- **Deliverable**: Phase 1 Informational & Presentation Web Application

### 👥 Project Team
- **Ghouse Mohiuddin Mohammed** — Project Team Member *(Planning & Software Engineering Development)*
- **Muzammil Ullah Hussaini Syed** — Project Team Member *(Software Risk Analytics & Systems Architecture)*

---

## 🎯 Project Purpose & Mission

> *"Our mission is to develop an intelligent and accessible project risk management platform that helps software teams identify potential risks early, assess their impact, and make informed mitigation decisions throughout the project lifecycle."*

Software engineering projects frequently face schedule, resource, scope, dependency, and budget risks. Risk data often becomes fragmented across spreadsheets, emails, and disconnected tools. **ProjectPulse** centralizes project health telemetry and provides **human-in-the-loop AI decision support** to surface latent risk vectors before they delay milestones.

---

## 🚀 Technology Stack

### **Phase 1 Web Application (Implemented)**
- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router & SSG)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Design Tokens) & CSS Modules
- **Icons & Fonts**: Google Material Symbols & [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (*Plus Jakarta Sans* & *Inter*)
- **Deployment Platform**: [Vercel](https://vercel.com/)

### **Planned Platform Architecture (Phase 2 & Beyond)**
- **Backend & API Layer**: Next.js API Route Handlers & Server Actions
- **Database & ORM**: PostgreSQL + Prisma ORM (Neon / Cloud Postgres)
- **Authentication**: Clerk User Management
- **AI Decision Engine**: OpenAI API (Structured JSON Schema Inferences)
- **Project Management Integration**: Jira & Trello Backlog Integration
- **Testing & Tooling**: Postman, VS Code, GitHub Actions

---

## 🏗️ System Architecture Topology

```
┌─────────────────────────────────────────────────────────────────┐
│                     TIER 1 • CLIENT RUNTIME                     │
│               User Browser / Responsive Web UI                  │
└─────────────────────────────────────────────────────────────────┘
                                │  (HTTPS / REST / JSON)
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   TIER 2 • PRESENTATION LAYER                   │
│             Next.js Web Application (React & Tailwind)          │
└─────────────────────────────────────────────────────────────────┘
                                │  (Server Actions & API Handlers)
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                 TIER 3 • APPLICATION & API LAYER                │
│                 Routing & Business Logic Orchestration          │
└─────────────────────────────────────────────────────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         ▼                      ▼                      ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  TIER 4A • DB    │  │  TIER 4B • AI    │  │ TIER 4C • AUTH   │
│  PostgreSQL      │  │  OpenAI API      │  │ Clerk            │
│  + Prisma (Plan) │  │  Inference (Plan)│  │ Auth (Planned)   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

---

## ✨ Features & System Capabilities

1. **Project Management**: Create & track essential project parameters, metadata, and team rosters.
2. **Task Management**: Monitor task progress, blockers, priority weights, and completion timelines.
3. **Milestone Tracking**: Track critical path deliverables, sprint cadences, and target deadlines.
4. **Structured Risk Register**: Audit, categorize, assign ownership, and monitor project risks over time.
5. **AI Risk Analysis (Demonstration)**: AI-assisted observations scanning dependency chains for schedule bottlenecks.
6. **Human-in-the-Loop Mitigation**: Decision-support interface enabling leads to Accept, Modify, or Dismiss recommendations.
7. **Project Health Dashboard**: Unified gauge telemetry displaying live risk scores and delayed task indicators.
8. **Summary Reporting**: Formatted risk summaries for stakeholder briefings and academic reviews.

---

## 📂 Directory Structure

```
project-pluse/
├── app/
│   ├── layout.tsx             # Root layout with font optimization & metadata
│   ├── page.tsx               # Main landing page assembling section components
│   └── globals.css            # Base styles, custom scrollbars, smooth scroll rules
├── components/
│   ├── layout/                # Header, MobileDrawer, Footer
│   ├── sections/              # Hero, AcademicBanner, Problem, Solution, Features,
│   │                          # AIDecisionSupport, Architecture, Technology,
│   │                          # Objectives, Team, Status, Resources, CTA
│   └── ui/                    # Logo, Badge reusable components
├── data/                      # Static content arrays (navigation, features, tech, resources, team)
├── types/                     # TypeScript interface definitions
├── public/                    # Static SVG logo & media assets
├── tailwind.config.ts         # Custom theme configuration & design system tokens
├── tsconfig.json              # Strict TypeScript compiler options
├── next.config.mjs            # Next.js configuration
└── package.json               # Project scripts & dependencies
```

---

## 🛠️ Local Development & Build Instructions

### **1. Prerequisites**
- Node.js `v18+` or `v20+` or `v22+`
- npm `v9+` or `v10+`

### **2. Installation**
Clone the repository and install dependencies:
```bash
npm install
```

### **3. Start Development Server**
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### **4. Production Build**
To verify compilation and generate an optimized static build:
```bash
npm run build
```

### **5. Preview Production Build**
```bash
npm run start
```

---

## 🌐 Vercel Deployment

This project is fully prepared for zero-configuration deployment on **Vercel**:

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import the `project-pluse` repository.
4. Keep framework preset as **Next.js** and click **Deploy**.

---

## 📄 License & Attribution

Developed for **CPSC 8820 — Planning and Management of Software Projects** at **Governors State University** (Fall 2026). All rights reserved.
