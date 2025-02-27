import React from 'react'

const ProfileCard = (props) => {

    let {productName,price}=props
  return (
    <div className="card">
        <h1>ProfileCard</h1>
        
        <h1>ProductName:{productName } </h1>
        <h1>ProductName:{price} </h1>
    </div>
  )
}

export default ProfileCard