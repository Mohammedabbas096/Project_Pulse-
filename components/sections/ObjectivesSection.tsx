import React from 'react';

export const ObjectivesSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface" id="objectives">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Project Blueprint</span>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Our objectives & boundary scope.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Carefully defined milestones and scope constraints establishing academic rigor and industrial relevance for Phase 1.
          </p>
        </div>

        {/* 7 Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">01</span>
            <p className="font-body-md text-body-md text-on-surface">
              Develop a centralized web-based platform for managing software project risks.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">02</span>
            <p className="font-body-md text-body-md text-on-surface">
              Provide project managers with integrated tools for projects, tasks, milestones, and risk information.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">03</span>
            <p className="font-body-md text-body-md text-on-surface">
              Provide a structured, auditable risk register with categorical tagging.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">04</span>
            <p className="font-body-md text-body-md text-on-surface">
              Implement AI-assisted project risk analysis based on available project data.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">05</span>
            <p className="font-body-md text-body-md text-on-surface">
              Provide AI-generated mitigation recommendations directly tied to identified vectors.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">06</span>
            <p className="font-body-md text-body-md text-on-surface">
              Provide a dynamic project health dashboard summarizing key project indicators.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high flex items-start gap-space-md md:col-span-2 lg:col-span-3">
            <span className="font-data-metric text-headline-md font-extrabold text-secondary">07</span>
            <p className="font-body-md text-body-md text-on-surface">
              Deploy the application as a robust, cloud-hosted web application accessible to evaluators.
            </p>
          </div>
        </div>

        {/* Scope Breakdown: In Scope vs Out of Scope */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg pt-space-md">
          {/* IN SCOPE CARD */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low border border-tertiary/30 flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high/60">
              <div className="flex items-center gap-space-xs text-tertiary">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">IN SCOPE</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
                12 Core Deliverables
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> User authentication</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Project management</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Task management</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Milestone tracking</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Structured risk register</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Risk categorization</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Probability & impact assessment</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> AI risk analysis engine</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Mitigation recommendations</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Project health dashboard</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Basic summary reporting</div>
              <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✓</span> Cloud hosting on Vercel</div>
            </div>
          </div>

          {/* OUT OF SCOPE CARD */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low border border-outline/30 flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high/60">
              <div className="flex items-center gap-space-xs text-outline">
                <span className="material-symbols-outlined text-[24px]">block</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">OUT OF SCOPE</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm font-semibold">
                Design Delimitation
              </span>
            </div>
            <div className="flex flex-col gap-2.5 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Autonomous project decisions without user review</div>
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Automatic financial transactions or payroll tracking</div>
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Native iOS/Android mobile applications</div>
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Enterprise-scale ERP / SAP deep integrations</div>
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Highly complex distributed multi-region infrastructure</div>
              <div className="flex items-center gap-2"><span className="text-outline font-bold">✕</span> Fully automated self-executing risk remediation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
