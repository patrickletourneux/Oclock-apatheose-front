import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b8d4',
    },
    secondary: {
      main: '#8bc34a',
    },
  },

  typography: {
    fontFamily: ['Roboto'].join(','),

    h1: {
      fontSize: 14,
      fontWeight: 800,
    },
    h2: {
      fontSize: 12,
      fontWeight: 600,
    },
    h3: {
      fontSize: 10,
      fontWeight: 500,
    },

    body1: {
      fontSize: 10,
      fontWeight: 500,
    },

    button: {
      fontSize: '1.5rem',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 800,
      lg: 1024,
      xl: 1200,
    },
  },
});

export default theme;
