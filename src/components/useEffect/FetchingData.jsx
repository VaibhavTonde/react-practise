import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
