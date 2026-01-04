import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only once when the element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the card is visible
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-2 text-purple-400 hover:text-pink-500 font-semibold transition duration-300"
        >
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
