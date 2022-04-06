import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#44d5bc',
      light: '#fff',
    },
  },

  typography: {
    fontFamily: ['helvetica'],

    h1: {
      fontSize: 30,
      fontWeight: 1000,
    },
    h2: {
      fontSize: 16,
      fontWeight: 600,
    },

    h3: {
      fontSize: 14,
      fontWeight: 500,
    },

    body1: {
      fontSize: 16,
      fontWeight: 500,
    },

    button: {
      fontSize: '1rem',
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
