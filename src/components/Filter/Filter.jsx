import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'Redux/contacts/selectors';
import { setFilter } from 'Redux/contacts/filterSlice';
import { Flex, Box, FormLabel, useColorMode, Input } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const onChange = event => {
    const newFilter = event.target.value.toLowerCase();
    dispatch(setFilter(newFilter));
  };
  return (
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
        <FormLabel textAlign="center" color="black">
          Find contacts by name
          <Input
            borderColor="teal"
            pl={2}
            border="1px"
            bg="white"
            color="black"
            type="text"
            value={filter}
            onChange={onChange}
          />
        </FormLabel>
      </Box>
    </Flex>
  );
};

export default Filter;
