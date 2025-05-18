import React, { useState } from 'react';
import groubstudent from '../assets/images/group-photo.png';
import student from '../assets/images/student.png';
import quoteMark from '../assets/images/quote-mark.png';

// Testimonials section with student feedback and navigation
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Salem',
      role: '',
      image: student,
      text: 'This Course is Awesome I Went From Knowing Nothing About Coding\nTo Landing My First Job As A Frontend Developer\nWithin 6 Months',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className="py-20"
      style={{
        background: 'linear-gradient(to right, #4A3D8B, #13022E)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1DBFFE] mb-6">
            See What Our Students Say .....
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            className="p-8 w-full md:w-1/2 relative z-10"
            style={{
              border: '2px dashed',
              borderImage: 'linear-gradient(to right, #1DBFFE, #3F5EA8, #4A3D8B) 20',
              borderImageRepeat: 'stretch',
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white font-semibold text-sm uppercase">
                    {testimonials[currentTestimonial].name}
                  </div>
                </div>
                <div className="w-12 h-12">
                  <img
                    src={quoteMark}
                    alt="Quote mark"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-white text-base leading-relaxed whitespace-pre-line">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img
                src={groubstudent}
                alt="Students working together"
                className="w-full h-72 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index % testimonials.length)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentTestimonial === (index % testimonials.length)
                  ? 'bg-[#4A3D8B]'
                  : 'bg-[#C1C1F4] opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;