import React from 'react';
import { RESOURCE_ITEMS } from '@/data/resources';

export const ResourcesSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface-container-low border-y border-surface-container-high/60" id="resources">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-3xl flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Foundation & Literature</span>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              Research & Resources
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Essential documentation, authoritative frameworks, and foundational tools guiding the development of ProjectPulse.
            </p>
          </div>

          {/* GitHub Repository Info Card */}
          <div className="p-space-md rounded-xl bg-surface-container border border-secondary/30 flex flex-col gap-1 shrink-0">
            <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-bold">
              <span className="material-symbols-outlined text-[20px]">code_blocks</span>
              <span>Project Repository</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-on-surface-variant hover:text-secondary underline flex items-center gap-1 mt-1 transition-colors"
              aria-label="GitHub Repository (opens in new tab)"
            >
              <span>github.com/... [REPOSITORY LINK — TO BE PROVIDED]</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* 10 Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {RESOURCE_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high border border-surface-container-high transition-all flex flex-col justify-between group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label={`${item.title} (opens in new tab)`}
            >
              <div className="flex flex-col gap-1">
                <span className={`material-symbols-outlined text-[24px] ${item.colorClass}`}>
                  {item.icon}
                </span>
                <h4 className="font-label-md text-label-md font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
              <span className={`font-label-sm text-label-sm font-semibold mt-space-md flex items-center gap-1 ${item.colorClass}`}>
                <span>View Resource</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
