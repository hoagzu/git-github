import React, { useCallback, useMemo } from 'react';

function Header() {


  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-dark-900 text-white">
      <div className="text-2xl font-bold">Dark Weather</div>
      <div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Download App</a>
          <a href="#" className="hover:text-gray-300">Contact us</a>
        </div>
      </div>
      <button className="px-4 py-2 bg-cyan-800 rounded-lg hover:bg-cyan-900">
        Sign up
      </button>
    </nav>
  );
}

export default React.memo(Header);
