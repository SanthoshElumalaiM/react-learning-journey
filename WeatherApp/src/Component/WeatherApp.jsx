import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

    let [search,setSearch]=useState("")
    let [cityData,setCityData]=useState("")   
    
    
    let getData=async()=>{
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=88c505d6cfc2336b3ffb631b9a76d116`)
        let data=await res.json();
        // console.log(data);
        setCityData(data)
        
    }
    useEffect(()=>{
        getData()
    },[search])

    
    
  return (
    <>
        <div className="outer">

            <div className="inner">
                <div className="box">
                    <input type="text" placeholder='Enter the city' onChange={(e)=>setSearch(e.target.value)} />
                    <button onClick={getData}>submit</button>
                    
                </div>
                
                {
                    search?<div className="info">
                    <h4>{search.name}</h4>
                    {/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */}
                    <h2>{cityData.main.temp}&deg; C</h2>
                    <p>Min:{cityData.main.temp_min}&deg; C | Max:{cityData.main.temp_max}&deg; C </p>
                    </div>:<p>Data Not Found</p>

                }
            </div>
        </div>
    
    </>
  )
}

export default WeatherApp