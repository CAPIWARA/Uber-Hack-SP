import React, {Component} from 'react';
import avatar from '../assets/images/profile-image.jpeg';
import './ProfileView.css'
import SlippyButton from '../components/Slippy/SlippyButton'

export default class ProfileView extends Component {
  render() {
    return (
      <div className='Profile'>

        <header className='Profile__header'>
          <img src={avatar} alt="Avatar"/>
          <h1>Fulano de T.</h1>
          <p>São Paulo, SP</p>
        </header>

        <section className="Profile__pointsCard">
          <div>
            <h2>12</h2>
            <h3>Km's</h3>
          </div>
          <div>
            <h2>8</h2>
            <h3>Pontos</h3>
          </div>
          <div>
            <h2>4,6</h2>
            <h3>Nota</h3>
          </div>
        </section>

        <section className="Profile__infos">
          <div>
            <b>Nome:</b> Fulano de Tal
          </div>
          <div>
            <b>Telefone:</b> (xx) 00000-0000
          </div>
          <div>
            <b>E-mail:</b> fulano@de.tal
          </div>

          <div>
            <SlippyButton>Editar</SlippyButton>
          </div>
        </section>


      </div>
    )
  }
}
