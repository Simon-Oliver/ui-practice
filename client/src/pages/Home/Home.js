import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded === false) {
      fetch('http://localhost:5000/test')
        .then((res) => res.json())
        .then((data) => {
          console.log('----------', data);
          setData(data);
          setLoaded(true);
          console.log('isloaded ------------>', isLoaded);
        });
    }
  });
  return (
    <div>
      <h1>Home</h1>
      <p>{data.data}</p>
    </div>
  );
};

export default Home;
