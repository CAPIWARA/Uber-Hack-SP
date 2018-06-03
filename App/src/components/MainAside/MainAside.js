import './MainAside.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoIcon from '../../assets/images/Logo-Icon.svg';
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import HistoricoIcon from '../../assets/icons/HistoricoIcon.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import UserIcon from '../../assets/icons/man-user.svg';
import FavoritesIcon from '../../assets/icons/favorites.svg';

const MainAside = ({children, ...props}) => {

  return (
    <aside className='MainAside'>
      <img className='MainAside__logo' src={ LogoIcon } alt="Host a Bike"/>

      <nav className='MainMenu__nav'>
        <ul>
          <li className='MainAside__linkLine'>
            <NavLink to='/home' className='MainAside__link'>
              <img src={HomeIcon} alt="Home" className='MainAside__linkIco'/>
            </NavLink>
          </li>

          <li className='MainAside__linkLine'>
            <NavLink to='/favoritos' className='MainAside__link'>
              <img src={FavoritesIcon} alt="favoritos" className='MainAside__linkIco'/>
            </NavLink>
          </li>

          <li className='MainAside__linkLine'>
            <NavLink to='/reservas' className='MainAside__link'>
              <img src={CalendarIcon} alt="agendamentos" className='MainAside__linkIco'/>
            </NavLink>
          </li>

          <li className='MainAside__linkLine'>
            <NavLink to='/historico' className='MainAside__link'>
              <img src={HistoricoIcon} alt="historico" className='MainAside__linkIco'/>
            </NavLink>
          </li>

          <li className='MainAside__linkLine'>
            <NavLink to='/profile' className='MainAside__link'>
              <img src={UserIcon} alt="profile" className='MainAside__linkIco'/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MainAside;
