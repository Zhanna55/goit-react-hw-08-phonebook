import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import authOperations from 'Redux/auth/auth-operations';
import { Flex, Box, Button, FormLabel, useColorMode } from '@chakra-ui/react';
import { FormField } from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'password must contain 6 or more characters')
    .required('Required'),
});
export default function LoginForm() {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
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
              <FormLabel htmlFor="email" color="teal">
                Email
                <FormField type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FormLabel>
              <FormLabel htmlFor="password" color="teal">
                Password
                <FormField type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </FormLabel>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </Box>
        </Flex>
      )}
    </Formik>
  );
}
