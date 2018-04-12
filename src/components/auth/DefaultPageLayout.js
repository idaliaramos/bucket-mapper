import React, { Component } from 'react';

export default class DefaultPageLayout extends Component {
  static defaultProps = {
    onLogout: () => {}
  };

  render() {
    return (
      <div className="DefaultPageLayout">
        <header className="DefaultPageLayout-header">
          {/* <div className="DefaultPageLayout-brand">
            <Link to="/">BucketMapper</Link>
          </div> */}
          {/* <nav className="DefaultPageLayout-nav">
            {this.props.authenticatedUser
              ? [
                  <span key="1">
                    Logged in as {this.props.authenticatedUser.name}
                  </span>,
                  <a key="2" href="/logout" onClick={this._handleClickLogout}>
                    Logout
                  </a>
                ]
              : [
                  <Link key="1" to="/login">
                    Login
                  </Link>,
                  <Link key="2" to="/signUp">
                    SignUp!
                  </Link>
                ]} */}
          {/* </nav> */}
        </header>
        <main className="DefaultPageLayout-mainContent">
          <h1>
            {this.props.name}
          </h1>
          {this.props.children}
        </main>
      </div>
    );
  }

  _handleClickLogout = event => {
    event.preventDefault();
    this.props.onLogout();
  };
}
