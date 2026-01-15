
import React from 'react';
import { BarChart3, Database, Workflow, FileSpreadsheet } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      title: "Advanced Excel",
      description: "복잡한 수식, VBA 매크로, 피벗 테이블 및 데이터 자동화 대시보드 구축 능력을 보유하고 있습니다.",
      icon: <FileSpreadsheet className="text-blue-600" size={40} />,
      level: 100
    },
    {
      title: "Data Analysis",
      description: "방대한 양의 로우 데이터를 정제하고 유의미한 비즈니스 지표로 변환하는 통계적 역량이 뛰어납니다.",
      icon: <BarChart3 className="text-blue-600" size={40} />,
      level: 95
    },
    {
      title: "Work Automation",
      description: "반복적인 업무를 프로세스화하여 실수를 줄이고 소요 시간을 80% 이상 단축한 다수의 경험이 있습니다.",
      icon: <Workflow className="text-blue-600" size={40} />,
      level: 90
    },
    {
      title: "Information Management",
      description: "체계적인 아카이빙 시스템 구축으로 필요한 정보를 즉각적으로 활용할 수 있는 환경을 조성합니다.",
      icon: <Database className="text-blue-600" size={40} />,
      level: 92
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">보유 기술 및 도구</h2>
          <p className="text-slate-500">15년의 경험이 축적된 저만의 전문 기술 스택입니다.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="mb-6">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{skill.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {skill.description}
              </p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
