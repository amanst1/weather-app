import WeeklyItem from './WeeklyItem';
import PropTypes from 'prop-types';

const WeeklyForecast = ({days}) => {

    const dailyForecasts = days.map(day => {
        
        if(days.indexOf(day) > 0) {
            return <WeeklyItem key={day.datetime} dailyData={day} />
        }
    });

    return(
        <>
            <h3>Weekly Forecast</h3>
            {dailyForecasts}
            
        </>
    )
}

WeeklyForecast.propTypes = {
    days: PropTypes.array,
}

export default WeeklyForecast