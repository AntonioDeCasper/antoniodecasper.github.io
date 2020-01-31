//@flow
import React, {memo, useRef} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  style?: {|mainContainer?: {[key: string]: any}|},
  isActive?: boolean,
  animationType?: 'slideLeft' | 'slideRight',
  onStateChange?: boolean => void,
  children?: React$Node,
  overlay?: boolean,
|};

const SideMenu = memo<Props>(
  ({
    className,
    style,
    isActive,
    onStateChange,
    children,
    animationType,
    overlay,
  }) => {
    const classNames = [
      'side-menu',
      animationType === 'slideLeft' ? 'side-menu_animation_slide-left' : '',
      animationType === 'slideRight' ? 'side-menu_animation_slide-right' : '',
      className,
      isActive ? 'isActive' : '',
    ].join(' ');

    const menuContainerRef = useRef<?HTMLDivElement>(null);

    const setMenuInitialPosition = () => {
      if (animationType === 'slideLeft') {
        return style && style.mainContainer && style.mainContainer.width
          ? {left: style.mainContainer.width * -1}
          : {};
      }

      return style && style.mainContainer && style.mainContainer.width
        ? {right: style.mainContainer.width * -1}
        : {};
    };

    const handleCloseMenu = () => {
      onStateChange && onStateChange(false);
    };

    return (
      <>
        <div
          ref={menuContainerRef}
          style={{
            ...(style
              ? {
                  ...style.mainContainer,
                  ...setMenuInitialPosition(),
                }
              : {}),
          }}
          className={classNames}>
          {children}
        </div>

        {overlay && (
          <div
            onClick={handleCloseMenu}
            style={{right: isActive ? '0' : '-100%'}}
            className="side-menu-overlay"></div>
        )}
      </>
    );
  },
);

SideMenu.displayName = 'SideMenu';

export default SideMenu;
