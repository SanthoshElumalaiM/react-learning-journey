import React from 'react'
import ProfileCard from './Components/ProfileCard'

const App = () => {
  return (
    <div className="out">
      <h1>Props</h1>
      
    <div className="con">
    <ProfileCard productName="Moblie" price="2000"/>
    <ProfileCard productName="Tv" price="19090"/>
    <ProfileCard productName="Tab" price="34567"/>
    </div>
      
    </div>
  )
}

export default App