import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import RegisterForm from './RegisterForm';

export default class RegisterPage extends Component {
  static defaultProps = {
    onCreateUser: () => {}
  };

  render() {
    return (
      <div className="RegisterPage">
        {/* <DefaultPageLayout title="Account Registration"> */}
          <RegisterForm onCreateUser={this.props.onCreateUser} />
        {/* </DefaultPageLayout> */}
      </div>
    );
  }
}
