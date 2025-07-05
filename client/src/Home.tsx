import { useEffect, useRef, useState } from "react";
import bg from "./assets/dark-mosaic (1).png";
import Header from "./component/Header";
import Hero from "./component/Hero";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { courseList } from "./assets/data";
import CourseCard from "./component/Card";

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

 useEffect(() => {
  if (
    !vantaEffect &&
    typeof window !== "undefined" &&
    vantaRef.current &&
    window.innerWidth >= 1024
  ) {
    const effect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.0,
      minWidth: 100.0,
      scale: 0.8,
      scaleMobile: 0.8,
      color: 0x82227,
      backgroundColor: 0x0,
      size: 0.5,
    });
    setVantaEffect(effect);
  }

  return () => {
    vantaEffect?.destroy?.();
  };
}, [vantaEffect]);


  return (
    <main className=" min-w-[320px] max-w-[1550px] w-full mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-500"     >
      <section
        ref={vantaRef}
        className="w-full  min-h-[700px] md:min-h-[800px] flex flex-col items-center p-4 lg:p-8"
      style={{backgroundImage : `url(${bg})`}}
      >
        <Header />
        <Hero />
      </section>

      <section className="w-full min-h-[900px] px-4  text-white py-24 lg:bg-black">
        <h2
          id="courselist"
          className="text-2xl px-2 font-bold mb-8 text-center lg:text-4xl font-primary"
        >
          Choose Your Field to Start Generating Thesis Ideas
        </h2>

        <div className="w-full bg-gray-900 p-6 rounded-2xl grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center max-w-[1350px] mx-auto">
          {courseList.map((box, index) => (
            <CourseCard
              key={index}
              course={box.course}
              icon={box.icon}
              description={box.description}
            />
          ))}

          {/* Custom Course Box */}
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
      </section>
    </main>
  );
}

export default Home;
