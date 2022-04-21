import "./App.css";
import React from "react";
// import React, { useContext, useReducer } from "react";
// import useApp from "./hooks/use-app";
// import { ThemeContext } from "./context/theme-context";
// import countReducer from "./reducer/count-reducer";
import TicTacToe from "./components/tic-tac-toe";

// const initialState = { count: 0 };

function App() {
  // const theme = useContext(ThemeContext);
  // const [state, dispatch] = useReducer(countReducer, initialState);

  // const {
  //   count,
  //   setCount,
  //   showHint,
  //   inputValue,
  //   inputRef,
  //   handleChange,
  //   focusOn,
  // } = useApp();

  return (
    <div className="container">
      <TicTacToe />
      {/* <div>
        <p>You clicked {count} times</p>
        <button
          style={{
            background: theme.background,
            color: theme.foreground,
            marginBottom: "40px",
          }}
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
      </div>
      <div>
        <input type="text" ref={inputRef} onChange={handleChange} />
        <button onClick={focusOn}>Focus on input</button>
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
      </div> */}
    </div>
  );
}

export default App;
