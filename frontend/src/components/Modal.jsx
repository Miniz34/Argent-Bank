import "../App.css";
import { useDispatch, useSelector } from "react-redux";

import { modifyUser } from "../store/user";
import api from "../utils/API";
import svg from "../assets/cross.svg";

function Modal({ onClose }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function validateForm(username, password) {
    const usernamePattern = /^[\p{L}\p{M}]{3,16}$/u;
    const passwordPattern = /^[\p{L}\p{M}]{3,16}$/u;

    if (!usernamePattern.test(username)) {
      return "Prénom invalide, veuillez insérer un prénom d'au moins 3 lettres (les accents et tirets sont acceptés)";
    }

    if (!passwordPattern.test(password)) {
      return "Prénom invalide, veuillez insérer un prénom d'au moins 3 lettres (les accents et tirets sont acceptés)";
    }
    return null;
  }

  const submitModal = (e) => {
    e.preventDefault();
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    if (!firstName) {
      firstName = firstNameInput.placeholder.trim();
    }
    if (!lastName) {
      lastName = lastNameInput.placeholder.trim();
    }
    const validationError = validateForm(firstName, lastName);
    if (validationError) {
      alert(validationError);
    } else {
      api.user.put(firstName, lastName, user.token).then((response) => {
        dispatch(modifyUser(response.data.body));
        onClose();
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Modifier le nom</h2>
        </div>

        <img
          src={svg}
          className="modal-close-btn modal-close"
          onClick={onClose}
          alt="Close Button"
        ></img>

        <form className="modal-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder={user.firstName} />
          <label htmlFor="lastName" className="modal-lastname">
            Last Name
          </label>
          <input type="text" id="lastName" placeholder={user.lastName} />
          <button
            type="submit"
            onClick={submitModal}
            className="modal-submit transaction-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
