import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Header extends Component {
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

          <NavbarBrand href="/" style={{ marginLeft: 20 }}>
            BOOKPRISM
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/register">SignUp</Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to="/login">LogIn</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
