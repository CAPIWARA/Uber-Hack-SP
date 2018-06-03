import './SlippyModal.css';
import React from 'react';
import closeIcon from '../../assets/icons/cancel.svg'

function SlippyModal (props) {
  return (
    <div className="SlippyModal__masterContainer">
      <div className="SlippyModal__overlay" onClick={props.closeModal}>
      </div>
      <section className="SlippyModal__container">
        <div className="SlippyModal__closeBtn" onClick={props.closeModal}>
          <img src={closeIcon} alt="Fechar"/>
        </div>
        {props.title && (<h2 className="SlippyModal__title">{props.title}</h2>)}
        {props.children}
      </section>
    </div>
  );
}

export default SlippyModal;
