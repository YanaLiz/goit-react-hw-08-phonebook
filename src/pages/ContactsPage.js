import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Contacts from 'components/Contacts/Contacts';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import Filter from 'components/Filter/Filter';
import { fetchContact } from 'redux/contacts/operations'
import {Loader} from '../components/Loader/Loader';
import { Box } from '@mui/material';
import ContactsForm from 'components/ContactsForm/ContactsForm';


 const ContactsPage=()=> {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <SectionTitle title="Phonebook">
          <ContactsForm />
        </SectionTitle>
        <SectionTitle title="Contacts">
          <Filter />
          {isLoading && !error && <Loader />}
          <Contacts />
        </SectionTitle>
      </Box>
    </>
  );
}

export default ContactsPage;