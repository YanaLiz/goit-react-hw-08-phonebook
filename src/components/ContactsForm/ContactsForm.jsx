// import css from './Styles.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selector';
import { Box, FormControl } from '@mui/material';
import {
  ColorButton,
  StyledInput,
  StyledInputLable,
} from 'components/styled/styledMui';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const storeContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const alertContact = storeContacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    alertContact.length
      ? toast.error(`${name} is already in contacts`)
      : dispatch(addContact({ name, number: number }));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      sx={{
        width: '48ch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: '32px',
        ml: 'auto',
        mr: 'auto',
      }}
      onSubmit={handleSubmit}
    >
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-phonebook-name">
          Name
        </StyledInputLable>
        <StyledInput
          id="standard-phonebook-name"
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-phonebook-number">
          Number
        </StyledInputLable>
        <StyledInput
          id="standard-phonebook-number"
          variant="standard"
          type="tel"
          name="phone"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <ColorButton sx={{ width: '18ch', ml: 'auto', mr: 'auto' }} type="submit">
        Add contact
      </ColorButton>
    </Box>
  );
};

export default ContactsForm;
