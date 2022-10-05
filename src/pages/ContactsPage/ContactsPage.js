import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Container from 'components/Container';
import ModalEl from 'components/Modal/Modal';
import { Wrapper } from './ContactsPage.styled';
import { toast } from 'react-toastify';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error && toast.error(error);

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <ModalEl>
              <ContactForm />
            </ModalEl>
            <Filter />
          </Wrapper>
          <ContactList />
        </Container>
      </Section>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default ContactsPage;
