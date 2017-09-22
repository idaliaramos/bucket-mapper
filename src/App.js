import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DestinationsPageContainer from './redux/containers/DestinationPageContainer';
import AdventurePageContainer from './redux/containers/AdventurePageContainer';

import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    // console.log(this.props, 'this props');
    return (
      <MuiThemeProvider>
        <div className="App">
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" component={DestinationsPageContainer} />

                {/* <AdventurePageContainer /> */}
                <Route
                  exact
                  path="/destinations/:destinationId"
                  component={AdventurePageContainer}
                />
              </Switch>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}
// export default class App extends Component {
//   render() {
//     // console.log(this.props, 'this props');
//     return (
//       <div>
//         {/* <Router>
//           <Switch> */}
//         <Provider store={store}>
//           <MuiThemeProvider>
//             {/* <Route
//                   exact
//                   path="/destinations/:destinationId"
//                   component={DestinationsPageContainer}
//                 /> */}
//             <AdventurePageContainer />
//             {/* <Route
//                   exact
//                   path="/destinations/:destinationId"
//                   component={AdventurePageContainer}
//                 /> */}
//           </MuiThemeProvider>
//         </Provider>
//         {/* </Switch> */}
//         {/* // </Router>  */}
//       </div>
//     );
//   }
// }
