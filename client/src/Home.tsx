import bg from "./assets/random-grey-variations.png"
import Header from "./component/Header"
import Hero from "./component/Hero"
import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import { courseList } from "./assets/data";
import CourseCard from "./component/Card";

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 0.8,
        scaleMobile: 1.0,
        color: 0x82227,
        backgroundColor: 0x0,
        size: 1.5,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy?.();
    };
  }, [vantaEffect]);

  return (
    <main    className='w-full min-w-[320px] max-w-[1550px] mx-auto ' >
        <section ref={vantaRef} className="w-full h-full md:max-h-[800px] lg:max-h-[900px] flex flex-col items-center  p-4 lg:p-8"  >
            <Header/>
            <Hero/>
            
        </section>

       <section className="w-full min-h-screen px-4 bg-black text-white pt-24">
  <h2 className="text-2xl font-bold mb-8 text-center lg:text-4xl font-primary">Choose Your Field to Start Generating Thesis Ideas</h2>

  <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center sm:grid-cols-2 max-w-[1350px] mx-auto">
    {courseList.map((box, index) => (
      <CourseCard
        key={index}
        course={box.course}
        icon={box.icon}
        description={box.description}
      />
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
 
</section>

    </main>
  )
}

export default Home



