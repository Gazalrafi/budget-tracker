import React, { useState } from "react";
import ExpensesItems from "../ExpensesItems";
import AddExpensesForm from "./AddExpensesForm";
import classes from "./AddNewExpensesForm.module.css";
import { addNewExpenseData } from "../../../redux-store/expenses/expenses-actions";
import { useDispatch } from "react-redux";
import { editExpenseData } from "../../../redux-store/expenses/expenses-actions";

const AddNewExpensesForm = () => {
  const dispatch = useDispatch();
  const [editExpense, setEditExpense] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = (value) => {
    setEditExpense(value);
    setIsEditing(true);
  };
  const submitHandler = (obj) => {
    dispatch(addNewExpenseData(obj));
  };

  const editItemHandler = (obj) => {
    dispatch(editExpenseData(obj, editExpense));
    setEditExpense('');
  };

  return (
    <section className={classes["expenses-form"]}>
      <h2>Daily Expenses</h2>

      <AddExpensesForm
        itemEdit={editExpense}
        isEditing={isEditing}
        onEditShow={editItemHandler}
        onAddShow={submitHandler}
      />

<h2>Expenses...</h2>
      <ExpensesItems onEdit={editHandler} />
    </section>
  );
};

export default AddNewExpensesForm;
