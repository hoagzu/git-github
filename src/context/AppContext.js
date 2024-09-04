// src/WeatherContext.js
import React, { createContext, useState, useCallback, useEffect, useMemo } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const api = {
  key: "952e7dcf69377d72e47dd606c5e88aee",
  base: `https://api.openweathermap.org/data/2.5/`,
};

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      axios
        .get(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then(res =>{
          console.log(res.data);
          setWeather(res.data);
        })
        .catch(() => setWeather(null)); // Reset weather if the API call fails
    
      }
    
  }, [city]);
      
  const handleKeyPress = useCallback((search) => {
    if (search) {
      setCity(search);
    }
  }, []);

  // Sử dụng useMemo để memoize giá trị weatherContextValue
  const weatherContextValue = useMemo(() => ({
    weather,
    city,
    setCity,
    handleKeyPress
  }), [weather, city, handleKeyPress]);
  
  return (
    <WeatherContext.Provider value={weatherContextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
