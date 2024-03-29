import PropTypes from 'prop-types';
import { format } from 'date-fns';

const HourlyItem = ({date, hourlyData}) => {
    const {datetime, icon, conditions, temp} = hourlyData;

    return(
        <>
            <h4>Hourly Item</h4>

            <p>{format(date, 'MM.dd')}</p>
            <p>{datetime.slice(0,5)}</p>

            <img src={`../../src/assets/${icon}.svg`} alt="weather condition icon" width="100" height="100" />
            <p>{conditions}</p>

            <p>{temp.toFixed()}°C</p>
        </>
    )
}

HourlyItem.propTypes = {
    hourlyData: PropTypes.object,
    date: PropTypes.string,
}

export default HourlyItem