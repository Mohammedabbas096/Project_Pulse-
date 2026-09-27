import React from 'react';
import { TEAM_MEMBERS } from '@/data/team';

export const TeamSection: React.FC = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl lg:py-24 bg-surface-container-low border-y border-surface-container-high/60" id="team">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Authors & Direction</span>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Meet ProjectPulse.
          </h2>
        </div>

        {/* Mission Statement Banner */}
        <div className="p-space-lg md:p-10 rounded-2xl bg-surface-container-high shadow-md border border-secondary/20">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-space-xs block">OUR PURPOSE</span>
          <p className="font-headline-md text-headline-md text-on-surface leading-relaxed max-w-4xl font-medium">
            "Our mission is to develop an intelligent and accessible project risk management platform that helps software teams identify potential risks early, assess their impact, and make informed mitigation decisions throughout the project lifecycle."
          </p>
        </div>

        {/* Student Team Member Cards (Strict Placeholders & Governors State Context) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-sm">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-space-lg rounded-2xl bg-surface-container border border-surface-container-high flex flex-col gap-space-sm shadow-md"
            >
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-high border border-secondary/30 flex items-center justify-center text-secondary text-headline-sm font-bold">
                  <span className="material-symbols-outlined text-[24px]">person</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {member.name}
                  </h3>
                  <span className="font-label-md text-label-md text-secondary font-semibold">
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-space-xs text-body-sm text-on-surface-variant border-t border-surface-container-high/60">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline text-[16px]">school</span>
                  <span>{member.institution}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline text-[16px]">engineering</span>
                  <span>Focus: {member.focus}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
