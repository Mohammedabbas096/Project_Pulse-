'use client';

import React from 'react';
import { NAVIGATION_ITEMS } from '@/data/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  activeSection,
  onClose,
  onNavClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-drawer"
      aria-label="Mobile Navigation Drawer"
      className="fixed top-20 left-0 right-0 z-40 bg-surface-container-low/95 backdrop-blur-xl px-margin py-space-lg shadow-[0_12px_24px_rgba(0,0,0,0.4)] border-b border-surface-container-high transition-all xl:hidden"
    >
      <nav className="flex flex-col gap-space-xs">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.href);
              }}
              className={`px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                isActive
                  ? 'bg-surface-container-high text-on-surface font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="flex flex-col gap-space-sm pt-space-md mt-space-md border-t border-surface-container-high">
        <a
          href="#architecture"
          onClick={(e) => {
            e.preventDefault();
            onNavClick('#architecture');
          }}
          className="w-full flex items-center justify-center px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
        >
          View Architecture
        </a>
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            onNavClick('#overview');
          }}
          className="w-full flex items-center justify-center px-space-md py-2.5 rounded-lg bg-gradient-to-r from-inverse-primary to-secondary text-surface-container-lowest font-label-md text-label-md font-semibold transition-all shadow-[0_0_16px_rgba(76,215,246,0.3)]"
        >
          Explore Project
        </a>
      </div>
    </div>
  );
};
