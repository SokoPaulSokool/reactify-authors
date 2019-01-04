import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBMDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignInComponent from "../signin/SignInComponent";
class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const container = { height: 1300 };
    return (
      <div>
        <header>
          <MDBNavbar
            className="bg-primary"
            dark
            expand="md"
            scrolling
            fixed="top"
          >
            <MDBNavbarBrand href="/">
              <strong>Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem className="mr-5">
                  <NavLink to="/login" className="text-white">
                    Sign In
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink to="/signup" className="text-white">
                    Sign Up
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem />
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default NavbarComponent;
