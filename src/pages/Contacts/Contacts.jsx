import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Heading, useColorMode } from '@chakra-ui/react';
import { fetchContacts } from 'Redux/contacts/operations';
import { selectError, selectIsLoading } from 'Redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { colorMode } = useColorMode();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container p={10}>
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        fontSize="20px"
        color={colorMode === 'dark' ? 'white' : 'black'}
      >
        Phonebook
      </Heading>
      <ContactForm />
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        fontSize="20px"
        color={colorMode === 'dark' ? 'white' : 'black'}
      >
        Contacts
      </Heading>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
}
