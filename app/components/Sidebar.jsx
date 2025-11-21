"use client";

import Link from "next/link";
import React, { useState } from "react";

const DocumentationSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: "/", label: "Introduction" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills-and-experience", label: "skills & Experience" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "stats", label: "Stats" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed bg-gray-50/50 blur-in-sm z-10 top-12 left-0 min-h-screen w-64 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:mt-0 md:ml-0 md:h-auto border-r border-gray-200`}
      >
        <div className="padding-both">
          <h1 className="text-2xl font-bold mb-8">Portfolio Docs</h1>

          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`${item.id}`}
                    className="flex items-center py-1 rounded-lg transition-colors duration-200 group"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default DocumentationSidebar;
