import React from 'react';
import mlBackground from '../assets/images/course card 1.png';
import aiBackground from '../assets/images/course card 2.png';
import laravelBackground from '../assets/images/course card 3.png';
import reactBackground from '../assets/images/course card 4.png';

// Course card component to display individual course details
const CourseCard = ({ title, price, isFree, image, rating, students }) => {
  return (
    <div
      className="bg-[#1A0B2E] rounded-lg overflow-hidden relative w-full h-96"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white text-sm">{rating.toFixed(1)} ({students})</span>
        </div>
        <p className="text-white text-sm">30 Hours, 20 Lectures</p>
      </div>
      <div className="absolute bottom-4 right-4 text-blue-400 text-xl font-bold">
        {isFree ? 'Free' : `$${price}`}
      </div>
    </div>
  );
};

// Main courses section displaying a grid of course cards
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Machine Learning Course',
      price: 0,
      isFree: true,
      image: mlBackground,
      rating: 4.8,
      students: 1200
    },
    {
      id: 2,
      title: 'AI Development',
      price: 35,
      isFree: false,
      image: aiBackground,
      rating: 4.8,
      students: 1200
    },
    {
      id: 3,
      title: 'Laravel Development',
      price: 0,
      isFree: true,
      image: laravelBackground,
      rating: 4.7,
      students: 2000
    },
    {
      id: 4,
      title: 'React Native',
      price: 24.99,
      isFree: false,
      image: reactBackground,
      rating: 4.9,
      students: 1500
    }
  ];

  return (
    <div className="bg-[#1A0B2E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1DBFFE] mb-4">
            Our Courses
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
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

export default Courses;