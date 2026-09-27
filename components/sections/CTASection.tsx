import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full px-margin md:px-margin-desktop py-space-xl lg:py-28 bg-surface-container-lowest overflow-hidden border-t border-surface-container-high/60">
      {/* Ambient glow circle */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-secondary/15 blur-[120px] rounded-full"></div>
      
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-space-lg">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold border border-secondary/20">
          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
          <span>CPSC 8820 Project Initiative</span>
        </div>

        <h2 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
          Building smarter project risk management.
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          ProjectPulse is being developed as part of CPSC 8820 – Planning and Management of Software Projects at Governors State University. Designed to transform latent development risks into quantifiable, mitigatable actions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
          <a
            href="#overview"
            className="px-space-xl py-3.5 rounded-lg bg-gradient-to-r from-inverse-primary to-secondary text-surface-container-lowest font-label-md text-label-md font-bold tracking-wide hover:opacity-95 shadow-xl transition-all flex items-center gap-space-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <span>Explore the Project</span>
            <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
          </a>
          <a
            href="#problem"
            className="px-space-lg py-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-all shadow-sm border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Review Problem Space
          </a>
        </div>
      </div>
    </section>
  );
};
