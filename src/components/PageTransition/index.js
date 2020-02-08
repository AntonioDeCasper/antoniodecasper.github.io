//@flow
import React from 'react';

// Import STYLES
import './styles.css';

type Props = {
  className?: string,
  style?: Object,
  isActive?: boolean,
  transitionDuration?: number,
};

export const PageTransition = ({
  className,
  style,
  isActive,
  transitionDuration,
}: Props) => {
  const classNames = [
    'page-transition',
    className,
    isActive ? 'isActive' : '',
  ].join(' ');

  return (
    <div
      style={{
        ...style,
        ...(transitionDuration
          ? {transitionDuration: `${transitionDuration}ms`}
          : {}),
      }}
      className={classNames}></div>
  );
};
