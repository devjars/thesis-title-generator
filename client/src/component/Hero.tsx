import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-38 lg:max-h-screen text-white overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-logo">
        Unlock Brilliance with <span className="text-purple-400">Genithink</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8 text-accent md:text-gray-300">
        Your AI-powered assistant for generating thesis titles and research ideas — intelligently tailored for every field.
      </p>

      {/* Mobile Button - Scroll */}
      <ScrollLink
        to="courselist"
        smooth={true}
        duration={600}
        offset={-100}
        className=" lg:hidden btn bg-purple-600 text-white hover:bg-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm font-primary rounded-full mt-8 border-0 cursor-pointer"
      >
        Start Generating Ideas
      </ScrollLink>

      {/* Desktop Button - Navigate */}
      <Link
        to="/ask/ai"
        className="hidden lg:flex btn bg-purple-600 text-white hover:bg-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm font-primary rounded-full mt-8 border-0"
      >
        Start Generating Ideas
      </Link>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-sm text-gray-400">
        <div className="bg-white/10 p-4 rounded-md border border-white/20">🧩 No Login Required — Just Ask</div>
        <div className="bg-white/10 p-4 rounded-md border border-white/20">🎓 Tailored for Your Course</div>
        <div className="bg-white/10 p-4 rounded-md border border-white/20">⚡ Instant & Unlimited Idea Generation</div>
      </div>
    </div>
  );
}

export default Hero;
