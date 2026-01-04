
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/seed/yash/400/400" 
              alt="Yash Choubey" 
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 mx-auto object-cover border-4 border-purple-500"
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 text-center md:text-left">
            <p className="mb-4">
              Hello! I'm Yash, a passionate developer with a deep interest in Artificial Intelligence and modern web technologies. My journey in tech is driven by a curiosity to solve complex problems and build innovative, user-centric solutions.
            </p>
            <p className="mb-4">
              I specialize in creating intelligent applications that bridge the gap between data and user experience. From developing AI-powered platforms to crafting responsive and beautiful websites, I love bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
