import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Activités', href: '#activities' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ADN</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ADN/CN</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Centre-Nord</p>
            </div>
          </div>
          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div
 className="md:hidden fixed top-16 right-4 bg-white shadow-lg rounded-lg animate-fade-in w-48"       >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
className="block w-full text-left px-6 py-3 text-gray-900 text-lg font-medium hover:bg-green-500 hover:text-white transition-colors duration-200"              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;