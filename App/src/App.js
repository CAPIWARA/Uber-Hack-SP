import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {compareTokenExpDate, getToken, isAuthenticated, refreshToken} from './actions/Login/actionCreator';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ScrollToTop from './helpers/ScrollToTop';
import Login from './views/LoginView';
import NotFound from './views/NotFound';
import Home from "./views/Home";
import Estabelecimento from "./views/EstabelecimentoView";
import MainAside from "./components/MainAside/MainAside";

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
        if (compareTokenExpDate() && config.url.search('refresh') < 0) {
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

            <Route exact path='/' component={Login}/>

            <PrivateRoute>

              <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'row'}}>
                <MainAside/>

                <section style={{flex:'1', height:'100vh', overflow:'auto'}}>

                  <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/estabelecimento/:id' component={Estabelecimento}/>
                    <Route component={NotFound}/>
                  </Switch>
                </section>
              </div>
            </PrivateRoute>
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
