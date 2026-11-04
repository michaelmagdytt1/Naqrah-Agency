import { useState, type ElementType, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Video,
  Megaphone,
  Layers,
  Share2,
  Camera,
  Send,
  Phone,
  Mail,
  MessageSquare,
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
  ArrowUpLeft,
} from 'lucide-react';

interface ServiceOption {
  id: string;
  title: string;
  icon: ElementType;
}

const serviceOptions: ServiceOption[] = [
  { id: 'web', title: 'تصميم المواقع والمتاجر', icon: Globe },
  { id: 'reels', title: 'إنتاج وتصوير الريلز', icon: Video },
  { id: 'ads', title: 'إدارة الحملات الإعلانية', icon: Megaphone },
  { id: 'erp', title: 'أنظمة ERP للشركات', icon: Layers },
  { id: 'social', title: 'إدارة السوشيال ميديا والتصاميم', icon: Share2 },
  { id: 'field', title: 'التغطية والتصوير الميداني', icon: Camera },
];

const socialLinks = [
  {
    name: 'فيسبوك',
    handle: 'Naqrah Agency',
    href: 'https://www.facebook.com/profile.php?id=61591224193233',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'إنستاجرام',
    handle: '@naqrah.agency',
    href: 'https://www.instagram.com/naqrah.agency?mdxt=MXRjd21jYXZzNncwOQ%3D%3D',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'سناب شات',
    handle: 'naqrah.agency',
    href: 'https://www.snapchat.com/add/naqrah.agency',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.166 3c-2.88 0-4.885 1.838-5.11 4.79-.054.71-.015 1.416.02 2.022.023.407-.213.68-.535.788-.406.135-.87.056-1.258-.095-.31-.12-.666-.074-.86.17-.22.275-.168.698.128.943.435.36 1.045.618 1.564.838.257.11.392.345.31.61-.252.815-.957 1.848-2.26 2.388-.35.145-.535.512-.415.864.115.337.475.545.882.585.647.064 1.298.175 1.815.49.38.232.637.65.995.945.485.4 1.132.56 1.795.55 1.025-.015 1.737-.488 2.765-.488 1.055 0 1.772.495 2.825.495.663 0 1.31-.158 1.795-.558.358-.295.615-.713.995-.945.517-.315 1.168-.426 1.815-.49.407-.04.767-.248.882-.585.12-.352-.065-.719-.415-.864-1.303-.54-2.008-1.573-2.26-2.388-.082-.265.053-.5.31-.61.519-.22 1.129-.478 1.564-.838.296-.245.348-.668.128-.943-.194-.244-.55-.29-.86-.17-.388.151-.852.23-1.258.095-.322-.108-.558-.381-.535-.788.035-.606.074-1.312.02-2.022C16.717 4.838 14.712 3 12.166 3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'تصميم المواقع والمتاجر',
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title)
        ? prev.length > 1
          ? prev.filter((item) => item !== title)
          : prev // إبقاء خدمة واحدة على الأقل مختارة
        : [...prev, title]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const servicesText = selectedServices.join(' + ');
    const message = `مرحباً وكالة نَقْرَة،%0A*الاسم:* ${name}%0A*رقم التواصل:* ${phone}%0A*الخدمات المطلوبة:* ${servicesText}%0A*التفاصيل:* ${
      notes || 'أرغب في معرفة التفاصيل والأسعار'
    }`;

    setTimeout(() => {
      window.open(`https://wa.me/966567845982?text=${message}`, '_blank');
      setIsSubmitted(false);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#FAF5EE] via-white to-[#FAF5EE] relative overflow-hidden"
    >
      {/* دوائر إضاءة خلفية تدمج الذهبي مع العنابي بنعومة */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#D9B372]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-[#D9B372]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان القسم بلمسة ذهبية بارزة */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B372]/25 via-[#F3D79B]/45 to-[#D9B372]/25 border-2 border-[#D9B372] px-5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(217,179,114,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-oqab-maroon" />
            <span className="text-xs sm:text-sm font-extrabold text-oqab-maroon">
              تواصل مباشر وسريع
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1113]"
          >
            ابدأ مشروعك مع{' '}
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
            className="text-oqab-muted text-sm sm:text-base pt-2"
          >
            اختر الخدمات التي تحتاجها وسيتواصل معك فريق نَقْرَة فوراً بخطة عمل مخصصة لمشروعك.
          </motion.p>
        </div>

        {/* الكارت المدمج بين العنابي والذهبي والأبيض */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[2.5rem] border-2 border-[#D9B372] shadow-[0_20px_50px_-10px_rgba(217,179,114,0.4)] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* شريط ذهبي علوي لامع يمتد بعرض الكارت بالكامل */}
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#C69C54] via-[#F3D79B] to-[#D9B372] z-20" />

          {/* الجانب الأيمن (العنابي والذهبي): معلومات التواصل والسوشيال ميديا */}
          <div className="lg:col-span-5 bg-gradient-to-br from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark text-oqab-cream p-8 sm:p-10 lg:p-11 flex flex-col justify-between relative overflow-hidden border-b-2 lg:border-b-0 lg:border-l-2 border-[#D9B372]">
            {/* إضاءة خلفية ذهبية داخل الجزء العنابي */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D9B372]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#D9B372]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* اللوجو مع الإطار الذهبي المضيء */}
              <div className="inline-flex bg-oqab-cream px-6 py-2 rounded-full flex-col items-center justify-center shadow-[0_0_25px_rgba(217,179,114,0.35)] border-2 border-[#D9B372]">
                <span className="text-oqab-maroon font-extrabold text-2xl leading-tight tracking-wide">
                  نَقْرَة
                </span>
                <span className="font-en text-oqab-maroon/90 text-[9px] font-bold tracking-[0.28em] uppercase -mt-0.5">
                  NAQRAH
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F3D79B] leading-snug">
                  نحول أفكارك إلى نتائج رقمية ملموسة
                </h3>
                <p className="text-oqab-cream/85 text-sm leading-relaxed mt-2">
                  سواء كنت تؤسس مشروعك من الصفر أو تسعى لمضاعفة مبيعاتك الحالية، فريق وكالة نَقْرَة جاهز لتنفيذ رؤيتك بأعلى دقة.
                </p>
              </div>

              {/* كروت الاتصال المباشر (الهاتف والإيميل) بتدرجات ذهبية */}
              <div className="space-y-3 pt-1">
                <motion.a
                  href="https://wa.me/966567845982"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3.5 bg-white/10 hover:bg-[#D9B372]/20 border-2 border-[#D9B372]/60 hover:border-[#F3D79B] p-3.5 rounded-2xl transition-all shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F3D79B] font-bold block">
                      اتصال مباشر أو واتساب
                    </span>
                    <span className="font-en text-sm sm:text-base font-extrabold text-white" dir="ltr">
                      +966 56 784 5982
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:naqrah.3gency@gmail.com"
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3.5 bg-white/10 hover:bg-[#D9B372]/20 border-2 border-[#D9B372]/60 hover:border-[#F3D79B] p-3.5 rounded-2xl transition-all shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-[#F3D79B] font-bold block">
                      البريد الإلكتروني
                    </span>
                    <span className="font-en text-sm sm:text-base font-extrabold text-white truncate block">
                      naqrah.3gency@gmail.com
                    </span>
                  </div>
                </motion.a>
              </div>

              {/* قسم منصات التواصل الاجتماعي (فيسبوك، إنستاجرام، سناب شات) */}
              <div className="pt-3 border-t border-[#D9B372]/35 space-y-3">
                <span className="text-xs font-extrabold text-[#F3D79B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D9B372]" />
                  <span>تابعنا وتواصل معنا عبر منصاتنا:</span>
                </span>

                <div className="grid grid-cols-3 gap-2.5">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -4, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#D9B372] hover:via-[#F3D79B] hover:to-[#C69C54] border border-[#D9B372]/60 hover:border-white text-white hover:text-oqab-maroon transition-all duration-300 shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#D9B372]/25 group-hover:bg-oqab-maroon text-[#F3D79B] group-hover:text-[#F3D79B] flex items-center justify-center mb-1.5 transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-xs font-extrabold">{social.name}</span>
                      <span className="font-en text-[10px] opacity-80 group-hover:opacity-100 truncate max-w-full mt-0.5" dir="ltr">
                        {social.handle}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* شارة سفلية */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#D9B372]/35 flex items-center justify-between text-xs font-semibold text-[#F3D79B]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D9B372]" />
                <span>رد سريع خلال دقائق</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D9B372]" />
                <span>استشارة مجانية</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر (الأبيض والذهبي): اختيار الخدمات بالأنيميشن والفورم */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* قسم اختيار الخدمات بأنيميشن تفاعلي */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <label className="text-sm sm:text-base font-extrabold text-[#1E1113]">
                    اختر الخدمة أو الخدمات المطلوبة:
                  </label>
                  <motion.span
                    key={selectedServices.length}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xs font-extrabold bg-gradient-to-r from-[#D9B372]/30 to-[#F3D79B]/50 text-oqab-maroon border border-[#D9B372] px-3.5 py-1 rounded-full shadow-sm"
                  >
                    تم اختيار ({selectedServices.length})
                  </motion.span>
                </div>

                {/* شبكة أزرار الخدمات التفاعلية بإطارات وأيقونات ذهبية */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {serviceOptions.map((service) => {
                    const isSelected = selectedServices.includes(service.title);
                    const Icon = service.icon;

                    return (
                      <motion.button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.title)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        layout
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className={`relative flex items-center justify-between p-3.5 rounded-2xl border-2 text-right transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? 'bg-gradient-to-l from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark border-[#D9B372] text-white shadow-[0_8px_20px_rgba(217,179,114,0.35)]'
                            : 'bg-[#FAF5EE]/80 hover:bg-[#FAF3E6] border-[#D9B372]/60 hover:border-[#D9B372] text-[#1E1113]'
                        }`}
                      >
                        <div className="flex items-center gap-3 z-10">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
                              isSelected
                                ? 'bg-gradient-to-br from-[#D9B372] via-[#F3D79B] to-[#C69C54] text-oqab-maroon border border-white/60'
                                : 'bg-gradient-to-br from-[#FAF3E6] to-[#F5E4C3] text-oqab-maroon border border-[#D9B372]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-bold leading-snug ${
                              isSelected ? 'text-[#F3D79B]' : 'text-[#1E1113]'
                            }`}
                          >
                            {service.title}
                          </span>
                        </div>

                        {/* دائرة علامة الصح المتحركة باللون الذهبي */}
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors z-10 ${
                            isSelected
                              ? 'bg-gradient-to-br from-[#D9B372] to-[#F3D79B] text-oqab-maroon shadow-md'
                              : 'border-2 border-[#D9B372] bg-white'
                          }`}
                        >
                          <AnimatePresence mode="wait">
                            {isSelected && (
                              <motion.span
                                key="check"
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 45 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 500,
                                  damping: 25,
                                }}
                              >
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* حقول الاسم ورقم الهاتف بإطارات ذهبية */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-extrabold text-oqab-maroon mb-1.5">
                    الاسم الكريم أو اسم النشاط
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="اكتب اسمك هنا..."
                    className="w-full bg-[#FAF5EE]/60 focus:bg-white border-2 border-[#D9B372]/70 focus:border-[#D9B372] rounded-xl px-4 py-3 text-sm text-[#1E1113] focus:outline-none focus:ring-2 focus:ring-[#D9B372]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-oqab-maroon mb-1.5">
                    رقم الهاتف / واتساب
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    className="w-full bg-[#FAF5EE]/60 focus:bg-white border-2 border-[#D9B372]/70 focus:border-[#D9B372] rounded-xl px-4 py-3 text-sm text-right text-[#1E1113] focus:outline-none focus:ring-2 focus:ring-[#D9B372]/30 transition-all"
                  />
                </div>
              </div>

              {/* حقل التفاصيل الإضافية */}
              <div>
                <label className="block text-xs font-extrabold text-oqab-maroon mb-1.5">
                  تفاصيل إضافية عن مشروعك (اختياري)
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="حدثنا باختصار عن فكرتك أو أهدافك..."
                    className="w-full bg-[#FAF5EE]/60 focus:bg-white border-2 border-[#D9B372]/70 focus:border-[#D9B372] rounded-xl px-4 py-3 text-sm text-[#1E1113] focus:outline-none focus:ring-2 focus:ring-[#D9B372]/30 transition-all resize-none"
                  />
                  <MessageSquare className="w-4 h-4 text-[#C69C54] absolute left-3.5 bottom-3.5 pointer-events-none" />
                </div>
              </div>

              {/* زر الإرسال التفاعلي باللون الذهبي الفخم */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] hover:brightness-105 text-oqab-maroon border-2 border-oqab-maroon/20 font-extrabold py-4 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(217,179,114,0.45)] transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-oqab-maroon"
                    >
                      <Check className="w-5 h-5 stroke-[2.5]" />
                      <span>جاري تحويلك إلى محادثة واتساب نَقْرَة...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <span>إرسال الطلب والبدء الآن</span>
                      <Send className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* شريط روابط سريعة إضافي أسفل الفورم */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-oqab-muted border-t border-[#D9B372]/30">
                <span>أو راسلنا مباشرة على منصات التواصل الاجتماعي:</span>
                <div className="flex items-center gap-3 font-bold text-oqab-maroon">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 hover:text-[#C69C54] transition-colors"
                    >
                      <span>{social.name}</span>
                      <ArrowUpLeft className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}