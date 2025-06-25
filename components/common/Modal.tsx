
import React, { useEffect } from 'react';
import { XMarkIcon } from '../icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className={`bg-[var(--brand-card-background)] rounded-xl shadow-2xl p-6 border border-[var(--brand-border)] ${sizeClasses[size]} w-full transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-appear`}
        onClick={(e) => e.stopPropagation()} 
        style={{ animationFillMode: 'forwards' }} 
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-[var(--brand-primary)]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[var(--brand-text-dim)] hover:text-[var(--brand-text-light)] transition-colors p-1 rounded-full hover:bg-[var(--brand-border)]"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
