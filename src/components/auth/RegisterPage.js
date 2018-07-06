import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

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
