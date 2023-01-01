import classes from "./ExpensesItems.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeExpenseData } from "../../redux-store/expenses/expenses-actions";

const ExpensesItems = (props) => {
  const dispatch = useDispatch()
  const expenses = useSelector(state => state.expenses.expenses)
  let amount = 0;
  expenses?.forEach((element) => {
    amount += Number(element.amount);
  });
  return (
    <ul key={expenses.id} className={classes["expenses-ul"]}>
      <header className={classes.header}>
        <h4 className={classes.amount}>Amount</h4>
        <h4 className={classes.description}>Description</h4>
        <h4 className={classes.category}>category</h4>
        <h4 className={classes.totalAmount}>Total Amount = {amount}</h4>
      </header>
      {expenses?.map((item) => {
        return (
         (
            <li  id={item.id}>
              <span className={classes.amount}>Rs.{item.amount}</span>
              <span className={classes.description}>{item.description}</span>
              <span className={classes.category}>{item.category}</span>
              <button
                className={classes.delete}
                onClick={() => dispatch(removeExpenseData(item.id))}
              >
                DELETE
              </button>
              <button
                className={classes.edit}
                onClick={() => props.onEdit(item)}
              >
                EDIT
              </button>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default ExpensesItems;
