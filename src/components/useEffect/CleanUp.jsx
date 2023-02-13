import React, { useState, useEffect } from 'react';

const CleanUp = () => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [toggleMouse, setToggleMouse] = useState(true);

  useEffect(() => {
    console.log('Mouse Event');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      if (xAxis !== 0 || yAxis !== 0) {
        console.log('component unmounted');
        window.removeEventListener('mousemove', logMousePosition);
      }
    };
  }, []);

  const logMousePosition = (e) => {
    setXAxis(e.clientX);
    setYAxis(e.clientY);
  };

  return (
    <>
      <button onClick={() => setToggleMouse(!toggleMouse)}>
        Toggle Mouse Position
      </button>
      {toggleMouse && (
        <>
          X Axis - {xAxis} and Y Axis - {yAxis}
        </>
      )}
    </>
  );
};

export default CleanUp;
