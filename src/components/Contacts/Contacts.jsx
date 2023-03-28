import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selector';
import { useSelector, useDispatch } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul style={{ ml: 'auto', mr: 'auto', width: '48ch' }}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 0,
            mb: '16px',
            width: '100%',
          }}
        >
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDelContact(id)}>
            Delete
          </button>
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
