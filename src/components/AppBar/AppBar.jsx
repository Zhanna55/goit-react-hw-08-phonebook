import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import { ColorModeSwitcher } from 'components/colorModeSwicher';
import { Flex, useColorMode } from '@chakra-ui/react';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justify="space-between"
      gap="2"
      wrap="nowrap"
      bg={colorMode === 'dark' ? '#234E52' : 'white'}
    >
      <Flex>
        <ColorModeSwitcher />
        <Navigation />
      </Flex>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
}
