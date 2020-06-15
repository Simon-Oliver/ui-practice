import React, { useState, useEffect } from 'react';
import { Module } from '../../components';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const Home = () => {
  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  const icon = <AccessAlarm style={{ fontSize: 80 }}></AccessAlarm>;

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
      <Module name="Test" icon={icon}></Module>
      <p>{data.data}</p>
    </div>
  );
};

export default Home;
