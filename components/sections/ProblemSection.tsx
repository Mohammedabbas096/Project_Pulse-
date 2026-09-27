import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface" id="problem">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-error font-bold">The Project Governance Gap</span>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Project risks are often discovered too late.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Traditional development workflows leave critical blockers hidden in silos until milestones are missed, budgets spiral, and teams are forced into crisis mode.
          </p>
        </div>

        {/* Problem Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Problem 1 */}
          <div className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high hover:bg-surface-container transition-all group">
            <div className="w-10 h-10 rounded-lg bg-surface-variant text-error flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">table_chart_view</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Scattered Information</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Project information is often distributed across spreadsheets, documents, messages, and disconnected issue trackers.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high hover:bg-surface-container transition-all group">
            <div className="w-10 h-10 rounded-lg bg-surface-variant text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">history_edu</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Manual Risk Tracking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Teams rely on static manual risk registers and sporadic sprint retrospectives to identify emerging structural problems.
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high hover:bg-surface-container transition-all group">
            <div className="w-10 h-10 rounded-lg bg-surface-variant text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">visibility_off</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Limited Visibility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Project managers struggle to see how subtle task delays, dependencies, and resource contention affect overall project risk.
              </p>
            </div>
          </div>

          {/* Problem 4 */}
          <div className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high hover:bg-surface-container transition-all group">
            <div className="w-10 h-10 rounded-lg bg-surface-variant text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[22px]">crisis_alert</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Reactive Decisions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Risks that are surfaced late severely compress the available runway for effective, non-destructive mitigation strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Problem Flow Diagram: Pipeline of Cascading Risk */}
        <div className="flex flex-col gap-space-md p-space-lg rounded-2xl bg-surface-container-lowest border border-surface-container-high/60">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">How Undetected Risk Compounds Along the Lifecycle</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-space-sm items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container text-center border border-white/5">
              <span className="font-label-sm text-label-sm text-outline">Step 01</span>
              <span className="font-label-md text-label-md font-bold text-on-surface mt-1">Project Data</span>
              <span className="text-[10px] text-on-surface-variant">Isolated logs & notes</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container text-center border border-secondary/20">
              <span className="font-label-sm text-label-sm text-secondary">Step 02</span>
              <span className="font-label-md text-label-md font-bold text-on-surface mt-1">Delays</span>
              <span className="text-[10px] text-on-surface-variant">Subtle ticket slippage</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container text-center border border-amber-500/20">
              <span className="font-label-sm text-label-sm text-amber-400">Step 03</span>
              <span className="font-label-md text-label-md font-bold text-on-surface mt-1">Dependencies</span>
              <span className="text-[10px] text-on-surface-variant">Upstream blocking</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container text-center border border-amber-500/30">
              <span className="font-label-sm text-label-sm text-amber-500">Step 04</span>
              <span className="font-label-md text-label-md font-bold text-on-surface mt-1">Uncertainty</span>
              <span className="text-[10px] text-on-surface-variant">Hidden trajectory lag</span>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container-high text-center border border-error/30">
              <span className="font-label-sm text-label-sm text-error">Step 05</span>
              <span className="font-label-md text-label-md font-bold text-error mt-1">Risk Vector</span>
              <span className="text-[10px] text-on-surface-variant">Compound failure state</span>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center justify-center p-space-md rounded-lg bg-error-container/30 text-center border border-error/50">
              <span className="font-label-sm text-label-sm text-error font-bold">Step 06</span>
              <span className="font-label-md text-label-md font-bold text-error mt-1">Project Impact</span>
              <span className="text-[10px] text-error/80 font-medium">Missed release milestone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
