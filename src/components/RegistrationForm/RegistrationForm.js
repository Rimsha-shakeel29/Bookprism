import React, { useState } from "react";

import "./RegistrationForm.css";
import Header from "../Header/Header";

import { withRouter } from "react-router-dom";

import Menu from "../Sidebar/Menu";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const redirectToLogin = () => {
    props.history.push("/login");
  };

  return (
    <React.Fragment>
      <Header></Header>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <li>
          <form>
            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
              <div className="form-group text-left">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={state.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              //onClick={()=>redirectToAccount()}
              onClick={() => <Menu></Menu>}
            >
              Register
            </button>
          </form>
          <div
            className="alert alert-success mt-2"
            style={{ display: state.successMessage ? "block" : "none" }}
            role="alert"
          >
            {state.successMessage}
          </div>
          <div className="mt-2">
            <span>Already have an account? </span>
            <span className="loginText" onClick={() => redirectToLogin()}>
              Login here
            </span>
          </div>
        </li>
      </div>
    </React.Fragment>
  );
}

export default withRouter(RegistrationForm);
