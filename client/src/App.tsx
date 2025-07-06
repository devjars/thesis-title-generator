
import './App.css'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ChatProvider } from './Context/MessageContext'
import Chatbox from './Pages/Chatbox'

function App() {

  return (
    <Router>
    <ChatProvider>
        <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/ask/ai' element={ <Chatbox/>} />

      </Routes>
    </ChatProvider>

    </Router>
  )
}

export default App
