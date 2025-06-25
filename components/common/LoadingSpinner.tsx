
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  spinnerClassName?: string; // To allow customizing spinner specific classes e.g. border color
  textClassName?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text, 
  className = '', 
  spinnerClassName = '',
  textClassName = ''
}) => {
  const sizeClasses = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-12 w-12 border-[6px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        // Default border color changed to theme's secondary border for better visibility on light bg
        className={`${sizeClasses[size]} animate-spin rounded-full border-[var(--theme-border-secondary)] border-t-[var(--brand-primary)] ${spinnerClassName}`}
      />
      {/* Text uses --brand-text-dim (muted dark) */}
      {text && <p className={`mt-3 text-sm text-[var(--brand-text-dim)] ${textClassName}`}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;