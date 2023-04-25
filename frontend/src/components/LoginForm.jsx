import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { loginUser } from "../store/login";

function LoginForm() {
  const { register, errors, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(loginUser);
    dispatch(loginUser({ email: data.username, password: data.password }));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="input-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default LoginForm;
