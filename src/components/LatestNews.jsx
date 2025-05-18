import React from 'react';
import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';

// Latest news section displaying news cards
const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New course release',
      description1: "we've just launched a comprehensive",
      description2: "full stack web development course",
      image: news1,
    },
    {
      id: 2,
      title: 'New course release',
      description1: "we've just launched a comprehensive",
      description2: "full stack web development course",
      image: news2,
    },
    {
      id: 3,
      title: 'New course release',
      description1: "we've just launched a comprehensive",
      description2: "full stack web development course",
      image: news3,
    },
  ];

  return (
    <div
      className="py-20"
      style={{
        background: 'linear-gradient(to right, #13022E, #4A3D8B)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1DBFFE] mb-4">
            Latest News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 aspect-square object-cover"
              />
              <div className="pt-4 text-center">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-white text-sm mb-1">{item.description1}</p>
                <p className="text-white text-sm">{item.description2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-14">
          <button
            className="text-white px-6 py-2 rounded-lg hover:bg-gradient-to-b hover:from-[#16A8E0] hover:to-[#3A2E7B] transition"
            style={{
              background: 'linear-gradient(to bottom, #1DBFFE, #4A3D8B)',
            }}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;