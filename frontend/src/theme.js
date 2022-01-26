import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#616187',
      light: '#80809F',
      dark: '#43435E'
    },
    secondary: {
      main: '#fed147',
      light: '#FEDA6B',
      dark: '#B19231'
    },
    error: {
      main: '#f44336',
      light: '#E57373',
      dark: '#D32F2F'
    },
    warning: {
        main: '#ff9800',
        light: '#FFB74D',
        dark: '#f57c00'
    },
    success: {
        main: '#4CAF50',
        light: '#81C784',
        dark: '#388E3C'
    },
    typography: {
        fontFamily: [
          'Nunito',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: [16, "!important"]
    }
  },
});

export default theme;