import React from "react";
import {
  Code,
  Server,
  Wrench,
  Users,
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function SkillsSection() {
  const experiences = [
  {
    company: "Markonify",
    position: "Full Stack Developer",
    location: "Lahore, Pakistan",
    period: "Dec 2024 - Present",
    type: "Full-time",
    logo: "https://ui-avatars.com/api/?name=MK&background=3b82f6&color=fff&size=128",
    responsibilities: [
      "Developed and deployed production-ready full-stack applications using Next.js and Node.js for multiple clients.",
      "Built custom CMS and admin dashboards with role-based access control (RBAC) enabling non-technical users to manage content.",
      "Implemented secure authentication systems using JWT, NextAuth.js, and BetterAuth including session management.",
      "Optimized application performance using SSR/SSG, image optimization, and code splitting achieving 95+ Lighthouse scores.",
      "Integrated third-party services such as Cloudinary for media handling and Nodemailer for automated email workflows."
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "NextAuth.js"
    ],
  },
  {
    company: "AAA Digital",
    position: "Frontend Developer Intern",
    location: "Lahore, Pakistan",
    period: "Sep 2024 - Nov 2024",
    type: "Internship",
    logo: "https://ui-avatars.com/api/?name=AAA&background=8b5cf6&color=fff&size=128",
    responsibilities: [
      "Developed responsive user interfaces using React and Tailwind CSS based on Figma designs.",
      "Worked closely with senior developers to integrate REST APIs into frontend applications.",
      "Improved UI performance and accessibility across multiple client projects.",
      "Gained hands-on experience with component-based architecture and modern frontend workflows."
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs"
    ],
  },
];


  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: [
        {
          name: "React / Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "HTML & CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Zustand / Context API",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
        },
        {
          name: "Web Performance",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        {
          name: "Node.js / Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Nest.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "REST APIs",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Authentication",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Caching & CDN",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        {
          name: "Git & GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "Vercel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Testing",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-plain.svg",
        },
        {
          name: "Chrome Dev Tool",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-plain.svg",
        },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: [
        {
          name: "Problem Solving",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg",
        },
        {
          name: "Team Collaboration",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        },
        {
          name: "Technical Communication",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
        },
        {
          name: "Code Review",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Project Management",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
        {
          name: "Mentoring",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
  ];

  return (
    <div className="padding-both">
      <div className="containers nav-space">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold  mb-2">Skills & Expertise</h1>
          <p className="text-slate-400 text-lg">
            Technical capabilities and professional competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="text-slate-500">{category.icon}</div>
                <h2 className="text-xl font-semibold ">{category.title}</h2>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-slate-500">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-8 py-16">
          {/* Header */}
          <div className="mb-12 pb-6 border-b border-border">
            <h1 className="text-3xl font-bold  mb-2">Work Experience</h1>
            <p className="text-slate-400 text-lg">
              Professional journey and contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 border-l-2 border-border"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />

                {/* Company Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 rounded-lg border border-border"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold ">{exp.position}</h2>
                    <h3 className="text-lg text-slate-500 mt-1">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-600 text-secondary rounded text-xs font-medium border border-border">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold  mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-400"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold  mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <code
                        key={i}
                        className="px-2.5 py-1 dark:bg-slate-700 bg-slate-300 text-sm font-mono rounded border border-border"
                      >
                        {tech}
                      </code>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
