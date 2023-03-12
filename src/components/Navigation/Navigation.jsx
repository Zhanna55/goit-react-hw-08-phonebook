import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
import { Button } from '@chakra-ui/react';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Button colorScheme="teal" variant="outline">
        <NavLink to="/">Home</NavLink>
      </Button>

      {isLoggedIn && (
        <Button colorScheme="teal" variant="outline" ml={2}>
          <NavLink to="/contacts">Contacts</NavLink>
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
