import React, {Component} from 'react';
import SlippyButton from '../components/Slippy/SlippyButton';

export default class LoginView extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <SlippyButton to="/home">Entrar</SlippyButton>
      </div>
    )
  }
}
