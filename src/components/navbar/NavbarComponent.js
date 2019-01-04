import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  
} from "mdbreact";
import { NavLink } from "react-router-dom";
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
    return (
      <div>
        <header>
          <MDBNavbar
            className="bg-pr"
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
