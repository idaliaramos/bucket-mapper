import React, { Component } from 'react';
import LoginForm from './LoginForm';

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
