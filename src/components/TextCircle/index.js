//@flow
import React, {useEffect, useState} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  text: string,
  options: {
    radius: number,
    marginCircle: number,
    rotate: number,
    letterSpacing: number,
    textColor: string,
  },
  startAnimation?: boolean,
|};

const TextCircle = ({className, text, options, startAnimation}: Props) => {
  const classNames = [
    'text-circle',
    startAnimation ? 'isActive' : '',
    className,
  ].join(' ');

  const [letterListState, setLetterListState] = useState<Array<string>>(['']);

  useEffect(() => {
    setLetterListState(text.split(''));
  }, [text]);

  return (
    <div
      style={
        startAnimation
          ? {
              transform: `rotate(${options.rotate}deg)`,
            }
          : {}
      }
      className={classNames}>
      {letterListState.length > 0 &&
        letterListState.map((letter, index) => (
          <span
            style={{
              left: options.radius - 10,
              height: options.marginCircle
                ? options.radius - options.marginCircle
                : options.radius,
              top: options.marginCircle ? options.marginCircle : 0,
              transform: `rotate(${index *
                (options.letterSpacing ? options.letterSpacing : 6)}deg)`,
              color: options.textColor,
            }}
            className={`text-circle__letter text-circle_char_${index}`}
            key={index}>
            {letter}
          </span>
        ))}
    </div>
  );
};

export default TextCircle;
