import React from "react";
import { ArrowRight, Mail, Github, Linkedin, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-24">
        {/* Main Content */}
        <div className="mb-12">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Full-Stack Developer
            <br />
            <span className="text-slate-600">& Problem Solver</span>
          </h1>

          {/* Description */}
          <div className="max-w-3xl space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
            <p>
              I am a Full Stack Developer specializing in building modern,
              scalable, and user-focused web applications. I work across the
              entire development cycle—from UI design and frontend development
              to backend architecture, databases, and deployment. My core
              expertise lies in building SaaS platforms, interactive dashboards,
              and high-performance portfolio websites that solve real business
              problems and deliver seamless user experiences.
            </p>
            <p>
              I primarily work with Next.js, React, Tailwind CSS, Node.js,
              MongoDB, Drizzle ORM, PostgreSQL, and REST/JSON APIs, while also
              integrating tools like NextAuth.js / BetterAuth for
              authentication, ShadCN UI for component design, and modern hosting
              platforms such as Vercel and Neon. I focus on creating clean,
              maintainable codebases with scalable structures, reusable
              components, and optimized performance.
            </p>
            <p>
              My work blends technical depth with a product-driven mindset,
              helping businesses improve automation, online presence, and
              digital workflows through custom web solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
            <span className="text-sm text-slate-600 font-medium">Connect:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-200">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">5+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
            <div className="text-sm text-slate-600">Projects Completed</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">20+</div>
            <div className="text-sm text-slate-600">Technologies</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
