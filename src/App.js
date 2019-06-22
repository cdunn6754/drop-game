import React, { useState, useEffect } from 'react';

import './App.css';
import FallingCircle from './FallingCircle';
import { delay } from './delay';

function App() {

  const [dropTop, setDropTop] = useState(10);

  const  moveDrop =  () => {
    (
      async () => {
        if (dropTop < 90) {
          await delay(500);
          setDropTop(dropTop + 0.5);
        }
      }
    )()
    
  };

  useEffect(() => moveDrop());

  return (
    <div className="App">
      <FallingCircle  top={ dropTop }/>
    </div>
  );
}

export default App;
