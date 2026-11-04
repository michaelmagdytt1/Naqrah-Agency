import { useEffect, useState, useRef, type ElementType } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Award, Users, Clapperboard, Sparkles } from 'lucide-react';

interface StatCardProps {
  targetNumber: number;
  suffix?: string;
  title?: string;
  description: string;
  icon: ElementType;
  delay: number;
}

function AnimatedCounter({
  targetNumber,
  suffix = '',
  title,
  description,
  icon: Icon,
  delay,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8 ثانية
    const increment = targetNumber / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative bg-white hover:bg-gradient-to-br hover:from-oqab-maroon hover:via-[#6E0E29] hover:to-oqab-maroon-dark rounded-[2rem] p-7 sm:p-8 border-2 border-[#D9B372] shadow-[0_10px_30px_-10px_rgba(217,179,114,0.3)] hover:shadow-[0_20px_45px_-10px_rgba(217,179,114,0.55)] transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default"
    >
      {/* شريط ذهبي علوي ثابت ومضيء */}
      <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372]" />

      {/* نقطة ذهبية مضيئة في زاوية الكارت */}
      <span className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#D9B372] to-[#F3D79B] shadow-[0_0_8px_#D9B372]" />

      {/* إضاءة ذهبية داخلية تظهر عند الـ Hover */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#D9B372]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* أيقونة مائية خلفية باللون الذهبي تتحرك بنعومة عند الـ Hover */}
      <Icon className="w-36 h-36 text-[#D9B372]/10 group-hover:text-[#D9B372]/15 absolute -bottom-6 -left-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

      <div className="relative z-10 pt-1">
        <div className="flex items-center justify-between mb-7">
          {/* الرقم المتصاعد مع تدرج ذهبي عند الـ Hover */}
          <div className="flex items-baseline gap-1 font-extrabold transition-colors duration-300">
            <span className="text-4xl sm:text-5xl font-en tracking-tight text-oqab-maroon group-hover:text-[#F3D79B] drop-shadow-sm transition-colors duration-300">
              {count}
            </span>
            {suffix && (
              <span className="text-2xl sm:text-3xl font-extrabold text-[#C69C54] group-hover:text-white transition-colors duration-300">
                {suffix}
              </span>
            )}
          </div>

          {/* أيقونة مصغرة داخل صندوق ذهبي فخم */}
          <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-[#FAF3E6] via-[#F5E4C3] to-[#E9CB94] group-hover:from-[#D9B372] group-hover:via-[#F3D79B] group-hover:to-[#D9B372] text-oqab-maroon border-2 border-[#D9B372] flex items-center justify-center shadow-[0_4px_15px_rgba(217,179,114,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        {title && (
          <h3 className="text-lg font-extrabold text-[#1E1113] group-hover:text-[#F3D79B] mb-2.5 transition-colors duration-300">
            {title}
          </h3>
        )}

        <p className="text-oqab-muted group-hover:text-oqab-cream/95 text-sm leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* خط سفلي ذهبي تفاعلي يتمدد بالكامل عند الـ Hover */}
      <div className="relative z-10 w-14 group-hover:w-full h-1.5 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372] rounded-full mt-7 transition-all duration-500 shadow-[0_0_10px_rgba(217,179,114,0.5)]" />
    </motion.div>
  );
}

export default function PartnerStats() {
  const stats = [
    {
      targetNumber: 100,
      suffix: '%',
      title: 'التزام تام بالجودة والمواعيد',
      description:
        'ندرس مشروعك بواقعية، ونلتزم بتنفيذ مخرجاتنا بأعلى معايير الجودة، وفي الوقت المتفق عليه بدقة.',
      icon: Award,
    },
    {
      targetNumber: 98,
      suffix: '%',
      title: 'معدل استمرار عملائنا معنا',
      description:
        'نجاحنا الحقيقي ليس في التعامل معك لمرة واحدة، بل في استمرارك معنا بفضل النتائج الملموسة.',
      icon: Users,
    },
    {
      targetNumber: 1,
      suffix: '',
      title: 'هدف واحد يحركنا',
      description:
        'هدف واحد يحركنا في وكالة نَقْرَة وهو استهداف جمهورك بدقة لتحويل زياراتهم إلى مبيعات حقيقية وملموسة.',
      icon: Target,
    },
    {
      targetNumber: 100,
      suffix: '%',
      title: 'إدارة إنتاج كاملة عن بُعد',
      description:
        'إدارة كاملة لإنتاج الفيديوهات (الريلز) بالموديلز والاسكريبت نيابة عنك، لتركز أنت على إدارة مشروعك وتوفير وقتك.',
      icon: Clapperboard,
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-[#FAF5EE] via-[#F5ECEE] to-[#FAF5EE] border-y-2 border-[#D9B372] relative overflow-hidden"
    >
      {/* شريط ذهبي لامع أعلى وأسفل القسم */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#D9B372] to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#D9B372] to-transparent opacity-80 pointer-events-none" />

      {/* إضاءة خلفية ناعمة باللون الذهبي والعنابي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-[#D9B372]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* الهيدر */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-oqab-maroon text-[#F3D79B] border-2 border-[#D9B372] text-xs sm:text-sm font-extrabold px-5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(217,179,114,0.35)]"
          >
            <Sparkles className="w-4 h-4 text-[#D9B372]" />
            <span>لماذا نَقْرَة؟</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1113]"
          >
            شريكك في{' '}
            <span className="text-oqab-maroon relative inline-block">
              النجاح
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
            صُممت حلولنا في وكالة نَقْرَة لمساعدة أصحاب المشاريع الطموحة على جذب العملاء، ومضاعفة المبيعات من خلال تسويق رقمي ذكي مبني على النتائج.
          </motion.p>
        </div>

        {/* كروت الإحصائيات الأربعة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {stats.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
              icon={stat.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}