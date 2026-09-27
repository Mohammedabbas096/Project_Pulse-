import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full px-margin md:px-margin-desktop py-space-xl lg:py-28 overflow-hidden bg-surface" id="overview">
      {/* Ambient luminous gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-inverse-primary/20 via-secondary/15 to-transparent blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-space-xl lg:gap-16">
        {/* Left Column: Value Prop & Pitch */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-space-lg">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-secondary">
              AI-Assisted Software Project Risk Management
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Identify project risks <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-inverse-primary">before</span> they become project problems.
          </h1>

          {/* Subtitle & Motto */}
          <div className="flex flex-col gap-space-sm text-on-surface-variant">
            <p className="font-body-lg text-body-lg leading-relaxed">
              ProjectPulse brings project planning, risk management, and AI-assisted analysis into one centralized workspace for software development teams.
            </p>
            <div className="flex items-center gap-space-xs pt-space-xs font-label-md text-label-md text-secondary tracking-widest uppercase font-semibold">
              <span>Identify</span>
              <span className="text-outline">•</span>
              <span>Assess</span>
              <span className="text-outline">•</span>
              <span>Mitigate</span>
              <span className="text-outline">•</span>
              <span>Manage</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
            <a
              href="#features"
              className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-gradient-to-r from-inverse-primary to-secondary text-surface-container-lowest font-label-md text-label-md font-bold tracking-wide hover:opacity-95 shadow-lg transition-all flex items-center justify-center gap-space-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span>Explore Project</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#solution"
              className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-space-xs border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">play_circle</span>
              <span>View How It Works</span>
            </a>
          </div>

          {/* Micro Social Proof Metadata */}
          <div className="flex items-center gap-space-md pt-space-md text-on-surface-variant font-label-sm text-label-sm">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
              <span>Deterministic Risk Register</span>
            </div>
            <span className="text-outline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">psychology</span>
              <span>Human-in-the-Loop AI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive SaaS Telemetry Card Mockup */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full rounded-2xl bg-surface-container-low border border-surface-container-high shadow-2xl p-space-lg backdrop-blur-md">
            {/* Mockup Top Bar */}
            <div className="flex items-center justify-between pb-space-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Workspace</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Sprint 4 - Core Platform Alpha</span>
              </div>
              <div className="flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                LIVE RISK PULSE
              </div>
            </div>

            {/* Project Health & Gauge */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md my-space-md p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-high/40">
              {/* Gauge / Score */}
              <div className="flex items-center gap-space-md sm:col-span-2">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
                    <path
                      className="text-surface-variant"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    ></path>
                    <path
                      className="text-secondary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="82, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-data-metric text-headline-sm font-bold text-on-surface">82%</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Optimal Health</span>
                    <span className="material-symbols-outlined text-tertiary text-[18px]">trending_up</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Project trajectory steady. 2 critical blockers under review.</p>
                </div>
              </div>

              {/* Milestone Tracker */}
              <div className="flex flex-col justify-center sm:pl-space-md border-t sm:border-t-0 sm:border-l border-surface-container-high/40 pt-space-sm sm:pt-0">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Upcoming Milestone</span>
                <span className="font-label-md text-label-md font-bold text-on-surface mt-0.5">MVP Release</span>
                <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm mt-1">
                  <span className="material-symbols-outlined text-[15px]">event</span>
                  <span>In 12 days</span>
                </div>
              </div>
            </div>

            {/* Risk Severity Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs sm:gap-space-sm mb-space-md">
              {/* Critical */}
              <div className="flex flex-col items-center p-space-sm rounded-lg bg-error-container/20 text-error border border-error/20">
                <span className="font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> Critical
                </span>
                <span className="font-data-metric text-data-metric font-bold mt-1">02</span>
              </div>
              {/* High */}
              <div className="flex flex-col items-center p-space-sm rounded-lg bg-surface-container text-amber-400 border border-amber-500/20">
                <span className="font-label-sm text-label-sm font-semibold">High</span>
                <span className="font-data-metric text-data-metric font-bold text-on-surface mt-1">04</span>
              </div>
              {/* Medium */}
              <div className="flex flex-col items-center p-space-sm rounded-lg bg-surface-container text-secondary border border-secondary/20">
                <span className="font-label-sm text-label-sm font-semibold">Medium</span>
                <span className="font-data-metric text-data-metric font-bold text-on-surface mt-1">07</span>
              </div>
              {/* Low */}
              <div className="flex flex-col items-center p-space-sm rounded-lg bg-surface-container text-tertiary border border-tertiary/20">
                <span className="font-label-sm text-label-sm font-semibold">Low</span>
                <span className="font-data-metric text-data-metric font-bold text-on-surface mt-1">05</span>
              </div>
            </div>

            {/* Delayed Tasks Indicator */}
            <div className="flex items-center justify-between p-space-sm px-space-md rounded-lg bg-surface-container-high mb-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-error text-[20px]">warning</span>
                <span className="font-label-md text-label-md font-semibold text-on-surface">3 Tasks Behind Schedule</span>
              </div>
              <div className="flex items-center -space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-container text-[10px] font-bold text-on-surface border border-surface-container-high">JD</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-variant text-[10px] font-bold text-on-surface border border-surface-container-high">SK</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-[10px] font-bold text-on-primary border border-surface-container-high">AL</span>
              </div>
            </div>

            {/* Highlighted AI Insight Bubble */}
            <div className="relative overflow-hidden p-space-md rounded-xl bg-gradient-to-r from-inverse-primary/25 via-secondary/15 to-surface-container-lowest shadow-md border border-secondary/20">
              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary text-surface-container-lowest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">AI Diagnostic Insight</span>
                    <span className="font-label-sm text-label-sm text-outline">Confidence: 94%</span>
                  </div>
                  <p className="font-label-md text-label-md font-semibold text-on-surface mt-0.5">
                    Backend development delay may affect the upcoming MVP milestone.
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Suggested action: Rebalance sprint 4 backend tasks or reassign 2 unblocked API endpoints to frontend pairing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
