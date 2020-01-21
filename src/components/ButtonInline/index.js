//@flow
import React, {memo, useState} from 'react';

//Import STYLES
import './styles.css';

type Props = {
  text?: string,
  className?: string,
  onClick?: any => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  style?: {color: string, hoverColor: string},
  isActive?: boolean,
};

const ButtonInline = memo<Props>(
  ({
    text = 'Button',
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    style,
    isActive,
  }) => {
    const classNames = [
      'btn-inline',
      className,
      isActive ? 'isActive' : '',
    ].join(' ');
    const [hoverState, setHoverState] = useState<boolean>(false);

    const handleMouseHover = status => {
      if (status && onMouseEnter) {
        onMouseEnter();
      }

      if (!status && onMouseLeave) {
        onMouseLeave();
      }

      setHoverState(status);
    };

    console.log('%cRender ButtonInline', 'color: green');

    return (
      <div
        style={{
          color:
            hoverState || isActive
              ? style
                ? style.hoverColor
                : 'red'
              : style
              ? style.color
              : '#fff',
        }}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        onClick={onClick}
        className={classNames}>
        <span className="btn-inline__text">
          {text}
          <div
            style={{backgroundColor: style ? style.hoverColor : '#2196f3'}}
            className="btn-inline__top-line"></div>
          <div
            style={{backgroundColor: style ? style.hoverColor : '#2196f3'}}
            className="btn-inline__bottom-line"></div>
        </span>
      </div>
    );
  },
);

ButtonInline.displayName = 'ButtonInline';

export default ButtonInline;
