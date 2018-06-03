import React, {Component} from 'react';
import './EfetuarCheckinView.css';

import SlippyModal from '../components/Slippy/SlippyModal'
import SlippyButton from '../components/Slippy/SlippyButton'

export default class EfetuarCheckinView extends Component {
  constructor(){
    super();
    this.state = {isModalCheckInOpen: false}
  }
  render() {
    return (
      <div>
        <h1>Efetuar Check-in</h1>

        <table className='EfetuarCheckin__table'>
          <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Duração</th>
            <th>Nome</th>
            <th>Serviços</th>
            <th>Check-in</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>03/06/2018</td>
            <td>07:30</td>
            <td>00:30</td>
            <td>Fulano</td>
            <td>Bike, Ducha</td>
            <td><button onClick={()=>this.setState({isModalCheckInOpen:true})}>Check-in</button></td>
          </tr>

          <tr>
            <td>03/06/2018</td>
            <td>07:30</td>
            <td>00:30</td>
            <td>Fulano</td>
            <td>Bike, Ducha</td>
            <td><button onClick={()=>this.setState({isModalCheckInOpen:true})}>Check-in</button></td>
          </tr>

          <tr>
            <td>03/06/2018</td>
            <td>07:30</td>
            <td>00:30</td>
            <td>Fulano</td>
            <td>Bike, Ducha</td>
            <td><button onClick={()=>this.setState({isModalCheckInOpen:true})}>Check-in</button></td>
          </tr>

          <tr>
            <td>03/06/2018</td>
            <td>07:30</td>
            <td>00:30</td>
            <td>Fulano</td>
            <td>Bike, Ducha</td>
            <td><button onClick={()=>this.setState({isModalCheckInOpen:true})}>Check-in</button></td>
          </tr>

          <tr>
            <td>03/06/2018</td>
            <td>07:30</td>
            <td>00:30</td>
            <td>Fulano</td>
            <td>Bike, Ducha</td>
            <td><button onClick={()=>this.setState({isModalCheckInOpen:true})}>Check-in</button></td>
          </tr>
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