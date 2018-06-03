import React, {Component} from 'react';
import './App.css';

import avatar from './assets/images/profile-image.jpeg';

class App extends Component {
  render() {
    return (
      <div>

        <header className="dashHeader">
        </header>

        <div className="dFlex">
          <aside className="dashAside">
            <nav>
              <ul>
                <li>
                  <a className="active">Agendamentos confirmados</a>
                </li>
                <li>
                  <a>Configurações</a>
                </li>

              </ul>
            </nav>
          </aside>

          <section className="dashCenterContainer">
            <h1>Agendamentos confirmados</h1>


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
    );
  }
}

export default App;
