import React from "react";

import { SignUpAndSignInContainer } from './signin-and-signup.styles.jsx';

import SignIn from '../../components/signin/signin.component.jsx';
import SignUp from '../../components/signup/signup.component.jsx';

const SignInAndSignUp = () => (
  <SignUpAndSignInContainer>
    <SignIn />
    <SignUp />
  </SignUpAndSignInContainer>
)

export default SignInAndSignUp;