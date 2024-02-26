import london_weather from "../../data/sampledata"
import Location from "./Location"
import WeatherDetails from "./WeatherDetails"

const WeatherApp = () => {
    return(
        <>
            <h1>WeatherApp</h1>
            <Location weather_data={london_weather} />
            <WeatherDetails weather_data={london_weather} />
        </>
    )
}

export default WeatherApp