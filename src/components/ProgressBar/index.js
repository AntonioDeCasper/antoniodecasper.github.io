// @flow
import React, {memo, useRef, useEffect, useState} from 'react';
import {useWindowDimension} from '../../context';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  label: string,
  icon?: React$Node,
  progressValue: number,
  color?: string,
  isActive?: boolean,
  animation?: {|delay?: string, duration?: string|},
|};

const ProgressBar = memo<Props>(
  ({className, label, icon, progressValue, color, isActive, animation}) => {
    const classNames = [
      'progress-bar',
      className,
      isActive ? 'progress-bar_isAnimated' : '',
    ].join(' ');
    const [elementWidthState, setElementWidthState] = useState<?number>(null);
    const mainContainerRef = useRef<?HTMLDivElement>(null);
    const {width} = useWindowDimension();

    useEffect(() => {
      if (mainContainerRef.current) {
        setElementWidthState(mainContainerRef.current.clientWidth);
      }
    }, [width]);

    const calculateValueBarPosition = () => {
      if (elementWidthState) {
        return `${(elementWidthState * progressValue) / 100 - 18}px`;
      }

      return `${progressValue}`;
    };

    const calculateAnimationStyles = () => {
      const animationStyles = {};

      if (animation) {
        if (animation.delay) {
          animationStyles.transitionDelay = isActive ? animation.delay : 0;
        }

        if (animation.duration) {
          animationStyles.transitionDuration = isActive
            ? animation.duration
            : 0;
        }
      }

      return animationStyles;
    };

    const calculateValueBarAnimationDelay = () => {
      let animationDelay = 0;

      const convertToMilliseconds = (value: string) => {
        if (value.split('ms').length === 2) {
          return parseInt(value);
        } else if (value.split('s').length === 2) {
          return parseFloat(value) * 1000;
        } else {
          return 0;
        }
      };

      if (animation) {
        if (animation.delay) {
          animationDelay += convertToMilliseconds(animation.delay);
        }
      }

      animationDelay +=
        animation && animation.duration
          ? convertToMilliseconds(animation.duration)
          : 1000;

      return {animationDelay: `${animationDelay}ms`};
    };

    return (
      <div ref={mainContainerRef} className={classNames}>
        <div className="progress-bar__label">
          {icon && <span className="progress-bar__label-icon">{icon}</span>}

          <span className="progress-bar__label-txt">{label}</span>
        </div>

        <div className="progress-bar__back-line">
          <span
            style={{
              ...(isActive ? {width: `${progressValue}%`} : {}),
              ...(color ? {backgroundColor: color} : {}),
              ...calculateAnimationStyles(),
            }}
            className={`progress-bar__front-line`}
          />

          <div
            style={{
              ...{left: calculateValueBarPosition()},
              ...(color ? {borderColor: color} : {}),
              ...calculateValueBarAnimationDelay(),
            }}
            className={`progress-bar__value-bar ${
              isActive ? 'animated flipInY' : ''
            }`}>
            <span className="progress-bar__value-txt">{progressValue}</span>

            <div
              style={color ? {borderColor: color} : {}}
              className="progress-bar__value-arrow"
            />
          </div>
        </div>
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
