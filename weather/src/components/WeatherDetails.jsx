import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import PropTypes from 'prop-types';

const WeatherDetails = ({weather_data}) => {
    const {currentConditions, days} = weather_data;

    return(
        <>
            <h2>WeatherDetails</h2>
            <CurrentWeather currentConditions={currentConditions} day={days[0]}/>
            <HourlyForecast hours={days[0].hours} />
            <WeeklyForecast days={days} />
        </>
    )
}

WeatherDetails.propTypes = {
    weather_data: PropTypes.object,
    currentConditions: PropTypes.object,
    days: PropTypes.array
};

export default WeatherDetails