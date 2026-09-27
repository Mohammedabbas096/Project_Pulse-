import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-8 w-auto",
  showText = true,
  showBadge = true,
}) => {
  return (
    <div className="flex items-center gap-space-xs shrink-0">
      {/* SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ProjectPulse Logo Icon"
      >
        <rect width="32" height="32" rx="8" fill="#122131" />
        <path
          d="M6 16H10L13 9L17 23L21 13L23 16H26"
          stroke="#4cd7f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="16" r="2" fill="#c0c1ff" />
      </svg>
      
      {showText && (
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">
            ProjectPulse
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
        </div>
      )}

      {showBadge && (
        <span className="hidden sm:inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase">
          AI RISK MANAGER
        </span>
      )}
    </div>
  );
};
