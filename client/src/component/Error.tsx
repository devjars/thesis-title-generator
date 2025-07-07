type props = {
    Clear : ()=>void
    seterror : (value : boolean)=>void
}
function Error({Clear,seterror} : props) {
  return (
     <div className=" absolute top-0 right-0 z-50 w-[90%] max-w-xl mx-auto mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md flex items-start gap-2 animate-fade-in-down">
    <svg
      className="w-6 h-6 mt-1 text-red-500 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      onClick={()=>{Clear(); seterror(false)}}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636" />
    </svg>
    <div>
      <p className="font-semibold">Oops! Something went wrong.</p>
      <p className="text-sm mt-1">We couldn’t process your request at the moment. Please try again later or check your internet connection.</p>
    </div>
  </div>
  )
}

export default Error
