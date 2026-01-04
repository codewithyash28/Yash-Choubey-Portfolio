
import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition duration-300">{link.label}</a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Yash Choubey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
