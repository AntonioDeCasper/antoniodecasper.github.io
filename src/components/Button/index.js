//@flow
import React, {memo, useState} from 'react';

//Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  style?: {},
  activeStyle?: {},
  iconClassName?: string,
  text: string,
  theme?: 'sun' | 'sun-inverted',
  icon?: React$Element<'svg'>,
  animationType?: 'position-aware' | 'swipe-left',
  type?: 'button' | 'submit' | 'tag',
  isToggled?: boolean,
  onClick?: (
    SyntheticEvent<HTMLButtonElement>,
    ?({[string]: boolean} | boolean),
  ) => void,
  name?: string | number,
|};

export const Button = memo<Props>(
  ({
    className,
    text,
    theme,
    icon,
    iconClassName,
    animationType,
    type,
    style,
    activeStyle,
    isToggled,
    onClick,
    name,
  }) => {
    const classNames = [
      'button',
      theme && `button_theme_${theme}`,
      animationType && `button_animation_${animationType}`,
      className,
    ].join(' ');
    const iconClassNames = ['button__icon', iconClassName].join(' ');

    const [cirlcePositionState, setCirclePositionState] = useState<{|
      x: number,
      y: number,
    |}>({x: 0, y: 0});
    const [buttonSizeState, setButtonSizeState] = useState<{
      width: number,
      height: number,
    }>({width: 0, height: 0});
    const [isHoverState, setIsHoverState] = useState<boolean>(false);

    const handleMouseHover = (event, isHoverState) => {
      setIsHoverState(isHoverState);

      if (animationType === 'position-aware') {
        const absoluteMousePosition = {x: event.clientX, y: event.clientY};

        if (event.type === 'mouseenter') {
          setButtonSizeState({
            width: event.currentTarget.clientWidth,
            height: event.currentTarget.clientHeight,
          });
        }

        if (event.type === 'mouseleave') {
          setButtonSizeState({
            width: 0,
            height: 0,
          });
        }

        const calcAbsoluteElementPosition = (
          elementPosition,
          notStaticParent,
        ) => {
          if (
            notStaticParent.offsetTop !== 0 ||
            notStaticParent.offsetLeft !== 0
          ) {
            let newElementPosition = {
              ...calcAbsoluteElementPosition(
                {
                  x: elementPosition.x + notStaticParent.offsetLeft,
                  y: elementPosition.y + notStaticParent.offsetTop,
                },
                notStaticParent.offsetParent,
              ),
            };

            return newElementPosition;
          }

          return elementPosition;
        };

        let absoluteElementPosition = {
          ...calcAbsoluteElementPosition(
            {
              x: event.currentTarget.offsetLeft,
              y: event.currentTarget.offsetTop,
            },
            event.currentTarget.offsetParent,
          ),
        };

        setCirclePositionState({
          x: absoluteMousePosition.x - absoluteElementPosition.x,
          y: absoluteMousePosition.y - absoluteElementPosition.y,
        });
      }
    };

    const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
      onClick &&
        onClick(
          e,
          isToggled !== null && isToggled !== undefined
            ? name
              ? {[name]: isToggled}
              : isToggled
            : undefined,
        );
    };

    const styles = {
      animationCircle: {
        top: cirlcePositionState.y,
        left: cirlcePositionState.x,
        width: Math.max(buttonSizeState.width, buttonSizeState.height) * 2.1,
        height: Math.max(buttonSizeState.width, buttonSizeState.height) * 2.1,
      },
    };

    console.log('%cRender Button', 'color: green');

    return (
      <button
        style={{
          ...style,
          ...(activeStyle && (isHoverState || isToggled) ? activeStyle : {}),
        }}
        className={classNames}
        type={type ? type : 'button'}
        onClick={handleClick}
        onMouseEnter={e => handleMouseHover(e, true)}
        onMouseLeave={e => handleMouseHover(e, false)}>
        {icon && <div className={iconClassNames}>{icon}</div>}

        <span className="button__text">{text}</span>

        {animationType === 'position-aware' && (
          <div style={styles.animationCircle} className="button__circle"></div>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
