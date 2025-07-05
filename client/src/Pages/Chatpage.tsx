import { useEffect, useRef, useState } from "react";
import bg from "../assets/random-grey-variations.png";
import Header from "../component/Header";
import { FaArrowUp } from "react-icons/fa";
import { useChat, type message } from "../Context/MessageContext";
import axios from "axios";
import { useParams } from "react-router-dom";

function Chatpage() {
  const { field } = useParams();
  const { messages, AddMessage } = useChat();
  const [msg, setmsg] = useState<message | null>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  axios.defaults.withCredentials = true;

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
       setmsg(null);
      setLoading(true);

      try {
        const response = await axios.post(
          `https://thesis-title-generator-bfpa.onrender.com`,
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
      }

     
      if (textareaRef.current) {
        textareaRef.current.value = "";
        textareaRef.current.style.height = "auto";
      }
    }
  };

  return (
    // <div className="w-screen h-screen max-w-[1550px] max-h-[1000px] overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-violet-500 mx-auto">
    //   <div
    //     className="w-full h-screen flex flex-col items-center pt-4 "
    //     style={{ backgroundImage: `url(${bg})` }}
    //   >
    //    <div className="w-[80%] flex justify-center"> <Header /></div>

    //     <div className="w-full flex-1 flex flex-col items-center my-8 no-scrollbar overflow-y-scroll overflow-x-hidden">
    //       {messages.length !== 0 && (
    //         <div className="min-h-[100px] w-full flex-1 no-scrollbar overflow-y-auto space-y-4 rounded-md text-white flex flex-col-reverse">
    //           <div className="w-full p-4 overflow-scroll no-scrollbar px-80">
    //             {messages.map((chat, index) => (
    //               <div
    //                 key={index}
    //                 className={`chat ${chat.sender === "You" ? "chat-end" : "chat-start"}`}
    //               >
    //                 <div className="chat-image avatar">
    //                   <div className="w-12 rounded-full">
    //                     <img
    //                       alt="avatar"
    //                       src={`${
    //                         chat.sender === "You"
    //                           ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH3lk2-wauPk_3T1-Rou77zH2QYJyokuEBVv1r9Cfprue-eCyyeXzpY3p3y5DfpTL2Cs&usqp=CAU"
    //                           : "https://synthesys.io/blog/wp-content/uploads/2024/02/ai-avatar-1.webp"
    //                       }`}
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="chat-header text-lg font-medium">{chat.sender}</div>
    //                 <div
    //                   className={`chat-bubble whitespace-pre-wrap ${
    //                     chat.sender === "Genethink" ? "bg-black/90" : ""
    //                   }`}
    //                 >
    //                   {chat.message}
    //                 </div>
    //                 {chat.sender === "You" && messages.length - 1 === index ? <p>Delivered</p> : ""}
    //               </div>
    //             ))}

    //             {loading && (
    //               <div className="chat chat-start">
    //                 <div className="chat-image avatar">
    //                   <div className="w-12 rounded-full">
    //                     <img
    //                       alt="Genethink Avatar"
    //                       src="https://synthesys.io/blog/wp-content/uploads/2024/02/ai-avatar-1.webp"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="chat-header text-lg font-medium">Genethink</div>
    //                 <div className="chat-bubble">
    //                   <span className="animate-pulse flex items-end">
    //                     Typing <span className="loading loading-dots loading-xs"></span>
    //                   </span>
    //                 </div>
    //               </div>
    //             )}

    //             <div ref={messagesEndRef} />
    //           </div>
    //         </div>
    //       )}

    //       {messages.length === 0 && (
    //         <h2 className="mt-24 text-xl font-medium font-primary">
    //           {`Start Ideas Related to ${field}!`}
    //         </h2>
    //       )}

    //       <form
    //         onSubmit={(e) => {
    //           e.preventDefault();
    //           SendMessage();
    //         }}
    //         className="relative flex items-center bg-base-100 backdrop-blur-md rounded-2xl w-[50%] mt-4 border border-gray-600 p-2"
    //       >
    //         <textarea
    //           ref={textareaRef}
    //           onInput={handleInput}
    //           placeholder="Send a message..."
    //           onChange={(e) =>
    //             setmsg({ sender: "You", field: field ?? "unknown", message: e.target.value })
    //           }
    //           onKeyDown={(e) => {
    //             if (e.key === "Enter" && !e.shiftKey) {
    //               e.preventDefault();
    //               SendMessage();
    //             }
    //           }}
    //           className="w-full resize-none rounded-md bg-base-100 p-3 pr-14 text-white placeholder-gray-400 outline-none min-h-[50px] max-h-[200px] overflow-y-auto transition-all"
    //         />

    //         {msg?.message && (
    //           <button
    //             onClick={SendMessage}
    //             type="submit"
    //             className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-300"
    //           >
    //             <FaArrowUp className="text-xl" />
    //           </button>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>
     <div className="w-screen h-screen max-w-[1550px] max-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-violet-500 mx-auto">
      <div
        className="w-full h-screen flex flex-col items-center pt-4 "
        style={{ backgroundImage: `url(${bg})` }}
      >
       <div className="w-[80%] flex justify-center"> <Header /></div>

        <div className="w-full  flex-1 flex flex-col items-center my-8 no-scrollbar overflow-y-scroll overflow-x-hidden ">
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
                          src={`${
                            chat.sender === "You"
                              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH3lk2-wauPk_3T1-Rou77zH2QYJyokuEBVv1r9Cfprue-eCyyeXzpY3p3y5DfpTL2Cs&usqp=CAU"
                              : "https://synthesys.io/blog/wp-content/uploads/2024/02/ai-avatar-1.webp"
                          }`}
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
                          src="https://synthesys.io/blog/wp-content/uploads/2024/02/ai-avatar-1.webp"
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
            <h2 className="mt-24 text-xl font-medium font-primary px-4 text-center text-white">
              {`Start Ideas Related to ${field}!`}
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
              className="w-full resize-none rounded-md bg-base-100 p-3 pr-14 lg:text-white placeholder-gray-400 outline-none  min-h-[50px] max-h-[200px] overflow-y-auto transition-all"
            />

            {msg?.message && (
              <button
                type="submit"
                className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-300"
              >
                <FaArrowUp className="text-xl" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
