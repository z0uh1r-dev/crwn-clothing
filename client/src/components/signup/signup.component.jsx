import React, { useState } from "react";
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './signup.styles.jsx';

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUp }) => {

  const [ newUser, setNewUser ] = useState({
    displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = newUser;

  const handleChange = e => {
    const { value, name } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = newUser;

    if(password !== confirmPassword) {
      alert('passwords don not match');
      return;
    }

    signUp({ displayName, email, password });
  }
  
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput 
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required/>

        <FormInput 
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required/>

        <FormInput 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required/>

        <FormInput 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Your Password"
          required/>

          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
      </form>
    </SignUpContainer>
  );

}

const mapDisptachToProps = dispatch => ({
  signUp: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDisptachToProps)(SignUp);