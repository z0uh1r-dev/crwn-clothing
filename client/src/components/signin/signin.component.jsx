import React, { useState } from "react";
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './signin.styles.jsx';

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });
  
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          id="email" 
          name="email"
          label="email"
          handleChange={handleChange}
          value={userCredentials.email} required/>

        <FormInput 
          type="password" 
          id="password" 
          name="password"
          label="password"
          handleChange={handleChange}
          value={userCredentials.password} required/>

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);