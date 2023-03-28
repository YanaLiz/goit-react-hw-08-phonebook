import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Appbar  from './AppBar/AppBar';
import { Suspense } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#d0bdf4',
      darker: '#8458B3',
    },
    secondary: {
      main: '#e5eaf5',
      contrastText: '#494D5F',
    },
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Appbar position="static" />
      <Suspense fallback={null}>
        <main>
          <Container maxWidth="lg" sx={{ pt: '32px' }}>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
};
