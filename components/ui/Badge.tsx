import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'secondary' | 'primary' | 'tertiary' | 'error' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'sm',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    secondary: 'bg-secondary/15 text-secondary',
    primary: 'bg-primary/20 text-primary',
    tertiary: 'bg-tertiary/20 text-tertiary',
    error: 'bg-error-container/30 text-error',
    outline: 'bg-surface-container-high text-outline',
    amber: 'bg-amber-500/20 text-amber-400',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px] font-semibold',
    md: 'px-3 py-1 text-label-sm font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full tracking-wider uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
};
