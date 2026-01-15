
import React from 'react';
import { CheckCircle2, Trophy, Target, Award } from 'lucide-react';

const Activity: React.FC = () => {
  const activities = [
    {
      title: "전사 데이터 자동화 시스템 구축",
      period: "2018 - 2022",
      description: "수동으로 진행되던 월간 리포팅 업무를 엑셀 자동화 툴로 개발하여 연간 1,200시간의 공수 절감."
    },
    {
      title: "엑셀 실무 마스터 클래스 운영",
      period: "2015 - 현재",
      description: "사내외 100회 이상의 오프라인 교육 및 멘토링을 통해 500여 명의 데이터 리터러시 역량 강화."
    },
    {
      title: "데이터 품질 개선 프로젝트 리딩",
      period: "2023",
      description: "파편화된 전사 데이터 소스를 통합하고 데이터 정합성을 99.9%까지 끌어올리는 성과 달성."
    }
  ];

  return (
    <section id="activity" className="section-padding bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">활동 및 성과</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              단순한 근무가 아닌, 실질적인 비즈니스 성장을 이끌어낸 발자취입니다. 
              수치로 증명되는 결과와 효율성을 지향합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Trophy className="text-blue-400" size={24} />
                <span className="font-semibold text-lg">15년차 이상의 실무 경력</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-blue-400" size={24} />
                <span className="font-semibold text-lg">최적화 솔루션 50+건 구축</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 grid gap-6">
            {activities.map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
                  <span className="text-xs font-mono bg-slate-700 px-3 py-1 rounded-full text-slate-300">{item.period}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
