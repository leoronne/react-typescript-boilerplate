import { styled } from '@mui/material/styles';
import IconButtonMUI from '@mui/material/IconButton';

const sizeMap = {
  small: 35,
  medium: 50,
  large: 75,
};

export const IconButton = styled(IconButtonMUI)(
  ({ theme, size = 'small' }) => ({
    padding: theme.spacing(0.9),
    transition: `0.5s ${theme.transitions.easing.easeInOut}`,
    width: `${sizeMap[size]}px`,
    height: `${sizeMap[size]}px`,

    'svg': {
      width: `${sizeMap[size] - 15}px`,
      height: `${sizeMap[size] - 15}px`,
    },

    '&:hover svg': {
      filter: 'brightness(1.4)',
      transition: `0.5s ${theme.transitions.easing.easeInOut}`,
    },
  })
);
