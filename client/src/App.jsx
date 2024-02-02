
import './App.css'

import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './page/Home'
import About from './page/About'
import Register from './page/Register'
import Login from './page/Login'
import Contact from './page/Contact'
import Navbar from './components/Navbar'
 
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/co" element={<Contact/>} />
       </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
