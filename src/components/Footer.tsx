import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Rajeev Nayan. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/imrajeevnayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/imrajeevnayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/imrajeevnayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;