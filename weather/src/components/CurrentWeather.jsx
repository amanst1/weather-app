import PropTypes from 'prop-types';

const CurrentWeather = ({currentConditions, day}) => {
    const {temp, precipprob, windspeed, icon, sunrise, sunset} = currentConditions;
    const {tempmax, tempmin} = day;

    return(
        <>
            <h3>CurrentWeather</h3>
            <p>Temp: {temp}</p>
            <img src={`../../src/assets/${icon}.svg`} alt="weather condition icon" width="100" height="100" />
            <p>High: {tempmax}</p>
            <p>Low: {tempmin}</p>
            <p>Windspeed: {windspeed}</p>
            <p>Rain: {precipprob}</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>

        </>
    )
}

CurrentWeather.propTypes = {
    currentConditions: PropTypes.object,
    day: PropTypes.object,
    temp: PropTypes.number,
    conditions: PropTypes.string,
    tempmax: PropTypes.number,
    tempmin: PropTypes.number,
    windspeed: PropTypes.number,
    precipprob: PropTypes.number,
    sunrise: PropTypes.instanceOf(Date),
    sunset: PropTypes.instanceOf(Date),
}

export default CurrentWeather