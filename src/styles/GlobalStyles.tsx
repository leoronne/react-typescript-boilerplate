import GlobalStyles from '@mui/material/GlobalStyles';

// const linearGradient = (bgColor: string) =>
//   `linear-gradient(180deg, rgba(145,92,236,1) 0%, rgba(166,92,235,0.7360119047619048) 24%, rgba(148,103,244,0.5567401960784313) 48%, ${bgColor} 100%)`;

export const globalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
      },
      'html, body, #root': {
        scrollBehavior: 'smooth',
        fontFamily: 'Roboto, sans-serif',
      },
      '.gradient-text': {
        color: 'transparent',
        backgroundClip: 'text',
        background: 'linear-gradient(89.86deg, #9572FC 27.08%, #0bd890 43.94%, #ffd900 89.57%)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
      },
      '::-webkit-scrollbar': {
        width: '2px',
        height: '5px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: '#3333',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#89777a',
        borderRadius: '8px',

        '&:hover': {
          background: '#333333',
        },
      },
    }}
  />
);
