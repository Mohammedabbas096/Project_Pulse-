import React from 'react';

export const AcademicBanner: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low border-y border-surface-container-high/60 px-margin md:px-margin-desktop py-space-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0 border border-white/5 shadow-inner">
            <span className="material-symbols-outlined text-[28px]">school</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Academic Project Specification</span>
            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              CPSC 8820 • Planning and Management of Software Projects
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-0.5">
              Built at <strong>Governors State University</strong> (Fall 2026) as a software project focused on applying project management, software engineering, AI, database, and cloud development concepts across the SDLC.
            </p>
          </div>
        </div>

        {/* Subject Tags */}
        <div className="flex flex-wrap items-center gap-space-xs shrink-0">
          <span className="px-space-sm py-1 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant border border-white/5">
            Software Engineering
          </span>
          <span className="px-space-sm py-1 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant border border-white/5">
            Risk Analytics
          </span>
          <span className="px-space-sm py-1 rounded bg-surface-container-highest font-label-sm text-label-sm text-secondary border border-secondary/20">
            Applied AI Decision Support
          </span>
          <span className="px-space-sm py-1 rounded bg-surface-container-highest font-label-sm text-label-sm text-tertiary border border-tertiary/20">
            Phase 1 Deliverable
          </span>
        </div>
      </div>
    </section>
  );
};
