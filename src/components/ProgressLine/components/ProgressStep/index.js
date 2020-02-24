// @flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  children: React$Node,
  size?: number,
  colors?: {
    borderColor: string,
    backgroundColor: string,
    textColor: string,
  },
  outerCircleBottom?: boolean,
  description?: React$Node,
|};

const ProgressStep = memo<Props>(
  ({className, children, size, colors, outerCircleBottom, description}) => {
    const classNames = ['progress-step', className].join(' ');

    const styles = {
      mainContainer: {
        width: size ? size : '100px',
        height: size ? size : '100px',
      },
      innerContainer: {
        width: size ? size - (size * 20) / 100 : '80px',
        height: size ? size - (size * 20) / 100 : '80px',
      },
      halfCircle: {
        width: size ? size + (size * 20) / 100 : '120px',
        height: size ? (size + (size * 20) / 100) / 2 + 4 : '64px',
        borderTopLeftRadius: size ? (size + (size * 20) / 100) / 2 : '60px',
        borderTopRightRadius: size ? (size + (size * 20) / 100) / 2 : '60px',
        marginTop: size ? ((size + (size * 20) / 100) / 2 + 2) * -1 : '-62px',
      },
      halfCircleBottom: {
        width: size ? size + (size * 20) / 100 : '120px',
        height: size ? (size + (size * 20) / 100) / 2 + 4 : '64px',
        borderBottomLeftRadius: size ? (size + (size * 20) / 100) / 2 : '60px',
        borderBottomRightRadius: size ? (size + (size * 20) / 100) / 2 : '60px',
        marginBottom: size
          ? ((size + (size * 20) / 100) / 2 + 2) * -1
          : '-62px',
      },
      descriptionBottom: {
        top: size ? size : '100px',
      },
      descriptionTop: {
        bottom: size ? size : '100px',
      },
    };

    return (
      <div style={styles.mainContainer} className={classNames}>
        <div
          style={
            outerCircleBottom ? styles.halfCircleBottom : styles.halfCircle
          }
          className={`progress-step__half-circle ${
            outerCircleBottom ? 'progress-step__half-circle-bottom' : ''
          }`}></div>

        <div style={styles.innerContainer} className="progress-step__inner">
          {children}

          {description && (
            <div
              style={
                outerCircleBottom
                  ? styles.descriptionTop
                  : styles.descriptionBottom
              }
              className="progress-step__description">
              {description}
            </div>
          )}
        </div>
      </div>
    );
  },
);

ProgressStep.displayName = 'ProgressStep';

export default ProgressStep;
