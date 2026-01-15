
import React from 'react';
import { Mail, Phone, ExternalLink, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tight">함께 가치를<br />만들어보세요</h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                현재 새로운 프로젝트나 비즈니스 협업 기회를 찾고 있습니다.<br />
                궁금한 점이 있으시다면 언제든 편하게 연락 부탁드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium">이메일</p>
                    <p className="text-xl font-bold">[이메일 미입력]</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium">전화번호</p>
                    <p className="text-xl font-bold">[전화번호 미입력]</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium">SNS / 기타</p>
                    <p className="text-xl font-bold">[SNS 링크 미입력]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">성함</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">이메일</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">메시지</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="협업 제안이나 문의 내용을 적어주세요."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center space-x-2">
                  <MessageSquare size={20} />
                  <span>메시지 보내기</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
