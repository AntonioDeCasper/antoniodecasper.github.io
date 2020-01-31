//@flow
import React, {memo, useState, useEffect} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  color?: string,
  onStateChanged?: boolean => void,
  state?: boolean,
|};

const ButtonBurger = memo<Props>(
  ({className, color, onStateChanged, state}) => {
    const [isActiveState, setIsActiveState] = useState<boolean>(false);
    const classNames = [
      'button-burger',
      isActiveState ? 'isActive' : '',
      className,
    ].join(' ');

    useEffect(() => {
      onStateChanged && onStateChanged(isActiveState);
    }, [isActiveState]);

    useEffect(() => {
      if (state !== undefined && state !== isActiveState) {
        setIsActiveState(state);
      }
    }, [state]);

    const handleOnClick = () => {
      setIsActiveState(prevState => !prevState);
    };

    return (
      <div onClick={handleOnClick} className={classNames}>
        <div
          style={{backgroundColor: color ? color : {}}}
          className="button-burger__item button-burger__first-item"></div>
        <div
          style={{backgroundColor: color ? color : {}}}
          className="button-burger__item button-burger__second-item"></div>
        <div
          style={{backgroundColor: color ? color : {}}}
          className="button-burger__item button-burger__third-item"></div>
      </div>
    );
  },
);

ButtonBurger.displayName = 'ButtonBurger';

export default ButtonBurger;
