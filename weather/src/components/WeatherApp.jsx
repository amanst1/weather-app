//import london_weather from "../../data/sampledata";
import Location from "./Location";
import WeatherDetails from "./WeatherDetails";
import { useEffect, useState } from "react";

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/addis%20ababa/2024-02-27/2024-03-18?unitGroup=metric&key=PNKK9YUZC4NSKPG8WRBXBMXYV&contentType=json')
        .then(res => res.json())
        .then(data => setWeatherData(data))
    }, []);
    
    return(
        <>
            <h1>WeatherApp</h1>
            {weatherData && <Location weather_data={weatherData} /> }
            {weatherData && <WeatherDetails weather_data={weatherData} /> }
        </>
    )
}

export default WeatherApp