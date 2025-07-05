import { Link } from "react-router-dom"

function Header() {
  return (
 
   <header className="min-w-[300px] w-full max-w-[600px] py-2 px-4 bg-white/5 backdrop-blur-sm rounded-2xl flex gap-12 justify-between items-center">
     <Link to="/">
       <h2 className="text-sm md:text-xl lg:text-2xl font-black font-logo text-slate-100 lg:tracking-widest ">GeneThink</h2>
         </Link>
      <nav>
       <a
  href="https://jarsportfolio.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-sm md:btn-md bg-purple-500 border-0 hover:bg-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap rounded-2xl font-primary"
>
  SEE PORTFOLIO
</a>


      </nav>
   </header>

  )
}

export default Header
