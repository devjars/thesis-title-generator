  import {  useEffect, useRef, useState } from "react";
  import { TbLayoutSidebarFilled } from "react-icons/tb";
  import { courseList } from "../assets/data";
  import  Genethinkprofile from "../component/Genethinkprofile";
  import { FaArrowCircleUp } from "react-icons/fa";
  import useTextareaAutoResize from "../component/Inputresize";
  import type { message } from "../Context/MessageContext";
  import { useChat } from "../Context/MessageContext";
  import { FaCircle } from "react-icons/fa";
  import { AiFillHome } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Error from "../component/Error";

  function Chatdekstoppage() {
      const [isopen,setisopen] = useState<boolean>(true)
      const [chosenfield,setchosenfield] = useState<string>("")
      const [TextareaRef, handleInputResize] = useTextareaAutoResize()
      const [newmsg,setnewmsg] = useState<message | null>(null)
      const { messages, AddMessage,Clear } = useChat();
      const NewmessageRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState<boolean>(false);
const [error,seterror] = useState<boolean>(false)
const [width,setwidth] = useState(window.innerWidth)
const navigate = useNavigate()

useEffect(()=>{
  const handleInputResize = ()=>setwidth(window.innerWidth)

  window.addEventListener('resize', handleInputResize)

  return ()=> window.removeEventListener('resize', handleInputResize)
},[])

    useEffect(()=>{
      if(width < 1024){
        navigate('/')
      }
    })

      axios.defaults.withCredentials = true
      const SendMessage = async (e?:React.FormEvent) =>{
        if(e) e.preventDefault()
          if(!newmsg?.message.trim()) return;

        const usermessage = { ...newmsg}
          AddMessage(usermessage)
           setnewmsg({ sender: "Genethink", field: chosenfield, message: "" });
      setLoading(true);
      seterror(false)
          try{
            if(newmsg.message){
           const response = await axios.post(`https://thesis-title-generator-bfpa.onrender.com/ai/generate/thesis/title/`,newmsg );
             if (response && response.data.success) {
          setTimeout(() => {
            AddMessage({
              sender: "Genethink",
              message: response.data.data.content,
              field: chosenfield ?? "",
            });
            setLoading(false);
          }, 1500);
        } else {
          setLoading(false);
         
        }
          }
          }catch(error){
 console.error("Failed to fetch response", error);
            seterror(true)
            setLoading(false)
          }
         
            if (TextareaRef.current) {
    TextareaRef.current.style.height = "auto";
  }

      }

      useEffect(()=>{
        if(NewmessageRef.current){
          NewmessageRef.current.scrollIntoView({behavior : "smooth"})
        }
      },[messages])
      
    return (
    <div className="w-screen h-screen  border border-base-300 bg-base-300 max-w-[1550px] mx-auto">
  <div className="w-full h-full flex">
    <div className={`relative flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden  ${isopen ? 'w-[300px] ' : 'w-[50px] '}
      `}
    >
      <TbLayoutSidebarFilled
        className=" absolute top-0 right-0 text-2xl m-4 cursor-pointer"
        onClick={() => setisopen(!isopen)}
      />
      {isopen && (
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2 mt-1">
            <FaCircle className="text-gray-400" />
            <FaCircle className="text-gray-400" />
            <FaCircle className="text-gray-400" />

          </Link>
          <h2 className="text-xl font-medium font-primary mt-8">Genethink</h2>
          <label className="input mt-8">
    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
    <input type="search" required disabled placeholder="Search field" />
  </label>
  <h2 className="text-gray-400 font-primary mt-8">Fields</h2>
  <ul className="mt-2"> 
    {courseList.map((course,index)=>(
      <li key={index}
      onClick={()=>{ Clear(); setchosenfield(course.course)}}
      className={` p-2 px-3  rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/5 ${course.course === chosenfield ? 'bg-white/5' : ''} `} 
      >{course.course}</li>
    ))}
  </ul>
        </div>
      )}
    </div>

    <div className="relative flex-1  transition-all duration-300 ease-in-out flex flex-col items-center bg-white/5 no-scrollbar  overflow-x-hidden">
     <div className="absolute top-0 left-0 w-full flex items-center justify-between p-2 h-full max-h-[50px]">
         <h2 className=" text-2xl ">{chosenfield}</h2>
         <Link to="/" >
          <AiFillHome className="text-2xl mr-4 hover:scale-105"/>
         </Link>
       </div>
    {chosenfield === "" ? <Genethinkprofile/> :
      <div className="  w-full flex flex-col items-center justify-center h-full  pb-6  no-scrollbar overflow-y-scroll mt-14 border-t border-white/10  ">
    {error && 
 <Error Clear={Clear} seterror={()=>seterror(!error)}  />
}

         {messages.length !== 0  &&  <div className=" w-full h-full flex flex-col justify-end-safe  pb-4  pt-23 overflow-y-scroll px-52">
          {messages.map((chat,index) =>(
              <div key={index} className={`chat ${chat.sender === "You" ? 'chat-end' : 'chat-start'}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src={`${chat.sender === "Genethink" ? 'https://i.pinimg.com/736x/15/13/0d/15130d602f33418c678cc32b017f5997.jpg' : 'https://media.istockphoto.com/id/92202969/photo/young-chimpanzee-simia-troglodytes.jpg?s=612x612&w=0&k=20&c=f9Li2hM3Dh3IXRxfnuC10Xy-wasHgccKhpZBAK1kpCo='}`}
        />
      </div>
    </div>
    <div className="chat-header font-primary text-sm">{chat.sender}</div>
    <div className={`chat-bubble whitespace-pre-wrap ${chat.sender === "Genethink" ? 'bg-base-200' : ''}`}>{chat.message}</div>
    </div>
          ))}
            {loading && (
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Genethink Avatar"
                          src="https://i.pinimg.com/736x/15/13/0d/15130d602f33418c678cc32b017f5997.jpg"
                        />
                      </div>
                    </div>
                    <div className="chat-header  font-medium text-sm">Genethink</div>
                    <div className="chat-bubble">
                      <span className="animate-pulse flex items-end text-xs md:text-md">
                        Typing <span className="loading loading-dots loading-xs"></span>
                      </span>
                    </div>
                  </div>
                )}
          <div ref={NewmessageRef} />
          </div>}
          
          {messages.length === 0 && (
            <h2 className="text-xl font-medium font-primary px-4 text-center text-white py-8 mt-[-10rem]">
              {`Start asking Ideas Related to ${chosenfield}!`}
            </h2>
          )}
            <form
             onSubmit={SendMessage}
              className="bg-base-300    flex items-end w-[55%] p-4 overflow-x-hidden rounded-2xl   resize-none  ">
                    <textarea 
                    ref={TextareaRef}
                    onInput={handleInputResize}
                    placeholder="Ask Idea "
                 value={newmsg?.message || ""}
                    onChange={(e)=>setnewmsg({sender : "You", field : chosenfield , message : e.target.value})}
                    onKeyDown={(e)=>{
                      if(e.key === 'Enter' && !e.shiftKey){
                        e.preventDefault();
                        SendMessage()
                      }
                    }}
                    className="w-full  h-[50px] max-h-[250px]  resize-none outline-0  pr-8 "/>
                   {newmsg?.message &&  <button type="submit" className="  rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-base-100" >
                        <FaArrowCircleUp className=" text-3xl  "/>
                    </button>}
          </form>
          </div>
    
    }
    
    </div>
    
  </div>
 
  </div>
    )
  }

  export default Chatdekstoppage
