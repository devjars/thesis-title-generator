import bg from "./assets/graphy-dark.png";
import Hero from "./component/Hero";
import { useEffect, useState } from "react";
function Home() {
   const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{

    const handleresize = ()=> setWidth(window.innerWidth)
    
    window.addEventListener('resize', handleresize)
    return()=> window.removeEventListener('resize',handleresize)
    
  },[])
 
  console.log(width)

  return (
    <main 
     style={{backgroundImage : `url(${bg})`}}
      className="min-w-[300px] max-w-[1550px] w-full  mx-auto  flex flex-col items-center ">

       <section className="w-full h-full pt-8 sm:pt-16 bg-gradient-to-r from-stone-900 via-purple-500/5 to-stone-900 flex flex-col items-center "  >
         <Hero/>

      

         
       </section>
         
    </main>
  );
}

export default Home;
 