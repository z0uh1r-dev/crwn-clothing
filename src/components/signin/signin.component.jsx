import React from "react";
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './signin.styles.jsx';

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {

    const { googleSignInStart } = this.props

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);