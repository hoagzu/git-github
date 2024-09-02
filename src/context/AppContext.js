// src/WeatherContext.js
import React, { createContext, useState, useCallback, useEffect } from 'react';
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
        .then(response => setWeather(response.data))
        .catch(() => setWeather(null)); // Reset weather if the API call fails
    }
  }, [city]);

  const handleKeyPress = useCallback((search) => {
    if (search) {
      setCity(search);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, city, setCity, handleKeyPress }}>
      {children}
    </WeatherContext.Provider>
  );
};
