export const navigation = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Skills & Experience", id: "skills" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "#",
    live: "#",
    highlights: [
      "Real-time inventory updates",
      "Secure payment processing",
      "Advanced search and filtering",
    ],
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and analytics.",
    tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
    github: "#",
    live: "#",
    highlights: [
      "Real-time collaboration",
      "Drag-and-drop interface",
      "Custom workflow automation",
    ],
  },
  {
    title: "Social Media Analytics Dashboard",
    description:
      "Analytics platform that aggregates data from multiple social media platforms with interactive visualizations.",
    tech: ["React", "Python", "FastAPI", "MySQL", "D3.js"],
    github: "#",
    live: "#",
    highlights: [
      "Multi-platform integration",
      "Interactive data visualization",
      "Automated reporting",
    ],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Scalable chat application with end-to-end encryption, file sharing, and video call capabilities.",
    tech: ["Next.js", "Node.js", "WebRTC", "MongoDB", "WebSocket"],
    github: "#",
    live: "#",
    highlights: ["End-to-end encryption", "Video/audio calls", "File sharing"],
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Vue.js", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "TypeScript", level: 92 },
    { name: "Tailwind CSS", level: 94 },
    { name: "Redux", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 93 },
    { name: "Python", level: 88 },
    { name: "Express", level: 90 },
    { name: "Django", level: 82 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 88 },
    { name: "MySQL", level: 86 },
    { name: "Redis", level: 83 },
    { name: "Firebase", level: 85 },
  ],
  devops: [
    { name: "Docker", level: 87 },
    { name: "AWS", level: 84 },
    { name: "CI/CD", level: 86 },
    { name: "Git", level: 93 },
    { name: "Kubernetes", level: 78 },
  ],
};

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "Jan 2022 - Present",
    description:
      "Lead development of enterprise web applications, mentor junior developers, and architect scalable solutions.",
    achievements: [
      "Led a team of 5 developers in building a SaaS platform serving 10K+ users",
      "Reduced application load time by 60% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2020 - Dec 2021",
    description:
      "Developed and maintained multiple client projects, focusing on modern web technologies and best practices.",
    achievements: [
      "Built 12+ responsive web applications from scratch",
      "Improved code quality by implementing automated testing (95% coverage)",
      "Collaborated with designers to create pixel-perfect UIs",
    ],
  },
  {
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "Jun 2018 - Feb 2020",
    description:
      "Contributed to various web development projects, gained experience in full-stack development.",
    achievements: [
      "Developed RESTful APIs used by 50K+ monthly active users",
      "Migrated legacy codebase to modern React framework",
      "Participated in code reviews and agile development practices",
    ],
  },
];
