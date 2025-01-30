import React from 'react'
import UseStatesExample from './Components/UseStatesExample'

const App = () => {
  return (
    <>
    {/* <h1>Welcome to react</h1>
    <UseStatesExample/> */}
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>'
      <Route path="/contactUs" element={<ContactUS/>}></Route>
    
    </Routes>
    </BrowserRouter>
      
    </>
  
      
    
  )
}

export default App