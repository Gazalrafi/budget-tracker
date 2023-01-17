import React, { useState } from "react";
import classes from "./AddExpensesForm.module.css";

const AddExpensesForm = (props) => {

  let [amount, setAmount] = useState('');
  let [description, setDescription] = useState('');
  let [category, setCategory] = useState('');

  const temp  = [props.itemEdit]
  const submitHandler = (event) => {
    event.preventDefault();
    if (props.isEditing) {
      temp.amount = amount;
      temp.description = description;
      temp.category = category;
      const newExpenseObj = {
        amount: amount,
        description: description,
        category: category,
      };
      props.onEditShow(newExpenseObj);
      event.target.reset()
    } else {
      console.log('submitted')
      const newExpenseObj = {
        amount: amount,
        description: description,
        category: category,
      };
      props.onAddShow(newExpenseObj);
       event.target.reset()
    }
     
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Add New Expense</h2>
      <input
        autoComplete="on"
        type="number"
        id="amount"
        name="amount"
        placeholder="Enter your amount..."
        required
        defaultValue={ props.itemEdit.amount|| ''}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        autoComplete="on"
        type="text"
        id="description"
        name="description"
        placeholder="Enter description..."
        required
        defaultValue={props.itemEdit.description|| ''}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        required
        defaultValue={props.itemEdit.amount|| ''}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="0">Select category</option>
        <option value="food">Food</option>
        <option value="fuel">Fuel</option>
        <option value="salary">Salary</option>
        <option value="trip">Trip</option>
        <option value="shopping">Shopping</option>
        
      </select>
      <button>Add Expense</button>
    </form>
  );
};

export default AddExpensesForm;
