import React from 'react'

const Card = (props) => {

    let{productName,price,image}=props
  return (
    <>
        <div className="card">
            <img src={image} alt="cant show" />
            <h3>Product Name :{productName}</h3>
            <h3>Product price :{price}</h3>
        </div>
    </>
  )
}

export default Card