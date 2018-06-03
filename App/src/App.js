import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './helpers/ScrollToTop';
import NotFound from './views/NotFound';
import Home from "./views/Home";
import Estabelecimento from "./views/EstabelecimentoView";
import MainAside from "./components/MainAside/MainAside";

class App extends Component {

  render() {
    return (
      <Router>
        <ScrollToTop>

            <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row'}}>
              <MainAside/>

              <section style={{flex: '1', height: '100vh', overflow: 'auto'}}>

                <Switch>
                  <Route exact path='/home' component={Home}/>
                  <Route exact path='/estabelecimento/:id' component={Estabelecimento}/>
                  <Route component={NotFound}/>
                </Switch>
              </section>
            </div>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
