//@flow
import React, {memo, useRef, useEffect, useState} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  style?: {|mainContainer?: {[key: string]: any}|},
  isActive?: boolean,
  onStateChange?: boolean => void,
  children?: React$Node,
|};

const SideMenu = memo<Props>(
  ({className, style, isActive, onStateChange, children}) => {
    const classNames = [
      'side-menu',
      className,
      isActive ? 'isActive' : '',
    ].join(' ');
    const [menuWidthState, setMenuWidthState] = useState<?number>(null);

    const menuContainerRef = useRef<?HTMLDivElement>(null);

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      const element = menuContainerRef.current;

      if (element) {
        setMenuWidthState(element.clientWidth);
      }

      return function clean() {
        console.log('CLEAN side-menu');
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    const handleWindowResize = () => {
      const element = menuContainerRef.current;

      if (element) {
        setMenuWidthState(element.clientWidth);
      }
    };

    const handleCloseMenu = () => {
      onStateChange && onStateChange(false);
    };

    return (
      <>
        <div
          ref={menuContainerRef}
          style={{
            //...{
            //  transform: `translateX(-${isActive ? '100%' : '0'})`,
            //},
            ...(menuWidthState ? {right: menuWidthState * -1} : {}),
            ...(style ? style.mainContainer : {}),
          }}
          className={classNames}>
          {children}
        </div>

        <div
          onClick={handleCloseMenu}
          style={{right: isActive ? '0' : '-100%'}}
          className="side-menu-overlay"></div>
      </>
    );
  },
);

SideMenu.displayName = 'SideMenu';

export default SideMenu;
