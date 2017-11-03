import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
              <TextField
                id="name"
                hintText="Enter your Name"
                floatingLabelText="Name"
                onChange={(event, newValue) =>
                  this.setState({ name: newValue })}
              />
              <br />
              <TextField
                name="email"
                hintText="Enter your Email"
                floatingLabelText="Email" //
                onChange={(event, newValue) =>
                  this.setState({ email: newValue })}
              />
              <br />
              <TextField
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

  _handleClickOnSubmit = event => {
    event.preventDefault();
    var name = document.login.name.value.trim();
    var email = document.login.email.value.trim();
    var password = document.login.password.value.trim();

    //
    // const { onSubmit} = this.props;
    let userInfo = {
      name: name,
      email: email,
      password: password
    };
    console.log(userInfo);
    // this.props.
    this.props.onSubmit(userInfo);
  };
}
const style = {
  margin: 15
};
export default Login;
