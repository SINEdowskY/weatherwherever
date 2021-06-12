import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions.js';


const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj,setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6596b76e31msh3dbf078b47c6c90p1fb752jsn10190ec83d02",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})

        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
        <div>
            <h2>Find Current Weather</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>
                    <input 
                        type="radio"
                        name="units"
                        checked = {unit === "metric"}
                        value = "metric"
                        onChange = {(e) => setUnit(e.target.value)}
                    
                    />
                    Celsius
                </label>
                <label>
                    <input 
                        type="radio"
                        name="units"
                        checked = {unit === "imperial"}
                        value = "imperial"
                        onChange = {(e) => setUnit(e.target.value)}
                    
                    />
                    Fahrenheit
                </label>
                <button type="submit">Get Forecast</button>
            </form>
            {JSON.stringify(responseObj)}
            <Conditions responseObj={responseObj}/>
        </div>
    )
}

export default Forecast;