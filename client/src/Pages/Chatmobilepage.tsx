import { useEffect, useRef, useState } from "react";
import bg from "../assets/random-grey-variations.png";
import Header from "../component/Header";
import { FaArrowUp } from "react-icons/fa";
import { useChat, type message } from "../Context/MessageContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../component/Error";


function Chatmobilepage() {
  const [width,setwidth] = useState(window.innerWidth)
  const { field } = useParams();
  const { messages, AddMessage, Clear } = useChat();
  const [msg, setmsg] = useState<message | null>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
const [error,seterror] = useState<boolean>(false)


const navigate = useNavigate()
  axios.defaults.withCredentials = true;
    useEffect(()=>{
    const handleresize = ()=> setwidth(window.innerWidth)
      window.addEventListener('resize', handleresize)

      return ()=>window.removeEventListener('resize', handleresize)
      
  },[])
  useEffect(() => {
  if (width >= 1024) {
    navigate("/"); 
  }
}, [width, navigate]);




  // Handle auto-growing textarea height
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const SendMessage = async () => {
    if (msg && msg.message.trim() !== "") {
      AddMessage(msg);
         setmsg({ sender: "Genethink", field: field?? "unknown", message: "" });
      setLoading(true);
      seterror(false)

      try {
        const response = await axios.post(
          `https://thesis-title-generator-bfpa.onrender.com/ai/generate/thesis/title/`,
          msg
        );

        if (response && response.data.success) {
          setTimeout(() => {
            AddMessage({
              sender: "Genethink",
              message: response.data.data.content,
              field: field ?? "",
            });
            setLoading(false);
          }, 1500);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch response", error);
        setLoading(false);
        seterror(true)
      }
      

     
      if (textareaRef.current) {
        textareaRef.current.value = "";
        textareaRef.current.style.height = "auto";
      }
    }
  };

  return (
  
     <div className="w-screen h-[100dvh] max-w-[1550px] max-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-violet-500 mx-auto">
      <div
        className="w-full h-screen flex flex-col items-center pt-4 "
        style={{ backgroundImage: `url('/bg.png')` }}

      >
       <div className="w-[80%] flex justify-center"> <Header /></div>

     

        <div className="w-full  flex-1 flex flex-col items-center my-8 no-scrollbar overflow-y-scroll overflow-x-hidden pt-20">
            {/* {error && <Error Clear={Clear} seterror={()=>seterror(!error)}   />} */}
          {messages.length !== 0 && (
            <div className="min-h-[100px]  w-full flex-1 no-scrollbar overflow-y-auto space-y-4 rounded-md text-white flex flex-col-reverse  ">
              <div className="w-full p-4 overflow-scroll no-scrollbar sm:px-16 md:px-32  lg:px-52 xl:px-80 ">
                {messages.map((chat, index) => (
                  <div
                    key={index}
                    className={`chat  ${chat.sender === "You" ? "chat-end" : "chat-start"}`}
                  >
                    <div className="chat-image avatar">
                      <div className="w-8 lg:w-12 rounded-full">
                        <img
                          alt="avatar"
                          src={`${chat.sender === "Genethink" ? 'https://i.pinimg.com/736x/15/13/0d/15130d602f33418c678cc32b017f5997.jpg' : 'https://media.istockphoto.com/id/92202969/photo/young-chimpanzee-simia-troglodytes.jpg?s=612x612&w=0&k=20&c=f9Li2hM3Dh3IXRxfnuC10Xy-wasHgccKhpZBAK1kpCo='}`}
        />
                      </div>
                    </div>
                    <div className="chat-header text-xs lg:text-lg font-medium">{chat.sender}</div>
                    <div
                      className={`chat-bubble whitespace-pre-wrap text-sm  text-white ${
                        chat.sender === "Genethink" ? "bg-gray-700" : "bg-gray-900"
                      }`}
                    >
                      {chat.message}
                    </div>
                    {chat.sender === "You" && messages.length - 1 === index ? <p>Delivered</p> : ""}
                  </div>
                ))}

                {loading && (
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-8 lg:w-12 rounded-full">
                        <img
                          alt="Genethink Avatar"
                          src="https://i.pinimg.com/736x/15/13/0d/15130d602f33418c678cc32b017f5997.jpg"
                        />
                      </div>
                    </div>
                    <div className="chat-header md:text-lg font-medium text-xs">Genethink</div>
                    <div className="chat-bubble">
                      <span className="animate-pulse flex items-end text-xs md:text-md">
                        Typing <span className="loading loading-dots loading-xs"></span>
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>
          )}

          {messages.length === 0 && (
            <h2 className="mt-24 text-base sm:text-xl font-medium font-primary px-4 text-center text-white">
              {`Start asking Ideas Related to ${field}!`}
            </h2>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              SendMessage();
            }}
            className="w-[90%] max-w-[400px] lg:max-w-[600px] relative flex items-center bg-base-100 backdrop-blur-md rounded-2xl lg:w-[50%] mt-4 border border-gray-600 p-2"
          >
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              placeholder="Send a message..."
              onChange={(e) =>
                setmsg({ sender: "You", field: field ?? "unknown", message: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  SendMessage();
                }
              }}
              className="w-full resize-none rounded-md bg-base-100 p-2 pr-8 lg:text-white placeholder-gray-400 outline-none  min-h-[10px] max-h-[200px] overflow-y-auto transition-all"
            />

            {msg?.message && (
              <button
                type="submit"
                className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-300"
              >
                <FaArrowUp className="text-sm" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatmobilepage;
