import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { setUser, setProfile, resetUser } from "../store/user";
import api from "../utils/API";
import Modal from "../components/Modal";

function UserProfile() {
  const user = useSelector((state) => state.user);
  console.log(user.firstName);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);

  const handleOpacity = () => {
    const mainPage = document.querySelector(".main");
    let value = 0;
    if (collapsed) {
      value = 0.2;
    } else {
      value = 1;
    }
    mainPage.style.opacity = value;
  };

  const handleCloseModal = () => {
    setCollapsed(true);
    handleOpacity();
  };

  useEffect(() => {
    if (!user.token) {
      return navigate("/login");
    }
    console.log(user);
    api.user.get(user.token).then((profileResponse) => {
      console.log(profileResponse);
      dispatch(setProfile(profileResponse.data.body));
    });
  });

  return (
    <div>
      {!collapsed && <Modal onClose={handleCloseModal} />}

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {""} {user.lastName}
          </h1>
          <button
            className="edit-button"
            onClick={() => {
              setCollapsed(!collapsed);
              handleOpacity();
            }}
          >
            Edit Name
          </button>
        </div>

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
