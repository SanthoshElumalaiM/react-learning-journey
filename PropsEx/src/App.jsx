import React from 'react'
import ProfileCard from './Components/ProfileCard'
import Object from './Components/Object'

const App = () => {
  let student={
    sname:"sant",
    sage:22,
    phone:978787

  }
  return (

   
    <div className="out">
      <h1>Props</h1>
      
    <div className="con">
    <ProfileCard productName="Moblie" price="2000"/>
    <ProfileCard productName="Tv" price="19090"/>
    <ProfileCard productName="Tab" price="34567"/>
   
    </div>
      
    <Object stu={student}/>
    </div>
  )
}

export default App