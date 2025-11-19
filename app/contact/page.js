"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            I am always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mb-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Social Links Section */}
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-semibold mb-8">
              Other Ways To Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition group"
              >
                <Mail
                  className="text-primary group-hover:scale-110 transition"
                  size={24}
                />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    hello@example.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition group"
              >
                <Linkedin
                  className="text-primary group-hover:scale-110 transition"
                  size={24}
                />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition group"
              >
                <Github
                  className="text-primary group-hover:scale-110 transition"
                  size={24}
                />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my code</p>
                </div>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition group"
              >
                <Twitter
                  className="text-primary group-hover:scale-110 transition"
                  size={24}
                />
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-sm text-muted-foreground">Follow me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
