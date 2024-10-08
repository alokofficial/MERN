import React, { useReducer, useRef, useState } from "react";

const counterReducer = (currentState, action) => {
  let newState = currentState;
  switch (action.type) {
    case "INCREMENT":
      newState += 1;
      break;
    case "DECREMENT":
      newState -= 1;
      break;
    case "DOUBLE":
      newState *= 2;
      break;
    case "CHANGEBY":
      newState = newState + parseInt(action.payload.num);
      break;
    case "RESET":
      newState = 0;
      break;
    default:
      break;
  }

  return newState;
};
const App = () => {
  const initialVal = 0;
  const inputChange = useRef();
  // const [counter,setCounter]=useState(initialVal)

  const [counter, counterDispatch] = useReducer(counterReducer, initialVal);

  const handleDecrement = () => {
    // setCounter(counter-1);
    counterDispatch({
      type: "DECREMENT",
    });
  };

  const handleIncrement = () => {
    counterDispatch({
      type: "INCREMENT",
    });
    // setCounter(counter+1);
  };
  const handleChangeBy = () => {
    const num = inputChange.current.value;
    inputChange.current.value = 0

    counterDispatch({
      type: "CHANGEBY",
      payload: {
        num,
      },
    });
  };
  return (
    <center>
      <h1>Counter: {counter}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => counterDispatch({ type: "DOUBLE" })}>
        Double
      </button>
      <button onClick={handleChangeBy}>ChangeBY</button>
      <input type="text" ref={inputChange} placeholder="Enter Number..." /><br />
      <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
    </center>
  );
};

export default App;
