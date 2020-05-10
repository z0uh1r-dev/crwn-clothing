import React from "react";

import "./signin-and-signup.styles.scss";

import SignIn from '../../components/signin/signin.component.jsx';
import SignUp from '../../components/signup/signup.component.jsx';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp;