import PropTypes from 'prop-types';
import { format } from 'date-fns';

const WeeklyItem = ({dailyData}) => {
    const {datetime, icon, tempmax, tempmin, conditions} = dailyData;

    return(
        <>
            <h4>Weekly Item</h4>

            <p>{format(datetime, 'MM.dd')}</p>

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