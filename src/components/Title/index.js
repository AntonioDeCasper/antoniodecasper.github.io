// @flow
import React, {memo} from 'react';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  style?: {[string]: any},
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React$Node,
  uppercase?: boolean,
  underline?: boolean,
  lineThrough?: boolean,
  italic?: boolean,
|};

const Title = memo<Props>(
  ({
    className,
    style,
    children,
    type = 'h1',
    uppercase,
    underline,
    lineThrough,
    italic,
  }) => {
    const classNames = [
      'title',
      `title_type_${type}`,
      uppercase ? 'title_tt_uppercase' : '',
      underline ? 'title_decoration_underline' : '',
      lineThrough ? 'title_decoration_line-through' : '',
      italic ? 'title_style_italic' : '',
      className,
    ].join(' ');
    const Tag = `${type}`;

    return (
      <Tag style={style} className={classNames}>
        {children}
      </Tag>
    );
  },
);

Title.displayName = 'Title';

export default Title;
