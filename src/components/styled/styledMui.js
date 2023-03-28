import {
  Button,
  Input,
  InputLabel,
  ListItemButton,
  styled,
} from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    borderRadius: `8px`,
    backgroundColor: '#40cd9e',
    color: '#e5eaf5',
  },
  '&.active': {
    backgroundColor: `#40cd9e`,
    color: '#fff',
    borderRadius: `8px`,
  },
}));

export const ColorButton = styled(Button)(() => ({
  color: 'inherit',
  padding: '5px',
  border: '1px solid #799d91',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: `#40cd9e`,
    color: `#fff`,
    border: `1px solid #799d91`,
  },
}));

export const StyledInput = styled(Input)({
  marginBottom: '32px',
  '&.MuiInput-underline:after': {
    borderBottomColor: '#799d91',
  },

  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#799d91',
    },
  },
});

export const StyledInputLable = styled(InputLabel)({
  '&.Mui-focused': {
    color: '#799d91',
  },
});