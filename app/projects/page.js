import React from "react";
import { Code, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce marketplace with product catalog, shopping cart, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management Application",
      description:
        "Collaborative workspace for team productivity with real-time updates, task assignment, progress tracking, and team analytics.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform with interactive charts, custom reports, and data export functionality for business intelligence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: ["Next.js", "D3.js", "MongoDB", "Node.js"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media Feed",
      description:
        "Dynamic feed application with user authentication, image uploads, likes, comments, and real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      technologies: ["React", "Express", "MongoDB", "Cloud Storage"],
      codeUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Documentation-style sidebar layout */}
      <div className="containers nav-space padding-both">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Projects</h1>
          <p className="text-slate-600 text-lg">
            A selection of recent work and implementations
          </p>
        </div>

        {/* Projects List */}
        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600">
                {project.title}
              </h2>

              <p className="text-slate-600 mb-4">{project.description}</p>

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
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-sm font-mono rounded"
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
                  className="flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900"
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
