import './SlippyButton.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { isNonEmptyString } from '../../helpers/validators';

const SlippyButton = ({ icon = null, to = null, isOnlyIcon = false, children, ...props }) => {
  const SlippyButtonWrapper = isNonEmptyString(to) ? Link : 'button';

  const classnames = ['SlippyButton'].concat(isOnlyIcon ? ['SlippyButton--isOnlyIcon'] : []).join(' ')

  return (
    <SlippyButtonWrapper { ...props } to={ to } className={ classnames }>
      {
        icon && (
          <span className="SlippyButton__icon">
            <img className="SlippyButton__image" src={icon} />
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
