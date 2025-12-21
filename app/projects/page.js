import React from "react";
import { Code, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
 const projects = [
  {
    title: "Custom Pack Boxes – Full Stack Platform",
    description:
      "A full-stack packaging business platform with dynamic product pages, category-based navigation, and an admin dashboard for managing products, categories, and inquiries.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?w=800&h=500&fit=crop",
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Mongoose",
    ],
    codeUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Multi-Tenant Lawn Care Services Platform",
    description:
      "A multi-tenant web application for lawn care businesses where each tenant has isolated data, services, and bookings with scalable backend architecture.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=500&fit=crop",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    codeUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Solvorr Tech – Digital Agency Website",
    description:
      "A modern digital agency website with sleek animations, smooth transitions, and a strong brand-focused UI to showcase services, vision, and client engagement.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Modern UI/UX",
    ],
    codeUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Ebook Platform – Backend API",
    description:
      "A scalable REST API for an ebook platform handling authentication, users, ebooks, and secure access control. Frontend integration in progress.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    codeUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Learning Management System (LMS) – API",
    description:
      "A backend-focused LMS API with authentication, access & refresh token rotation, role-based authorization, and secure session handling.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    technologies: [
      "Node.js",
      "NestJS",
      "JWT",
      "Access & Refresh Tokens",
      "MongoDB",
    ],
    codeUrl: "#",
    liveUrl: "#",
  },
];


  return (
    <div className="min-h-screen">
      {/* Documentation-style sidebar layout */}
      <div className="containers nav-space padding-both">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold  mb-2">Projects</h1>
          <p className="text-secondary text-lg">
            A selection of recent work and implementations
          </p>
        </div>

        {/* Projects List */}
        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group border border-border rounded-xl p-6 bg-transparent shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold  mb-3 group-hover:text-blue-600">
                {project.title}
              </h2>

              <p className="text-secondary mb-4">{project.description}</p>

              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  className="w-full h-48 object-cover"
                  alt=""
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700  text-sm font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700"
                  href={project.liveUrl}
                >
                  Live <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  className="flex items-center gap-1.5 text-sm text-slate-700 hover:"
                  href={project.codeUrl}
                >
                  <Code className="w-4 h-4" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
