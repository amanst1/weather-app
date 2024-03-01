//import london_weather from "../../data/sampledata";
import Location from "./Location";
import WeatherDetails from "./WeatherDetails";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const WeatherApp = ({ currentLocation }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');

    let searchQuery = location === '' ? `${currentLocation.latitude},${currentLocation.longitude}` : location;
    
    useEffect(() => {

            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchQuery}?unitGroup=metric&key=PNKK9YUZC4NSKPG8WRBXBMXYV`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
            .catch(err => {
                console.log("Error Reading data " + err);
              });
        
        
    }, [searchQuery]);

    const handleUserSearch = (userInput) => {
        setLocation(userInput);
    }

    return(
        <>
            <h1>WeatherApp</h1>
            {weatherData && <Location weather_data={weatherData} handleUserSearch={handleUserSearch} /> }
            {weatherData && <WeatherDetails weather_data={weatherData} /> }
        </>
    )
}

WeatherApp.propTypes = {
    currentLocation: PropTypes.object,
}

export default WeatherApp