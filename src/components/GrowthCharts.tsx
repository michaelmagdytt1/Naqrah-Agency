import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  BarChart3,
  PieChart,
  ArrowUpLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  Video,
  ShoppingBag,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const monthlyGrowth = [
  { month: 'الشهر 1', before: 25, after: 45, label: '+80%' },
  { month: 'الشهر 2', before: 30, after: 68, label: '+125%' },
  { month: 'الشهر 3', before: 28, after: 95, label: '+210%' },
  { month: 'الشهر 4', before: 35, after: 130, label: '+270%' },
  { month: 'الشهر 5', before: 32, after: 165, label: '+315%' },
  { month: 'الشهر 6', before: 38, after: 200, label: '+380%' },
];

const visualStories = [
  {
    badge: 'بيئة عمل احترافية',
    title: 'نصنع المحتوى، نبرمج الأنظمة، ونقود حملاتك من مكان واحد',
    description:
      'لا نكتفي بتقديم خدمات منفصلة، بل نبني لمشروعك ماكينة نمو متكاملة في وكالة نَقْرَة؛ تبدأ من تصوير منتجاتك وخدماتك بأحدث المعدات، وتمر بتصميم متجرك الإلكتروني السريع، وتكتمل بحملات إعلانية تستهدف العميل الجاهز للشراء.',
    highlights: [
      'استوديوهات ومعدات تصوير سينمائية لإنتاج الريلز',
      'فريق برمجي متخصص في المتاجر وأنظمة الـ ERP',
      'محللون رقميون لمراقبة أداء الإعلانات لحظة بلحظة',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    floatingStat: '+340% متوسط نمو العائد',
    icon: ShoppingBag,
  },
  {
    badge: 'إدارة ذكية وتقارير شفافة',
    title: 'قرارات تسويقية وبرمجية مبنية على الأرقام لا التخمين',
    description:
      'في وكالة نَقْرَة، نربط كل خطوة بمؤشرات قياس أداء واضحة (KPIs). ستتمكن دائماً من رؤية تطور مبيعاتك، تكلفة اكتساب العميل، وكفاءة تشغيل شركتك عبر لوحات تحكم وتقارير دورية مبسطة.',
    highlights: [
      'لوحات تحكم تفاعلية لمتابعة المبيعات والمخزون',
      'تحسين مستمر لمعدل التحويل (CRO) داخل موقعك',
      'تقليل الهدر الإعلاني والتركيز على المنصات الأكثر ربحية',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    floatingStat: '98.5% دقة التقارير والأداء',
    icon: Layers,
  },
];

export default function GrowthCharts() {
  const [activeBar, setActiveBar] = useState<number | null>(5);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#FAF5EE] to-white relative overflow-hidden">
      {/* إضاءات خلفية ذهبية وعنابية ناعمة */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-oqab-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* الجزء الأول: لوحة الشارتات والتحليلات التفاعلية */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B372]/25 via-[#F3D79B]/45 to-[#D9B372]/25 border-2 border-[#D9B372] px-5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(217,179,114,0.3)]"
            >
              <BarChart3 className="w-4 h-4 text-oqab-maroon" />
              <span className="text-xs sm:text-sm font-extrabold text-oqab-maroon">
                لغة الأرقام والنتائج
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1113]"
            >
              كيف نضاعف نتائج مشروعك في{' '}
              <span className="text-oqab-maroon relative inline-block">
                نَقْرَة؟
                <span className="absolute -bottom-2 right-0 left-0 h-1.5 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-oqab-muted text-base sm:text-lg leading-relaxed pt-2"
            >
              نعتمد على استراتيجيات نمو مدروسة ترفع من كفاءة إعلاناتك وتزيد من معدل تحويل الزوار إلى عملاء دائمين شهرًا بعد شهر.
            </motion.p>
          </div>

          {/* شبكة الشارتات */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* الشارت الرئيسي (7 أعمدة): مقارنة نمو المبيعات خلال 6 أشهر */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative bg-white rounded-[2.5rem] p-7 sm:p-9 border-2 border-[#D9B372] shadow-[0_12px_35px_-10px_rgba(217,179,114,0.35)] flex flex-col justify-between overflow-hidden"
            >
              {/* شريط ذهبي لامع أعلى كارت الشارت */}
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2">
                <div>
                  <span className="text-xs font-extrabold text-oqab-maroon bg-gradient-to-r from-[#FAF3E6] to-[#F5E4C3] px-4 py-1.5 rounded-full border border-[#D9B372] shadow-sm inline-block">
                    مؤشر نمو المبيعات والعائد (ROAS)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1113] mt-3">
                    مقارنة الأداء قبل وبعد تدخل فريق نَقْرَة
                  </h3>
                </div>

                {/* مفتاح الرسم البياني بلمسة ذهبية */}
                <div className="flex items-center gap-4 text-xs font-bold bg-[#FAF5EE] px-4 py-2 rounded-full border border-[#D9B372]/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-oqab-maroon ring-2 ring-[#D9B372] inline-block" />
                    <span className="text-[#1E1113]">مع وكالة نَقْرَة</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#E5D3B3] border border-[#C69C54] inline-block" />
                    <span className="text-oqab-muted">الأداء التقليدي</span>
                  </div>
                </div>
              </div>

              {/* أعمدة الشارت التفاعلية */}
              <div className="grid grid-cols-6 gap-3 sm:gap-5 items-end h-64 pt-8 pb-3 px-2 border-b-2 border-[#D9B372]/50">
                {monthlyGrowth.map((item, idx) => {
                  const isActive = activeBar === idx;
                  return (
                    <div
                      key={item.month}
                      onMouseEnter={() => setActiveBar(idx)}
                      className="flex flex-col items-center h-full justify-end group cursor-pointer relative"
                    >
                      {/* Badge النسبة باللون الذهبي عند الوقوف على العمود */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? -6 : 5,
                        }}
                        className="absolute -top-7 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] text-oqab-maroon border border-oqab-maroon/20 font-en text-xs font-extrabold px-3 py-0.5 rounded-full shadow-[0_4px_12px_rgba(217,179,114,0.5)] whitespace-nowrap z-20"
                      >
                        {item.label}
                      </motion.div>

                      {/* زوج الأعمدة (قبل وبعد) */}
                      <div className="w-full flex items-end justify-center gap-1.5 h-full">
                        {/* عمود الأداء التقليدي بدرجة ذهبي رملي فاتح */}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.before}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: idx * 0.08 }}
                          className="w-3 sm:w-4 bg-gradient-to-t from-[#E5D3B3] to-[#F3E5AB] border border-[#D9B372] rounded-t-lg"
                        />

                        {/* عمود الأداء مع نَقْرَة مع قمة وإطار ذهبي */}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.after / 200) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: idx * 0.1 }}
                          className={`w-5 sm:w-7 rounded-t-xl border-t-4 border-[#F3D79B] transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-t from-oqab-maroon-dark via-oqab-maroon to-[#8A1538] shadow-[0_0_20px_rgba(217,179,114,0.6)] ring-2 ring-[#D9B372]'
                              : 'bg-oqab-maroon/90 group-hover:bg-oqab-maroon'
                          }`}
                        />
                      </div>

                      <span
                        className={`text-[11px] sm:text-xs mt-3 font-extrabold transition-colors ${
                          isActive
                            ? 'text-oqab-maroon bg-[#FAF3E6] px-2 py-0.5 rounded-md border border-[#D9B372]'
                            : 'text-oqab-muted'
                        }`}
                      >
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* ملخص أسفل الشارت */}
              <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
                <p className="text-oqab-muted font-medium">
                  * البيانات تمثل متوسط النمو الفعلي للمتاجر والشركات المدارة بواسطة وكالة نَقْرَة.
                </p>
                <span className="font-extrabold text-oqab-maroon bg-gradient-to-r from-[#D9B372]/30 to-[#F3D79B]/50 border border-[#D9B372] px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-[#9E7329]" />
                  <span>نمو مستدام ومتصاعد</span>
                </span>
              </div>
            </motion.div>

            {/* العمود الجانبي للشارتات الدائرية والمنحنيات (5 أعمدة) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              
              {/* كارت الشارت الدائري (Radial Progress) بلمسات ذهبية مكثفة */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark text-white rounded-[2.5rem] p-7 sm:p-8 shadow-[0_15px_35px_rgba(94,11,34,0.25)] border-2 border-[#D9B372] relative overflow-hidden flex items-center justify-between gap-6"
              >
                {/* شريط ذهبي علوي */}
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-transparent via-[#F3D79B] to-transparent" />
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#D9B372]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2.5 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-oqab-maroon bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] px-3.5 py-1 rounded-full shadow-sm">
                    <PieChart className="w-3.5 h-3.5" />
                    <span>كفاءة الاستهداف الإعلاني</span>
                  </span>
                  <h4 className="text-xl font-bold text-[#F3D79B]">
                    دقة الوصول للعميل المهتم
                  </h4>
                  <p className="text-xs sm:text-sm text-oqab-cream/90 leading-relaxed">
                    نحلل سلوك المستهلك لتوجيه ميزانيتك الإعلانية نحو الشريحة الأكثر استعداداً للشراء.
                  </p>
                </div>

                {/* الدائرة المرسومة بـ SVG مع تدرج ذهبي لامع */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="goldCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F3D79B" />
                        <stop offset="50%" stopColor="#D9B372" />
                        <stop offset="100%" stopColor="#C69C54" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(217,179,114,0.2)"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#goldCircleGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * (1 - 0.94) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </svg>
                  <span className="absolute font-en text-2xl font-extrabold text-[#F3D79B] drop-shadow">
                    94%
                  </span>
                </div>
              </motion.div>

              {/* كارت منحنى تفاعل الريلز والسوشيال ميديا (SVG Area Chart) بدمج الذهبي والعنابي */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-[2.5rem] p-7 sm:p-8 border-2 border-[#D9B372] shadow-[0_12px_30px_-10px_rgba(217,179,114,0.3)] transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* شريط ذهبي علوي */}
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

                <div className="flex items-center justify-between mb-4 pt-1">
                  <div>
                    <span className="text-xs font-extrabold text-[#9E7329] block">
                      التفاعل والانتشار المرئي
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1E1113] mt-0.5">
                      تأثير إنتاج الريلز في نَقْرَة
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF3E6] via-[#F5E4C3] to-[#E9CB94] text-oqab-maroon border-2 border-[#D9B372] flex items-center justify-center shadow-sm">
                    <Video className="w-5 h-5" />
                  </div>
                </div>

                {/* منحنى SVG مزدوج باللون الذهبي والعنابي */}
                <div className="h-28 w-full relative my-2">
                  <svg
                    viewBox="0 0 400 100"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="naqrahGoldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D9B372" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#5E0B22" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#D9B372" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,85 Q60,80 110,55 T220,45 T320,20 T400,8 L400,100 L0,100 Z"
                      fill="url(#naqrahGoldGrad)"
                    />

                    {/* خط ذهبي موازي يبرز فخامة الشارت */}
                    <motion.path
                      d="M0,92 Q60,86 110,63 T220,53 T320,28 T400,16"
                      fill="none"
                      stroke="#D9B372"
                      strokeWidth="3"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />

                    {/* المنحنى الرئيسي */}
                    <motion.path
                      d="M0,85 Q60,80 110,55 T220,45 T320,20 T400,8"
                      fill="none"
                      stroke="#5E0B22"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: 'easeInOut' }}
                    />

                    {/* نقاط ذهبية مضيئة على المنحنى */}
                    <circle cx="110" cy="55" r="5" fill="#F3D79B" stroke="#5E0B22" strokeWidth="2.5" />
                    <circle cx="220" cy="45" r="5" fill="#F3D79B" stroke="#5E0B22" strokeWidth="2.5" />
                    <circle cx="320" cy="20" r="5" fill="#F3D79B" stroke="#5E0B22" strokeWidth="2.5" />
                    <circle cx="400" cy="8" r="6" fill="#D9B372" stroke="#5E0B22" strokeWidth="2.5" />
                  </svg>
                </div>

                <div className="flex items-center justify-between pt-3 border-t-2 border-[#D9B372]/40 text-xs font-bold">
                  <span className="text-oqab-muted">معدل الاحتفاظ بالمشاهدين</span>
                  <span className="bg-gradient-to-r from-[#D9B372] to-[#F3D79B] text-oqab-maroon px-3 py-1 rounded-full font-en text-xs font-extrabold shadow-sm">
                    +4.2x أضعاف
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* الجزء الثاني: صور حية ومحتوى تعريفي ببيئة العمل والحلول مع إطارات ذهبية */}
        <div className="space-y-20">
          {visualStories.map((story, idx) => {
            const Icon = story.icon;
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* قسم الصورة مع الإطار الذهبي المزدوج والـ Badge العائم */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#D9B372] shadow-[0_15px_40px_rgba(217,179,114,0.3)] group">
                    {/* شريط ذهبي علوي فوق الصورة */}
                    <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372] z-20" />

                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* طبقة تدرج عنابي وذهبي فوق الصورة */}
                    <div className="absolute inset-0 bg-gradient-to-t from-oqab-maroon/85 via-oqab-maroon/20 to-transparent" />

                    {/* كارت إحصائية عائم داخل الصورة بإطار وأيقونة ذهبية */}
                    <div className="absolute bottom-6 right-6 left-6 sm:left-auto bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border-2 border-[#D9B372] flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon border border-oqab-maroon/20 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold text-[#9E7329] block">
                          نتائج موثقة في نَقْرَة
                        </span>
                        <span className="text-sm font-extrabold text-oqab-maroon">
                          {story.floatingStat}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* خلفية ديكورية ذهبية مائلة وراء الصورة */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D9B372]/35 via-[#F3D79B]/20 to-oqab-maroon/10 border border-[#D9B372]/60 rounded-[2.8rem] -z-10 transform -rotate-2" />
                </div>

                {/* قسم النصوص والشرح */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FAF3E6] to-[#F5E4C3] border-2 border-[#D9B372] px-4 py-1.5 rounded-full shadow-sm">
                    <Sparkles className="w-4 h-4 text-oqab-maroon" />
                    <span className="text-xs font-extrabold text-oqab-maroon">
                      {story.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1113] leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-oqab-muted text-base leading-relaxed">
                    {story.description}
                  </p>

                  {/* نقاط التميز بإطار ذهبي وتفاعل Hover */}
                  <div className="space-y-3 pt-2">
                    {story.highlights.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3.5 bg-gradient-to-l from-[#FAF5EE] to-white hover:from-oqab-maroon hover:to-[#6E0E29] group/item p-4 rounded-2xl border-2 border-[#D9B372]/70 hover:border-[#D9B372] shadow-sm transition-all duration-300"
                      >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shrink-0 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-bold text-[#1E1113] group-hover/item:text-[#F3D79B] transition-colors">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* زر التفاعل الذهبي والعنابي */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] hover:brightness-105 text-oqab-maroon border-2 border-oqab-maroon/20 px-8 py-4 rounded-2xl font-extrabold text-sm shadow-[0_8px_25px_rgba(217,179,114,0.45)] transition-all"
                    >
                      <span>ابدأ مشروعك مع نَقْرَة</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}