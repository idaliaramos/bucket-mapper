import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
class Register extends Component {
  static defaultProps = {
    onCreateUser: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: null
    };
  }
  render() {
    return (
      <div>
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
                  required
                  hintText="Enter your Name"
                  floatingLabelText="Name"
                  onChange={(event, newValue) =>
                    this.setState({ name: newValue })}
                />
                <br />
                <TextField
                  required
                  name="email"
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
                  // errorMessage="Password must be at least 8 characters long"
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
                  onSubmit={this._handleSwitch}
                />
              </div>
            </MuiThemeProvider>
          </div>
        </form>

        <div> Already a user?</div>
        {/* <RaisedButton
          type="onClick"
          label="LogIn"
          primary={false}
          style={style}
        /> */}
        <span className="input-group-btn">
          <Link to="/login">Click to login</Link>
        </span>
      </div>
    );
  }
  _handleSwitch = event => {
    event.preventDefault();
  };
  _handleClickOnSubmit = event => {
    event.preventDefault();
    var name = document.login.name.value.trim();
    var email = document.login.email.value.trim();
    var password = document.login.password.value.trim();
    let userInfo = {
      name: name,
      email: email,
      password: password
    };
    console.log(userInfo);
    this.props.onCreateUser(userInfo);
  };
}
const style = {
  margin: 15
};
export default Register;
