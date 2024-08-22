import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addNumber: () => {},
    removeNumber: () => {},
  },
});

// Action creator 함수
export const { addNumber, removeNumber } = counterSlice.actions;
export default counterSlice.reducer;
