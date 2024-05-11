import React, { useState } from 'react';

function Func({ name }) {
  const [value, setValue] = useState(" "); 

  const btn = () => {
    setValue("222222222"); 
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{value}</h1>
      <button onClick={btn}>Click me</button> 
    </div>
  );
}

export default Func;

/*import React from 'react'
import Func from './components/Func'

function App() {
  return (
    <div>
      <Func name="Ganyaa" />
          </div>
  )
}

export default App */
