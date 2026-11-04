import { useState, type ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Video,
  Megaphone,
  Layers,
  Share2,
  Camera,
  ArrowLeft,
  X,
  CheckCircle2,
  Sparkles,
  Plus,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: number;
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: ElementType;
  features: string[];
  connectsTo: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    number: '01',
    tag: 'تطوير وبرمجة',
    title: 'تصميم المواقع والمتاجر',
    description:
      'نبرمج ونصمم مواقع إلكترونية ومتاجر احترافية وسريعة، تضمن تجربة مستخدم ممتازة وتحول زوارك إلى عملاء دائمين بسهولة تامة.',
    icon: Globe,
    connectsTo: 'يرتبط مع الهوية والحملات',
    features: [
      'تصميم عصري متجاوب مع جميع الشاشات والجوالات',
      'سرعة تصفح فائقة وتهيئة لمحركات البحث (SEO)',
      'ربط بوابات الدفع الإلكتروني وشركات الشحن بسهولة',
    ],
  },
  {
    id: 2,
    number: '02',
    tag: 'إنتاج مرئي',
    title: 'إنتاج وتصوير الريلز',
    description:
      'نصور وننتج فيديوهات قصيرة بموديلز واسكريبت احترافي يروج لخدماتك عن بعد، دون الحاجة لتواجدك أو إهدار وقتك في الإدارة.',
    icon: Video,
    connectsTo: 'يدعم السوشيال والإعلانات',
    features: [
      'كتابة اسكريبت تسويقي يجذب الانتباه من أول ثانية',
      'توفير موديلز محترفين وتصوير بجودة سينمائية',
      'مونتاج ديناميكي يتماشى مع ترندات المنصات',
    ],
  },
  {
    id: 3,
    number: '03',
    tag: 'تسويق رقمي',
    title: 'إدارة الحملات الإعلانية',
    description:
      'نطلق حملات إعلانية ممولة ومدروسة بدقة على مختلف المنصات، للوصول إلى جمهورك المستهدف وتحقيق أعلى عائد على الاستثمار.',
    icon: Megaphone,
    connectsTo: 'يضاعف مبيعات متجرك',
    features: [
      'استهداف دقيق للجمهور المهتم بخدماتك ومنتجاتك',
      'تحليل مستمر للأداء وتقليل تكلفة النقرة والتحويل',
      'تقارير دورية شفافة توضح المبيعات والنتائج',
    ],
  },
  {
    id: 4,
    number: '04',
    tag: 'حلول الأعمال',
    title: 'أنظمة ERP للشركات',
    description:
      'نؤسس أنظمة متكاملة لتنظيم الموارد، الحسابات، والمخازن، ومهمات الموظفين، لضمان إدارة شركتك أو مصنعك باحترافية وسلاسة مطلقة.',
    icon: Layers,
    connectsTo: 'ينظم عملياتك الداخلية',
    features: [
      'إدارة شاملة للحسابات، الفواتير، والمخازن في مكان واحد',
      'متابعة أداء ومهمات الموظفين وصلاحيات كل قسم',
      'لوحة تحكم ذكية وتقارير لحظية لاتخاذ القرارات',
    ],
  },
  {
    id: 5,
    number: '05',
    tag: 'إدارة وهوية',
    title: 'إدارة السوشيال ميديا والتصاميم',
    description:
      'ندير صفحاتك على السوشيال ميديا بالكامل، مع تصميمات جذابة وعصرية تعكس هوية علامتك التجارية وتبني الثقة مع عملائك.',
    icon: Share2,
    connectsTo: 'يبني حضورك الرقمي',
    features: [
      'خطة محتوى شهرية مدروسة تناسب طبيعة جمهورك',
      'تصميمات سوشيال ميديا إبداعية تعزز هوية البراند',
      'نشر منتظم وتفاعل احترافي يبني ولاء العملاء',
    ],
  },
  {
    id: 6,
    number: '06',
    tag: 'تصوير احترافي',
    title: 'التغطية والتصوير الميداني',
    description:
      'نقدم خدمة التصوير الميداني الاحترافي للأنشطة التجارية، لتوثيق أعمالك وعرضها بأفضل جودة لجمهورك.',
    icon: Camera,
    connectsTo: 'يوثق جودة أعمالك',
    features: [
      'تصوير ميداني لمقرات الشركات، المصانع، والفعاليات',
      'معدات تصوير وإضاءة وصوتيات على أعلى مستوى',
      'إبراز التفاصيل الجمالية والاحترافية لنشاطك التجاري',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-[#FAF5EE] via-[#F5ECEE] to-[#FAF5EE] relative overflow-hidden border-y-2 border-[#D9B372]"
    >
      {/* شريط ذهبي لامع أعلى وأسفل القسم */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D9B372] to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D9B372] to-transparent opacity-80 pointer-events-none" />

      {/* إضاءات ذهبية دافئة في الخلفية */}
      <div className="absolute top-16 right-10 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-10 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان القسم بلمسات ذهبية بارزة */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B372]/25 via-[#F3D79B]/40 to-[#D9B372]/25 border-2 border-[#D9B372] px-5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(217,179,114,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-oqab-maroon" />
            <span className="text-xs sm:text-sm font-extrabold text-oqab-maroon">
              منظومة خدمات مترابطة
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1113]"
          >
            خدماتنا في{' '}
            <span className="text-oqab-maroon relative inline-block">
              وكالة نَقْرَة
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
            كل خدمة نصممها في نَقْرَة تتكامل مع الأخرى في مسار هندسي واحد؛ لنضمن لمشروعك نمواً مترابطاً من التأسيس وحتى مضاعفة المبيعات.
          </motion.p>
        </div>

        {/* الشبكة الهندسية المترابطة (Connected Staggered Matrix) */}
        <div className="relative pb-12">
          
          {/* خطوط الربط القطرية والهندسية باللون الذهبي والعنابي للشاشات الكبيرة */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* مسار قطري ذهبي يربط يمين فوق (01) مع نص تحت (05) وشمال فوق (03) */}
            <path
              d="M 1000 180 C 800 180, 800 560, 600 560 C 400 560, 400 180, 200 180"
              stroke="#D9B372"
              strokeOpacity="0.75"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
            {/* مسار عكسي ذهبي يربط يمين تحت (04) مع نص فوق (02) وشمال تحت (06) */}
            <path
              d="M 1000 540 C 800 540, 800 220, 600 220 C 400 220, 400 540, 200 540"
              stroke="#D9B372"
              strokeOpacity="0.65"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>

          {/* عُقد الربط البصرية الذهبية (Golden Connector Nodes) بين الكروت على الديسكتوب */}
          <div className="hidden lg:flex absolute top-[46%] right-[32.1%] z-20 w-10 h-10 rounded-full bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] border-2 border-white text-oqab-maroon items-center justify-center shadow-[0_0_20px_rgba(217,179,114,0.7)] pointer-events-none">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="hidden lg:flex absolute top-[46%] left-[32.1%] z-20 w-10 h-10 rounded-full bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] border-2 border-white text-oqab-maroon items-center justify-center shadow-[0_0_20px_rgba(217,179,114,0.7)] pointer-events-none">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* الكروت الستة مع إزاحة العمود الأوسط لخلق الترابط القطري */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 relative z-10">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              const isMiddleColumn = index === 1 || index === 4;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => setSelectedService(service)}
                  className={`group relative bg-white hover:bg-gradient-to-br hover:from-oqab-maroon hover:via-[#6E0E29] hover:to-oqab-maroon-dark rounded-[2rem] p-8 border-2 border-[#D9B372] shadow-[0_10px_30px_-10px_rgba(217,179,114,0.28)] hover:shadow-[0_20px_45px_-10px_rgba(217,179,114,0.5)] transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isMiddleColumn ? 'lg:translate-y-12' : ''
                  } hover:!-translate-y-2`}
                >
                  {/* شريط ذهبي علوي ثابت ومضيء في كل كارت */}
                  <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

                  {/* نقاط اتصال ذهبية في زوايا الكارت */}
                  <span className="absolute top-5 left-5 w-3 h-3 rounded-full bg-gradient-to-br from-[#D9B372] to-[#F3D79B] shadow-[0_0_10px_#D9B372]" />
                  <span className="absolute bottom-5 right-5 w-3 h-3 rounded-full bg-gradient-to-br from-[#D9B372] to-[#F3D79B] shadow-[0_0_10px_#D9B372]" />

                  {/* إضاءة ذهبية داخلية عند الـ Hover */}
                  <div className="absolute -top-24 -left-24 w-56 h-56 bg-[#D9B372]/25 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* الهيدر العلوي للكارت */}
                    <div className="flex items-center justify-between mb-7 pt-1">
                      {/* صندوق الأيقونة بتدرج وإطار ذهبي بارز */}
                      <div className="w-15 h-15 p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF3E6] via-[#F5E4C3] to-[#E9CB94] group-hover:from-[#D9B372] group-hover:via-[#F3D79B] group-hover:to-[#D9B372] text-oqab-maroon border-2 border-[#D9B372] flex items-center justify-center transition-all duration-500 shadow-[0_4px_15px_rgba(217,179,114,0.35)] group-hover:scale-110 group-hover:-rotate-3">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      {/* رقم الخدمة + الشارة باللون الذهبي */}
                      <div className="flex flex-col items-end">
                        <span className="font-en text-3xl font-extrabold text-[#D9B372] group-hover:text-[#F3D79B] drop-shadow-sm transition-colors duration-500 leading-none">
                          {service.number}
                        </span>
                        <span className="mt-1.5 text-[11px] font-extrabold px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FAF3E6] to-[#F5E4C3] text-oqab-maroon border border-[#D9B372] group-hover:from-[#D9B372] group-hover:to-[#F3D79B] group-hover:text-oqab-maroon transition-all duration-500 shadow-sm">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* اسم الخدمة */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1113] group-hover:text-[#F3D79B] transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>

                    {/* وصف الخدمة */}
                    <p className="text-oqab-muted group-hover:text-oqab-cream/95 text-sm sm:text-base leading-relaxed mb-7 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* الفوتر السفلي للكارت مع شارة الترابط والزر الذهبي */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold text-oqab-maroon group-hover:text-[#F3D79B] transition-colors">
                      <span className="w-2 h-2 rounded-full bg-[#D9B372] ring-2 ring-[#D9B372]/40" />
                      <span>{service.connectsTo}</span>
                    </div>

                    <div className="pt-4 border-t-2 border-[#D9B372]/40 group-hover:border-[#D9B372]/70 flex items-center justify-between transition-colors duration-300">
                      <span className="text-sm font-extrabold text-oqab-maroon group-hover:text-[#F3D79B] transition-colors duration-300">
                        تفاصيل الخدمة
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] text-oqab-maroon border border-white/60 flex items-center justify-center transition-all duration-300 shadow-[0_4px_12px_rgba(217,179,114,0.45)] group-hover:scale-105">
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal تفاصيل الخدمة عند الضغط بلمسات ذهبية فخمة */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 border-2 border-[#D9B372] shadow-[0_20px_60px_rgba(217,179,114,0.3)] relative overflow-hidden"
            >
              {/* شريط ذهبي علوي داخل النافذة */}
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 left-6 text-oqab-maroon hover:bg-[#D9B372] bg-[#FAF3E6] border border-[#D9B372] p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-oqab-maroon to-oqab-maroon-dark text-[#F3D79B] border-2 border-[#D9B372] flex items-center justify-center mb-5 shadow-md">
                <selectedService.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-oqab-maroon mb-3">
                {selectedService.title}
              </h3>

              <p className="text-oqab-muted text-sm sm:text-base leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="bg-gradient-to-br from-[#FAF5EE] to-[#F5E9D4]/50 rounded-2xl p-5 space-y-3 mb-6 border-2 border-[#D9B372]/70">
                <p className="text-xs font-extrabold text-oqab-maroon uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C69C54]" />
                  <span>ماذا تشمل هذه الخدمة في وكالة نَقْرَة؟</span>
                </p>
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-[#1E1113]">
                    <CheckCircle2 className="w-4 h-4 text-[#C69C54] shrink-0 mt-1" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={() => {
                  setSelectedService(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] hover:brightness-105 text-oqab-maroon border-2 border-oqab-maroon/20 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-[0_6px_20px_rgba(217,179,114,0.45)]"
              >
                <span>اطلب الخدمة الآن من نَقْرَة</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}