import InfoBox from "../InfoBox/InfoBox";
import SearchBox from "../SearchBox/SearchBox";
import {useState} from "react";
import "./Weather.css";


export default function Weather(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feels_like:27,
        humidity:28,
        temp:30.99,
        temp_max:30.99,
        temp_min:29,
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div className="weather">
           <h1>Weather</h1>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
}