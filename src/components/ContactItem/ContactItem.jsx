import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/contacts/operations';
import { ListItem, Text, Button, ButtonGroup } from '@chakra-ui/react';
import Modal from 'components/Modal/Modal';
import { useModal } from 'components/hooks/useModal';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const id = contact.id;
  const { isModalOpen, closeModal, openModal } = useModal();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem display="flex" justifyContent="space-between">
      <Text fontSize={18} fontFamily="sans-serif">
        {contact.name}: {contact.number}
      </Text>
      <ButtonGroup gap="4">
        <Button colorScheme="teal" size="xs" type="button" onClick={openModal}>
          Edit
        </Button>
        {isModalOpen && (
          <Modal onClose={closeModal} id={id} contact={contact} />
        )}

        <Button
          colorScheme="teal"
          size="xs"
          type="button"
          onClick={onDeleteContact}
        >
          Delete
        </Button>
      </ButtonGroup>
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
