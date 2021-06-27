import React from 'react'

const Weather = ({ temprature, city, country, humidity, description, error }) => {
    return (
        <div className='info'>
            {
                temprature &&
                <p className='info-key'>Temprature:
                    <span className='info-value'>
                        {Math.floor(temprature - 273)}°C
                    </span>
                    {/* <hr></hr> */}
                </p>
            }
            {
                city &&
                <p className='info-key'>City:
                    <span className='info-value'>
                        {city}
                    </span>
                    {/* <hr></hr> */}
                </p>
            }
            {
                country &&
                <p className='info-key'>Country:
                    <span className='info-value'>
                        {country}
                    </span>
                    {/* <hr></hr> */}
                </p>
            }
            {
                humidity &&
                <p className='info-key'>Humidity:
                    <span className='info-value'>
                        {humidity}%
                    </span>
                    {/* <hr></hr> */}
                </p>
            }
            {
                description &&
                <p className='info-key'>Description:
                    <span className='info-value'>
                        {description.toUpperCase()}
                    </span>
                </p>
            }
            {
                error &&
                <p className='info-key'>
                    <span className='info-value'>
                        {error}
                    </span>
                </p>
            }

        </div >
    )
}

export default Weather;