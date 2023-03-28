import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selector';
import { useSelector, useDispatch } from 'react-redux';
import {ColorButton } from '../styled/styledMui'

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul
      style={{
        ml: 'auto',
        mr: 'auto',
        width: '48ch',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgb(73, 77, 95)',
            fontFamily: 'Segoe UI',
            fontSize: '18px',
            p: 0,
            mb: '16px',
            width: '100%',
          }}
        >
          <p>
            {name}: {number}
          </p>
          <ColorButton
            type="button"
            onClick={() => onDelContact(id)}
            style={{
              marginBottom: '5px',
              padding: '3px',
              fontSize: '12px',
              border: '1px solid #799d91',
              borderRadius: `8px`,
              '&:hover': {
                backgroundColor: `#40cd9e`,
                color: `#fff`,
                border: `1px solid #799d91`,
              },
            }}
          >
            Delete
          </ColorButton>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
