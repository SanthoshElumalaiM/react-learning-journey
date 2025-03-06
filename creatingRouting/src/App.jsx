import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<ContactUs/>} ></Route>
      </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App