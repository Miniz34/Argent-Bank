import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bankLogo from "../assets/argentBankLogo.png";
import { resetUser } from "../store/user";

function Header({ status }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUser(user));
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {user.token && (
          <NavLink to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
        )}
        {status === "home-page" && (
          <>
            {!user.token ? (
              <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </NavLink>
            ) : (
              <NavLink to="/" className="main-nav-item" onClick={logout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            )}
          </>
        )}

        {status === "login-page" && (
          <>
            <NavLink className="main-nav-item" to="/">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </>
        )}

        {status === "user-page" && (
          <>
            <NavLink to="/" className="main-nav-item" onClick={logout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
