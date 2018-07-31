import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
  static defaultProps = {
    onLogin: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <form
        action=""
        onSubmit={this._handleClickOnSubmit}
        method="post"
        name="login"
        id="login">
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar title="Bucket Mapper" />
              <br />
              <TextField
                name="email"
                required
                hintText="Enter your Email"
                floatingLabelText="Email" //
                onChange={(event, newValue) =>
                  this.setState({ email: newValue })}
              />
              <br />
              <TextField
                required
                name="password"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton
                type="submit"
                label="Submit"
                primary={true}
                style={style}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </form>
    );
  }

//on submit of this function it will get and save the user info to login
  _handleClickOnSubmit = event => {
    event.preventDefault();
    var email = document.login.email.value.trim();
    var password = document.login.password.value.trim();
    let userInfo = {
      email: email,
      password: password
    };
    this.props.onLogin(userInfo);
  };
}
const style = {
  margin: 15
};
export default LoginForm;
