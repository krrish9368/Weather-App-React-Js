import "./InfoBox.css"

export default function InfoBox({info}){

    return(
        <div className="infobox">
           <h1>{info.city}</h1>
           <p>feels_like={info.feels_like}</p>
           <p>Humidity={info.humidity}</p>
           <p>Temp={info.temp}</p>
           <p>Temp_max={info.temp_max}</p>
           <p>Temp_min={info.temp_min}</p>

        </div>
    )
}