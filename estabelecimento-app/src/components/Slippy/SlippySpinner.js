import './SlippySpinner.css';
import React from 'react';

function SlippySpinner ({ isOverlayVisible = false, className, ...props }) {
  const classNames = ['SlippySpinner'].concat(
    className ? [className] : [],
  ).join(' ');

  return (
    <figure { ...props } className={ classNames }></figure>
  );
}

export default SlippySpinner;
