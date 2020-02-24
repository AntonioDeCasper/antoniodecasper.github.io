// @flow
import React, {memo} from 'react';

//import COMPONENTS
import {ProgressStep} from './components';

// Import STYLES
import './styles.css';

type Props = {|className?: string, children: React$Node|};

const ProgressLine = memo<Props>(({className, children}) => {
  const classNames = ['progress-line', className].join(' ');

  return (
    <div className={classNames}>
      <div className="progress-line__line" />
      {children}
    </div>
  );
});

ProgressLine.displayName = 'ProgressLine';

export default ProgressLine;
export {ProgressStep, ProgressLine};
