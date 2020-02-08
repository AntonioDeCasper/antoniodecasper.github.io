//@flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|className?: string, color?: string|};

export const LoaderOrbit = memo<Props>(({className, color}) => {
  const classNames = ['loader-orbit', className].join(' ');

  const styles = {
    orbitStyle: {
      borderColor: color,
    },
  };

  return (
    <div className={classNames}>
      <div
        style={styles.orbitStyle}
        className="loader-orbit__item loader-orbit__item-one"></div>
      <div
        style={styles.orbitStyle}
        className="loader-orbit__item loader-orbit__item-two"></div>
      <div
        style={styles.orbitStyle}
        className="loader-orbit__item loader-orbit__item-three"></div>
    </div>
  );
});

LoaderOrbit.displayName = 'LoaderOrbit';
