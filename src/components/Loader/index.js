//@flow
import React, {memo} from 'react';
import {useTheme} from '../../context';

// Import STYLES
import './styles.css';

type Props = {|className?: string, color?: string|};

export const Loader = memo<Props>(({className, color}) => {
  const classNames = ['loader', className].join(' ');
  const {pageTransition} = useTheme().variables;

  const styles = {
    loaderItem: {
      borderTopColor: color,
    },
  };

  return (
    <div className={classNames}>
      <div
        style={{
          animationDelay: `${pageTransition}ms`,
        }}
        className="loader-wrapper animated zoomIn">
        <div
          style={{...(color ? styles.loaderItem : {})}}
          className="loader-item">
          <div
            style={{...(color ? styles.loaderItem : {})}}
            className="loader-item">
            <div
              style={{...(color ? styles.loaderItem : {})}}
              className="loader-item">
              <div
                style={{...(color ? styles.loaderItem : {})}}
                className="loader-item">
                <div
                  style={{...(color ? styles.loaderItem : {})}}
                  className="loader-item">
                  <div
                    style={{...(color ? styles.loaderItem : {})}}
                    className="loader-item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Loader.displayName = 'Loader';
