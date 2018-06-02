import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {compareTokenExpDate, getToken, isAuthenticated, refreshToken} from './actions/Login/actionCreator';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

const PrivateRoute = ({children}) => (
  <Route render={props => (
    isAuthenticated() ? (
      children
    ) : (
      <Redirect to={{
        pathname: '/',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

class App extends Component {

  render() {
    axios.interceptors.request.use(
      async config => {
        if (compareTokenExpDate() && config.url.search('refresh') < 0){
          await refreshToken();
        }

        let token = getToken();
        if (token) config.headers.common['X-Auth-Token'] = token;
        return config;
      },
      error => (Promise.reject(error))
    );

    return (
      <Router>
        <ScrollToTop>
            <Switch>

              <Route exact path='/' component={}/>

              <PrivateRoute>
                <Switch>

                  <Route exact path='/' component={}/>

                  <Route component={}/>
                </Switch>
              </PrivateRoute>
              <Route component={}/>
            </Switch>

        </ScrollToTop>
      </Router>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
};

export default App;