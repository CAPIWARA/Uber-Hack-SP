import './SlippyNotify.css';
import React from 'react';
import {Link} from 'react-router-dom';

const SlippyNotify = ({title, text, children, ...props}) => {
  return (
    <div className="Notify">

      <Link to='/reservas'>
        <div className="Notify__lineTop"/>
        <div className="Notify__container">
          <h3>{title}</h3>
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default SlippyNotify;
