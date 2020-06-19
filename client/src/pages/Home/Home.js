import React, { useState, useEffect } from 'react';
import { Module } from '../../components';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const Home = () => {
  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  const modules = [
   {
     name: "Test",
     icon: <AccessAlarm style={{ fontSize: 80 }}></AccessAlarm>,
     path: "/rpi"
   },
   {
    name: "Test2",
    icon: <AccessAlarm style={{ fontSize: 80 }}></AccessAlarm>,
    path: "/home"
  }
  ]

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

  const renderList = () => {
    return modules.map(e =>{
     return <Module name={e.name} icon={e.icon} path={e.path}></Module>
    })
  }

  return (
    <div>
      <h1>Home</h1>
      <Grid
      container
      direction="row"
      >
      {renderList()}
      </Grid>
      <p>{data.data}</p>
    </div>
  );
};

export default Home;
