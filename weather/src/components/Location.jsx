import PropTypes from 'prop-types';

const Location = ({weather_data}) => {
    const { name } = weather_data;
    const date = new Date();
    // const month = date.getMonth() + 1;
    // const weekDay = date.getDay();
    // const today = date.getDate();

    return(
        <>
            <h2>Location</h2>
            <input type='text' />
            <h4>{name}</h4>
            <p> {date.toDateString()}  </p>
        </>
    )
}

Location.propTypes = {
    weather_data: PropTypes.object,
    name: PropTypes.string,
};

export default Location