import Authentication from "./components/auth/Authentication";
import Header from "./components/layout/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DailyExpensesPage from "./pages/DailyExpensesPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchExpensesData } from "./redux-store/expenses/expenses-actions";
import { removeExpenseData } from "./redux-store/expenses/expenses-actions";
import Footer from "./components/layout/Footer";
import classes from "./App.module.css";
import { themeAction } from "./redux-store/theme-reducer";
import ThemeToggle from "./components/UI/ThemeToggle";
import ForgetPassword from "./components/auth/ForgotPassword";

 
function App() {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const [toggleIsShown, setToggleIsShown] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const expenses = useSelector((state) => state.expenses.expenses);
  const theme = useSelector((state) => state.theme.theme);

  
  useEffect(() => {
    dispatch(fetchExpensesData());
  }, [dispatch]);

  

  let amount = 0;
  expenses?.forEach((element) => {
    amount += Number(element.amount);
  });

  const themeHandler = () => {
    setToggleIsShown(true)
  };

  const lightThemeHandler = () => {
    dispatch(themeAction.setTheme("dark"));
    setToggleIsShown(false);
  }
  const themeCloseHandler = () => {
    setToggleIsShown(false);
  }
  return (
    <div className={classes[`${theme}`]}>
      <Header />
      
      <main>
        <Switch>
          <Route path="/auth">{!isLoggedIn && <Authentication />}</Route>
          {!isLoggedIn &&<Route path='/forget'>
          <ForgetPassword/>
          </Route>}
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/dailyExpenses">
            {isLoggedIn && <DailyExpensesPage />}
            {!isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route>
            {isLoggedIn && <ProfilePage />}
            {!isLoggedIn && <Redirect to="/auth" />}
          </Route>
        </Switch>
      </main>
      {isLoggedIn && toggleIsShown && <ThemeToggle onClick= {lightThemeHandler} onClose={themeCloseHandler}/>}
      {isLoggedIn && amount >= 10000 && <Footer onClick={themeHandler} />}
    </div>
  );
}

export default App;
