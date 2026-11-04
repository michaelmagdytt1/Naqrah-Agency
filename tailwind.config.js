/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oqab: {
          maroon: '#5E0B22',        // العنابي القرمزي الأساسي لهوية نقرة
          'maroon-hover': '#7A112E', // درجة التفاعل والأزرار
          'maroon-dark': '#3D0615',  // العنابي الداكن للفوتر والخلفيات العميقة
          gold: '#D9B372',          // الذهبي الدافئ المحيط بكلمة نقرة والدوائر
          cream: '#FAF6F4',         // الأبيض اللؤلؤي الدافئ
          border: '#EADLDE',        // حواف ناعمة متناسقة مع التدرج
          muted: '#7A6469',         // لون النصوص الفرعية
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'Inter', 'sans-serif'],
        en: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(94, 11, 34, 0.08)',
        'soft-hover': '0 20px 40px -15px rgba(94, 11, 34, 0.16)',
      }
    },
  },
  plugins: [],
}