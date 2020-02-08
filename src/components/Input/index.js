//@flow
import React, {memo, useState} from 'react';
import {Field} from 'formik';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  placeholder?: string,
  type?: string,
  as?: 'input' | 'select' | 'textarea',
  value: string | number,
  name: string,
  styles?: {
    field: any,
    placeholder: any,
    placeholderFocused: any,
  },
|};

export const Input = memo<Props>(
  ({className, placeholder, name, type, styles, value, as}) => {
    const [focusState, setFocusState] = useState<boolean>(false);
    const classNames = [
      'input',
      className,
      focusState || value ? 'isFocused' : '',
    ].join(' ');

    const handleFocus = state => {
      setFocusState(state);
    };

    return (
      <div className={classNames}>
        <Field
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          style={styles ? styles.field : {}}
          className={`input__field ${
            as === 'textarea' ? 'input_textarea' : ''
          }`}
          type={type}
          name={name ? name : ''}
          as={as}
          autoComplete={`${name}`}
        />

        <div
          style={{
            ...(styles ? styles.placeholder : {}),
            ...(styles && styles.placeholderFocused && (focusState || value)
              ? styles.placeholderFocused
              : {}),
          }}
          className="input__placeholder">
          {placeholder}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';
