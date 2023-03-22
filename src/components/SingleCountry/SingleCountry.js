import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    const {name, population, area, region, flags} = props.country;
    return (
        <div className='single-country'>

            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common} </h2>
            <h4>Total Population: {population}</h4>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default SingleCountry;