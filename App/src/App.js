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

    axios.interceptors.response.use(null, error => {
      return new Promise(async (resolve, reject) => {
        const defaultMessage = "Desculpe, ocorreu um erro, por favor tente novamente mais tarde!";
        if (error.response) {

          if (error.response.status === 401) {
            this.props.dispararErro("Sua sessão expirou!", () => window.location.href = '/logout');
          } else {
            this.props.dispararErro((error.response.data && error.response.data.message) || defaultMessage);
          }
          reject(error)
        } else {
          if(navigator.onLine){
            this.props.dispararErro(defaultMessage, () => window.location.href = '/logout');
          } else {
            this.props.dispararErro("Sem conexão. Verifique sua internet e tente novamente.");
          }
          reject(error);
        }
      });
    });

    return (
      <Router>
        <ScrollToTop>
            <Switch>

              <Route exact path='/' component={}/>
              <Route exact path='/login' component={Cadastro}/>

              <PrivateRoute>
                <Switch>
                  <Route exact path='/logout' component={Logout}/>

                  <Route component={NotFound}/>
                </Switch>
              </PrivateRoute>
              <Route component={NotFound}/>
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