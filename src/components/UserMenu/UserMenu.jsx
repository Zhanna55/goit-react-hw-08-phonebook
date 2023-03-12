import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/auth-operations';
import { useAuth } from 'components/hooks/useAuth';
import { Flex, Button, Text } from '@chakra-ui/react';
export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Text color="teal">Welcome, {user.name}</Text>
      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
}
