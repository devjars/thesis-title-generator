import { courseList } from "./assets/data";

import CourseCard from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
function Home() {
   

  return (
    <main id="home"
     style={{ backgroundImage: `url('/bg.png')` }}
        className="min-w-[300px] max-w-[1550px] w-full  mx-auto  flex flex-col items-center ">
        <Header/>
       <section className="w-full h-full pt-8 sm:pt-16 bg-gradient-to-r from-stone-900 via-purple-500/5 to-stone-900 flex flex-col items-center "  >
         <Hero/>

          <h2 id="courselist" className="text-center text-xl font-primary px-4 lg:hidden"> Choose Your Field to Start Generating Thesis Ideas</h2>
         <div className="w-[95%] mt-8 grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-2  md:grid-cols-3 lg:hidden pb-16">
            {courseList.map((course,index)=>(
              <CourseCard key={index} course={course.course} icon={course.icon} description={course.description}/>
            ))}
              <div className="w-full max-w-[400px] bg-blue-900/20 border border-[#ffffff22] backdrop-blur-md shadow-lg rounded-2xl p-6  hover:shadow-purple-700/30 transition-transform duration-300 flex flex-col justify-between lg:max-w-[450px]">
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

      

            <Footer/>
         
       </section>
       
         
    </main>
  );
}

export default Home;
 