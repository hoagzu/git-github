// src/component/Search.js
import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../context/AppContext';

function Search() {
  const [search, setSearch] = useState("");
  const { handleKeyPress } = useContext(WeatherContext);

  const toggleColdestMenu = () => {
    // Logic của bạn
  };

  useEffect(() => {
    document.title = `thời tiết của ${search}`;
  }, [search]);

  return (
    <div className="flex w-full justify-around space-x-96 py-8">
      <div>
        <input
          value={search}
          type="text"
          placeholder="Search Here"
          className="px-4 py-2 rounded-lg bg-slate-700 text-white"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleKeyPress(search)}
        />
      </div>
      <div className='border-none rounded-lg flex flex-row'>
        {/* Nút và menu */}
      </div>
    </div>
  );
}

export default Search;
