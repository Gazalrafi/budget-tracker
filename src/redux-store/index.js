import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import themeReducer from "./theme-reducer";
import expensesReducer from "./expenses/expenses-reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
    theme: themeReducer,
  },
});

export default store;
