import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './helpers/ScrollToTop';
import NotFound from './views/NotFound';
import Home from "./views/Home";
import Estabelecimento from "./views/EstabelecimentoView";
import MainAside from "./components/MainAside/MainAside";
import ProfileView from "./views/ProfileView";
import AgendamentosView from "./views/AgendamentosView";
import HistoricoAgendamentosView from "./views/HistoricoAgendamentosView";
import FavoritosView from "./views/FavoritosView";

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
                  <Route exact path='/profile' component={ProfileView}/>
                  <Route exact path='/favoritos' component={FavoritosView}/>
                  <Route exact path='/agendamentos' component={AgendamentosView}/>
                  <Route exact path='/historico' component={HistoricoAgendamentosView}/>
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
