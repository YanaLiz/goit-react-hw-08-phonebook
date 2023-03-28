import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { ColorLinkButton } from 'components/styled/styledMui';
// import css from './AuthNav.module.css';

 const AuthNav = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem color="secondary">
        <ColorLinkButton component={NavLink} to="/register" color="inherit">
          Sing Up
        </ColorLinkButton>
      </ListItem>
      <ListItem>
        <ColorLinkButton component={NavLink} to="/login" color="inherit">
          Log In
        </ColorLinkButton>
      </ListItem>
    </List>
  );
};
export default AuthNav;