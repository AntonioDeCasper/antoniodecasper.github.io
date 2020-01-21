//@flow
import React from 'react';

// Import STYLES
import './styles.css';

type Props = {className?: string, style?: Object};

const PageTransition = ({className, style}: Props) => {
  const classNames = ['page-transition', className].join(' ');

  return <div style={style} className={classNames}></div>;
};

export default PageTransition;
