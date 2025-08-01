import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Let's connect and discuss how we can work together!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:imrajeevnayan@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  imrajeevnayan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+919155028525"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  +91 915 502 8525
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Bangalore, India</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Available for remote work & relocation</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/imrajeevnayan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/imrajeevnayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/imrajeevnayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Code2 size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none transition-all duration-300"
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
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;