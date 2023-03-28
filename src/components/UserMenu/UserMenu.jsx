import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import { Box, Typography } from '@mui/material';
import { ColorButton } from 'components/styled/styledMui';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Typography>Welcome, {user.name}!</Typography>
      <ColorButton
        variant="outlined"
        // bgColor="rgba(132, 88, 179, 0.3)"
        // textColor="#e5eaf5"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </ColorButton>
    </Box>
  );
};
export default UserMenu;
