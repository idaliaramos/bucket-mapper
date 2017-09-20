import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DestinationsPageContainer from './redux/containers/DestinationPageContainer';

import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    // console.log(this.props, 'this props');
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <DestinationsPageContainer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
