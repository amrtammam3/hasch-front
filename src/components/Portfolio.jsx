import React from 'react';
import portfolio1 from '../assets/images/portfolio1.png';
import portfolio2 from '../assets/images/portfolio2.png';
import portfolio3 from '../assets/images/portfolio3.png';
import portfolio6 from '../assets/images/portfolio6.png';



const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Get it done',
      image: portfolio1,
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Welcome to Flash',
      image: portfolio2,
      category: 'UI/UX Design'
    },
    {
      id: 3,
      title: 'Nature',
      image: portfolio3,
      category: 'Photography'
    },
    {
      id: 4,
      title: 'Digital Art',
      image: portfolio2,
      category: 'Digital Art'
    },
    {
      id: 5,
      title: 'Modern Design',
      image: portfolio2,
      category: 'Web Design'
    },
    {
      id: 6,
      title: 'Nature Beauty',
      image: portfolio6,
      category: 'Photography'
    }
  ];

  return (
    <div className="bg-[#1A0B2E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1DBFFE] mb-4">
            Our Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-300 text-sm">{project.category}</p>
                </div>
              </div>

              {/* Decorative Texts (Optional, based on previous context) */}
              <div className="absolute top-4 left-4 text-blue-400 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                PORTFOLIO
              </div>
              <div className="absolute top-10 right-4 text-blue-400 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DESIGN
              </div>
            </div>
          ))}
        </div>

        {/* View More Button below the cards on the far right */}
        <div className="flex justify-end mt-14">
          <button
            className="text-white px-6 py-2 rounded-lg hover:bg-gradient-to-b hover:from-[#16A8E0] hover:to-[#3A2E7B] transition"
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

export default Portfolio;