"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "John Doe";
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Logo and Menu */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer">
            ticktock
          </h1>

          <nav>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Timesheets
            </button>
          </nav>
        </div>

        {/* Right User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
          >
            <span>{userName}</span>
            <span className="text-xs text-gray-400 transition-transform duration-200" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)" }}>
              ▼
            </span>
          </button>

          {dropdownOpen && (
            <>
              {/* Overlay to close on outside click */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 transform origin-top-right transition-all duration-200">
                <button
                  onClick={() => {
                    signOut();
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </header>
  );
}