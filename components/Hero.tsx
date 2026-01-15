
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 bg-blue-50 rounded-full">
          PROFESSIONAL PORTFOLIO
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
          변하지 않는 가치,<br />
          <span className="text-blue-600">오두성</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          15년의 데이터 전문성과 기술력으로<br className="hidden md:block" />
          비즈니스의 가치를 증명하는 포트폴리오입니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#about" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg shadow-blue-200">
            더 알아보기
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
            연락하기
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 transition-colors">
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
