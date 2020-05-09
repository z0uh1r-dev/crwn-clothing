import React from "react";

import "./signup.styles.scss";

class SignUp extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (<h1>Sign Up</h1>);
  }

}

export default SignUp;