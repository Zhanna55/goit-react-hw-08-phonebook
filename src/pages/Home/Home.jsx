import { Flex, Heading, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      maxW="960px"
      p={20}
      alignItems="center"
      justify="center"
      bg={colorMode === 'dark' ? '#234E52' : 'white'}
    >
      <Heading
        as="h1"
        size="lg"
        fontSize="50px"
        color={colorMode === 'dark' ? 'white' : 'black'}
      >
        Phonebook
      </Heading>
    </Flex>
  );
}
