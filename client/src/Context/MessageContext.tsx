import { createContext, useContext, useState, type ReactNode } from "react";


export type message = {
    sender : "You" | "Genethink"
    field : string
    message : string
}
type messagecontext = {
    messages : message[]
    AddMessage : (newmsg : message)=> void
}

const ChatContex = createContext<messagecontext | undefined > (undefined)

export const ChatProvider = ({children} : {children : ReactNode})=>{

    const [messages, setmessages] = useState<message[]>([])

    const AddMessage = (msg:message)=>{
        setmessages((prev) => [...prev , msg])
    }
    

    return (
        <ChatContex.Provider value={{ messages , AddMessage}}>
                {children}
        </ChatContex.Provider>
    )
}

export const useChat = ()=>{
    const context = useContext(ChatContex)
    if(!context){
        throw new Error ("useChat must be used within a ChatProvider");
        
    }
    return context
}