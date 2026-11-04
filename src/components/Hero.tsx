import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Clock,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowUpLeft,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-40 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-oqab-cream via-white to-[#F2E6E9]"
    >
      {/* دوائر موجية ذهبية ناعمة مستوحاة من تأثير "نَقْرَة" في الريفرنس */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
        <div className="w-[22rem] h-[22rem] rounded-full border border-[#D9B372]/25" />
        <div className="absolute w-[34rem] h-[34rem] rounded-full border border-[#D9B372]/20" />
        <div className="absolute w-[46rem] h-[46rem] rounded-full border border-[#D9B372]/15" />
        <div className="absolute w-[58rem] h-[58rem] rounded-full border border-oqab-maroon/5" />
      </div>

      {/* إضاءات خلفية تدمج العنابي مع الذهبي الدافئ */}
      <div className="absolute top-24 left-1/4 w-[28rem] h-[28rem] bg-[#D9B372]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-oqab-maroon/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* القسم الأيمن: النصوص والأزرار */}
          <div className="lg:col-span-6 text-right space-y-6">
            
            {/* شارة علوية */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-[#D9B372]/50 px-4 py-2 rounded-full shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-oqab-maroon" />
              <span className="text-xs sm:text-sm font-bold text-oqab-maroon tracking-wide">
                نَقْرَة للحلول الرقمية | NAQRAH
              </span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1113] leading-[1.22]"
            >
              بـ <span className="text-oqab-maroon">نَقْرَة</span> واحدة..{' '}
              <span className="text-oqab-maroon relative inline-block mt-1">
                نصنع نجاح عملك
                <svg
                  className="absolute -bottom-2 right-0 w-full h-2.5 text-[#D9B372]"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C60 2 140 2 198 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* شريط التخصصات المستخرج من الريفرنس */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs sm:text-sm font-bold text-oqab-maroon bg-oqab-maroon/5 border border-oqab-maroon/15 px-4 py-2.5 rounded-2xl inline-block"
            >
              تسويق رقمي • إنتاج محتوى • إدارة حملات إعلانية • تطوير مواقع ومتاجر إلكترونية
            </motion.p>

            {/* الوصف الفرعي */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-oqab-muted max-w-xl leading-relaxed"
            >
              في وكالة <span className="font-en font-bold text-oqab-maroon">NAQRAH</span> نجمع بين التخطيط الذكي والتنفيذ الاحترافي لنأخذ مشروعك من التأسيس إلى مضاعفة المبيعات والصدارة في سوقك، بهدوء وبدون أي تعقيد.
            </motion.p>

            {/* أزرار التفاعل (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 bg-oqab-maroon hover:bg-oqab-maroon-hover text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl border border-[#D9B372]/40 transition-all duration-300 group"
              >
                <span>استكشف خدماتنا</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-oqab-maroon hover:text-white text-oqab-maroon border-2 border-oqab-border hover:border-oqab-maroon px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-sm"
              >
                <span>تواصل مع فريقنا</span>
                <ArrowUpLeft className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* مميزات سريعة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-oqab-muted border-t border-oqab-border"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-oqab-maroon" />
                <span>موثوقية وأمان تام</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-oqab-maroon" />
                <span>سرعة في التنفيذ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-oqab-maroon" />
                <span>دعم فني متواصل</span>
              </div>
            </motion.div>
          </div>

          {/* القسم الأيسر: الصورتان الأساسيتان (وكالة نَقْرَة + نجاح عملك) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none space-y-5">
              
              {/* هيدر علوي يربط الصورتين بهوية نَقْرَة */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl p-4 border-2 border-[#D9B372]/40 shadow-soft flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-oqab-maroon text-white border border-[#D9B372] flex items-center justify-center font-bold text-xl shadow-sm">
                    ن
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-oqab-muted block">
                      بوابة الحلول المتكاملة
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-oqab-maroon">
                      نَقْرَة للحلول الرقمية
                    </h3>
                  </div>
                </div>

                <span className="font-en text-xs font-bold tracking-[0.22em] uppercase bg-oqab-cream text-oqab-maroon px-4 py-1.5 rounded-full border border-[#D9B372]/50">
                  NAQRAH
                </span>
              </motion.div>

              {/* شبكة الصورتين */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                
                {/* الصورة الأولى: وكالة نَقْرَة وفريق العمل */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="sm:col-span-7 group relative h-[320px] sm:h-[360px] rounded-[2rem] overflow-hidden border-2 border-[#D9B372]/40 shadow-xl cursor-pointer"
                  onClick={scrollToServices}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="فريق وكالة نقرة للحلول الرقمية"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0615]/95 via-oqab-maroon/45 to-transparent" />

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-oqab-maroon px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5" />
                    <span>وكالة نَقْرَة</span>
                  </div>

                  <div className="absolute bottom-5 right-5 left-5 text-white space-y-1.5">
                    <span className="text-xs text-[#D9B372] font-bold block">
                      فريق واحد يدير منظومتك
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold leading-snug">
                      تخطيط استراتيجي وتنفيذ رقمي بمعايير عالمية
                    </h4>
                    <p className="text-xs text-oqab-cream/85 leading-relaxed pt-1">
                      نبرمج المتاجر، نصور الريلز، وندير حملاتك باحترافية كاملة.
                    </p>
                  </div>
                </motion.div>

                {/* الصورة الثانية: نجاح عملك ومضاعفة المبيعات */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="sm:col-span-5 group relative h-[320px] sm:h-[360px] rounded-[2rem] overflow-hidden border-2 border-[#D9B372]/40 shadow-xl cursor-pointer"
                  onClick={scrollToServices}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="نجاح عملك ومضاعفة المبيعات"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oqab-maroon via-oqab-maroon/65 to-black/20" />

                  <div className="absolute top-4 right-4 bg-oqab-maroon text-white border border-[#D9B372]/50 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <TrendingUp className="w-3.5 h-3.5 text-[#D9B372]" />
                    <span>نجاح عملك</span>
                  </div>

                  <div className="absolute bottom-5 right-4 left-4 space-y-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 text-[#1E1113] shadow-lg border border-[#D9B372]/40">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-oqab-muted">
                          مؤشر نمو مشاريع عملائنا
                        </span>
                        <BarChart3 className="w-4 h-4 text-oqab-maroon" />
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-en text-2xl font-extrabold text-oqab-maroon">
                          +340%
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          مضاعفة العائد
                        </span>
                      </div>
                    </div>

                    <div className="text-white px-1">
                      <h4 className="text-base font-bold leading-snug">
                        نحول زوارك إلى عملاء دائمين
                      </h4>
                      <p className="text-[11px] text-oqab-cream/85 mt-0.5">
                        تسويق مبني على الأرقام والنتائج الحقيقية.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* شريط سفلي عنابي */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Link
                  to="/contact"
                  className="bg-oqab-maroon hover:bg-oqab-maroon-hover rounded-2xl p-4 sm:px-6 text-white border border-[#D9B372]/40 flex items-center justify-between transition-all shadow-lg group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9B372] animate-pulse" />
                    <div>
                      <p className="text-xs text-oqab-cream/80">
                        استشارة مجانية لنجاح مشروعك
                      </p>
                      <p className="text-sm font-bold">
                        اختر خدمتك الآن ودع فريق نَقْرَة يتولى الباقي
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white text-oqab-maroon flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}