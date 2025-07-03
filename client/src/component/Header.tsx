
function Header() {
  return (
   <header className="min-w-[50%] py-2 px-4 bg-white/10 backdrop-blur-lg rounded-2xl flex gap-12 justify-between items-center">
       <h2 className="text-sm md:text-xl lg:text-2xl font-black font-logo text-slate-100 lg:tracking-widest ">GeneThink</h2>
      <nav>
        <a href="https://jarsportfolio.vercel.app/" className="btn btn-sm  md:btn-md btn-secondary whitespace-nowrap rounded-2xl font-primary">SEE PORTFOLIO</a>
      </nav>
   </header>
  )
}

export default Header
