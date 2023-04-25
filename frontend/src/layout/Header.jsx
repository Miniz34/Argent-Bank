import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bankLogo from "../assets/argentBankLogo.png";
import { resetUser } from "../store/user";

function Header({ status }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // dispatch(setProfile(profileResponse.data.body));

  const logout = () => {
    dispatch(resetUser(user));
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {user.token && (
          <Link to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
        )}
        {status === "home-page" && (
          <>
            {!user.token ? (
              <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            ) : (
              <Link to="/" className="main-nav-item" onClick={logout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            )}
          </>
        )}

        {status === "login-page" && (
          <>
            <a className="main-nav-item" href="/">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </>
        )}

        {status === "user-page" && (
          <>
            <Link to="/" className="main-nav-item" onClick={logout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
