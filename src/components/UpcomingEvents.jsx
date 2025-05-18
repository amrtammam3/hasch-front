import React from 'react';
import event from '../assets/images/event.png';

// Event card for displaying event details
const EventCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
      <div className="relative w-full max-w-[520px] mx-auto">
        <div className="absolute top-12 left-0 w-full h-[360px] rounded-lg bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] z-0"></div>
        <div className="absolute -left-4 top-0 z-10">
          <div className="grid grid-cols-4 gap-[7px]">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-[6px] h-[6px] bg-[#16A8E0] rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="relative ml-8 z-10">
          <img
            src={event}
            alt="Event"
            className="w-full h-[360px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight text-center lg:text-left">
          Welcome To The Digital Marketing<br /> Meetup 2025
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-center lg:text-left">
          Educational And Promotional Live Streamed Sessions Where Experts
          Discuss Industry Trends, Product Demos, Q&A Sessions
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">Date:</h3>
            <p className="text-gray-300 text-lg sm:text-xl">22 - 04 - 2025</p>
          </div>
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">Time:</h3>
            <p className="text-gray-300 text-lg sm:text-xl">20:00 KSA</p>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <button
            className="text-white px-6 py-2 rounded-lg mr-20 hover:bg-gradient-to-b hover:from-[#16A8E0] hover:to-[#3A2E7B] transition"
            style={{
              background: 'linear-gradient(to bottom, #1DBFFE, #4A3D8B)',
            }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

// Upcoming events section with a single event card
const UpcomingEvents = () => {
  return (
    <div className="bg-[#13022E] min-h-screen relative overflow-hidden py-20 px-4">
      <div className="absolute top-0 left-0">
        <div className="w-40 h-40 rounded-full border-2 border-[#3A2E7B] opacity-30"></div>
      </div>
      <div className="absolute -bottom-20 -right-20">
        <div className="w-60 h-60 rounded-full border-2 border-[#3A2E7B] opacity-30"></div>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[#16A8E0] text-2xl sm:text-3xl lg:text-3xl font-bold mb-16 text-center">
          Upcoming Events
        </h1>
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;