import './MainAside.css';
import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../../assets/images/profile-image.jpeg';
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import HistoricoIcon from '../../assets/icons/HistoricoIcon.svg';

const MainAside = ({children, ...props}) => {

  return (
    <aside className='MainAside'>
      <img className='MainAside__avatar' src={avatar} alt="Avatar"/>

      <nav className='MainMenu__nav'>
        <ul>
          <li className='MainAside__linkLine'>
            <Link to='/home' className='MainAside__link active'>
              <img src={HomeIcon} alt="Home" className='MainAside__linkIco'/>
            </Link>
          </li>

          <li className='MainAside__linkLine'>
            <Link to='/estabelecimento/123' className='MainAside__link'>
              <img src={HistoricoIcon} alt="Histórico" className='MainAside__linkIco'/>
            </Link>
          </li>

          <li className='MainAside__linkLine'>
            <Link to='/home' className='MainAside__link'>
              <img src={HomeIcon} alt="Home" className='MainAside__linkIco'/>
            </Link>
          </li>

          <li className='MainAside__linkLine'>
            <Link to='/home' className='MainAside__link'>
              <img src={HistoricoIcon} alt="Histórico" className='MainAside__linkIco'/>
            </Link>
          </li>

          <li className='MainAside__linkLine'>
            <Link to='/home' className='MainAside__link'>
              <img src={HomeIcon} alt="Home" className='MainAside__linkIco'/>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MainAside;
