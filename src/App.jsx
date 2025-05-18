import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="min-h-screen bg-[#1A0B2E]">
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
  );
}

export default App;