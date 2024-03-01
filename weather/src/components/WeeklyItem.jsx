import PropTypes from 'prop-types';

const WeeklyItem = ({dailyData}) => {
    const {datetime, icon, tempmax, tempmin, conditions} = dailyData;

    return(
        <>
            <h4>Weekly Item</h4>

            <p>{datetime.slice(5, 10)}</p>

            <img src={`../../src/assets/${icon}.svg`} alt="weather condition icon" width="100" height="100" />
            <p>{conditions}</p>

            <p>{tempmax.toFixed()}°C</p>
            <p>{tempmin.toFixed()}°C</p>
        </>
    )
}

WeeklyItem.propTypes = {
    dailyData: PropTypes.object
}

export default WeeklyItem