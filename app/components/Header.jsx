"use client";
import { Search, Github, Music, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";
const navLinks = [
  { title: "Home", href: "#" },
  { title: "LinkedIn", href: "#" },
  { title: "Resume", href: "#" },
];

const navSections = [
  { id: "/", label: "Introduction" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills-and-experience", label: "skills & Experience" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "stats", label: "Stats" },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={`bg-background/60 backdrop-blur-2xl z-30 fixed top-0 left-0 right-0 mb-12 border-b border-border px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-[1660px] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
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
          <div className="hidden sm:flex items-center space-x-8">
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
              {navLinks.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  className=" font-medium text-secondary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
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
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  20:49:58
                </span>
              </div>

              {/* Music Icon */}
              <button className="p-2 hover:bg-hover rounded-lg transition-colors">
                <Music className="w-5 h-5 text-secondary" />
              </button>

              {/* Theme Toggle */}
              <ToggleBtn />

              {/* GitHub */}
              <button className="p-2 hover:bg-hover rounded-lg transition-colors">
                <Github className="w-5 h-5 text-secondary" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full min-h-screen h-full bg-gray-500/50 ">
            <div className="md:hidden py-4 absolute bg-background top-0 left-0 bottom-0 min-h-screen w-[85%] right-0 p-4 z-50 transition-all duration-300 ease-in">
              <div className="flex items-center justify-between ">
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
                {/* Icons */}
                <div className="flex items-center space-x-3">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="flex flex-col space-y-3 p-4">
                {navLinks.map((link, idx) => (
                  <div
                    className="flex justify-between items-center border border-gray-200/90 rounded-md py-3 px-2"
                    key={idx}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className=" font-medium hover:text-gray-600 transition-colors"
                    >
                      {link.title}
                    </Link>
                    <span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                ))}
                <h2 className="text-center text-lg text-gray-400 font-bold uppercase">
                  Sections
                </h2>
                <div className="flex flex-col gap-2">
                  {navSections.map((section, idx) => (
                    <div
                      className="flex justify-between border border-border shadow shadow-background items-center  rounded-md py-3 px-2"
                      key={section.id}
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href={section.id}
                        className=" font-medium hover:text-gray-600 transition-colors"
                      >
                        {section.label}
                      </Link>
                      <span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
