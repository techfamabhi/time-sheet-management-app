"use client";

import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Add New Entry",
  children,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 300); // matches Tailwind transition duration-300
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background overlay click-to-close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={`bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl z-10 transform transition-all duration-300 ease-out ${
          visible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4.5">
          <h2 className="text-xl font-bold text-gray-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer focus:outline-none"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}