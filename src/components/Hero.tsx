import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated floating shapes - enhanced */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-400 bg-opacity-30 rounded-full z-0 shadow-2xl shadow-blue-300"
        animate={{ y: [0, 30, 0], x: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400 bg-opacity-20 rounded-full z-0 shadow-2xl shadow-indigo-300"
        animate={{ y: [0, -40, 0], x: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-400 bg-opacity-20 rounded-full z-0 shadow-2xl shadow-pink-200"
        animate={{ y: [0, 20, -20, 0], x: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        style={{ translate: '-50% -50%' }}
      />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-400 bg-clip-text text-transparent relative"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Rajeev Nayan
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 dark:bg-blue-800 -z-10 transform -skew-x-12"></span>
            </motion.span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Passionate about building scalable, dynamic, and user-friendly web applications. 
            Specializing in modern web technologies and clean code practices.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a
              href="https://github.com/imrajeevnayan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/imrajeevnayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/imrajeevnayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LeetCode Profile"
            >
              <Code2 size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/1ItYtHfse5BYgsyMF7Teboj5zF3tK3aei/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-20 animate-pulse"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <motion.img
              src="https://i.ibb.co/Y4stRcGk/1752515067277.jpg?fit=crop&w=800&q=80"
              alt="Rajeev Nayan"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-2xl ring-4 ring-white dark:ring-gray-800"
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;