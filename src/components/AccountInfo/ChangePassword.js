import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import BNavbar from "../BNavbar";
import Menu from "../Sidebar/Menu";

function ChangePassword(props) {
  const [state, setState] = useState({
    oldpassword: "",
    newpassword: "",
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
  const redirectToAccount = () => {
    props.history.push("/accountinfo");
  };
  return (
    <React.Fragment>
      <BNavbar></BNavbar>

      <div
        className="row m-0 p-0 align-items-start"
        style={{ backgroundColor: "white", height: "100%" }}
      >
        <div
          className="col-xl-2 col-lg-2 col-md-2 col-sm-2 p-0 "
          style={{
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <Menu></Menu>
        </div>
        <div
          className="col-xl-10  col-lg-10 col-md-10 col-sm-10 p-0"
          style={{ backgroundColor: "white", marginTop: 0, height: "100%" }}
        >
          <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <li>
              <form>
                <div className="form-group text-left">
                  <label htmlFor="exampleInputOldPassword">Old Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldpassword"
                    aria-describedby="emailHelp"
                    placeholder="Enter old password"
                    value={state.oldpassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="exampleInputNewPassword">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpassword"
                    placeholder="Enter new password"
                    value={state.newpassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">
                    Confirm Password
                  </label>
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
                  onClick={() => redirectToAccount()}
                >
                  Change
                </button>
              </form>
              <div
                className="alert alert-success mt-2"
                style={{ display: state.successMessage ? "block" : "none" }}
                role="alert"
              >
                {state.successMessage}
              </div>
            </li>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(ChangePassword);
