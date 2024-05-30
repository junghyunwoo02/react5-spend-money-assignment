import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../../static/fakeData.json";

// 로컬 스토리지에서 데이터를 불러오는 함수를 정의합니다.
const loadExpenseData = () => {
  const savedData = localStorage.getItem("expenseData");
  return savedData ? JSON.parse(savedData) : fakeData;
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: loadExpenseData(),
  reducers: {
    // 지출 데이터 추가
    addExpense: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
    // 지출 데이터 수정
    updateExpense: (state, action) => {
      const updatedState = action.payload;
      if (Array.isArray(updatedState)) {
        localStorage.setItem("expenseData", JSON.stringify(updatedState));
        return updatedState;
      } else {
        // payload가 유효하지 않으면, 현재 상태를 그대로 반환
        return state;
      }
    },
    // 지출 데이터 삭제
    deleteExpense: (state, action) => {
      const removeState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("expenseData", JSON.stringify(removeState));
      return removeState;
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
