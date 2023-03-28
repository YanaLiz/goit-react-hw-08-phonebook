import React from 'react';
// import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
// import css from './AppBar.module.css';
import { AppBar, Box, Container } from '@mui/material';

const Appbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar sx={{ pt: '20px', pb: '20px' }} position="static">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <Navigation /> */}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
export default Appbar;
