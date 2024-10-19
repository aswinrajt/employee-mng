import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>

<Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
<Footer />
<ToastContainer />

    
      
    </>
  )
}

export default App
