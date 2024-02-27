import PropTypes from 'prop-types';

const WeeklyItem = ({dailyData}) => {
    return(
        <>
            <h4>Weekly Item</h4>
            <p>{dailyData.datetime}</p>
            <p>{dailyData.conditions}</p>
            <p>{dailyData.tempmax}</p>
            <p>{dailyData.tempmin}</p>
        </>
    )
}

WeeklyItem.propTypes = {
    dailyData: PropTypes.object
}

export default WeeklyItem