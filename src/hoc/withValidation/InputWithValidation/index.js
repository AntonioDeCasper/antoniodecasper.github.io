//@flow
import * as React from 'react';

//Import COMPONENTS
import {Input} from '../../../components/Input';

//Import HOCs
import {withValidation} from '../index';

type InjectedProps = {|
  errors?: any,
  touched?: any,
  className?: string,
|};

type InputProps = {|
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
  ...InjectedProps,
|};

export const InputWithValidation = withValidation<
  React.Config<InputProps, InjectedProps>,
>(Input);
