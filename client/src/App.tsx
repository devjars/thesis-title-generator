
  import './App.css'
  import Home from './Home'
  import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
  import { ChatProvider } from './Context/MessageContext'
  import { lazy, Suspense } from 'react'


  const Chatdekstoppage = lazy(()=> import('./Pages/Chatdekstoppage'))
  const Chatmobilepage = lazy(()=> import('./Pages/Chatmobilepage'))



  function App() {


    return (
      <Router>
      <ChatProvider>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Routes>
          <Route path='/' element={ <Home/>} />
      
          <Route path='/ask/ai' element={ <Chatdekstoppage/>} />
      
          <Route path='/ask/ai/:field' element={<Chatmobilepage/>} />
        </Routes>
        </Suspense>
      </ChatProvider>

      </Router>
    )
  }

  export default App
