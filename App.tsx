
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Activity from './components/Activity';
import Career from './components/Career';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'activity', 'career', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Activity />
        <Career />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">오두성</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            15년의 경험과 전문성으로 최상의 결과를 만들어냅니다.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Oh Du-seong. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
