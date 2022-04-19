import './App.css';
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <input type="text" onChange={handleChange} />
        <p>input value is {inputValue}</p>
      </div>
    </>
  );
}

export default App;
