import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems={"center"}>
      <Heading as="h1" colorScheme="red"
      fontSize={{base:"24px", md:"40px", lg:"56px"}}>
        Dojo Tasks
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@test.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
