
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img 
                src="https://picsum.photos/seed/duseong/600/800" 
                alt="Oh Du-seong" 
                className="relative rounded-2xl w-full h-[500px] object-cover -rotate-3 group-hover:rotate-0 transition-transform shadow-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              안녕하세요,<br />
              <span className="text-blue-600 underline underline-offset-8 decoration-4">오두성</span>입니다.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              저는 지난 15년 동안 데이터 관리와 효율적인 비즈니스 솔루션을 탐구해온 전문가입니다. 
              단순히 정보를 정리하는 것에 그치지 않고, 데이터를 통해 인사이트를 발견하고 조직의 생산성을 극대화하는 일을 즐깁니다.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-600 font-bold mb-1">경력 사항</h4>
                <p className="text-slate-900 font-semibold">15년차 데이터 전문가</p>
              </div>
              <div>
                <h4 className="text-blue-600 font-bold mb-1">주요 키워드</h4>
                <p className="text-slate-900 font-semibold">오두성, 엑셀, 효율성</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-blue-600 font-bold mb-1">핵심 가치</h4>
                <p className="text-slate-900 font-semibold italic">"정확한 데이터는 올바른 의사결정의 시작입니다."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
