import PropTypes from 'prop-types';

const HourlyItem = ({date, hourlyData}) => {
    const {datetime, icon, temp} = hourlyData;

    return(
        <>
            <h4>Hourly Item</h4>
            <p>{date}</p>
            <p>{datetime}</p>
            <img src={`../../src/assets/${icon}.svg`} alt="weather condition icon" width="100" height="100" />
            <p>{temp.toFixed()}</p>
        </>
    )
}

HourlyItem.propTypes = {
    hourlyData: PropTypes.object,
    date: PropTypes.string,
}

export default HourlyItem