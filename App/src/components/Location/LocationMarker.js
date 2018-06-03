import './LocationMarker.css';
import React from 'react';

function LocationMarker ({ color = '#ED7C00',...props }) {
  return (
    <div className="LocationMarker" style={{ backgroundColor: color }}></div>
  );
}

export default LocationMarker;
