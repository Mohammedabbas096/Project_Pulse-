import React from 'react';

export const StatusSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Status Card */}
        <div className="p-space-lg lg:p-12 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
          {/* Left details */}
          <div className="flex flex-col gap-space-sm max-w-xl">
            <div className="flex items-center gap-space-xs">
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider border border-secondary/20">
                Phase 1 • Planning & Requirements
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            </div>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              Planning & Requirements Validation Phase
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Establishing rigorous problem definitions, baseline scope, database schemas, and AI integration architecture before full sprint execution.
            </p>

            {/* Progress Bar */}
            <div className="flex flex-col gap-1.5 pt-space-sm w-full">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>Phase 1 Deliverable Completion</span>
                <span className="text-secondary font-bold">100% On Schedule</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden border border-white/5">
                <div className="h-full bg-secondary w-full rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right: Status Checklist (Split Completed vs Next Up) */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-space-md p-space-md rounded-xl bg-surface-container border border-surface-container-high">
            {/* Completed Checklist */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">Completed in Phase 1</span>
              <div className="flex flex-col gap-1.5 text-on-surface font-body-sm text-body-sm">
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Project idea & vision</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Problem statement</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Proposed solution model</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Initial objectives & scope</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Technology selection</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Initial architecture design</div>
              </div>
            </div>

            {/* Next Up Checklist */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Next Up (Phase 2 Planned)</span>
              <div className="flex flex-col gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-2"><span className="text-secondary">→</span> Detailed requirements spec</div>
                <div className="flex items-center gap-2"><span className="text-secondary">→</span> Figma UI/UX mockups</div>
                <div className="flex items-center gap-2"><span className="text-secondary">→</span> Database entity schemas</div>
                <div className="flex items-center gap-2"><span className="text-secondary">→</span> Functional prototype sprint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
