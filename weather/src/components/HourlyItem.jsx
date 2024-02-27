import PropTypes from 'prop-types';

const HourlyItem = ({date, hourlyData}) => {
    return(
        <>
            <h4>Hourly Item</h4>
            <p>{date}</p>
            <p>{hourlyData.datetime}</p>
            <p>{hourlyData.conditions}</p>
            <p>{hourlyData.temp}</p>
        </>
    )
}

HourlyItem.propTypes = {
    hourlyData: PropTypes.object,
    date: PropTypes.string,
}

export default HourlyItem