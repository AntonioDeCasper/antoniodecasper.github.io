//@flow
import React, {memo, useState, useEffect} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  style?: {[string]: any},
  onHoverStyle?: {[string]: any},
  onHover?: boolean => void,
  target?: string,
  rel?: string,
  children: React$Element<any>,
  href: string,
|};

export const Link = memo<Props>(
  ({
    className,
    children,
    style,
    href,
    onHover,
    onHoverStyle,
    target,
    rel,
  }: Props) => {
    const classNames = ['link', className].join(' ');
    const [isHoveredState, setIsHoveredState] = useState<boolean>(false);

    const handleHover = status => {
      setIsHoveredState(status);
    };

    useEffect(() => {
      onHover && onHover(isHoveredState);
    }, [isHoveredState]);

    return (
      <a
        target={target}
        rel={rel}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        href={href}
        style={{
          ...style,
          ...(onHoverStyle && isHoveredState ? onHoverStyle : {}),
        }}
        className={classNames}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
