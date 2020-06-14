import React, { useState, useEffect } from 'react';
import styles from './rpi.module.css';

const Rpi = () => {
  const [items, setItems] = useState({ count: 0 });
  const [scrollDepth, setScroll] = useState(0);

  const updateState = (num) => {
    const top = document.querySelector('.rpi_bottom__2J3TI').offsetTop;
    document.documentElement.scrollTo(0, top) || document.body.scrollTo(0, top);
    setItems({ count: items.count + num });
  };

  const getScroll = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll);
    setScroll(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScroll);
  });

  return (
    <div>
      <h1>Raspberry Pi</h1>
      <p>{items.count}</p>
      <p>{scrollDepth}</p>
      <button onClick={() => updateState(5)}>Click Me</button>
      <div className={styles.bottom}>
        <div className={styles['item-left']}></div>
        <div className={styles['item-rigth']}></div>
      </div>
    </div>
  );
};

export default Rpi;
