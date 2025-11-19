import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
