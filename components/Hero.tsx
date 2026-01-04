
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 z-10 opacity-50"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      <div className="z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Yash Choubey
        </h1>
        <p className="text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-8">
          AI Innovator & Full-Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition duration-300">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-purple-400 text-purple-300 font-semibold py-3 px-8 rounded-full hover:bg-purple-400 hover:text-white transform hover:scale-105 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
