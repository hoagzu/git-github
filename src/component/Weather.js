// Weather.js
import React, { useContext } from 'react';
import { WeatherContext } from '../context/AppContext';

const Weather = () => {
  const{ weather}= useContext(WeatherContext);
  
  const date = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        return `${day}`;
    }

    if (!weather) return null;


  return (
    <div className='grid place-items-center text-white border w-[358px] h-[389px] rounded-[20px] space-y-4'>
                    
                    <div className='flex space-x-2'>
                        <span className='border-none font-bold text-xl pt-2'>{weather.name}</span>
                        <span className='border-none text-2xl'>{weather.main?.temp}°C</span>
                    </div>
                    <div className='border-none'>{date(new Date())}</div>
                    <div className='border-none text-lg'>Wind speed:{weather.wind.speed} m/s</div>
                    <div className='border-none font-bold'>{weather.weather?.[0]?.description}</div>
                </div>

  );
};

export default Weather;
