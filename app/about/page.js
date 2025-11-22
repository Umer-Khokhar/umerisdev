import React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Download,
  Coffee,
  Code,
  Rocket,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Coffee Consumed", value: "∞" },
  ];

  const interests = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Open Source",
      description:
        "Contributing to open source projects and building tools for developers",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Tech Innovation",
      description:
        "Exploring emerging technologies and staying ahead of industry trends",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Problem Solving",
      description: "Tackling complex challenges and finding elegant solutions",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Mentorship",
      description:
        "Helping junior developers grow and sharing knowledge with the community",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="containers nav-space padding-both">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=200&bold=true"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-slate-200"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">
                Hi, I'm John Doe
              </h1>
              <p className="text-xl text-slate-600 mb-4">
                Full Stack Developer & Tech Enthusiast
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-slate-600 mb-6">
                <a
                  href="mailto:john@example.com"
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">umerkhokhar1001@gmail.com</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Lahore, PK</span>
                </span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 border border-slate-200 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <section className="mb-12 pb-8 border-b border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I'm a passionate Full Stack Developer with over 2 years of
              experience building modern web applications. I specialize in
              creating scalable, performant solutions using cutting-edge
              technologies like React, Node.js, and cloud platforms.
            </p>
            <p>
              My journey in tech started with a curiosity for how things work
              under the hood. Since then, I've had the privilege of working with
              amazing teams at startups and established companies, contributing
              to products that impact thousands of users daily.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best
              practices. When I'm not coding, you'll find me exploring new
              technologies, contributing to open source projects, or sharing
              knowledge through technical writing and mentoring.
            </p>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="mb-12 pb-8 border-b border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            What I Do
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Frontend Development
              </h3>
              <p className="text-slate-600">
                Building responsive, accessible, and performant user interfaces
                with React, Next.js, and modern CSS frameworks. I focus on
                creating delightful user experiences that work seamlessly across
                all devices.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Backend Development
              </h3>
              <p className="text-slate-600">
                Designing and implementing robust server-side applications with
                Node.js, Express, and databases like PostgreSQL and MongoDB. I
                ensure scalability, security, and optimal performance.
              </p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-12 pb-8 border-b border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Interests & Passions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-slate-200 rounded-lg"
              >
                <div className=" p-2 bg-slate-100 rounded-lg text-slate-700">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 pb-8 border-b border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Education & Certifications
          </h2>

          <div className="space-y-6">
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Education
              </h3>
              <div className="border border-slate-200 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      B.S. Computer Science
                    </h4>
                    <p className="text-slate-600">University Name</p>
                  </div>
                  <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    2019
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Professional Certifications
              </h3>
              <div className="border border-slate-200 rounded-lg divide-y divide-slate-200">
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-900">
                      AWS Solutions Architect
                    </h4>
                    <p className="text-sm text-slate-600">
                      Amazon Web Services
                    </p>
                  </div>
                  <span className="text-sm text-slate-600">2021-2023</span>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-900">
                      Google Cloud Professional
                    </h4>
                    <p className="text-sm text-slate-600">
                      Google Cloud Platform
                    </p>
                  </div>
                  <span className="text-sm text-slate-600">2021-2023</span>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-900">
                      React Advanced Patterns
                    </h4>
                    <p className="text-sm text-slate-600">
                      Professional Development
                    </p>
                  </div>
                  <span className="text-sm text-slate-600">2021-2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 bg-slate-50 border border-slate-200 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Let's Work Together
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <a
            href="mailto:john@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  );
}
