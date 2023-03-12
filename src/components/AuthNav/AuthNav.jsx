import { NavLink } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
export default function AuthNav() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Button colorScheme="teal" variant="outline">
        <NavLink to="/register">Registration</NavLink>
      </Button>
      <Button colorScheme="teal" variant="outline">
        <NavLink to="/login">Login</NavLink>
      </Button>
    </Flex>
  );
}
