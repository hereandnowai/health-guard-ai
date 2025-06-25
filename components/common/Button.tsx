
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--brand-background)] focus:ring-opacity-75 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  
  // --brand-primary: #FFDF00 (Golden Yellow)
  // --brand-secondary: #004040 (Dark Teal)
  // --brand-primary-text: #1F2937 (Dark gray for text on primary)
  // --brand-secondary-text: #FFFFFF (White text for on secondary)

  const variantStyles = {
    primary: "bg-[var(--brand-primary)] hover:bg-yellow-300 text-[var(--brand-primary-text)] focus:ring-[var(--brand-primary)]",
    secondary: "bg-[var(--brand-secondary)] hover:bg-teal-700 text-[var(--brand-secondary-text)] focus:ring-[var(--brand-secondary)]",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
