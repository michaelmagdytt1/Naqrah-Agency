import { useState, type ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Target,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  TrendingUp,
  ArrowUpLeft,
  Compass,
  Briefcase,
  FileText,
  X,
  ExternalLink,
  Building2,
  Stethoscope,
  GraduationCap,
  Plane,
  Image as ImageIcon,
  Video,
  Clapperboard,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// =========================================================================
// ضع روابط Google Drive وملف الـ PDF لكل قسم هنا بسهولة:
// =========================================================================
const PORTFOLIO_LINKS = {
  realEstate: {
    photos: 'https://drive.google.com/drive/folders/16b5ky9eM2aarpUfEkXZUcDJG1OIfqJvZ?usp=sharing',  // رابط صور القطاع العقاري
    videos: 'https://drive.google.com/drive/folders/16lA4cxbnGSqi9nwcrJsIZaWUeheQbiGg?usp=sharing',  // رابط فيديوهات القطاع العقاري
    montage: 'https://drive.google.com/drive/folders/1YxirBFKSv65MnIR64VIa47qZlpn2pYO-?usp=sharing', // رابط مونتاج عقاري
    pdf: 'https://drive.google.com/file/d/1keFIAI8T3d5cgLky-mbxXB0st5m7p-Dn/view?usp=sharing',     // رابط ملف الـ PDF للقطاع العقاري
  },
  medical: {
    photos: 'https://drive.google.com/drive/folders/1jVOd3aQISIuJX5M2qEYfS7sDev4IopD-?usp=sharing',  // رابط صور القطاع الطبي (صور فقط)
  },
  education: {
    photos: 'https://drive.google.com/drive/folders/15gGCxju1dUEA4S8SSoWb1H7ifEUHLffs?usp=sharing',  // رابط صور المنصات التعليمية
    videos: 'https://drive.google.com/drive/folders/11nr_oKKNwihLr7a0FL070AX-UFqCZsd7?usp=sharing',  // رابط فيديوهات المنصات التعليمية
  },
  tourism: {
    photos: 'https://drive.google.com/drive/folders/1-h9FKbanYrBBaPVhUgy0YUaHm1MTJ95I?usp=sharing',  // رابط صور شركات السياحة
    videos: 'https://drive.google.com/drive/folders/1Yil6alYI1dH1aXcj0MZV2HrbJIHXeKjI?usp=sharing',  // رابط فيديوهات شركات السياحة
  },
};

type SectorKey = 'realEstate' | 'medical' | 'education' | 'tourism';

interface SectorItem {
  id: SectorKey;
  title: string;
  subtitle: string;
  badge: string;
  icon: ElementType;
}

const sectorsList: SectorItem[] = [
  {
    id: 'realEstate',
    title: 'القطاع العقاري',
    subtitle: 'صور • فيديوهات ومونتاج • ملف PDF',
    badge: 'شامل + PDF',
    icon: Building2,
  },
  {
    id: 'medical',
    title: 'القطاع الطبي',
    subtitle: 'تصاميم وصور احترافية للعيادات والمراكز',
    badge: 'صور فقط',
    icon: Stethoscope,
  },
  {
    id: 'education',
    title: 'منصات تعليمية',
    subtitle: 'صور وتصاميم • فيديوهات تعليمية وترويجية',
    badge: 'صور وفيديوهات',
    icon: GraduationCap,
  },
  {
    id: 'tourism',
    title: 'شركات السياحة',
    subtitle: 'صور وحملات بصرية • فيديوهات وريلز سياحية',
    badge: 'صور وفيديوهات',
    icon: Plane,
  },
];

const visionMissionData = [
  {
    id: 'vision',
    badge: 'نظرتنا للمستقبل',
    title: 'رؤيتنا',
    subtitle: 'Our Vision',
    description:
      'أن نكون الوكالة الرقمية الأولى والأكثر موثوقية لأصحاب المشاريع والشركات الطموحة، عبر ابتكار منظومة خدمات إلكترونية وتسويقية متكاملة تقود عملاءنا نحو الصدارة المستدامة في أسواقهم.',
    points: [
      'ريادة التحول الرقمي والتسويق الذكي في المنطقة',
      'بناء شراكات طويلة الأمد قائمة على النتائج الحقيقية',
      'ابتكار حلول تقنية تختصر الوقت وتضاعف الكفاءة',
    ],
    icon: Eye,
    watermarkIcon: Compass,
  },
  {
    id: 'mission',
    badge: 'التزامنا تجاهك',
    title: 'رسالتنا',
    subtitle: 'Our Mission',
    description:
      'تمكين العلامات التجارية من النمو السريع والمدروس من خلال تقديم حلول برمجية، إعلانية، وإنتاجية بمعايير عالمية، مع الالتزام التام بالجودة، الدقة في المواعيد، وتحقيق أعلى عائد على الاستثمار.',
    points: [
      'تحويل الأفكار الطموحة إلى مشاريع رقمية عالية الربحية',
      'تقديم تجربة عميل سلسة ومريحة عن بُعد وميدانياً',
      'الشفافية الكاملة في التقارير ومؤشرات قياس الأداء',
    ],
    icon: Target,
    watermarkIcon: TrendingUp,
  },
];

const coreValues = [
  { title: 'الاحترافية والهدوء', desc: 'ندير كافة التفاصيل عنك بسلاسة تامة', icon: ShieldCheck },
  { title: 'السرعة والدقة', desc: 'التزام صارم بمواعيد التسليم والجودة', icon: Zap },
  { title: 'نتائج ملموسة', desc: 'قراراتنا التسويقية مبنية على الأرقام', icon: Award },
];

export default function AboutUs() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [activeSector, setActiveSector] = useState<SectorKey | null>(null);
  const [realEstateVideoStep, setRealEstateVideoStep] = useState(false);

  const openModal = () => {
    setActiveSector(null);
    setRealEstateVideoStep(false);
    setIsPortfolioOpen(true);
  };

  const closeModal = () => {
    setIsPortfolioOpen(false);
    setTimeout(() => {
      setActiveSector(null);
      setRealEstateVideoStep(false);
    }, 250);
  };

  const handleBack = () => {
    if (realEstateVideoStep) {
      setRealEstateVideoStep(false);
    } else {
      setActiveSector(null);
    }
  };

  const currentSectorObj = sectorsList.find((s) => s.id === activeSector);

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-white via-[#FAF5EE] to-white relative overflow-hidden"
    >
      {/* إضاءات خلفية هادئة تدمج العنابي مع الذهبي */}
      <div className="absolute top-16 right-10 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-10 w-96 h-96 bg-oqab-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* الهيدر العلوي للقسم */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B372]/25 via-[#F3D79B]/45 to-[#D9B372]/25 border-2 border-[#D9B372] px-5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(217,179,114,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-oqab-maroon" />
            <span className="text-xs sm:text-sm font-extrabold text-oqab-maroon">
              تعرف على هويتنا
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1113]"
          >
            من نحن في{' '}
            <span className="text-oqab-maroon relative inline-block">
              وكالة نَقْرَة
              <span className="absolute -bottom-2 right-0 left-0 h-1.5 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] rounded-full" />
            </span>
          </motion.h2>
        </div>

        {/* 1. كارت "من نحن" الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[2.5rem] border-2 border-[#D9B372] shadow-[0_15px_40px_-10px_rgba(217,179,114,0.35)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group transition-all duration-500"
        >
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372] z-20" />

          {/* الجانب الأيمن العنابي */}
          <div className="lg:col-span-5 bg-gradient-to-br from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark text-oqab-cream p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-b-2 lg:border-b-0 lg:border-l-2 border-[#D9B372]">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D9B372]/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex bg-oqab-cream px-6 py-2 rounded-full flex-col items-center justify-center shadow-[0_0_20px_rgba(217,179,114,0.35)] border-2 border-[#D9B372]">
                <span className="text-oqab-maroon font-extrabold text-2xl leading-tight tracking-wide">
                  نَقْرَة
                </span>
                <span className="font-en text-oqab-maroon/90 text-[10px] font-bold tracking-[0.28em] uppercase -mt-0.5">
                  NAQRAH
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F3D79B] leading-snug">
                نجمع بين دقة التخطيط وقوة التنفيذ الرقمي
              </h3>

              <p className="text-oqab-cream/90 text-sm sm:text-base leading-relaxed">
                انطلقت وكالة نَقْرَة للحلول الرقمية لتقدم مفهوماً حديثاً يجمع بين التسويق الرقمي، إنتاج المحتوى، إدارة الحملات الإعلانية، وتطوير المواقع والمتاجر الإلكترونية تحت سقف واحد.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-[#D9B372]/35 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#F3D79B] font-bold block">هويتنا</span>
                <span className="text-sm font-bold text-white">شريكك الاستراتيجي للنمو</span>
              </div>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon border border-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                aria-label="تواصل معنا"
              >
                <ArrowUpLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* الجانب الأيسر الأبيض */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white">
            <div className="space-y-5">
              <span className="inline-block text-xs font-extrabold text-oqab-maroon bg-gradient-to-r from-[#FAF3E6] to-[#F5E4C3] px-4 py-1.5 rounded-full border border-[#D9B372] shadow-sm">
                قصتنا وفلسفتنا
              </span>

              <h4 className="text-2xl font-bold text-[#1E1113]">
                ندير عنك تعقيدات العالم الرقمي، لتركز أنت على قيادة مشروعك
              </h4>

              <p className="text-oqab-muted text-sm sm:text-base leading-relaxed">
                في وكالة <span className="font-en font-bold text-oqab-maroon">NAQRAH</span>، نؤمن أن صاحب المشروع لا يجب أن يشتت وقته بين عشرات المستقلين والشركات. لذلك بنينا فريقاً متكاملاً يتولى عنك دورة العمل كاملة؛ من برمجة متجرك وتأسيس أنظمة الـ ERP، إلى تصوير الريلز وإطلاق الحملات الإعلانية المربحة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t-2 border-[#D9B372]/35">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="group/val p-4 rounded-2xl bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark border-2 border-[#D9B372]/60 hover:border-[#D9B372] transition-all duration-300 cursor-default shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon flex items-center justify-center mb-3 shadow-sm group-hover/val:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-bold text-[#1E1113] group-hover/val:text-[#F3D79B] transition-colors">
                      {val.title}
                    </h5>
                    <p className="text-xs text-oqab-muted group-hover/val:text-oqab-cream/90 mt-1 transition-colors">
                      {val.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 2. كروت "رؤيتنا" و "رسالتنا" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visionMissionData.map((item, index) => {
            const Icon = item.icon;
            const WatermarkIcon = item.watermarkIcon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white hover:bg-gradient-to-br hover:from-oqab-maroon hover:via-[#6E0E29] hover:to-oqab-maroon-dark rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#D9B372] shadow-[0_12px_35px_-10px_rgba(217,179,114,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(217,179,114,0.55)] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-default"
              >
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

                <WatermarkIcon className="w-56 h-56 text-[#D9B372]/10 group-hover:text-[#D9B372]/15 absolute -bottom-10 -left-10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAF3E6] via-[#F5E4C3] to-[#E9CB94] group-hover:from-[#D9B372] group-hover:via-[#F3D79B] group-hover:to-[#D9B372] text-oqab-maroon border-2 border-[#D9B372] flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#9E7329] group-hover:text-[#F3D79B] transition-colors">
                          {item.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1113] group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-en text-xs font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#FAF5EE] text-oqab-maroon border border-[#D9B372] group-hover:bg-[#D9B372] group-hover:text-oqab-maroon transition-colors duration-300">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-oqab-muted group-hover:text-oqab-cream/95 text-base leading-relaxed mb-8 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 bg-[#FAF5EE] group-hover:bg-white/10 rounded-2xl p-5 border-2 border-[#D9B372]/60 group-hover:border-[#D9B372] space-y-3 transition-colors duration-500">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D9B372] ring-2 ring-[#D9B372]/40 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#1E1113] group-hover:text-[#F3D79B] transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. بانر وزر "تصفح أعمالنا" الكبير */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-l from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark p-8 sm:p-12 border-2 border-[#D9B372] shadow-[0_20px_50px_-10px_rgba(94,11,34,0.35)] overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#D9B372]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#D9B372]/60 text-[#F3D79B] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold">
              <Briefcase className="w-4 h-4 text-[#D9B372]" />
              <span>سابقة أعمال وكالة نَقْرَة على Google Drive</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              شاهد جودة تنفيذنا ومشاريعنا حسب كل قطاع
            </h3>

            <p className="text-oqab-cream/85 text-sm sm:text-base leading-relaxed">
              اختر القطاع الذي يهمك (العقاري، الطبي، التعليمي، أو السياحي) واستعرض نماذج الصور والفيديوهات والمونتاج المنفذة بجودتها الكاملة.
            </p>

            <div className="pt-2">
              <motion.button
                type="button"
                onClick={openModal}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] hover:brightness-105 text-oqab-maroon border-2 border-white px-10 sm:px-14 py-5 rounded-full text-lg sm:text-xl font-extrabold shadow-[0_10px_35px_rgba(217,179,114,0.5)] transition-all cursor-pointer"
              >
                <FolderOpen className="w-6 h-6" />
                <span>تصفح أعمالنا</span>
                <ArrowUpLeft className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* =====================================================================
          نافذة معرض الأعمال المقسمة لـ 4 قطاعات على Google Drive
         ===================================================================== */}
      <AnimatePresence>
        {isPortfolioOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 25 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] max-w-3xl w-full p-6 sm:p-10 border-2 border-[#D9B372] shadow-[0_25px_70px_rgba(217,179,114,0.35)] relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* شريط ذهبي علوي */}
              <div className="absolute top-0 right-0 left-0 h-2.5 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

              {/* شريط التحكم العلوي داخل المودال: زر الإغلاق + زر الرجوع */}
              <div className="flex items-center justify-between mb-6 pt-1">
                {activeSector ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-oqab-maroon bg-[#FAF5EE] hover:bg-[#D9B372] border-2 border-[#D9B372] px-4 py-2 rounded-full transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>
                      {realEstateVideoStep ? 'رجوع للقطاع العقاري' : 'رجوع لجميع القطاعات'}
                    </span>
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-1.5 bg-[#FAF5EE] border border-[#D9B372] text-oqab-maroon px-4 py-1.5 rounded-full text-xs font-extrabold">
                    <Sparkles className="w-3.5 h-3.5 text-[#C69C54]" />
                    <span>مجلدات Google Drive الرسمية</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={closeModal}
                  className="text-oqab-maroon hover:bg-[#D9B372] bg-[#FAF5EE] border-2 border-[#D9B372] p-2.5 rounded-full transition-colors"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* عنوان النافذة المتغير حسب الخطوة */}
              <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-oqab-maroon">
                  {!activeSector && 'اختر القطاع لتصفح الأعمال'}
                  {activeSector && !realEstateVideoStep && currentSectorObj?.title}
                  {activeSector === 'realEstate' && realEstateVideoStep && 'فيديوهات القطاع العقاري'}
                </h3>
                <p className="text-xs sm:text-sm text-oqab-muted">
                  {!activeSector &&
                    'أعمالنا مقسمة ومرتبة على Google Drive حسب تخصص كل قطاع لسهولة الاستعراض'}
                  {activeSector &&
                    !realEstateVideoStep &&
                    'اختر القسم المطلوب لفتحه مباشرة على Google Drive'}
                  {activeSector === 'realEstate' &&
                    realEstateVideoStep &&
                    'اختر بين الفيديوهات العقارية أو نماذج المونتاج العقاري الاحترافي'}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {/* =========================================================
                    الخطوة 1: عرض القطاعات الأربعة الرئيسية
                   ========================================================= */}
                {!activeSector && (
                  <motion.div
                    key="sectors-grid"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                  >
                    {sectorsList.map((sector) => {
                      const Icon = sector.icon;
                      return (
                        <motion.button
                          type="button"
                          key={sector.id}
                          onClick={() => setActiveSector(sector.id)}
                          whileHover={{ y: -5, scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:via-[#6E0E29] hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md hover:shadow-[0_15px_35px_rgba(217,179,114,0.45)] transition-all duration-300 flex flex-col justify-between text-right overflow-hidden"
                        >
                          <div className="space-y-4 w-full relative z-10">
                            <div className="flex items-center justify-between">
                              <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon border-2 border-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <Icon className="w-6 h-6" />
                              </div>
                              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-oqab-maroon text-[#F3D79B] group-hover:bg-white group-hover:text-oqab-maroon border border-[#D9B372] transition-colors">
                                {sector.badge}
                              </span>
                            </div>

                            <div>
                              <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B] transition-colors">
                                {sector.title}
                              </h4>
                              <p className="text-xs text-oqab-muted group-hover:text-oqab-cream/90 mt-1 transition-colors">
                                {sector.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 mt-5 w-full border-t border-[#D9B372]/40 group-hover:border-[#D9B372]/70 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white transition-colors relative z-10">
                            <span>استعراض القسم</span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-sm">
                              <ArrowUpLeft className="w-4 h-4" />
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}

                {/* =========================================================
                    الخطوة 2 (أ): محتويات القطاع العقاري (صور + فيديوهات + PDF)
                   ========================================================= */}
                {activeSector === 'realEstate' && !realEstateVideoStep && (
                  <motion.div
                    key="real-estate-options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {/* 1. صور القطاع العقاري */}
                    <motion.a
                      href={PORTFOLIO_LINKS.realEstate.photos}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-sm">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            صور العقارات
                          </h4>
                          <p className="text-xs text-oqab-muted group-hover:text-oqab-cream/90 mt-1">
                            تصاميم السوشيال ميديا والتصوير العقاري على Drive
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-5 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>فتح Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>

                    {/* 2. فيديوهات القطاع العقاري (تفتح فيديوهات + مونتاج عقاري) */}
                    <motion.button
                      type="button"
                      onClick={() => setRealEstateVideoStep(true)}
                      whileHover={{ y: -5 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4 w-full">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-sm">
                            <Video className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-oqab-maroon text-[#F3D79B] group-hover:bg-white group-hover:text-oqab-maroon">
                            قسمان بالداخل
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            الفيديوهات
                          </h4>
                          <p className="text-xs text-oqab-muted group-hover:text-oqab-cream/90 mt-1">
                            يشمل فيديوهات عقارية + مونتاج عقاري احترافي
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-5 w-full border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>اختر نوع الفيديو</span>
                        <ArrowUpLeft className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.button>

                    {/* 3. ملف PDF الخاص بالقطاع العقاري */}
                    <motion.a
                      href={PORTFOLIO_LINKS.realEstate.pdf}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-sm">
                            <FileText className="w-6 h-6" />
                          </div>
                          <span className="font-en text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-oqab-maroon text-[#F3D79B] group-hover:bg-white group-hover:text-oqab-maroon">
                            PDF
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            ملف PDF العقاري
                          </h4>
                          <p className="text-xs text-oqab-muted group-hover:text-oqab-cream/90 mt-1">
                            الملف التعريفي وسابقة أعمال القطاع العقاري
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-5 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>فتح ملف الـ PDF</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>
                  </motion.div>
                )}

                {/* =========================================================
                    الخطوة 3 (خاصة بفيديوهات العقارات): فيديوهات + مونتاج عقاري
                   ========================================================= */}
                {activeSector === 'realEstate' && realEstateVideoStep && (
                  <motion.div
                    key="real-estate-videos-sub"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {/* الخيار الأول: فيديوهات عقارية */}
                    <motion.a
                      href={PORTFOLIO_LINKS.realEstate.videos}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-md">
                          <Video className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            فيديوهات عقارية
                          </h4>
                          <p className="text-xs sm:text-sm text-oqab-muted group-hover:text-oqab-cream/90 mt-1.5 leading-relaxed">
                            تصوير ميداني وريلز ترويجية للمشاريع والوحدات العقارية على Google Drive.
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-6 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>مشاهدة الفيديوهات على Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>

                    {/* الخيار الثاني: مونتاج عقاري */}
                    <motion.a
                      href={PORTFOLIO_LINKS.realEstate.montage}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-md">
                          <Clapperboard className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            مونتاج عقاري
                          </h4>
                          <p className="text-xs sm:text-sm text-oqab-muted group-hover:text-oqab-cream/90 mt-1.5 leading-relaxed">
                            نماذج المونتاج السينمائي، المؤثرات البصرية، وتحريك الجرافيك العقاري على Drive.
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-6 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>مشاهدة المونتاج العقاري على Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>
                  </motion.div>
                )}

                {/* =========================================================
                    الخطوة 2 (ب): القطاع الطبي (صور فقط)
                   ========================================================= */}
                {activeSector === 'medical' && (
                  <motion.div
                    key="medical-options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-md mx-auto"
                  >
                    <motion.a
                      href={PORTFOLIO_LINKS.medical.photos}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:via-[#6E0E29] hover:to-oqab-maroon-dark rounded-3xl p-7 border-2 border-[#D9B372] shadow-lg transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-md">
                            <ImageIcon className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-extrabold px-3.5 py-1 rounded-full bg-oqab-maroon text-[#F3D79B] group-hover:bg-white group-hover:text-oqab-maroon border border-[#D9B372]">
                            GOOGLE DRIVE
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            صور وتصاميم القطاع الطبي
                          </h4>
                          <p className="text-xs sm:text-sm text-oqab-muted group-hover:text-oqab-cream/90 mt-1.5 leading-relaxed">
                            تصفح مجلد Google Drive الكامل لتصاميم السوشيال ميديا والهويات البصرية للعيادات والمراكز الطبية.
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-6 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>فتح مجلد الصور الطبية على Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>
                  </motion.div>
                )}

                {/* =========================================================
                    الخطوة 2 (ج): منصات تعليمية أو شركات السياحة (صور + فيديوهات)
                   ========================================================= */}
                {(activeSector === 'education' || activeSector === 'tourism') && (
                  <motion.div
                    key={`${activeSector}-options`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {/* 1. الصور */}
                    <motion.a
                      href={PORTFOLIO_LINKS[activeSector].photos}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-md">
                          <ImageIcon className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            قسم الصور والتصاميم
                          </h4>
                          <p className="text-xs sm:text-sm text-oqab-muted group-hover:text-oqab-cream/90 mt-1.5 leading-relaxed">
                            استعرض كافة الصور وتصاميم السوشيال ميديا الخاصة بـ {currentSectorObj?.title} على Google Drive.
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-6 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>فتح مجلد الصور على Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>

                    {/* 2. الفيديوهات */}
                    <motion.a
                      href={PORTFOLIO_LINKS[activeSector].videos}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group bg-[#FAF5EE] hover:bg-gradient-to-br hover:from-oqab-maroon hover:to-oqab-maroon-dark rounded-3xl p-6 border-2 border-[#D9B372] shadow-md transition-all flex flex-col justify-between text-right"
                    >
                      <div className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon flex items-center justify-center shadow-md">
                          <Video className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-extrabold text-[#1E1113] group-hover:text-[#F3D79B]">
                            قسم الفيديوهات والريلز
                          </h4>
                          <p className="text-xs sm:text-sm text-oqab-muted group-hover:text-oqab-cream/90 mt-1.5 leading-relaxed">
                            شاهد الفيديوهات الإعلانية والريلز المنفذة لـ {currentSectorObj?.title} على Google Drive.
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-6 border-t border-[#D9B372]/40 flex items-center justify-between text-xs font-extrabold text-oqab-maroon group-hover:text-white">
                        <span>فتح مجلد الفيديوهات على Drive</span>
                        <ExternalLink className="w-4 h-4 text-[#C69C54] group-hover:text-[#F3D79B]" />
                      </div>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}