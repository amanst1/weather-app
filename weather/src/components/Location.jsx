import PropTypes from 'prop-types';
import { useState } from 'react';

const Location = ({weather_data}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const { address } = weather_data;
    const date = new Date();
    // const month = date.getMonth() + 1;
    // const weekDay = date.getDay();
    // const today = date.getDate();

    const handleInput = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <>
            <h2>Location</h2>
            <input type='text' value={searchTerm} onChange={handleInput} />
            <h4>{address}</h4>
            <p> {date.toDateString()}  </p>
        </>
    )
}

Location.propTypes = {
    weather_data: PropTypes.object,
    address: PropTypes.string,
};

export default Location