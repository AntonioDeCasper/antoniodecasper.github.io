//@flow
import React from 'react';

//Import COMPONENTS
import NavigationLink from '../NavigationLink';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  routes: Array<{path: string, name: string}>,
  colors: {[string]: any},
  onMenuClose: boolean => void,
|};

const NavigationMenuContent = ({
  className,
  routes,
  colors,
  onMenuClose,
}: Props) => {
  const classNames = ['navigation-menu-content', className].join(' ');

  const handleClick = () => {
    onMenuClose(false);
  };

  return (
    <div className={classNames}>
      {routes.map(route => (
        <NavigationLink
          key={route.path}
          onClick={handleClick}
          style={{
            color: colors.textColor,
            activeColor: colors.secondaryColor,
            hoverColor: colors.secondaryColor,
          }}
          exact
          to={route.path}
          text={route.name}
          activeClassName="isActive"
          className="btn-inline_active_double navigation-menu-content__btn"
          classNameLink="navigation-menu-content__link"
        />
      ))}
    </div>
  );
};

export default NavigationMenuContent;
