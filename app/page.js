import React from "react";
import { ArrowRight, Mail, Github, Linkedin, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="padding-both">
      <div className="containers nav-space">
        {/* Main Content */}
        <div className="mb-12">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Full-Stack Developer
            <br />
            <span className="text-gray-500">& Problem Solver</span>
          </h1>

          {/* Description */}
          <div className="max-w-3xl text-sm space-y-4 md:text-lg text-secondary leading-relaxed mb-8">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-secondary font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
