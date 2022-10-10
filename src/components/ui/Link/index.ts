import { styled } from '@mui/material/styles';
import LinkMUI from '@mui/material/Link';

interface LinkProps {
  hideUnderlineEffect?: boolean;
}

export const Link = styled(LinkMUI)<LinkProps>(
  ({ theme, hideUnderlineEffect = false }) => {
    const uderlineEffect = hideUnderlineEffect
      ? {}
      : {
          '&:hover:before': {
            visibility: 'visible',
            width: '100%',
          },

          '&:before': {
            content: `''`,
            position: 'absolute',
            width: 0,
            height: '4px',
            bottom: '-5px',
            left: 0,
            backgroundColor: theme.palette.getContrastText(
              theme.palette.background.default
            ),
            transition: `all 0.7s ${theme.transitions.easing.easeInOut}`,
            visibility: 'hidden',
          },
        };

    return {
      color: theme.palette.getContrastText(theme.palette.background.default),
      textDecoration: 'none',
      transition: `0.7s ${theme.transitions.easing.easeInOut}`,
      position: 'relative',
      width: 'fit-content',

      '&:hover': {
        transition: `0.7s ${theme.transitions.easing.easeInOut}`,
      },

      ...uderlineEffect,
    };
  }
);
