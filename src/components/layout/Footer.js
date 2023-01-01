import React from "react";
import Button from "../UI/Button";
import classes from "./Footer.module.css";
import { useSelector } from "react-redux";

import { CSVLink } from "react-csv";

const Footer = (props) => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const headers = [
    {
      label: "Amount",
      key: "amount",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Category",
      key: "category",
    },
  ];

  const csvLink = {
    filename: "file.csv",
    headers: headers,
    data: expenses
  };
  
  return (
    <footer className={classes.footer}>
      <Button onClick={props.onClick}>Activate Premium</Button>
      <Button ><CSVLink {...csvLink}>Download All Your Expenses</CSVLink></Button>
    </footer>
  );
};

export default Footer;
