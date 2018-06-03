import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import avatar from './assets/images/profile-image.jpeg';
import NotFound from "./views/NotFound";
import Aside from "./components/Aside";
import EfetuarCheckinView from "./views/EfetuarCheckinView";
import {initializeApp, database} from 'firebase'

initializeApp({
  apiKey: "AIzaSyD-7x27r2UkmoXHX_UKkZKHbBpQSp3eGd4",
  authDomain: "uber-hack-sp.firebaseapp.com",
  databaseURL: "https://uber-hack-sp.firebaseio.com",
  projectId: "uber-hack-sp",
  storageBucket: "uber-hack-sp.appspot.com",
  messagingSenderId: "264181005451"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservas: [],
      users: {}
    }
  }

  componentDidMount() {
    database().goOnline();
    database().ref('/reservations').on('value', (snapshot) => {
      this.setState({reservas: Object.values(snapshot.val())});
      this.fetchUsers();
      console.log(this.state.reservas)
    });
  }

  async fetchUsers () {
    const ids = new Set(this.state.reservas.map((reservation) => reservation.user));
    const users = await Promise.all([ ...ids ].map((id) => {
      return fetch(`https://uber-hack-sp.firebaseio.com/users/${id}.json`)
        .then((response) => response.json());
    }));
    this.setState({ users });
  }

  getName (id) {
    return this.state.users && this.state.users[id] && this.state.users[id].name;
  }

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
                <Route exact path='/' component={EfetuarCheckinView}/>

                <Route component={NotFound}/>
              </Switch>
            </section>

            <section className="dashSolicitacoesPendentes">


              {this.state.reservas.map((reserva, index) => {
                return reserva.status === 'pending' && (

                  <article className="solicitacaoCard" key={index}>
                    <div className="solicitacaoCardContainer">
                      <img src={avatar} alt=""/>

                      <div>
                        <h3>{this.getName(reserva.user)}</h3>
                        <p>{reserva.start}</p>
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
                )
              })}


            </section>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
