import React from 'react'
import {BrowserRouter,Routes,Route}from  'react-router-dom'
import NavBar from './Component/NavBar'
import Props from './Component/Props'
import Conditional from './Component/Conditional'
import List from './Component/List'
import Useref from './Component/Useref'
import UseEffect from './Component/UseEffect'
import Froms from './Component/Forms'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/Props' element={<Props/>}></Route>
              <Route path='/Condition' element={<Conditional/>}></Route>
              <Route path='/List' element={<List/>}></Route>
              <Route path='/UseRef' element={<Useref/>}></Route>
              <Route path='/UseEffect' element={<UseEffect/>}></Route>
              <Route path='/Forms' element={<Froms/>}></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App