import { Link } from "react-router-dom"

function Header() {
  return (
 
   <header className= "absolute w-full bg-transparent flex items-center justify-between p-4 lg:p-8">
     <Link to="/">
       <h2 className="text-sm md:text-xl lg:text-2xl font-black font-logo text-slate-100 lg:tracking-widest ">GeneThink</h2>
         </Link>
      <nav>
       <a
  href="https://jarsportfolio.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-sm md:btn-md text-white bg-purple-600 border-0 hover:bg-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap rounded-2xl font-primary"
>
  SEE PORTFOLIO
</a>


      </nav>
   </header>

  )
}

export default Header
