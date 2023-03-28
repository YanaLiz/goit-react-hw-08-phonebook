import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Container } from '@mui/material';

const Appbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar
      sx={{
        pt: '20px',
        pb: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      position="static"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
export default Appbar;
