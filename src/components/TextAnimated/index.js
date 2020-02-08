//@flow
import React, {useEffect, useState, memo} from 'react';
import Typist from 'react-typist';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  textList: Array<{text: string, className: string}>,
  delay?: {
    show: number,
    start: number,
  },
|};

export const TextAnimated = memo<Props>(({className, textList, delay}) => {
  const classNames = ['text-animated', className].join(' ');

  const [indexState, setIndexState] = useState<number>(0);
  const [startDelayState, setStartDelayState] = useState<number>(
    delay && delay.start ? delay.start : 0,
  );

  useEffect(() => {
    if (indexState === 0 && delay && startDelayState === delay.start) {
      setStartDelayState(0);
    }
  }, [indexState]);

  const handleTypingDone = () => {
    if (indexState === textList.length - 1) {
      setIndexState(0);
    } else {
      setIndexState(prevState => prevState + 1);
    }
  };

  return (
    <div className={classNames}>
      <Typist key={indexState} onTypingDone={handleTypingDone}>
        <Typist.Delay ms={startDelayState} />
        <div className="text-animated__text">
          <p className={`${textList[indexState].className}`}>
            {' '}
            {textList[indexState].text}
          </p>
          <Typist.Backspace
            count={textList[indexState].text.length}
            delay={delay ? delay.show : 3000}
          />
        </div>
      </Typist>
    </div>
  );
});

TextAnimated.displayName = 'TextAnimated';
