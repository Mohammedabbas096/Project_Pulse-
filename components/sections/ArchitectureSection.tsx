import React from 'react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface" id="architecture">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">System Topology</span>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Simple architecture. Clear separation of responsibilities.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            ProjectPulse is designed as a layered modern web application. The presentation layer provides the user interface, the application layer manages project logic, PostgreSQL stores project state, and the AI service powers risk intelligence.
          </p>
        </div>

        {/* Architecture Visual Diagram */}
        <div className="w-full p-space-lg lg:p-12 rounded-2xl bg-surface-container-low border border-surface-container-high flex flex-col items-center">
          {/* Tier 1: User / Browser */}
          <div className="w-full max-w-md p-space-md rounded-xl bg-surface-container-high shadow-md text-center flex items-center justify-center gap-space-sm border border-white/5">
            <span className="material-symbols-outlined text-secondary text-[24px]">language</span>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block font-semibold">Tier 01 • Client</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">USER / BROWSER RUNTIME</span>
            </div>
          </div>

          {/* Connector Arrow 1 */}
          <div className="flex flex-col items-center py-space-xs text-outline">
            <span className="font-label-sm text-label-sm text-secondary font-semibold">HTTPS / REST / JSON</span>
            <span className="material-symbols-outlined text-[20px]">south</span>
          </div>

          {/* Tier 2: Next.js Frontend Presentation */}
          <div className="w-full max-w-lg p-space-md rounded-xl bg-surface-container shadow-md text-center flex items-center justify-center gap-space-sm border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[24px]">view_quilt</span>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block font-semibold">Tier 02 • Presentation</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">NEXT.JS WEB APPLICATION (React & Tailwind)</span>
            </div>
          </div>

          {/* Connector Arrow 2 */}
          <div className="flex flex-col items-center py-space-xs text-outline">
            <span className="font-label-sm text-label-sm text-outline">Server Actions & API Handlers</span>
            <span className="material-symbols-outlined text-[20px]">south</span>
          </div>

          {/* Tier 3: Application & API Layer */}
          <div className="w-full max-w-xl p-space-md rounded-xl bg-surface-container-highest shadow-md text-center flex items-center justify-center gap-space-sm border border-secondary/30">
            <span className="material-symbols-outlined text-secondary text-[24px]">dns</span>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block font-bold">Tier 03 • Application & Routing</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">APPLICATION / API LOGIC LAYER</span>
            </div>
          </div>

          {/* Branching Connector (Desktop vs Mobile) */}
          <div className="w-full max-w-4xl py-space-md hidden md:flex flex-col items-center">
            <div className="w-2/3 h-0.5 bg-surface-variant"></div>
            <div className="w-2/3 flex justify-between text-outline text-[18px]">
              <span className="material-symbols-outlined">south</span>
              <span className="material-symbols-outlined">south</span>
              <span className="material-symbols-outlined">south</span>
            </div>
          </div>

          {/* Mobile Connector Arrow */}
          <div className="flex md:hidden flex-col items-center py-space-xs text-outline">
            <span className="material-symbols-outlined text-[20px]">south</span>
          </div>

          {/* Tier 4: Tri-Branch Services */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Branch A: Database */}
            <div className="p-space-md rounded-xl bg-surface-container shadow-md flex flex-col items-center text-center gap-space-xs border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-[28px]">database</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Persistence (Planned)</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">PostgreSQL + Prisma</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Relational schemas storing projects, tasks, milestones, logs, and historical risk registers.
              </p>
            </div>

            {/* Branch B: AI Engine */}
            <div className="p-space-md rounded-xl bg-surface-container shadow-md flex flex-col items-center text-center gap-space-xs border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[28px]">smart_toy</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Inference (Planned)</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">AI Service / OpenAI API</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Context-aware telemetry assessment, risk probability calculations, and mitigation recommendations.
              </p>
            </div>

            {/* Branch C: Auth */}
            <div className="p-space-md rounded-xl bg-surface-container shadow-md flex flex-col items-center text-center gap-space-xs border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary text-[28px]">verified_user</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Security (Planned)</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Auth / Clerk</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Identity verification, session handling, and role-based access for PMs and engineering contributors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
