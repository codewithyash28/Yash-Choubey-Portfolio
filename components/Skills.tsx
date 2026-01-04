
import React from 'react';
import type { Skill } from '../types';
import { 
  CodeBracketIcon, ServerStackIcon, CpuChipIcon, PaintBrushIcon, CircleStackIcon,CommandLineIcon
} from './icons/TechIcons';


const skills: Skill[] = [
  { name: 'React', icon: CodeBracketIcon },
  { name: 'TypeScript', icon: CodeBracketIcon },
  { name: 'Node.js', icon: ServerStackIcon },
  { name: 'Python', icon: CodeBracketIcon },
  { name: 'TensorFlow', icon: CpuChipIcon },
  { name: 'PyTorch', icon: CpuChipIcon },
  { name: 'SQL', icon: CircleStackIcon },
  { name: 'NoSQL', icon: CircleStackIcon },
  { name: 'Docker', icon: ServerStackIcon },
  { name: 'Git', icon: CommandLineIcon },
  { name: 'Figma', icon: PaintBrushIcon },
  { name: 'Tailwind CSS', icon: PaintBrushIcon },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="group bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300 cursor-default">
        <skill.icon className="w-12 h-12 mb-4 text-purple-400 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:-translate-y-1" />
        <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-pink-200">{skill.name}</h3>
    </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
