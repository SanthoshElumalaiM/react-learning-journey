import React from 'react'

const Product = (prop) => {
  return (
    <>
        <div className="card" key={prop.id}>
                        <img src={prop.image} alt="" />  
                        <h3>{prop.title.slice(0,21)}</h3>
                        <h4>Price:{prop.price}$</h4>
                        <h4>Rating: {prop.rating.rate}</h4>
                        
                        
        </div>

    </>
  )
}

export default Product