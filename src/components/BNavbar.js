import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

// import logo from "logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class BNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    document.body.classList.add("white-content");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" style={{ height: "80px" }}>
          <div className="logo-img">
            <img
              src={logo}
              alt=""
              width="50"
              height="50"
              style={{ width: "50px" }}
            />
          </div>

          <NavbarBrand href="/" style={{ marginLeft: "20px", color: "white" }}>
            BOOKPRISM
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <li className="nav-item dropdown">
                <a
                  style={{ color: "white" }}
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Account Info
                  </a>
                  <div className="dropdown-divider"></div>
                </div>
              </li>

              <NavItem>
                <NavLink>
                  <Link to="/login" style={{ color: "white" }}>
                    LogOut
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BNavbar;
