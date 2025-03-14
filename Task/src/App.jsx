import React from 'react'
import Login from './Component/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './Component/Signin'
const App = () => {
  return (
    <>
    <BrowserRouter>
    
        <Routes>
          
             <Route path='/' element={<Login/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App