import React from 'react';
import bg from "../assets/random-grey-variations.png"
import type { Course } from '../assets/data';



const CourseCard: React.FC<Course> = ({ icon: Icon, course, description }) => {
  return (
  <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden border border-accent/30 cursor-pointer group lg:max-w-[450px] ">
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black via-black/80 to-purple-400/80 z-10 "
  ></div>

  <div className="relative p-6 text-white z-20" style={{ backgroundImage: `url(${bg})` }}>
    <div className="text-4xl mb-4 text-accent">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold mb-2">{course}</h3>  
    <p className="text-sm opacity-80">{description}</p>
  </div>
</div>

  );
};

export default CourseCard;
