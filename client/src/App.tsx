
import './App.css'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Chatpage from './Pages/Chatpage'
import { ChatProvider } from './Context/MessageContext'
import Footer from './component/Footer'

function App() {

  return (
    <Router>
    <ChatProvider>
        <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/ask/ai/:field' element={ <Chatpage/>} />

      </Routes>
    </ChatProvider>

    <Footer/>
    </Router>
  )
}

export default App
