import React from 'react';
import { ShieldCheck, Microscope, Link as LinkIcon, Users, Star, Quote, ShoppingCart, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';

export function ShofuSocialProof() {
  const testimonials = [
    {
      name: 'BS. Dương Bảo Ngọc',
      role: 'Chuyên gia Phục hồi Thẩm mỹ',
      content: 'Chất lượng bề mặt và đặc tính quang học của Beautifil Injectable X thực sự khác biệt. Tính năng kháng khuẩn từ hạt S-PRG mang lại sự an tâm tuyệt đối khi tôi thực hiện các ca trám răng sau phức tạp.',
      avatar: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS.Ngo%CC%A3c.png'
    },
    {
      name: 'ThS.BS Trần Quang Khánh',
      role: 'Trainer MiCD Global Network',
      content: 'Hệ thống Cement dán của Shofu không chỉ đơn thuần là kết dính. Việc khóa kín viền ngà và giải phóng Fluoride liên tục đã giải quyết hoàn toàn vấn đề ê buốt sau phục hình gián tiếp mà nhiều bác sĩ e ngại.',
      avatar: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS%20Kha%CC%81nh.png'
    }
  ];

  return (
    <section id="social-proof" className="py-24 relative border-b border-slate-200 bg-slate-50 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#00ADEF]/10 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-6 border border-[#00ADEF]/20">
            <ShieldCheck className="w-4 h-4 text-[#00ADEF]" />
            <span className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-widest">Bảo Chứng Toàn Cầu</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-[1.4] max-w-3xl mx-auto uppercase">
            4 Trụ Cột Khoa Học <br className="hidden md:block" />Khẳng Định Vị Thế
          </h2>
          <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
            Hệ thống dữ liệu lâm sàng độc lập, nghiêm ngặt và minh bạch nhất từ các viện nghiên cứu hàng đầu thế giới minh chứng cho chất lượng của Shofu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Pillar 1 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C43838]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#C43838]/20">
                <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#C43838]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#C43838] bg-[#C43838]/5 px-3 py-1 rounded-full border border-[#C43838]/10 uppercase tracking-wider">Đại học Florida (JADA)</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Bảo chứng lâm sàng 13 năm
            </h3>
            
            <div className="space-y-2 lg:space-y-4 mt-auto">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-100/50 px-3 py-1.5 lg:px-4 lg:py-2 border-b border-slate-100 font-bold text-slate-800 text-xs">Kết quả sau 8 năm (JADA 2007)</div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">100<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Lưu giữ</div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">0<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Sâu răng</div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">0<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Nhạy cảm</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-between p-4">
                <div className="font-bold text-slate-800 text-sm">Tái khám 13 năm <span className="block text-[10px] font-normal text-slate-500 mt-0.5">Sạch sâu răng viền dán</span></div>
                <div className="text-3xl font-extrabold text-[#C43838]">97<span className="text-lg">%</span></div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ADEF]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#00ADEF]/20">
                <Microscope className="w-5 h-5 lg:w-6 lg:h-6 text-[#00ADEF]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00ADEF] bg-[#00ADEF]/5 px-3 py-1 rounded-full border border-[#00ADEF]/10 uppercase tracking-wider">ĐH Osaka (Nature 2018)</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Bằng chứng sinh học phân tử
            </h3>
            
            <div className="space-y-2 lg:space-y-3 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00ADEF]/10 flex items-center justify-center shrink-0 border border-[#00ADEF]/20">
                  <span className="font-bold text-[#00ADEF] text-sm">1</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">Ức chế Gen (pdh operon)</div>
                  <p className="text-xs text-slate-600">Cắt đứt nguồn năng lượng của vi khuẩn S. mutans.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00ADEF]/10 flex items-center justify-center shrink-0 border border-[#00ADEF]/20">
                  <span className="font-bold text-[#00ADEF] text-sm">2</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">Phá hủy Biofilm</div>
                  <p className="text-xs text-slate-600">Suy yếu bám dính kỵ nước, dễ dàng bị rửa trôi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C43838]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#C43838]/20">
                <LinkIcon className="w-5 h-5 lg:w-6 lg:h-6 text-[#C43838]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#C43838] bg-[#C43838]/5 px-3 py-1 rounded-full border border-[#C43838]/10 uppercase tracking-wider">Dental Advisor & SUNY</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Chứng cứ thép về lực dán
            </h3>
            
            <div className="space-y-2 lg:space-y-4 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex flex-col gap-2 sm:block sm:gap-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:mb-2 gap-1 sm:gap-0">
                  <div className="font-bold text-slate-800 text-sm leading-tight">BeautiLink SA <span className="text-[10px] font-normal text-slate-500 inline">(Trên Zirconia)</span></div>
                  <div className="text-[9px] font-bold text-[#C43838] uppercase tracking-wider bg-[#C43838]/10 px-2 py-0.5 rounded w-fit">5.000 Chu kỳ lão hóa</div>
                </div>
                <div className="flex items-end gap-1">
                  <div className="text-3xl font-extrabold text-[#C43838] leading-none">45-50</div>
                  <div className="text-xs font-bold text-slate-400 mb-0.5">MPa</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-100/50 px-3 py-1.5 lg:px-4 lg:py-2 border-b border-slate-100 font-bold text-slate-800 text-xs">BeautiBond (Không cần Etch)</div>
                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Men răng</div>
                    <div className="text-xl font-extrabold text-slate-800">26.4 <span className="text-xs font-normal text-slate-400">MPa</span></div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Ngà răng</div>
                    <div className="text-xl font-extrabold text-slate-800">27.8 <span className="text-xs font-normal text-slate-400">MPa</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ADEF]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#00ADEF]/20">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-[#00ADEF]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00ADEF] bg-[#00ADEF]/5 px-3 py-1 rounded-full border border-[#00ADEF]/10 uppercase tracking-wider">Khảo sát 350 Bác sĩ</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Thực tế lâm sàng
            </h3>
            
            <div className="flex flex-col gap-2 lg:gap-3 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-center gap-4 text-left">
                <div className="text-4xl font-extrabold text-[#00ADEF] shrink-0 w-[4.5rem]">75<span className="text-xl">%</span></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Thao tác tốt hơn</div>
                  <p className="font-body text-[10px] text-slate-500 leading-tight">Đặc tính thao tác, trộn và độ chảy lỏng vượt trội.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-center gap-4 text-left">
                <div className="text-4xl font-extrabold text-[#00ADEF] shrink-0 w-[4.5rem]">86<span className="text-xl">%</span></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Thong thả thao tác</div>
                  <p className="font-body text-[10px] text-slate-500 leading-tight">Thời gian làm việc (Working time) lý tưởng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button After Pillars */}
        <div className="mt-8 mb-20 flex justify-center">
          <button className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
            <ShoppingCart className="w-5 h-5" />
            <span>Xem ưu đãi và đặt hàng</span>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Testimonials Quotes */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 sm:p-10 relative shadow-sm border border-slate-200">
              <Quote className="absolute top-8 right-8 w-10 h-10 lg:w-12 lg:h-12 text-slate-100" />
              <div className="flex items-center gap-1 mb-4 lg:mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-[#00ADEF] text-[#00ADEF]" />
                ))}
              </div>
              <p className="font-body text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "{test.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={test.avatar} alt={test.name} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover bg-white p-0.5 border border-slate-200" />
                <div>
                  <div className="font-heading font-bold text-slate-900">{test.name}</div>
                  <div className="font-mono text-[10px] uppercase text-[#00ADEF]">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
            <ShoppingCart className="w-5 h-5" />
            <span>Xem ưu đãi và đặt hàng</span>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}

