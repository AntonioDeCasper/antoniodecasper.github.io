//@flow
import * as React from 'react';
import {NavLink} from 'react-router-dom';

type InjectedProps = {|
  to: string,
  exact?: boolean,
  activeClassName?: string,
  classNameLink: string,
|};

const withLink = <Config: any>(
  WrappedComponent: React.AbstractComponent<{|...Config, ...InjectedProps|}>,
): React.AbstractComponent<Config> => {
  const WrapperComponent = (props: Config) => {
    const {to, exact, activeClassName, classNameLink, ...otherProps} = props;
    const [isActiveState, setIsActiveState] = React.useState<boolean>(false);

    const handleIsActive = match => {
      if (match) {
        setIsActiveState(true);
      } else {
        setIsActiveState(false);
      }
    };

    return (
      <NavLink
        to={to}
        exact={exact}
        activeClassName={activeClassName}
        isActive={handleIsActive}
        className={classNameLink}>
        <WrappedComponent isActive={isActiveState} {...otherProps} />
      </NavLink>
    );
  };

  return WrapperComponent;
};

export default withLink;
