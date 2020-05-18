import React from "react";
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './signup.styles.jsx';

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUp } = this.props;

    if(password !== confirmPassword) {
      alert('passwords don not match');
      return;
    }

    signUp({ displayName, email, password });
  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form onSubmit={ this.handleSubmit } className="sign-up-form">
          <FormInput 
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required/>

          <FormInput 
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required/>

          <FormInput 
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required/>

          <FormInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Your Password"
            required/>

            <div className="buttons">
              <CustomButton type="submit">Sign Up</CustomButton>
            </div>
        </form>
      </SignUpContainer>
    );
  }

}

const mapDisptachToProps = dispatch => ({
  signUp: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDisptachToProps)(SignUp);