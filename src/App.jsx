import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumber, removeNumber } from "./redux/modules/counter.js";

const App = () => {
  const counterReducer = useSelector((state) => state.counter);
  console.log("state", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <input type="number" />
      <button
        onClick={() => {
          dispatch(addNumber());
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber());
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
