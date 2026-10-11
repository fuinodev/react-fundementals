import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Reducer Counter</h1>

      <h2>Count: {count}</h2>
       
     <button onClick={() => dispatch({ type: "increment" })}>
        +
</button> 

  
     <button onClick={() => dispatch({ type: "decrement" })}>
  -
</button> 

  
     <button onClick={() => dispatch({ type: "reset" })}>
  Reset
</button> 

    </div>
  );
};

export default ReducerCounter;