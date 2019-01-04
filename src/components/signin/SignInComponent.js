import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./SignInComponent.scss";
import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";
class SignInComponent extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };
  render() {
    return (
      <MDBContainer className="view w-75 mt-5 pt-5">
        <MDBRow>
          <MDBCol className="mx-auto" md="6">
            <form onSubmit={this.onSubmit}>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { loginUser }
)(SignInComponent);
