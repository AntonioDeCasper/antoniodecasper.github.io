//@flow
import React from 'react';
import {useLocation} from 'react-router-dom';

//Import COMPONENTS
import {ButtonInline} from '../../../ButtonInline';

// Import STYLES
import './styles.css';

type RoutesType = {path: string, name: string};

type Props = {|
  className?: string,
  routes: Array<RoutesType>,
  colors: {[string]: any},
  onMenuClose: boolean => void,
  onLinkClick: RoutesType => void,
|};

export const NavigationMenuContent = ({
  className,
  routes,
  colors,
  onMenuClose,
  onLinkClick,
}: Props) => {
  const classNames = ['navigation-menu-content', className].join(' ');
  const location = useLocation();

  const handleClick = route => {
    onLinkClick(route);
    onMenuClose(false);
  };

  return (
    <div className={classNames}>
      {routes.map(route => (
        <ButtonInline
          key={route.path}
          style={{
            color: colors.textColor,
            activeColor: colors.secondaryColor,
            hoverColor: colors.secondaryColor,
          }}
          isActive={location.pathname === route.path}
          onClick={() => handleClick(route)}
          text={route.name}
          className="btn-inline_active_double navigation-menu-content__btn navigation-menu-content__link"
        />
      ))}
    </div>
  );
};
