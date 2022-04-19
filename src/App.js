import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/theme-context";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 8) setShowHint(true);
    if (inputValue.length <= 8) setShowHint(false);
  }, [inputValue]);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button
          style={{ background: theme.background, color: theme.foreground }}
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
      </div>
      <div>
        <input type="text" onChange={handleChange} />
        {showHint ? (
          <p>sorry, input length cannot greater than 8.</p>
        ) : (
          <p>input value is {inputValue}</p>
        )}
      </div>
    </>
  );
}

export default App;
