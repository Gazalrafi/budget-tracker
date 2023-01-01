import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux-store/auth-reducer";

const Header = (props) => {
  // const authCtx = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch()
  const history = useHistory();
  // const isLoggedIn = authCtx.isLoggedIn;

  const logOutHandler = () => {
    dispatch(authAction.logout())
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <h2 style={{color:'rgb(194, 106, 90)'}}>KEEP  TRACK  OF  YOUR  EXPENSES  HERE</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/dailyExpenses" activeClassName={classes.active}>
                Expenses
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/Auth" activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile" activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {isLoggedIn && (
        <HeaderCartButton onClick={logOutHandler}>Logout</HeaderCartButton>
      )}
    </header>
  );
};

export default Header;
