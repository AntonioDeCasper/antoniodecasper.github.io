//@flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|className?: string, label?: string|};

const HeaderUbuntu = memo<Props>(({className, label}) => {
  const classNames = ['header-ubuntu', className].join(' ');

  return (
    <div className={classNames}>
      <span>{label}</span>

      <div className="header-ubuntu__icons"></div>
    </div>
  );
});

HeaderUbuntu.displayName = 'HeaderUbuntu';

export default HeaderUbuntu;
