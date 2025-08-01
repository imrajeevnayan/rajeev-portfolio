import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Motivated Full Stack Developer based in Bangalore's vibrant tech ecosystem. With expertise in Java, JavaScript, and SQL, I bring a fresh perspective to software development. Recently completed MCA with hands-on experience in building scalable applications. Quick learner, adaptable, and eager to contribute to dynamic, data-driven projects in Bangalore's innovative tech landscape.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p>Master of Computer Application (MCA)</p>
                  <p className="text-gray-600 dark:text-gray-400">Dr. Abdul Kalam Technical University (2022-2024)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <p>Hindi (Native), English (Professional),</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Core Competencies</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Ability to learn and adapt to new technologies</li>
                    <li>Clean code practices and development methodologies</li>
                    <li>Understanding of high-availability systems</li>
                    <li>Experience with modern cloud platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-6 scale-105 opacity-10"></div>
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Development</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bangalore, India</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h4 className="font-semibold">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web Development, Cloud Computing, AI/ML</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;