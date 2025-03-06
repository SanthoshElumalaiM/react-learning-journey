import React from 'react'

const ListAndKey = () => {
    let subject=["html","css","java","J2EE"]
    let product=[
        {
            id:1,
            productName:"Laptop",
            price:4999
        },
        {
            id:2,
            productName:"mobile",
            price:41209
        },
        {
            id:3,
            productName:"Laptop",
            price:4999
        },
    ]
  return (
    <div>
        <h1>List And Key</h1>
        <ol>
            {
                subject.map((ele,index)=>{
                    return(
                        <li key={index}>{ele}</li>
                    )
                })
            }
        </ol>
        <div className="div">
            
                {
                    product.map((ele)=>{
                        return(<div className="box" key={ele.id}>
                            <h3>productName:{ele.productName}</h3>
                            <h3>price:{ele.price}</h3>
                        </div>
                            
                        )
                    })
                }
           
        </div>
    </div>
  )
}

export default ListAndKey