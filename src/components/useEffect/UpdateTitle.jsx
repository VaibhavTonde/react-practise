import React, { useState, useEffect } from 'react';

const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default UpdateTitle;
