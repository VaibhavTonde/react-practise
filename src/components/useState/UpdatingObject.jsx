import React, { useState } from 'react';

const UpdatingObject = () => {
  const [name, setName] = useState({ fName: '', lName: '' });

  return (
    <>
      <input
        type="text"
        value={name.fName}
        onChange={(e) => setName({ ...name, fName: e.target.value })}
      />

      <input
        type="text"
        value={name.lName}
        onChange={(e) => setName({ ...name, lName: e.target.value })}
      />

      <h1>First Name : {name.fName}</h1>
      <h1>Last Name : {name.lName}</h1>

      <br />

      {JSON.stringify(name)}
    </>
  );
};

export default UpdatingObject;
