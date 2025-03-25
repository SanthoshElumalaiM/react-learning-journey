import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

    let [search,setSearch]=useState("chennai")
    let [cityData,setCityData]=useState(null)   
    
    
    let getData=async()=>{
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=88c505d6cfc2336b3ffb631b9a76d116`)
        let data=await res.json();
        // console.log(data);
        setCityData(data.main)
        
    }
    useEffect(()=>{
        getData()
    },[])

    
    
  return (
    <>
        <div className="outer">

            <div className="inner">
                <div className="box">
                    <input type="text" placeholder='Enter the city' onChange={(e)=>setSearch(e.target.value)} />
                    <button onClick={getData}>submit</button>
                    
                </div>
                
                {
                    cityData?<div className="info">
                    <h4>{search}</h4>
                    {/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */}
                    <h2>{cityData.temp}&deg; C</h2>
                    <p>Min:{cityData.temp_min}&deg; C | Max:{cityData.temp_max}&deg; C </p>
                    </div>:<p>Data Not Found</p>

                }
            </div>
        </div>
    
    </>
  )
}

export default WeatherApp