import PropTypes from 'prop-types';

const WeeklyItem = ({dailyData}) => {
    const {datetime, icon, tempmax, tempmin} = dailyData;

    return(
        <>
            <h4>Weekly Item</h4>
            <p>{datetime}</p>
            <img src={`../../src/assets/${icon}.svg`} alt="weather condition icon" width="100" height="100" />
            <p>{tempmax.toFixed()}</p>
            <p>{tempmin.toFixed()}</p>
        </>
    )
}

WeeklyItem.propTypes = {
    dailyData: PropTypes.object
}

export default WeeklyItem