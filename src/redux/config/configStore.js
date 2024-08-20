import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";

// 1) rootReducer를 만든다
const rootReducer = combineReducers({
  counter,
});

// 2) store를 조합한다.
const store = createStore(rootReducer);

// 3) 만든 store를 내보낸다.
export default store;
