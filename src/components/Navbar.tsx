import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'الرئيسية', path: '/', isHash: false },
  { name: 'خدماتنا', path: '/#services', isHash: true },
  { name: 'عن الشركة', path: '/about', isHash: false },
  { name: 'تواصل معنا', path: '/contact', isHash: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, isHash: boolean) => {
    setMobileMenuOpen(false);
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-full border-2 border-[#D9B372] shadow-[0_8px_30px_rgba(217,179,114,0.22)] overflow-hidden ${
          isScrolled
            ? 'bg-gradient-to-l from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark/95 backdrop-blur-md py-2 px-4 sm:px-6'
            : 'bg-gradient-to-l from-oqab-maroon via-[#6E0E29] to-oqab-maroon-dark py-2.5 px-5 sm:px-7'
        }`}
      >
        {/* لمعة ذهبية علوية وسفلية داخل الناف بار */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1.5px] bg-gradient-to-r from-transparent via-[#F3D79B] to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D9B372] to-transparent opacity-60 pointer-events-none" />

        <div className="flex items-center justify-between relative z-10">
          
          {/* اللوجو بحجم متوازن مع إطار ذهبي واضح */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-oqab-cream px-5 py-1.5 rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(217,179,114,0.35)] border-2 border-[#D9B372] cursor-pointer"
            >
              <span className="text-oqab-maroon font-extrabold text-xl sm:text-2xl leading-tight tracking-wide">
                نَقْرَة
              </span>
              <span className="font-en text-oqab-maroon font-bold text-[9px] tracking-[0.26em] uppercase -mt-0.5">
                NAQRAH
              </span>
            </Link>
          </motion.div>

          {/* روابط الناف بار بمقاس وسط أنيق وإطار ذهبي */}
          <nav
            className="hidden md:flex items-center gap-1.5 bg-black/20 p-1.5 rounded-full border border-[#D9B372]/50 shadow-inner"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => {
              const isActive =
                !link.isHash && location.pathname === link.path;
              const isHighlighted =
                hoveredIndex !== null ? hoveredIndex === index : isActive;

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.path, link.isHash)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative px-5 py-2 rounded-full text-sm lg:text-[15px] font-bold transition-colors duration-200 z-10 ${
                    isHighlighted
                      ? 'text-oqab-maroon'
                      : 'text-[#F7E7CE] hover:text-white'
                  }`}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF3E6] border border-[#D9B372] rounded-full shadow-[0_2px_12px_rgba(217,179,114,0.4)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* زر اطلب خدمة باللون الذهبي الفخم */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D9B372] via-[#F1D399] to-[#D9B372] text-oqab-maroon px-5 py-2.5 rounded-full text-sm font-extrabold shadow-[0_4px_15px_rgba(217,179,114,0.35)] hover:brightness-105 border border-white/60 transition-all duration-200"
              >
                <span>اطلب خدمة</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* زر القائمة للموبايل بلمسة ذهبية */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#D9B372] hover:bg-[#D9B372] hover:text-oqab-maroon border border-[#D9B372]/50 p-2 rounded-full transition-colors focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* قائمة الموبايل بإطار ولمسات ذهبية */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden max-w-6xl mx-auto mt-2.5 bg-oqab-maroon/95 backdrop-blur-lg rounded-3xl border-2 border-[#D9B372] shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="p-4 space-y-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.path, link.isHash)}
                  className="w-full text-right block px-4 py-3 rounded-2xl text-[#F7E7CE] hover:bg-[#D9B372] hover:text-oqab-maroon text-base font-bold transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D9B372] via-[#F1D399] to-[#D9B372] text-oqab-maroon px-4 py-3 rounded-2xl text-sm font-extrabold shadow-md"
                >
                  <span>اطلب خدمتك الآن</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}