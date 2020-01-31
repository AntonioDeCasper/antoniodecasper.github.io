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
  style?: {color?: string, hoverColor?: string, activeColor?: string},
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
      isActive ? 'btn-inline_isActive' : '',
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

    const setTextColor = () => {
      if (isActive) {
        if (style && style.activeColor) {
          return {color: style.activeColor};
        }
      }

      if (hoverState) {
        if (style && style.hoverColor && !style.activeColor) {
          return {color: style.hoverColor};
        }
      }

      return {};
    };

    console.log('%cRender ButtonInline', 'color: green');

    return (
      <div
        style={{
          ...(style && style.color ? {color: style.color} : {}),
          ...setTextColor(),
        }}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        onClick={onClick}
        className={classNames}>
        <div className="btn-inline__text">
          {text}
          <div
            style={{backgroundColor: style ? style.hoverColor : '#2196f3'}}
            className="btn-inline__top-line"></div>
          <div
            style={{backgroundColor: style ? style.hoverColor : '#2196f3'}}
            className="btn-inline__bottom-line"></div>
        </div>
      </div>
    );
  },
);

ButtonInline.displayName = 'ButtonInline';

export default ButtonInline;
