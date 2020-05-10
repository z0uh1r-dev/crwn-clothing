import React from "react";

import "./signin.styles.scss";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            id="email" 
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email} required/>

          <FormInput 
            type="password" 
            id="password" 
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password} required/>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }

}

export default SignIn;