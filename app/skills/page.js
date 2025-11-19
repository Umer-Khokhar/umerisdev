"use client";

export default function SkillsPage() {
  const skills = {
    Frontend: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML & CSS",
      "Redux / Context API",
      "Web Performance",
    ],
    Backend: [
      "Node.js / Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Caching & CDN",
    ],
    "Tools & Platforms": [
      "Git & GitHub",
      "Docker",
      "AWS / Vercel",
      "CI/CD Pipelines",
      "Testing (Jest, Vitest)",
      "GraphQL",
    ],
    "Soft Skills": [
      "Problem Solving",
      "Team Collaboration",
      "Technical Communication",
      "Code Review",
      "Project Management",
      "Mentoring",
    ],
  };

  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Skills & Experience
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-12">Experience</h2>
            <div className="space-y-12">
              <div className="border-l-2 border-primary pl-6 pb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Senior Full-Stack Developer
                    </h3>
                    <p className="text-muted-foreground">Tech Company Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2022 - Present
                  </span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Led development of customer-facing applications, mentored
                  junior developers, and implemented architectural improvements
                  that reduced load times by 40%.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6 pb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Full-Stack Developer
                    </h3>
                    <p className="text-muted-foreground">Startup Co.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2020 - 2022
                  </span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Built and shipped multiple product features, from MVP to
                  scaling for thousands of concurrent users. Implemented
                  real-time features and optimized database performance.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6 pb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Junior Developer</h3>
                    <p className="text-muted-foreground">Digital Agency</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2019 - 2020
                  </span>
                </div>
                <p className="text-muted-foreground mt-3">
                  Developed responsive websites and web applications for diverse
                  clients. Learned full development lifecycle from requirements
                  to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
