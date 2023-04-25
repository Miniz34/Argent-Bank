import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { setUser, setProfile, resetUser, modifyUser } from "../store/user";
import api from "../utils/API";

function Modal({ onClose }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitModal = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value; // Get the value of firstName from the input field
    const lastName = document.getElementById("lastName").value; // Get the value of lastName from the input field
    api.user.put(firstName, lastName, user.token).then((response) => {
      dispatch(modifyUser(response.data.body));
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Modifier le nom</h2>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder={user.firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder={user.lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" onClick={submitModal}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
