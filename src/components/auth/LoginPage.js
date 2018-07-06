import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import LoginForm from './LoginForm';
// import { isEmpty } from '../utils/LangUtils';

export default class LoginPage extends Component {
  static defaultProps = {
    login: () => {}
  };

  render() {
    return (
      <div className="LoginPage">
        {/* <DefaultPageLayout title="Login"> */}
          {/* {this._renderIfError()} */}
          <LoginForm onLogin={this.props.onLogin} />
        {/* </DefaultPageLayout> */}
      </div>
    );
  }

  //some error handling to do
}
