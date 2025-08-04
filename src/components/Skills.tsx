import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['Java', 'Python', 'C', 'SQL', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js'],
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6" />,
    skills: ['Spring', 'SpringBoot', 'MySQL', 'Oracle', 'Jdbc', 'MongoDB'],
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'GitHub', 'Problem Solving', 'Clean Code'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Always learning and expanding my skill set with new technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;