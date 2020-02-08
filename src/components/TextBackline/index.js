//@flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  children: React$Node,
  textWrapperClassName?: string,
  options?: {
    line?: {
      height?: number,
      color?: string,
    },
    text?: {
      backgroundColor?: string,
      horizontalPadding?: number,
      background?: string,
    },
  },
|};

export const TextBackline = memo<Props>(
  ({className, children, options, textWrapperClassName}) => {
    const classNames = ['text-backline', className].join(' ');
    const textWrapperClassNames = [
      'text-backline__text-wrapper',
      textWrapperClassName,
    ].join(' ');

    const setBacklineStyles = () => {
      if (options && options.line) {
        const {height, color} = options.line;

        return {
          ...(height ? {height} : {}),
          ...(color ? {backgroundColor: color} : {}),
        };
      }

      return {};
    };

    const setTextStyles = () => {
      if (options && options.text) {
        const {backgroundColor, horizontalPadding, background} = options.text;

        return {
          ...(backgroundColor ? {backgroundColor} : {}),
          ...(horizontalPadding ? {horizontalPadding} : {}),
          ...(background ? {background} : {}),
        };
      }

      return {};
    };

    return (
      <div className={classNames}>
        <div style={setTextStyles()} className={textWrapperClassNames}>
          {React.Children.only(children)}
        </div>

        <div style={setBacklineStyles()} className="text-backline__line" />
      </div>
    );
  },
);

TextBackline.displayName = 'TextBackline';
