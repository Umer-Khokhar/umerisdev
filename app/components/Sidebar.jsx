"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Home, User, Folder, Award, Mail, BarChart } from "lucide-react";

const DocumentationSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: "/", label: "Introduction", icon: Home },
    { id: "/about", label: "About Me", icon: User },
    { id: "/projects", label: "Projects", icon: Folder },
    { id: "/skills-and-experience", label: "Skills & Experience", icon: Award },
    { id: "/contact", label: "Contact", icon: Mail },
    { id: "/stats", label: "Stats", icon: BarChart },
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed bg-background/50 blur-in-sm z-10 top-12 left-0 min-h-screen w-64 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:mt-0 md:ml-0 md:h-auto border-r border-border`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-8">Portfolio Docs</h1>

          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <Link
                      href={`${item.id}`}
                      className={clsx(
                        "flex items-center py-2 px-3 rounded-lg transition-all duration-200 group hover:bg-accent",
                        {
                          "bg-accent text-accent-foreground border-l-4 border-primary":
                            pathname === item.id,
                          "text-muted-foreground": pathname !== item.id,
                        }
                      )}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
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
