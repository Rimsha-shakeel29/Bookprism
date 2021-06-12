import React, { useState } from "react";
import "./AccountInfo.css";

import { withRouter } from "react-router-dom";
import BNavbar from "../BNavbar";
import Menu from "../Sidebar/Menu";

function AccountInfo(props) {
  const [state] = useState({
    email: "",
    username: "",
    password: "",
    successMessage: null,
  });

  const redirectTochange = () => {
    props.history.push("/changepassword");
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
            <h2>Account Information</h2>

            <form>
              <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">
                  Email address: rimsha@gmail.com
                </label>

                <div className="form-group text-left">
                  <label htmlFor="exampleInputUsername1">
                    Username: Rimsha123
                  </label>

                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">
                      Password: ****
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="alert alert-success mt-2"
              style={{ display: state.successMessage ? "block" : "none" }}
              role="alert"
            >
              {state.successMessage}
            </div>
            <div className="mt-2">
              <span className="loginText" onClick={() => redirectTochange()}>
                Change Password
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(AccountInfo);
