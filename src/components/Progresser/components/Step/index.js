// @flow
import React, {memo, useEffect, useState, useMemo} from 'react';
import {useProgresserContext} from '../../';

//Import UTILS
import {isValueInList} from '../../utils';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  children: React$Node,
  size?: number,
  colors?: {
    circleColor: string,
    innerColor: string,
    hoverColor: string,
    textColor: string,
    hoverTextColor: string,
  },
  outerCircleBottom?: boolean,
  description?: React$Node,
  id?: string,
|};

const DESCRIPTION_PADDING = 15;

const Step = memo<Props>(
  ({className, children, size, colors, outerCircleBottom, description, id}) => {
    const {activeId, lineColor} = useProgresserContext();
    const [isActiveState, setIsActiveState] = useState<boolean>(false);
    const [isHoveredState, setIsHoveredState] = useState<boolean>(false);
    const classNames = [
      'progresser-step',
      isActiveState ? 'progresser-step_isActive' : '',
      className,
    ].join(' ');

    useEffect(() => {
      if (
        activeId === 'all' ||
        (activeId && id && isValueInList(activeId, id))
      ) {
        setIsActiveState(true);
      }
    }, [activeId, id]);

    const calcHalfCircleSize = useMemo(() => {
      if (size) {
        return size + (size * 20) / 100;
      }

      return 0;
    }, [size]);

    const hoveredColor = useMemo(() => {
      if (colors && colors.hoverColor) {
        return colors.hoverColor;
      }

      return '#f44336';
    }, [colors]);

    const styles = {
      mainContainer: {
        ...{width: size ? size : '100px', height: size ? size : '100px'},
        ...(colors && colors.circleColor && isActiveState
          ? {borderColor: isHoveredState ? hoveredColor : colors.circleColor}
          : {}),
      },
      innerContainer: {
        ...{
          width: size ? size - (size * 20) / 100 : '80px',
          height: size ? size - (size * 20) / 100 : '80px',
        },
        ...(colors && colors.innerColor && isActiveState
          ? {backgroundColor: isHoveredState ? hoveredColor : colors.innerColor}
          : {}),
      },
      halfCircle: {
        ...{
          width: size ? calcHalfCircleSize : '120px',
          height: size ? calcHalfCircleSize / 2 + 4 : '64px',
        },
        ...(lineColor ? {borderColor: lineColor} : {}),
      },
      halfCircleTop: {
        borderTopLeftRadius: size ? calcHalfCircleSize / 2 : '60px',
        borderTopRightRadius: size ? calcHalfCircleSize / 2 : '60px',
        marginTop: size ? (calcHalfCircleSize / 2 + 2) * -1 : '-62px',
      },
      halfCircleBottom: {
        borderBottomLeftRadius: size ? calcHalfCircleSize / 2 : '60px',
        borderBottomRightRadius: size ? calcHalfCircleSize / 2 : '60px',
        marginBottom: size ? (calcHalfCircleSize / 2 + 2) * -1 : '-62px',
      },
      descriptionBottom: {
        top: size ? size - DESCRIPTION_PADDING : '100px',
        paddingTop: DESCRIPTION_PADDING,
      },
      descriptionTop: {
        bottom: size ? size - DESCRIPTION_PADDING : '100px',
        paddingBottom: DESCRIPTION_PADDING,
      },
    };

    const handleHoverState = (e: SyntheticEvent<HTMLDivElement>) => {
      if (e.type === 'mouseenter') {
        setIsHoveredState(true);
      }

      if (e.type === 'mouseleave') {
        setIsHoveredState(false);
      }
    };

    return (
      <div
        onMouseEnter={handleHoverState}
        onMouseLeave={handleHoverState}
        style={styles.mainContainer}
        className={classNames}>
        <div
          style={{
            ...styles.halfCircle,
            ...(outerCircleBottom
              ? styles.halfCircleBottom
              : styles.halfCircleTop),
          }}
          className={`progresser-step__half-circle ${
            outerCircleBottom ? 'progresser-step__half-circle-bottom' : ''
          }`}></div>

        <div style={styles.innerContainer} className="progresser-step__inner">
          {children}

          {description && (
            <div
              style={
                outerCircleBottom
                  ? styles.descriptionTop
                  : styles.descriptionBottom
              }
              className="progresser-step__description">
              {description}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Step.displayName = 'Step';

export default Step;
