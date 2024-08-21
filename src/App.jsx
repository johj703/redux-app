import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/counter.js";

const App = () => {
  const counterReducer = useSelector((state) => state.counter);
  console.log("state", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
