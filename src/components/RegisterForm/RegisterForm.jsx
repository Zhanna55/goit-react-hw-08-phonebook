import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import authOperations from 'Redux/auth/auth-operations';
import { Flex, Box, Button, FormLabel, useColorMode } from '@chakra-ui/react';
import { FormField, Error } from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'password must contain 6 or more characters')
    .required('Required'),
});
export default function RegisterForm() {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Flex
          bg={colorMode === 'dark' ? '#234E52' : 'gray.100'}
          align="center"
          justify="center"
          h="80vh"
        >
          <Box
            bg={colorMode === 'dark' ? 'gray.100' : 'white'}
            p={6}
            rounded="md"
            w={64}
          >
            <Form autoComplete="off">
              <FormLabel htmlFor="name" color="teal">
                Name
                <FormField type="text" name="name" />
                <Error name="name" component="div" />
              </FormLabel>
              <FormLabel htmlFor="email" color="teal">
                Email
                <FormField type="email" name="email" />
                <Error name="email" component="div" />
              </FormLabel>
              <FormLabel htmlFor="password" color="teal">
                Password
                <FormField type="password" name="password" />
                <Error name="password" component="div" />
              </FormLabel>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Register
              </Button>
            </Form>
          </Box>
        </Flex>
      )}
    </Formik>
  );
}
