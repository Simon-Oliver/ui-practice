import styles from './test.module.css';

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [isDark, setDarkTheme] = useState(false);

  const onBTNClick = () => {
    setDarkTheme(!isDark);
    console.log(document.documentElement);
    document.documentElement.style.setProperty('--color-secondary', isDark ? 'blue' : 'red');
  };

  return (
    <div>
      <p>{`${isDark}`}</p>
      <button className={styles.button} onClick={() => onBTNClick()}>
        Click me
      </button>
    </div>
  );
}

export default Example;
