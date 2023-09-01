import React, { useState, useEffect } from 'react';
import Main from './Main';
import MainNav from "./MainNav";
import "./index.css";


function Menubar({ element }) {
  const [navData, setNavData] = useState(element);
  const [uniqueFoodTimes, setUniqueFoodTimes] = useState([]);

  useEffect(() => {
    const foodTimes = new Set(element.map(item => item.foodTime));
    setUniqueFoodTimes([...foodTimes]);
  }, [element]);

  const filterData = (category) => {
    if (category === 'All') {
      setNavData(element);
    } else {
      const dataofitem = element.filter((e) => e.foodTime === category);
      setNavData(dataofitem);
    }
  };

  return (
    <div className='bodydiv'>
    <MainNav/>
      <div className='nav-bar flex'>
        <div className='middlebar flex'>
          {uniqueFoodTimes.map((foodTime) => (
            <button
              key={foodTime}
              className={`hover-lnk ${foodTime.toLowerCase()}`}
              onClick={() => filterData(foodTime)}
            >
              {foodTime}
            </button>
          ))}
          <button className='hover-lnk all' onClick={() => filterData('All')}>
            All
          </button>
        </div>
      </div>
      <Main Data={navData} />
    </div>
  );
}

export default Menubar;
