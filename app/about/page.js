"use client";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with 5+ years of
                experience building web applications that blend thoughtful
                design with robust engineering. I specialize in crafting
                scalable solutions that prioritize user experience and
                maintainability.
              </p>

              <p>
                Currently, I work on diverse projects ranging from e-commerce
                platforms to SaaS applications, collaborating with designers and
                product managers to bring ideas to life. My approach combines
                technical excellence with a deep understanding of user needs.
              </p>

              <p>
                I'm constantly learning and exploring new technologies. Whether
                it's diving into backend optimization, frontend performance, or
                cloud infrastructure, I'm driven by the challenge of solving
                complex problems.
              </p>

              <p>
                In my spare time, you'll find me contributing to open-source
                projects, writing technical articles, or experimenting with side
                projects. I believe in sharing knowledge and giving back to the
                community that has helped me grow as a developer.
              </p>
            </div>
          </div>

          {/* Education & Background */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold mb-8">Background</h2>
            <div className="space-y-8">
              <Card className="p-6 border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    B.S. Computer Science
                  </h3>
                  <span className="text-sm text-muted-foreground">2019</span>
                </div>
                <p className="text-muted-foreground">University Name</p>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    Professional Certifications
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    2021-2023
                  </span>
                </div>
                <p className="text-muted-foreground">
                  AWS Solutions Architect, Google Cloud Professional, React
                  Advanced Patterns
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
