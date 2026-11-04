import { Phone, Mail, MapPin, ArrowUpLeft, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const quickLinks = [
  { name: 'الرئيسية', path: '/', isHash: false },
  { name: 'خدماتنا', path: '/#services', isHash: true },
  { name: 'عن الشركة', path: '/about', isHash: false },
  { name: 'تواصل معنا', path: '/contact', isHash: false },
];

const serviceLinks = [
  'تصميم المواقع والمتاجر',
  'إنتاج وتصوير الريلز',
  'إدارة الحملات الإعلانية',
  'أنظمة ERP للشركات',
  'إدارة السوشيال ميديا والتصاميم',
  'التغطية والتصوير الميداني',
];

const socialLinks = [
  {
    name: 'فيسبوك',
    href: 'https://www.facebook.com/profile.php?id=61591224193233',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'إنستاجرام',
    href: 'https://www.instagram.com/naqrah.agency?mdxt=MXRjd21jYXZzNncwOQ%3D%3D',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'سناب شات',
    href: 'https://www.snapchat.com/add/naqrah.agency',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.166 3c-2.88 0-4.885 1.838-5.11 4.79-.054.71-.015 1.416.02 2.022.023.407-.213.68-.535.788-.406.135-.87.056-1.258-.095-.31-.12-.666-.074-.86.17-.22.275-.168.698.128.943.435.36 1.045.618 1.564.838.257.11.392.345.31.61-.252.815-.957 1.848-2.26 2.388-.35.145-.535.512-.415.864.115.337.475.545.882.585.647.064 1.298.175 1.815.49.38.232.637.65.995.945.485.4 1.132.56 1.795.55 1.025-.015 1.737-.488 2.765-.488 1.055 0 1.772.495 2.825.495.663 0 1.31-.158 1.795-.558.358-.295.615-.713.995-.945.517-.315 1.168-.426 1.815-.49.407-.04.767-.248.882-.585.12-.352-.065-.719-.415-.864-1.303-.54-2.008-1.573-2.26-2.388-.082-.265.053-.5.31-.61.519-.22 1.129-.478 1.564-.838.296-.245.348-.668.128-.943-.194-.244-.55-.29-.86-.17-.388.151-.852.23-1.258.095-.322-.108-.558-.381-.535-.788.035-.606.074-1.312.02-2.022C16.717 4.838 14.712 3 12.166 3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (path: string, isHash: boolean) => {
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-gradient-to-b from-oqab-maroon via-[#4B081B] to-oqab-maroon-dark text-oqab-cream relative overflow-hidden pt-14 pb-7 rounded-t-[2.5rem] border-t-4 border-[#D9B372] shadow-[0_-10px_40px_rgba(217,179,114,0.15)]">
      
      {/* إضاءات ذهبية ناعمة في خلفية الفوتر */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#D9B372]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D9B372]/10 rounded-full blur-3xl pointer-events-none" />

      {/* خط ذهبي لامع إضافي أعلى الفوتر */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#F3D79B] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* محتوى الفوتر المختصر */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-9 border-b border-[#D9B372]/35 items-start">
          
          {/* العمود الأول: اللوجو ونبذة مختصرة وحسابات السوشيال ميديا */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex bg-oqab-cream px-6 py-2 rounded-full flex-col items-center justify-center border-2 border-[#D9B372] shadow-[0_0_25px_rgba(217,179,114,0.3)] hover:scale-105 transition-transform"
            >
              <span className="text-oqab-maroon font-extrabold text-2xl leading-tight tracking-wide">
                نَقْرَة
              </span>
              <span className="font-en text-oqab-maroon/90 text-[9px] font-bold tracking-[0.28em] uppercase -mt-0.5">
                NAQRAH
              </span>
            </Link>

            <p className="text-oqab-cream/85 text-xs sm:text-sm leading-relaxed max-w-xs">
              وكالة <span className="text-[#D9B372] font-bold">نَقْرَة للحلول الرقمية</span>؛ شريكك الموثوق لتطوير أعمالك ومضاعفة مبيعاتك بحلول ذكية ومبتكرة في التسويق والبرمجة والإنتاج المرئي.
            </p>

            {/* شارة ذهبية صغيرة */}
            <div className="inline-flex items-center gap-1.5 bg-[#D9B372]/15 border border-[#D9B372]/50 text-[#F3D79B] px-3.5 py-1 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D9B372]" />
              <span>بـ نَقْرَة واحدة نصنع الفرق</span>
            </div>

            {/* أزرار منصات التواصل الاجتماعي باللون الذهبي */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#D9B372] block mb-2.5">
                تابعنا على منصات التواصل:
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="group inline-flex items-center gap-2 bg-white/5 hover:bg-gradient-to-r hover:from-[#D9B372] hover:via-[#F3D79B] hover:to-[#D9B372] text-[#F3D79B] hover:text-oqab-maroon border border-[#D9B372]/50 hover:border-white px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 shadow-sm hover:-translate-y-1"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[#D9B372] font-extrabold text-sm sm:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9B372]" />
              <span>التنقل السريع</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-oqab-cream/85">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.path, link.isHash)}
                    className="hover:text-[#D9B372] hover:-translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B372]/40 group-hover:bg-[#D9B372] transition-colors" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الخدمات */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[#D9B372] font-extrabold text-sm sm:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9B372]" />
              <span>خدماتنا</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-oqab-cream/85">
              {serviceLinks.map((srv) => (
                <li key={srv}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('/#services', true)}
                    className="hover:text-[#D9B372] hover:-translate-x-1 transition-all flex items-center gap-2 group text-right"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B372]/40 group-hover:bg-[#D9B372] transition-colors shrink-0" />
                    <span>{srv}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: بيانات الاتصال المختصرة بإطارات ذهبية */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[#D9B372] font-extrabold text-sm sm:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9B372]" />
              <span>بيانات التواصل</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-oqab-cream/90">
              <li>
                <a
                  href="mailto:naqrah.3gency@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-[#D9B372]/20 border border-[#D9B372]/35 hover:border-[#D9B372] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D9B372] text-oqab-maroon flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-en text-xs sm:text-sm font-semibold group-hover:text-[#D9B372] transition-colors truncate">
                    naqrah.3gency@gmail.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/966567845982"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-[#D9B372]/20 border border-[#D9B372]/35 hover:border-[#D9B372] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D9B372] text-oqab-maroon flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span
                    className="font-en text-xs sm:text-sm font-bold group-hover:text-[#D9B372] transition-colors"
                    dir="ltr"
                  >
                    +966 56 784 5982
                  </span>
                </a>
              </li>

              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-[#D9B372]/25">
                <div className="w-8 h-8 rounded-lg bg-[#D9B372]/20 border border-[#D9B372]/50 text-[#D9B372] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs">خدمات رقمية متكاملة عن بُعد وميدانياً</span>
              </li>
            </ul>
          </div>

        </div>

        {/* الشريط السفلي لحقوق الملكية */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-oqab-cream/80">
          <p>
            © {new Date().getFullYear()} جميع الحقوق محفوظة لوكالة{' '}
            <span className="text-[#D9B372] font-extrabold">نَقْرَة للحلول الرقمية (NAQRAH)</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D9B372] via-[#F3D79B] to-[#D9B372] hover:brightness-105 text-oqab-maroon px-4 py-2 rounded-full transition-all font-extrabold shadow-md hover:scale-105"
          >
            <span>للأعلى</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}