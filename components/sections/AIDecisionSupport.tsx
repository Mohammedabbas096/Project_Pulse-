'use client';

import React, { useState } from 'react';

export const AIDecisionSupport: React.FC = () => {
  // Demonstration UI state for interactive cards
  const [item1State, setItem1State] = useState<'pending' | 'accepted' | 'modified' | 'dismissed'>('pending');
  const [item2State, setItem2State] = useState<'pending' | 'accepted' | 'modified' | 'dismissed'>('pending');
  const [item3State, setItem3State] = useState<'pending' | 'accepted' | 'modified' | 'dismissed'>('pending');

  return (
    <section className="relative w-full px-margin md:px-margin-desktop py-space-xl lg:py-28 bg-surface-container-lowest border-y border-surface-container-high/60 overflow-hidden" id="ai-decision-support">
      {/* Backlight Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[500px] bg-primary/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-space-xl">
        {/* Philosophy & Context */}
        <div className="w-full lg:w-5/12 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold border border-primary/20">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>AI-generated decision support • Human in the loop</span>
          </div>

          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            AI that assists decisions. <br /><span className="text-secondary">People stay in control.</span>
          </h2>

          <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-lg text-body-lg">
            <p>
              ProjectPulse uses AI as a pure decision-support capability. AI-generated risk observations and mitigation suggestions are presented to project managers for review rather than automatically executing project decisions.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80">
              No autonomous schedule altering, no unsupervised task reassignment, and no silent changes. Every finding can be vetted, customized, or dismissed by human leads.
            </p>
          </div>

          {/* Principles List */}
          <div className="flex flex-col gap-space-xs pt-space-sm font-label-md text-label-md">
            <div className="flex items-center gap-space-sm text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
              <span>Transparent reasoning for every generated risk score</span>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
              <span>Single-click acceptance converts recommendations into tasks</span>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
              <span>No proprietary project code uploaded to models</span>
            </div>
          </div>
        </div>

        {/* High-Fidelity Mock AI Analysis Panel */}
        <div className="w-full lg:w-7/12 rounded-2xl bg-surface-container border border-surface-container-high shadow-2xl p-space-lg backdrop-blur-md">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-space-md border-b border-surface-container-high/60">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Decision Engine Interactive Demo</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">AI Project Analysis</h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold border border-white/5">
              3 potential risks identified
            </span>
          </div>

          {/* Analysis Items */}
          <div className="flex flex-col gap-space-md mt-space-md">
            {/* Item 1: High */}
            {item1State !== 'dismissed' ? (
              <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high transition-all">
                <div className="flex items-center justify-between gap-space-sm mb-2">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-error-container/30 text-error uppercase">HIGH SEVERITY</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Backend development delay</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-outline">
                    <span>Prob: <strong className="text-error">High</strong></span>
                    <span>•</span>
                    <span>Impact: <strong className="text-error">High</strong></span>
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  <span className="text-secondary font-semibold">Recommendation:</span> Review backend task dependencies and consider reallocating development resources.
                </p>

                {item1State === 'accepted' && (
                  <div className="mb-2 p-2 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Demonstration State: Recommendation Accepted (Simulated Action)</span>
                  </div>
                )}

                {item1State === 'modified' && (
                  <div className="mb-2 p-2 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    <span>Demonstration State: Modified Action Workflow Active</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => setItem1State('accepted')}
                    className="px-3 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-fixed-dim transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Accept Recommendation
                  </button>
                  <button
                    onClick={() => setItem1State('modified')}
                    className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Modify Action
                  </button>
                  <button
                    onClick={() => setItem1State('dismissed')}
                    className="px-3 py-1.5 rounded text-outline hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-space-sm rounded-xl bg-surface-container-low border border-dashed border-outline/30 flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>[Demonstration Card 1 Dismissed]</span>
                <button
                  onClick={() => setItem1State('pending')}
                  className="text-secondary text-label-sm font-semibold hover:underline"
                >
                  Reset Card
                </button>
              </div>
            )}

            {/* Item 2: Medium */}
            {item2State !== 'dismissed' ? (
              <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high transition-all">
                <div className="flex items-center justify-between gap-space-sm mb-2">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-400 uppercase">MEDIUM SEVERITY</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">External API dependency</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-outline">
                    <span>Prob: <strong className="text-amber-400">Medium</strong></span>
                    <span>•</span>
                    <span>Impact: <strong className="text-error">High</strong></span>
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  <span className="text-secondary font-semibold">Recommendation:</span> Validate third-party API availability SLAs and establish a mocked fallback sandbox.
                </p>

                {item2State === 'accepted' && (
                  <div className="mb-2 p-2 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Demonstration State: Recommendation Accepted (Simulated Action)</span>
                  </div>
                )}

                {item2State === 'modified' && (
                  <div className="mb-2 p-2 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    <span>Demonstration State: Modified Action Workflow Active</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => setItem2State('accepted')}
                    className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Accept Recommendation
                  </button>
                  <button
                    onClick={() => setItem2State('modified')}
                    className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Modify Action
                  </button>
                  <button
                    onClick={() => setItem2State('dismissed')}
                    className="px-3 py-1.5 rounded text-outline hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-space-sm rounded-xl bg-surface-container-low border border-dashed border-outline/30 flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>[Demonstration Card 2 Dismissed]</span>
                <button
                  onClick={() => setItem2State('pending')}
                  className="text-secondary text-label-sm font-semibold hover:underline"
                >
                  Reset Card
                </button>
              </div>
            )}

            {/* Item 3: Low */}
            {item3State !== 'dismissed' ? (
              <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high transition-all">
                <div className="flex items-center justify-between gap-space-sm mb-2">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary/20 text-secondary uppercase">LOW SEVERITY</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Documentation delay</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-outline">
                    <span>Prob: <strong className="text-amber-400">Medium</strong></span>
                    <span>•</span>
                    <span>Impact: <strong className="text-tertiary">Low</strong></span>
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  <span className="text-secondary font-semibold">Recommendation:</span> Schedule sprint documentation catchup work before the upcoming milestone audit.
                </p>

                {item3State === 'accepted' && (
                  <div className="mb-2 p-2 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Demonstration State: Recommendation Accepted (Simulated Action)</span>
                  </div>
                )}

                {item3State === 'modified' && (
                  <div className="mb-2 p-2 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    <span>Demonstration State: Modified Action Workflow Active</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => setItem3State('accepted')}
                    className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Accept Recommendation
                  </button>
                  <button
                    onClick={() => setItem3State('modified')}
                    className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Modify Action
                  </button>
                  <button
                    onClick={() => setItem3State('dismissed')}
                    className="px-3 py-1.5 rounded text-outline hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-space-sm rounded-xl bg-surface-container-low border border-dashed border-outline/30 flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>[Demonstration Card 3 Dismissed]</span>
                <button
                  onClick={() => setItem3State('pending')}
                  className="text-secondary text-label-sm font-semibold hover:underline"
                >
                  Reset Card
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
