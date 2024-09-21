import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount (count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button className='aumentar' onClick={increment}>Aumentar</button>
      <button className='diminuir' onClick={decrement}>Diminuir</button>
      <button className='resetar' onClick={reset}>Resetar</button>
    </div>
  );

};

export default App;


  
