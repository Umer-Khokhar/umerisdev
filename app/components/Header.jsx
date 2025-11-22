"use client";
import { Search, Github, Moon, Music } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-2xl z-30 fixed top-0 left-0 right-0 mb-12 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1660px] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold font-mono text-lg">UmerAswad</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
              >
                <span>LinkedIn</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
              >
                <span>Resume</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </nav>
          </div>

          {/* Right side - Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search sections..."
                className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
              />
              <kbd className="ml-2 flex items-center gap-2 px-2 py-0.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded">
                <span>Ctrl</span>
                <span>K</span>
              </kbd>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              {/* Time Display - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  20:49:58
                </span>
              </div>

              {/* Music Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Music className="w-5 h-5 text-gray-700" />
              </button>

              {/* Theme Toggle */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Moon className="w-5 h-5 text-gray-700" />
              </button>

              {/* GitHub */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Github className="w-5 h-5 text-gray-700" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-1"
              >
                <span>LinkedIn</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-1"
              >
                <span>Resume</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Mobile Search */}
              <div className="lg:hidden flex items-center bg-gray-50 rounded-lg px-3 py-2 mt-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
