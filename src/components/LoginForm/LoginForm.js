import React, { useState } from "react";
import "./LoginForm.css";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const redirectToRegister = () => {
    props.history.push("/register");
  };
  const redirectToAccount = () => {
    props.history.push("/accountinfo");
  };
  return (
    <React.Fragment>
      <Header></Header>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
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
          <div className="form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={handleSubmitClick}
            onClick={() => redirectToAccount()}
          >
            Submit
          </button>
        </form>
        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <span className="loginText" onClick={() => redirectToRegister()}>
            Register
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(LoginForm);
