import './SlippyButton.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { isNonEmptyString } from '../../helpers/validators';

const SlippyButton = ({
  to = null,
  icon = null,
  isOnlyIcon = false,
  isDisabled = false,
  onClick,
  children,
  ...props
}) => {
  const SlippyButtonWrapper = isNonEmptyString(to) ? Link : 'button';

  const classNames = ['SlippyButton'].concat(
    isOnlyIcon ? ['SlippyButton--isOnlyIcon'] : [],
    isDisabled ? ['SlippyButton--isDisabled'] : [],
  ).join(' ');

  return (
    <SlippyButtonWrapper
      { ...props }
      to={ to }
      className={ classNames }
      onClick={ (event) => !isDisabled && onClick(event) }
    >
      {
        icon && (
          <span className="SlippyButton__icon">
            <img className="SlippyButton__image" src={ icon } alt={ children } />
          </span>
        )
      }

      {
        children && (
          <span className="SlippyButton__text">
            { children }
          </span>
        )
      }
    </SlippyButtonWrapper>
  );
};

export default SlippyButton;
