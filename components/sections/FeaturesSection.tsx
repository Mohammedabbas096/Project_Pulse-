import React from 'react';
import { FEATURE_ITEMS } from '@/data/features';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface" id="features">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">System Capabilities</span>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Everything needed to manage project risk.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Comprehensive tooling engineered for software project managers, engineering leads, and stakeholders who require absolute predictability.
          </p>
        </div>

        {/* 8-Card Grid (4x2 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {FEATURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-space-md p-space-lg rounded-2xl bg-surface-container-low border border-surface-container-high hover:bg-surface-container transition-all group"
            >
              <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/5 ${item.colorClass} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
