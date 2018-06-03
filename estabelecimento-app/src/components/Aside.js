import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside className="dashAside">
        <nav>
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
