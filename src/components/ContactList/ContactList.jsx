import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectFilteredContacts } from 'Redux/contacts/selectors';
import { Contact } from 'components/ContactItem/ContactItem';
import { UnorderedList, useColorMode } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const { colorMode } = useColorMode();
  return (
    <UnorderedList
      textAlign="center"
      m={0}
      bg={colorMode === 'dark' ? '#234E52' : 'white'}
    >
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </UnorderedList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
