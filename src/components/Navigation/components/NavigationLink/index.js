//@flow
import * as React from 'react';

//Import COMPONENTS
import {ButtonInline} from '../../../../components/ButtonInline';

//Import HOCs
import {withLink} from '../../../../hoc';

//Import STYLES
import './styles.css';

type InjectedProps = {|
  to: string,
  exact?: boolean,
  activeClassName?: string,
  classNameLink: string,
|};

type Props = {|
  text?: string,
  className?: string,
  onClick?: any => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  style?: Object,
  isActive?: boolean,
  ...InjectedProps,
|};

export const NavigationLink = withLink<React.Config<Props, InjectedProps>>(
  ButtonInline,
);
