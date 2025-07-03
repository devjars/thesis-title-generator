
function Hero() {
  return (
    <div className="w-full  flex flex-col justify-center items-center text-center px-6 py-38 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-logo">
        Unlock Brilliance with <span className="text-secondary lg:text-accent">Genithink</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-300">
        Your AI-powered assistant for generating thesis titles and research ideas —
        intelligently tailored for every field.
      </p>

      <button className="btn btn-secondary lg:btn-accent  lg:btn-wide lg:py-6 font-medium lg:text-sm font-primary rounded-full mt-8">Start Generating Ideas</button>
     

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-sm text-gray-400">
         <div className="bg-white/10 p-4 rounded-md border border-white/20">
          🧩 No Login Required — Just Ask
        </div>
        <div className="bg-white/10  p-4 rounded-md border border-white/20">
          🎓 Tailored for Your Course
        </div>
        <div className="bg-white/10 p-4 rounded-md  d-md border border-white/20">
          ⚡ Instant & Unlimited Idea Generation
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
