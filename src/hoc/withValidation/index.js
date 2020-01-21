//@flow
import * as React from 'react';

//Import STYLES
import './styles.css';

type InjectedProps = {|
  errors?: any,
  touched?: any,
  className?: string,
|};

const withValidation = <Config: any>(
  WrappedComponent: React.AbstractComponent<{|...Config, ...InjectedProps|}>,
): React.AbstractComponent<Config> => {
  const WrapperComponent = (props: Config) => {
    const {errors, touched, className, styles, ...otherProps} = props;
    const classNames = ['validation-wrapper', className].join(' ');

    return (
      <div className={classNames}>
        <WrappedComponent
          styles={{
            ...styles,
            field: {
              ...styles.field,
              borderColor:
                errors && touched
                  ? '#e74c3c'
                  : styles.field.borderColor
                  ? styles.field.borderColor
                  : 'transparent',
            },
          }}
          {...otherProps}
        />

        {errors && touched && (
          <div className="validation-wrapper__error-text">{errors}</div>
        )}
      </div>
    );
  };

  return WrapperComponent;
};

export default withValidation;
