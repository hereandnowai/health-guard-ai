import React from 'react';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
  containerClassName?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, name, options, error, containerClassName = '', ...props }) => {
  return (
    <div className={`space-y-1 ${containerClassName}`}>
      <label htmlFor={name} className="block text-sm font-medium text-[var(--brand-text-light)]">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        className={`w-full px-3 py-2 bg-[var(--brand-card-background)] border ${error ? 'border-red-500' : 'border-[var(--brand-border)]'} rounded-lg text-[var(--brand-text-light)] shadow-sm focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-[var(--brand-primary)]'} focus:border-transparent transition-colors appearance-none`}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value} className="bg-[var(--brand-card-background)] text-[var(--brand-text-light)]">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>} 
    </div>
  );
};

export default SelectInput;