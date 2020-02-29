// @flow
import React, {createContext, useContext} from 'react';

//import COMPONENTS
import {Step, Connector} from './components';

//Import UTILS
import {isValueInList} from './utils';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  lineColor?: string,
  activeId?: Array<string> | 'all',
  children: React$Node,
|};

type ContextType = {
  activeId?: Array<string> | 'all',
  lineColor?: string,
};

const ProgresserContext = createContext<ContextType>({});

const Progresser = ({className, lineColor, activeId, children}: Props) => {
  const classNames = ['progresser', className].join(' ');
  const styles = {
    line: {
      ...(lineColor ? {backgroundColor: lineColor} : {}),
    },
  };

  const renderChildren = childrenList => {
    return React.Children.map(childrenList, (child, index) => {
      console.log('child: ', child);
      if (index === 0) {
        return child;
      } else {
        return (
          <>
            <Connector
              type={
                activeId === 'all' ||
                (activeId &&
                  child.props.id &&
                  isValueInList(activeId, child.props.id))
                  ? 'line'
                  : 'dotted'
              }
            />
            {child}
          </>
        );
      }
    });
  };

  return (
    <ProgresserContext.Provider value={{activeId, lineColor}}>
      <div className={classNames}>
        {/* <div style={styles.line} className="progresser__line" /> */}

        {renderChildren(children)}
      </div>
    </ProgresserContext.Provider>
  );
};

const useProgresserContext = () => useContext(ProgresserContext);

Progresser.displayName = 'Progresser';
Progresser.Step = Step;

export default Progresser;
export {useProgresserContext, Progresser};
