// 초기 상태값
const initialState = {
  number: 0,
};

const PLUS_ONE = "PLUS_ONE";

export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

// 리듀서(함수)
const counter = (state = initialState, action) => {
  console.log("action => ", action);
  switch (action.type) {
    case "PLUS_ONE":
      return {
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
