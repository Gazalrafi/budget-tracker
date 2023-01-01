import axios from "axios";
import { expenseAction } from "./expenses-reducer";

export const fetchExpensesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://new-project-10d5a-default-rtdb.firebaseio.com/expenses.json"
        );
        const loadedExpenses = [];
        for (const key in response.data) {
          loadedExpenses.push({
            id: key,
            amount: response.data[key].amount,
            description: response.data[key].description,
            category: response.data[key].category,
          });
        }
        return loadedExpenses;
      } catch (error) {
        console.log(error);
      }
    };
    const data = await fetchData();
    dispatch(expenseAction.fetchExpenses(data));
  };
};

export const addNewExpenseData = (expense) => {
  return async (dispatch) => {
    const addNewExpense = async () => {
      try {
        const response = await axios.post(
          "https://new-project-10d5a-default-rtdb.firebaseio.com/expenses.json",
          expense
        );
        if (response.status === 200) {
          console.log(response.data);
          //updateItems(...items, loadedExpenses)
        }
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
    await addNewExpense();
    dispatch(expenseAction.addNewExpense(expense));
  };
};

export const removeExpenseData = (id) => {
  return async (dispatch) => {
    const removeExpense = async () => {
      try {
        const response = await axios.delete(
          `https://new-project-10d5a-default-rtdb.firebaseio.com/expenses/${id}.json`
        );
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
    await removeExpense(id);
    dispatch(expenseAction.removeExpense(id));
  };
};

export const editExpenseData = (objEdit, existingExpense) => {
  return async (dispatch) => {
    const editExpense = async () => {
      try {
        const response = await axios.put(
          `https://new-project-10d5a-default-rtdb.firebaseio.com/expenses/${existingExpense.id}.json`,
          objEdit
        );
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
    await editExpense();
    console.log(existingExpense)
    const obj = { existingExpense, objEdit };
    dispatch(expenseAction.editExpense(obj));
  };
};
