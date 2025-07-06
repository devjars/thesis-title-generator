
import { courseList } from "../assets/data";
import CourseCard from './Card';

function Mobilelist() {
  return (
    <div className="w-full">
          {courseList.map((course,index)=>(
                  <CourseCard key={index} course={course.course} description={course.description} icon={course.icon}>
                  </CourseCard>
                ))}
                <div className="w-full max-w-[400px] bg-blue-900/20 border border-[#ffffff22] backdrop-blur-md shadow-lg rounded-2xl p-6 hover:shadow-purple-700/30 transition-transform duration-300 flex flex-col justify-between lg:max-w-[450px]">
            <h3 className="text-xl font-semibold mb-4">Can't find your course?</h3>
            <input
              type="text"
              placeholder="Type your course here"
              className="w-full p-2 mb-3 rounded-md bg-black/30 border border-gray-500 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-all">
              Continue
            </button>
          </div> 
      </div>
  )
}

export default Mobilelist
