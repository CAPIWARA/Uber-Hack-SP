import './SlippyButton.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { isNonEmptyString } from '../../helpers/validators';

const SlippyButton = ({ icon = null, to = null, children, ...props }) => {
  const SlippyButtonWrapper = isNonEmptyString(to) ? Link : 'button';

  return (
    <SlippyButtonWrapper { ...props } to={ to } className="SlippyButton">
      {
        icon && (
          <span className="SlippyButton__icon">
            <img className="SlippyButton__image" src={icon} alt={children} />
          </span>
        )
      }

      <span className="SlippyButton__text">
        {children}
      </span>
    </SlippyButtonWrapper>
  );
};

export default SlippyButton;
