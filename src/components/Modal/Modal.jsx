import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { deleteContact, editContact } from 'Redux/contacts/operations';
import { Overlay, ModalContainer } from './Modal.styled';
import {
  ListItem,
  Text,
  Button,
  useColorMode,
  Flex,
  Box,
  FormLabel,
} from '@chakra-ui/react';
import { FormField, Error } from 'components/ContactForm/ContactForm.styled';
import EditForm from 'components/EditForm/EditForm';

const Modal = ({ contact, onClose }) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onBackDropClick}>
      <ModalContainer>
        <Button colorScheme="teal" size="xs" type="button" onClick={onClose}>
          X
        </Button>
        <EditForm contact={contact} />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
