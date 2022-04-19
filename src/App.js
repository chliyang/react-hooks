import "./App.css";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { ThemeContext } from "./context/theme-context";
import countReducer from "./reducer/count-reducer";

const initialState = { count: 0 };

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(countReducer, initialState);

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
      <div>
        <p>implement counter with useReducer</p>
        <p>You clicked {state.count} times</p>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </>
  );
}

export default App;
