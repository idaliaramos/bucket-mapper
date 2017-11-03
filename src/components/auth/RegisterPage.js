import React, { Component } from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import RegisterAccountForm from './RegisterForm';

export default class RegisterPage extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <div className="RegisterPage">
        <DefaultPageLayout title="Account Registration">
          <RegisterAccountForm onSubmit={this.props.onSubmit} />
        </DefaultPageLayout>
      </div>
    );
  }
}
