'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Handle active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of NAVIGATION_ITEMS) {
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-surface-container-high/50">
        <div className="h-20 w-full px-margin-desktop flex items-center justify-between gap-space-md">
          {/* Logo Brand */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#overview');
            }}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-xs">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-space-sm py-1.5 rounded-lg transition-colors font-label-md text-label-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    isActive
                      ? 'text-on-surface bg-surface-container-high font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Action Buttons & Avatar/Menu Toggle */}
          <div className="flex items-center gap-space-sm shrink-0">
            <a
              href="#architecture"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#architecture');
              }}
              className="hidden lg:inline-flex items-center justify-center px-space-md py-2 rounded-lg bg-surface-container/60 hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              View Architecture
            </a>
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#overview');
              }}
              className="hidden sm:inline-flex items-center justify-center px-space-md py-2 rounded-lg bg-gradient-to-r from-inverse-primary to-secondary text-surface-container-lowest font-label-md text-label-md font-semibold hover:opacity-95 shadow-[0_0_16px_rgba(76,215,246,0.3)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Explore Project
            </a>

            {/* Academic Avatar Placeholder */}
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm"
              title="CPSC 8820 Project Workstation"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                school
              </span>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              id="mobile-nav-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileDrawer
        isOpen={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
        onNavClick={handleNavClick}
      />
    </>
  );
};
