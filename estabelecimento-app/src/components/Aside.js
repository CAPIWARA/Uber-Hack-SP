import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg'

export default class Aside extends Component {
  render() {
    return (
      <aside className="dashAside">
        <nav>
          <img src={logo} alt="logo" style={{width:'50px', display:'block', margin:'0 auto 20px'}}/>
          <ul>
            <li>
              <NavLink to='/' exact>Reservas</NavLink>
            </li>
            <li>
              <NavLink to='/historico' exact>Historico de reservas</NavLink>
            </li>
            <li>
              <NavLink to='/configuracoes' exact>Configurar disponibilidade</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}
