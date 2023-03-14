import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';
import { Button } from '@chakra-ui/react';
import EditForm from 'components/EditForm/EditForm';

const Modal = ({ contact, onClose }) => {
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
        <EditForm contact={contact} onClose={onClose} />
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
