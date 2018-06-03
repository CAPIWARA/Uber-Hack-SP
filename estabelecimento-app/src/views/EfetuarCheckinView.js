import React, {Component} from 'react';
import './EfetuarCheckinView.css';

import SlippyModal from '../components/Slippy/SlippyModal';
import SlippyButton from '../components/Slippy/SlippyButton';
import {database} from 'firebase';

export default class EfetuarCheckinView extends Component {
  constructor() {
    super();
    this.state = {
      isModalCheckInOpen: false,
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
      <div>
        <h1>Reservas</h1>

        <table className='EfetuarCheckin__table'>
          <thead>
          <tr>
            <th>Data e Hora</th>
            <th>Duração</th>
            <th>Nome</th>
            <th>Serviços</th>
            <th>Check-in</th>
          </tr>
          </thead>
          <tbody>

          {this.state.reservas.map((reserva, index) => {
            return reserva.status !== 'pending' && (
              <tr key={index}>
                <td>{reserva.start}</td>
                <td>{reserva.permanence}</td>
                <td>
                  {this.getName(reserva.user)}
                </td>
                <td>{reserva.type === 'shower' ? 'Ducha' : reserva.type === 'rack' ? 'Bike' : 'Ducha, Bike'}</td>
                <td>
                  {!reserva.check_in ? (
                      <button onClick={() => this.setState({isModalCheckInOpen: true})}>Check-in</button>) :
                    !reserva.check_out ? (
                      <button onClick={() => this.setState({isModalCheckInOpen: true})}>Check-out</button>) : ''
                  }

                </td>
              </tr>
            )
          })}

          </tbody>
        </table>

        {this.state.isModalCheckInOpen && (
          <SlippyModal title="Confirmar check-in?" canClose={true} closeModal={() => {
            this.setState({isModalCheckInOpen: false})
          }}>


            <SlippyButton onClick={() => {
              this.setState({isModalCheckInOpen: false});
            }}>
              Confirmar
            </SlippyButton>
          </SlippyModal>
        )}

      </div>
    )
  }
}
