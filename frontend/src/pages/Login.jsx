import "../App.css";
import bankLogo from "../assets/argentBankLogo.png";

import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../layout/Header";

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
