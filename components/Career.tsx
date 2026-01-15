
import React from 'react';

const Career: React.FC = () => {
  const history = [
    {
      company: "A 정보시스템",
      role: "데이터 매니지먼트 팀장",
      period: "2018.04 - 현재",
      tasks: ["전사 데이터 전략 수립", "실무 최적화 솔루션 개발", "팀 매니징"]
    },
    {
      company: "B 컨설팅 그룹",
      role: "선임 연구원",
      period: "2012.01 - 2018.03",
      tasks: ["비즈니스 데이터 분석 리포트", "엑셀 기반 대시보드 제작", "클라이언트 교육"]
    },
    {
      company: "C 산업 코퍼레이션",
      role: "데이터 분석가",
      period: "2009.03 - 2011.12",
      tasks: ["매출 데이터 정제 및 관리", "재고 관리 자동화 시스템 보조"]
    }
  ];

  return (
    <section id="career" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">경력 및 이력</h2>
        
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-100 ml-4 md:ml-0 md:left-1/2">
          {history.map((item, idx) => (
            <div key={idx} className="mb-12 relative group">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
              
              <div className={`md:w-[calc(50%-40px)] p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all ${
                idx % 2 === 0 ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'
              }`}>
                <span className="text-blue-600 font-bold text-sm block mb-1">{item.period}</span>
                <h3 className="text-2xl font-black text-slate-900 mb-1">{item.company}</h3>
                <p className="text-slate-500 font-medium mb-4">{item.role}</p>
                <ul className={`space-y-1 text-slate-600 text-sm ${idx % 2 === 0 ? '' : 'flex flex-col items-end'}`}>
                  {item.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
