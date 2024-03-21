import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({updateInfo}){;
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
     const API_KEY="30c3d2e3fe93f7b0387ed421febc8d6b";

     let getWeatherInfo=async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
       
       let result={
        city:city,
        feels_like:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
       }
       console.log(result)
       return result;
     }
    let handleChange=(event)=>{
     setCity(event.target.value)
    }
    let handleSubmit=async(event)=>{
       event.preventDefault()
       setCity("") 
       let newInfo=await getWeatherInfo();
       updateInfo(newInfo)
      
    }
    return(
        <form className="searchbox" onSubmit={handleSubmit}>
            <label htmlFor="city">City</label>
            <br></br>
            <input placeholder="City" id="city" value={city} onChange={handleChange}/>
            <br></br>
            <button>Search</button>
        </form>
    )
}