import React from 'react'

const box = (props) => {
    
    let image=props.imgSrc;
  return (
    <div>
        <div className="box">
            <img src={image} alt="imgg" />
            <h1>ProductName is :{props.productName}</h1>
            <h1>Price is :{props.price}</h1>
        </div>

    </div>
   
  )
}

export default box