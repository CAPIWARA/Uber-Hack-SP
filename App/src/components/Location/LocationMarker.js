import './LocationMarker.css';
import React from 'react';

function LocationMarker ({ id, isCurrent = false, onClick, ...props }) {
  const classNames = ['LocationMarker'].concat(
    isCurrent ? ['LocationMarker--isCurrent'] : []
  ).join(' ');

  return (
    <div
      className={ classNames }
      onClick={ () => onClick && onClick(id) }
    ></div>
  );
}

export default LocationMarker;
