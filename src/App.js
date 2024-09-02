// src/App.js
import React from 'react';
import Search from './component/Search';
import Weather from './component/Weather';
import Header from './component/Header';
import { WeatherProvider } from './context/AppContext';
import img from '../src/img/image.png';

function App() {
  return (
    <WeatherProvider>
      <div className="App bg-cover w-full h-full" style={{ backgroundImage: `url(${img})` }}>
        <Header />
        <Search />
        <Weather />
      </div>
    </WeatherProvider>
  );
}

export default App;
