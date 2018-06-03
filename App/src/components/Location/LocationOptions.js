import './LocationOptions.css';
import React from 'react';

function LocationOptions ({ locations = [], onSelect, ...props }) {
  return (
    <ul className="LocationOptions">
      {
        locations.map((location) => (
          <li
            className="LocationOptions__option"
            key={ location.id }
            onClick={ () => onSelect(location) }
          >
            { location.address }
          </li>
        ))
      }
    </ul>
  );
}

export default LocationOptions;
