// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서(함수)
const counter = (state = initialState, action) => {
  console.log("action => ", action);
  switch (action.type) {
    default:
      return state;
  }
};

export default counter;
