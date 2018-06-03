import './SlippyModal.css';
import React from 'react';

function SlippyModal (props) {
  return (
    <div className="SlippyModal__overlay">
      <section className="SlippyModal__container">
        {props.title && (<h2 className="SlippyModal__title">{props.title}</h2>)}
        {props.children}
      </section>
    </div>
  );
}

export default SlippyModal;
