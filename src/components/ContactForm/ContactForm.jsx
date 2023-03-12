import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contacts/operations';
import { Flex, Box, Button, FormLabel, useColorMode } from '@chakra-ui/react';
import { FormField, Error } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required()
    .matches(
      '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const handleSubmit = ({ name, number }, { resetForm }) => {
    console.log({ name, number });
    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Flex
          bg={colorMode === 'dark' ? '#234E52' : 'white'}
          align="center"
          justify="center"
        >
          <Box
            bg={colorMode === 'dark' ? 'gray.100' : 'white'}
            p={6}
            rounded="md"
            w={64}
          >
            <Form autoComplete="off">
              <FormLabel color="black" htmlFor="name">
                Name
                <FormField type="text" name="name" />
                <Error name="name" component="div" />
              </FormLabel>
              <FormLabel color="black" htmlFor="number">
                Number
                <FormField type="tel" name="number" />
                <Error name="number" component="div" />
              </FormLabel>
              <Button
                mt={2}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Add contact
              </Button>
            </Form>
          </Box>
        </Flex>
      )}
    </Formik>
  );
}
