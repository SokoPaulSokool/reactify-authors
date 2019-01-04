import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./SignUpComponent.scss";
import { connect } from "react-redux";
import { createUser } from "../../actions/authActions";

class SignUpComponent extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };
  render() {
    return (
      <MDBContainer className="view w-75 mt-5 pt-5">
        <MDBRow>
          <MDBCol className="mx-auto" md="6">
            <form onSubmit={this.onSubmit}>
              <p className="h5 text-center mb-4">Sign Up</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your user name"
                  icon="user"
                  group
                  type="text"
                  validate
                  name="username"
                  error="wrong"
                  success="right"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  name="password"
                  type="password"
                  validate
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Sign Up</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default connect(
  null,
  { createUser }
)(SignUpComponent);
