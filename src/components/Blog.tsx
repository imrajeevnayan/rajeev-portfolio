
import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How I Structure My Day as a Developer',
    date: '2025-08-04',
    summary: 'A look into my daily workflow, productivity tips, and how I keep learning.',
    link: '#',
  },
  {
    title: 'Understanding Microservices Architecture',
    date: '2025-08-03',
    summary: 'A beginner-friendly Microservices Architecture.',
    link: '#',
  },
  {
    title: 'Why I Love TypeScript',
    date: '2025-08-02',
    summary: 'Sharing my experience and favorite features of TypeScript for modern web development.',
    link: '#',
  },
  {
    title: 'Getting Started with Spring Framework',
    date: '2025-08-01',
    summary: 'An introduction to the Spring Framework, its core features, and how to build your first Spring application.',
    link: '#',
  },
  {
    title: 'Mastering Spring Data JPA',
    date: '2025-07-31',
    summary: 'A comprehensive guide to Spring Data JPA, including repositories, queries, and best practices for database integration.',
    link: '#',
  },
  {
    title: 'Building Web Apps with Spring MVC',
    date: '2025-07-30',
    summary: 'Explore the fundamentals of Spring MVC, its architecture, and how to create robust web applications using controllers, views, and models.',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Daily Blog</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
              <a href={post.link} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Read More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
