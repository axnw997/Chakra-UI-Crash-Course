import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();
  const showToast = () => {
    toast({
      position: "top",
      title: "Logged Out.",
      description: "Successfully Logged out",
      status: "success",
      duration: 5000,
      isClosable: true,
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as="nav" p="10px" alignItems={"center"}>
      <Heading
        as="h1"
        colorScheme="red"
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      >
        Dojo Tasks
      </Heading>
      <Spacer />

      <HStack spacing="10px">
        <Wrap>
          <WrapItem>
            <Avatar size="md" name="mario" src="./public/img/mario.png">
              <AvatarBadge
                bg="green"
                boxSize="25px"
                fontSize="15px"
                color={"white"}
              >
                3
              </AvatarBadge>
            </Avatar>
          </WrapItem>
        </Wrap>
        <Text>mario@test.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
