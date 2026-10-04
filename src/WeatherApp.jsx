
import { useState } from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo] = useState({
        
        city:"Delhi",
        feelsLike: 33.21,
        temp:34.45,
        tempMin:34.45,
        tempMax:34.45,
        humidity:26,
        weather:"clear sky",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };


    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App  </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}