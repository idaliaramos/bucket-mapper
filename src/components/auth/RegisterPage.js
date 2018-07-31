import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
//RegisterPage wraps the register form and passes onCreateUser function
export default class RegisterPage extends Component {
  static defaultProps = {
    onCreateUser: () => {}
  };

  render() {
    return (
      <div className="RegisterPage">
          <RegisterForm onCreateUser={this.props.onCreateUser} />
      </div>
    );
  }
}
