// import React from "react";
// import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

const App = () => {
  // const counterReducer = useSelector((state) => state.counter);
  // console.log("state", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button>+1</button>
    </div>
  );
};

export default App;
