'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDark: boolean;
}

export default function Modal({ isOpen, onClose, children, isDark }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`relative max-w-2xl w-full mx-4 rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
          isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-gray-200'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-2xl ${
            isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}