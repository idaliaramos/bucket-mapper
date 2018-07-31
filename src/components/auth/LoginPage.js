import React, { Component } from 'react';
import LoginForm from './LoginForm';
//Login page wraps the login form and passes onLogin function
export default class LoginPage extends Component {
  static defaultProps = {
    login: () => {}
  };
  render() {
    return (
      <div className="LoginPage">
          <LoginForm onLogin={this.props.onLogin} />
      </div>
    );
  }
}
