import React from 'react';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/50 shadow-[0_-1px_12px_rgba(0,0,0,0.3)]">
      <div className="w-full px-margin-desktop py-space-xl flex flex-col gap-space-lg max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <Logo showBadge={false} />
              <span className="text-outline">•</span>
              <span className="font-label-md text-label-md text-secondary font-medium">
                AI Project Risk Manager
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
              Identify. Assess. Mitigate. Manage.
            </p>
            <p className="font-label-sm text-label-sm text-outline tracking-wide uppercase mt-space-xs">
              CPSC 8820 • Planning and Management of Software Projects • Governors State University
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs">
            <a
              href="#overview"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Overview
            </a>
            <a
              href="#problem"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Solution
            </a>
            <a
              href="#features"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Features
            </a>
            <a
              href="#technology"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Technology
            </a>
            <a
              href="#team"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Team
            </a>
            <a
              href="#resources"
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Resources
            </a>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-lg border-t border-surface-container-high/40">
          <p className="font-body-sm text-body-sm text-on-surface-variant/80">
            Phase 1 Academic Project • Fall 2026 — Governors State University
          </p>
          <p className="font-body-sm text-body-sm text-outline">
            © 2026 ProjectPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
