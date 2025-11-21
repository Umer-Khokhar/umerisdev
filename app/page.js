"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex items-center padding-both nav-space">
        <div className="containers">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Full-Stack Developer & Problem Solver
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              I am a Full Stack Developer specializing in building modern,
              scalable, and user-focused web applications. I work across the
              entire development cycle—from UI design and frontend development
              to backend architecture, databases, and deployment. My core
              expertise lies in building SaaS platforms, interactive dashboards,
              and high-performance portfolio websites that solve real business
              problems and deliver seamless user experiences.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              I primarily work with Next.js, React, Tailwind CSS, Node.js,
              MongoDB, Drizzle ORM, PostgreSQL, and REST/JSON APIs, while also
              integrating tools like NextAuth.js / BetterAuth for
              authentication, ShadCN UI for component design, and modern hosting
              platforms such as Vercel and Neon. I focus on creating clean,
              maintainable codebases with scalable structures, reusable
              components, and optimized performance.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              My work blends technical depth with a product-driven mindset,
              helping businesses improve automation, online presence, and
              digital workflows through custom web solutions.z
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/projects"
              className="inline-flex border border-purple-500 bg-purple-500 text-white items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition"
            >
              Get In Touch <Mail size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="hover:text-foreground transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {/* <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="space-y-6">
            <Link
              href="/projects"
              className="block p-6 border border-border rounded-lg hover:bg-muted transition group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                E-Commerce Platform
              </h3>
              <p className="text-muted-foreground">
                Full-stack marketplace with payment integration, real-time
                analytics, and admin dashboard.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  Stripe
                </span>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </Link>
            <Link
              href="/projects"
              className="block p-6 border border-border rounded-lg hover:bg-muted transition group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                Task Management App
              </h3>
              <p className="text-muted-foreground">
                Collaborative workspace with real-time updates, team management,
                and progress tracking.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  Firebase
                </span>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  Tailwind
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>*/}
    </main>
  );
}
