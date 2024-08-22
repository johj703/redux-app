// import { combineReducers, createStore } from "redux";
// import counter from "../modules/counter";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

// // 1) rootReducer를 만든다
// const rootReducer = combineReducers({
//   counter,
// });

// // 2) store를 조합한다.
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// 3) 만든 store를 내보낸다.
export default store;
