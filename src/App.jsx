import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumber, removeNumber } from "./redux/modules/counter.js";

const App = () => {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => state.counter);
  console.log("state", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
