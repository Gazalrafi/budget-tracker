import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = {
  expenses: [],
};
const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialExpensesState,
  reducers: {
    fetchExpenses(state, action) {
      state.expenses = action.payload;
    },
    addNewExpense(state, action) {
      state.expenses = [...state.expenses, action.payload];
    },
    removeExpense(state, action) {
      const id = action.payload;
      const newExpenses = [...state.expenses];
      newExpenses.forEach((ele, indx) => {
        if (id === ele.id) {
          newExpenses.splice(indx, 1);
          state.expenses = newExpenses;
        }
      });
    },
    editExpense(state, action) {
      const id = action.payload.existingExpense.id
      const newExpenses = [...state.expenses];
      newExpenses.forEach((ele, indx) => {
        if (id === ele.id) {
          newExpenses.splice(indx, 1);
          state.expenses = [...newExpenses, action.payload.objEdit];
        }
      });
    },
  },
});

export const expenseAction = expensesSlice.actions;
export default expensesSlice.reducer;
