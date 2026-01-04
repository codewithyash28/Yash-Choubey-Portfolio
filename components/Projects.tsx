
import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    title: 'Yara - Your AI Assistant',
    description: 'An intelligent AI assistant designed to streamline daily tasks, manage schedules, and provide quick, context-aware information. Built with advanced NLP models.',
    tags: ['AI', 'Python', 'NLP', 'React', 'FastAPI'],
    imageUrl: 'https://picsum.photos/seed/yara/600/400',
    link: 'https://github.com/codewithyash28',
  },
  {
    title: 'Qubit AI',
    description: 'A platform for building and deploying machine learning models with a user-friendly interface. Simplifies the MLOps pipeline from data ingestion to model serving.',
    tags: ['Machine Learning', 'Web', 'Docker', 'Kubernetes'],
    imageUrl: 'https://picsum.photos/seed/qubit/600/400',
    link: 'https://github.com/codewithyash28',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills. Designed with a modern, vibrant aesthetic using React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    link: 'https://github.com/codewithyash28',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'An analytics dashboard for an e-commerce platform, providing insights into sales, customer behavior, and inventory management.',
    tags: ['Data Visualization', 'React', 'D3.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    link: 'https://github.com/codewithyash28',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
