import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Incremenet
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decremenet
      </button>
    </>
  );
};
