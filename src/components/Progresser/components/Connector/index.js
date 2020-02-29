// @flow
import React from 'react';
import {useProgresserContext} from '../../';

// Import STYLES
import './styles.css';

type Props = {|type?: 'dotted' | 'line'|};

const Connector = ({type}: Props) => {
  const classNames = [
    'progresser-connector',
    type ? `progresser-connector_type_${type}` : '',
  ].join(' ');
  const {lineColor} = useProgresserContext();

  const styles = {
    mainContainer: {
      borderColor:
        lineColor && type !== 'dotted'
          ? lineColor
          : type === 'dotted'
          ? '#bdbdbd'
          : '#2196f3',
    },
  };

  return <div style={styles.mainContainer} className={classNames} />;
};

export default Connector;
