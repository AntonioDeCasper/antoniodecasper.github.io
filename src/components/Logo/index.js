//@flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|className?: string, textColor?: string|};

export const Logo = memo<Props>(({className, textColor}) => {
  const classNames = ['logo', className].join(' ');

  return (
    <div
      style={textColor ? {color: textColor} : {}}
      className={classNames}>{`{ant}`}</div>
  );
});

Logo.displayName = 'Logo';
