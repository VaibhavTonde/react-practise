import React, { useState, useEffect } from 'react';

const UpdateTitle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('State updated');
    document.title = `Clicked ${count} times`;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default UpdateTitle;
