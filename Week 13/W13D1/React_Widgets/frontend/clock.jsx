import React, { useState, useEffect } from 'react';

export default Clock; 

function Clock() {

  const [date, setDate] = useState(new Date());
  // debugger;
  useEffect(() => {
    const newDate = new Date();
    // debugger;
    // setInterval(setDate({newDate}), 1000);
    setDate({newDate});
    return () => {
      setDate({newDate});
    };
  }, [date]);

  if (!date.newDate) return null;
  
  const hour = date.newDate.getHours();
  const minutes = date.newDate.getMinutes();
  const seconds = date.newDate.getSeconds();
  return (
    <div>
      <h1> Clock </h1>
      <div className="clock">
        <li>
          <p className="time">
            Time:
            {hour}:
            {minutes}:
            {seconds}
          </p>
        </li>
      </div>
    </div>
  );
}