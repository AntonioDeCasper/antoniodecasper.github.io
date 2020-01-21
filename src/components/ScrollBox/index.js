//@flow
import React, {memo, useState, useEffect, useRef} from 'react';

// Import STYLES
import './styles.css';

type Props = {|className?: string, children?: React$Node|};

const ScrollBox = memo<Props>(({className, children}) => {
  const classNames = ['scroll-box', className].join(' ');
  const [scrollBarWidthState, setScrollBarWidthState] = useState<number>(0);

  const scrollBoxRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (scrollBoxRef.current) {
      setScrollBarWidthState(
        scrollBoxRef.current.offsetWidth - scrollBoxRef.current.clientWidth,
      );
    }
  }, [scrollBoxRef.current]);

  return (
    <div className={classNames}>
      <div
        style={{left: scrollBarWidthState}}
        ref={scrollBoxRef}
        className="scroll-box__container">
        <div
          style={{right: scrollBarWidthState / 2}}
          className="scroll-box__inner-container">
          {children}
        </div>
      </div>
    </div>
  );
});

ScrollBox.displayName = 'ScrollBox';

export default ScrollBox;
