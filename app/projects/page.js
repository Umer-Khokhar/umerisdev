"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce marketplace with product catalog, shopping cart, payment processing, and admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Task Management Application",
      description:
        "Collaborative workspace for team productivity with real-time updates, task assignment, progress tracking, and team analytics.",
      tags: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform with interactive charts, custom reports, and data export functionality for business intelligence.",
      tags: ["Next.js", "D3.js", "MongoDB", "Node.js"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Social Media Feed",
      description:
        "Dynamic feed application with user authentication, image uploads, likes, comments, and real-time notifications.",
      tags: ["React", "Express", "MongoDB", "Cloud Storage"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chatbot with context awareness, conversation history, user accounts, and integration with multiple AI models.",
      tags: ["Next.js", "OpenAI API", "React Query", "Prisma"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Content Management System",
      description:
        "Headless CMS for managing blog content, media assets, user roles, and content versioning with REST API.",
      tags: ["Node.js", "PostgreSQL", "JWT", "Express"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
  ];

  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="nav-space padding-both">
        <div className="containers">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A selection of projects I have worked on, showcasing my skills in
            full-stack development.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="p-6 border-border hover:border-primary transition flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    aria-label="GitHub repository"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    aria-label="Live project"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
