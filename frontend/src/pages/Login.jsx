import "../App.css";

import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    user.token && navigate("/user");
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
