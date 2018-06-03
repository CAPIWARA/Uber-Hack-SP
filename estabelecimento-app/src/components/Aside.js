import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside className="dashAside">
        <nav>
          <ul>
            <li>
              <NavLink to='/efetuar-checkin' exact>Efetuar Check-in</NavLink>
            </li>
            <li>
              <NavLink to='/configuracoes' exact>Configurações</NavLink>
            </li>

          </ul>
        </nav>
      </aside>
    )
  }
}