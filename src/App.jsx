
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import OnlineClasses from './components/OnlineClasses';
// import Testimonials from './components/Testimonials';
// import Courses from './components/Courses';
// import Portfolio from './components/Portfolio';
// import LatestNews from './components/LatestNews';
// import UpcomingEvents from './components/UpcomingEvents';
// import Footer from './components/Footer';

// function App() {
//   const { i18n } = useTranslation();
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     // تحديد اتجاه الصفحة بناءً على اللغة الحالية
//     document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
//   }, [i18n.language]); // يتغير كل ما اللغة تتغير

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   return (
//     <BrowserRouter>
//       <div className="min-h-screen" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
//         <Navbar theme={theme} setTheme={setTheme} />
//         <Hero />
//         <OnlineClasses />
//         <Testimonials />
//         <Courses />
//         <Portfolio />
//         <LatestNews />
//         <UpcomingEvents />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





















// App.js
// Main application component with routing and context providers
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OnlineClasses from './components/OnlineClasses';
import Testimonials from './components/Testimonials';
import Courses from './components/Courses';
import Portfolio from './components/Portfolio';
import LatestNews from './components/LatestNews';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen">
            <Navbar />
            <Hero />
            <OnlineClasses />
            <Testimonials />
            <Courses />
            <Portfolio />
            <LatestNews />
            <UpcomingEvents />
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;