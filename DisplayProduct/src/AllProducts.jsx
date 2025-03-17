import { useEffect, useState } from "react";
import Product from "./Components/Product";

 const AllProducts = () => {

    let[data,setData]=useState([])

    let getData=async()=>{

        let res=await fetch("https://fakestoreapi.com/Products")
        let products=await res.json();
        setData(products)

    }
    
    getData()
    
            

    useEffect(()=>{
        getData()

    },[])
  return (
    <>
       <div className="main"  key={data.id}>  

       {
            
            data.map((e)=>{
                return(
                    <Product image={e.image}title={e.title} price={e.price} rating={e.rating.rate}   />
                )
                
            })
        }
       </div    >
    
    </>
  )
}
export default AllProducts
