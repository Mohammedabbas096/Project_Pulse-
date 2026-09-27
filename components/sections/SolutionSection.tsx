import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface-container-low border-y border-surface-container-high/60" id="solution">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-2xl flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">The Proposed Architecture Solution</span>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              One workspace for project risk intelligence.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              ProjectPulse combines structured project management with AI-assisted risk analysis to help teams identify, understand, and manage project risks before deadlines break.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary font-label-md text-label-md font-semibold border border-secondary/20">
              Closed-Loop Governance
            </span>
          </div>
        </div>

        {/* 3-Step Process Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Step 1 */}
          <div className="flex flex-col p-space-lg rounded-2xl bg-surface-container shadow-md border border-surface-container-high">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-data-metric text-headline-xl font-extrabold text-outline">01</span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold uppercase">Step 01</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">COLLECT</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Projects, tasks, milestones, and baseline risk items are structured in one relational database environment, eliminating spreadsheet fragmentation.
            </p>
            <div className="mt-space-lg pt-space-md flex flex-wrap gap-2 text-[11px] text-on-surface-variant border-t border-surface-container-high/60">
              <span className="px-2 py-0.5 rounded bg-surface-variant">Tasks</span>
              <span className="px-2 py-0.5 rounded bg-surface-variant">Milestones</span>
              <span className="px-2 py-0.5 rounded bg-surface-variant">Dependencies</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col p-space-lg rounded-2xl bg-surface-container shadow-md border border-primary/20">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-data-metric text-headline-xl font-extrabold text-primary">02</span>
              <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-label-sm text-label-sm font-semibold uppercase">Step 02</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">ANALYZE</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              AI-assisted analysis scans project telemetry, dependency graph chains, and slippage patterns to pinpoint latent schedule bottlenecks and capacity shortfalls.
            </p>
            <div className="mt-space-lg pt-space-md flex flex-wrap gap-2 text-[11px] text-primary border-t border-surface-container-high/60">
              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20">Pattern Recognition</span>
              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20">Probability Modeling</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col p-space-lg rounded-2xl bg-surface-container shadow-md border border-tertiary/20">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-data-metric text-headline-xl font-extrabold text-tertiary">03</span>
              <span className="px-2.5 py-1 rounded bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-semibold uppercase">Step 03</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">MITIGATE</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Project managers review calibrated severity findings and receive actionable mitigation strategies that preserve team autonomy and human control.
            </p>
            <div className="mt-space-lg pt-space-md flex flex-wrap gap-2 text-[11px] text-tertiary border-t border-surface-container-high/60">
              <span className="px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">Decision Support</span>
              <span className="px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">Actionable Playbooks</span>
            </div>
          </div>
        </div>

        {/* Solution Architecture Infographic Banner */}
        <div className="p-space-lg rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-lg">
          {/* Left: Ingestion */}
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Ingestion Vectors</span>
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 rounded bg-surface-container font-label-md text-label-md text-on-surface flex items-center justify-between border border-white/5">
                <span>Task Status & Progress</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              </div>
              <div className="px-3 py-2 rounded bg-surface-container font-label-md text-label-md text-on-surface flex items-center justify-between border border-white/5">
                <span>Milestone Schedules</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">flag</span>
              </div>
              <div className="px-3 py-2 rounded bg-surface-container font-label-md text-label-md text-on-surface flex items-center justify-between border border-white/5">
                <span>Active Risk Registers</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">report</span>
              </div>
            </div>
          </div>

          {/* Center: AI Processing Engine */}
          <div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-high border border-secondary/30 w-full md:w-1/3 text-center shadow-lg">
            <span className="material-symbols-outlined text-secondary text-[32px] mb-1">memory</span>
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">AI Risk Evaluation Engine</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Cross-referencing velocity with dependency paths</span>
            <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden mt-3">
              <div className="bg-gradient-to-r from-secondary to-primary h-full w-3/4 animate-pulse"></div>
            </div>
          </div>

          {/* Right: Dashboard Output */}
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Actionable Output</span>
            <div className="p-space-md rounded-xl bg-surface-container border border-tertiary/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-tertiary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">radar</span>
                <span>Project Health Dashboard</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Early warnings, impact scoring & review-ready mitigation tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
