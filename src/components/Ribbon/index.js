//@flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|className?: string, text: string|};

const Ribbon = memo<Props>(({className, text}) => {
  const classNames = ['ribbon', className].join(' ');

  return (
    <div className={classNames}>
      <span className="ribbon__text">{text}</span>
    </div>
  );
});

Ribbon.displayName = 'Ribbon';

export default Ribbon;
