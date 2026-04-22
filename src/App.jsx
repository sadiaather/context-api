import React from 'react'
import { BrowserRouter ,Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap'
import './App.css'



const App = () => {
  return (
    <div >
      <BrowserRouter>
     

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App