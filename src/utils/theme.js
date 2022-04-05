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
      light: '#637bfe',
      main: '#3d5afe',
      dark: '#2a3eb1',
      contrastText: '#000',
    },
  },

  typography: {
    fontFamily: ['Segoe UI'],

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
