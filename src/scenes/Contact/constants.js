//@flow
import {LightenDarkenColor} from '../../libs/utils';

//Import STYLES
import {theme} from '../../store';

const {primaryColor, secondaryColor, textColor} = theme.colors.contact;

const INPUT_DEFAULT_STYLES = {
  field: {
    borderColor: secondaryColor,
    color: textColor,
  },
  placeholder: {
    color: LightenDarkenColor(primaryColor, 40),
  },
  placeholderFocused: {
    color: secondaryColor,
  },
};

export {INPUT_DEFAULT_STYLES};
