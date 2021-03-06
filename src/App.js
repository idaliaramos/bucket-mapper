import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DestinationsPageContainer from './redux/containers/DestinationPageContainer';
import AdventurePageContainer from './redux/containers/AdventurePageContainer';

import LoginPageContainer from './redux/containers/LoginPageContainer';
import RegisterPageContainer from './redux/containers/RegisterPageContainer';
import ErrorPage from './components/ErrorPage';
import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/login" component={LoginPageContainer} />
                <Route exact path="/" component={RegisterPageContainer} />
                <Route
                  exact
                  path="/destinations"
                  component={DestinationsPageContainer}
                />
                <Route
                  exact
                  path="/destinations/:destinationId"
                  component={AdventurePageContainer}
                />
                <Route
                  render={() => <ErrorPage errorCode="ERROR_NOT_FOUND" />}
                />
              </Switch>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}
