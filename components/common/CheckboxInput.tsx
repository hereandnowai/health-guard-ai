import React from 'react';

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  containerClassName?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, name, containerClassName = '', ...props }) => {
  return (
    <div className={`flex items-center ${containerClassName}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        // Checkbox styling for light theme: uses --brand-card-background (now slate-50)
        className="h-4 w-4 text-[var(--brand-primary)] bg-[var(--brand-card-background)] border-[var(--brand-border)] rounded focus:ring-[var(--brand-primary)] focus:ring-offset-[var(--brand-background)] transition-colors"
        {...props}
      />
      {/* Label text uses --brand-text-light (dark body text) */}
      <label htmlFor={name} className="ml-2 block text-sm text-[var(--brand-text-light)]">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;