import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/contacts/operations';
import { ListItem, Text, Button } from '@chakra-ui/react';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem display="flex" justifyContent="space-between">
      <Text fontSize={18} fontFamily="sans-serif">
        {contact.name}: {contact.number}
      </Text>
      <Button
        colorScheme="teal"
        size="xs"
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </Button>
    </ListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
