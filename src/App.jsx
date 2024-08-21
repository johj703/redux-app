import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

const App = () => {
  const counterReducer = useSelector((state) => state.counter);
  console.log("state", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <button
        onClick={() => {
          dispatch({
            type: "PLUS_ONE",
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS_ONE",
          });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
