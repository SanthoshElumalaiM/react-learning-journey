import React from 'react'

const List = () => {

  let getData=async()=>{

    let data=await fetch("https://fakestoreapi.com/carts")
    let json=data.json();

  }
  let data=getData()
  return (
    <>
        {
          getData.map((e)=>{
            return(
              <div className="container">
                {e}
              </div>
            )
          })
        }
    </>
  )
}

export default List