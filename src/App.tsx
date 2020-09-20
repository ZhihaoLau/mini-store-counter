import React, { useContext, useReducer } from "react";
import "./App.css";
import { initialState, reducer, StoreContext } from "./store";

const Counter = () => {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "Subtract" })}>-</button>
      <button onClick={() => dispatch({ type: "Add" })}>+</button>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <StoreContext.Provider value={{ state, dispatch }}>
        <Counter />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
