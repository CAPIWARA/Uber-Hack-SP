import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import avatar from './assets/images/profile-image.jpeg';
import NotFound from "./views/NotFound";
import Aside from "./components/Aside";
import EfetuarCheckinView from "./views/EfetuarCheckinView";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="dashHeader">
          </header>

          <div className="dFlex">

            <Aside/>

            <section className="dashCenterContainer">
              <Switch>
                <Route exact path='/efetuar-checkin' component={EfetuarCheckinView}/>

                <Route component={NotFound}/>
              </Switch>
            </section>

            <section className="dashSolicitacoesPendentes">
              <article className="solicitacaoCard">
                <div className="solicitacaoCardContainer">
                  <img src={avatar} alt=""/>

                  <div>
                    <h3>Fulano</h3>
                    <p>05/06/2018 às 09:45</p>
                  </div>
                </div>
                <div className="solicitacaoCardButtons">
                  <button className='cancelButton'>
                    Recusar
                  </button>

                  <button className='acceptButton'>
                    Aceitar
                  </button>
                </div>
              </article>

              <article className="solicitacaoCard">
                <div className="solicitacaoCardContainer">
                  <img src={avatar} alt=""/>

                  <div>
                    <h3>Fulano</h3>
                    <p>05/06/2018 às 09:45</p>
                  </div>
                </div>
                <div className="solicitacaoCardButtons">
                  <button className='cancelButton'>
                    Recusar
                  </button>

                  <button className='acceptButton'>
                    Aceitar
                  </button>
                </div>
              </article>

              <article className="solicitacaoCard">
                <div className="solicitacaoCardContainer">
                  <img src={avatar} alt=""/>

                  <div>
                    <h3>Fulano</h3>
                    <p>05/06/2018 às 09:45</p>
                  </div>
                </div>
                <div className="solicitacaoCardButtons">
                  <button className='cancelButton'>
                    Recusar
                  </button>

                  <button className='acceptButton'>
                    Aceitar
                  </button>
                </div>
              </article>
            </section>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
