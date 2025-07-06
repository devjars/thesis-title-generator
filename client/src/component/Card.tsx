import React from 'react';

import type { Course } from '../assets/data';
import { Link } from 'react-router-dom';


const CourseCard: React.FC<Course> = ({ icon: Icon, course, description }) => {

  return (
    <Link to={`/ask/ai/${course}`} className="relative w-full max-w-[400px] rounded-2xl overflow-hidden bg-blue-900/20 border border-[#ffffff22] backdrop-blur-md cursor-pointer group lg:max-w-[450px]">


  <div className=" p-6 text-white z-20" >
    <div className="text-4xl mb-4 text-white">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold mb-2">{course}</h3>  
    <p className="text-sm opacity-80">{description}</p>
  </div>
</Link>

  );
};

export default CourseCard;
