import React from 'react';
import { TECH_CATEGORIES } from '@/data/technology';

export const TechnologySection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface-container-low border-y border-surface-container-high/60" id="technology">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-3xl flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider border border-secondary/20">
                Planned Technology Stack
              </span>
              <span className="font-label-sm text-label-sm text-outline">• Phase 1 Architecture Specification</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              Built with a modern web stack.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Leveraging battle-tested enterprise libraries and developer-first frameworks designed for scalability and resilience.
            </p>
          </div>
        </div>

        {/* Categories Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col p-space-md rounded-xl bg-surface-container border border-surface-container-high">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold mb-space-sm">
                {cat.title}
              </span>
              <div className="flex flex-col gap-space-xs">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded bg-surface-container-high border border-white/5"
                  >
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      {item.name}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        item.highlight ? 'text-secondary font-semibold' : 'text-outline'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
