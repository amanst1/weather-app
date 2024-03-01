import PropTypes from 'prop-types';
import HourlyItem from './HourlyItem'

const HourlyForecast = ({hours, date}) => {
    const hourlyForecasts = hours.map(hour => {
        if(hours.indexOf(hour)%3 === 0) {
            return <HourlyItem key={hour.datetime} date={date} hourlyData={hour} />
        }
    })

    return(
        <>
            <h3>HourlyForecast</h3>
            {hourlyForecasts}
        </>
    )
}

HourlyForecast.propTypes = {
    hours: PropTypes.array,
    date: PropTypes.string,
}

export default HourlyForecast