import { Container, Heading, Text, Box } from "@chakra-ui/react";

const Dashboard = () => {
  const outerBoxStyles = {
    boxSize: "250px",
    bg: "green.200",
    color: "white",
    filter: "blur(8px)"
  };

  return (
    <Container as="section" maxWidth="960px" py="20px">
      <Heading mb={10} p={0}>
        Chakra UI Component
      </Heading>

      <Box sx={outerBoxStyles}>This is outerBoxStyles</Box>

      <Text textAlign={["left"]} ml={30} color={"purple.700"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        corporis?
      </Text>
      <Text
        textAlign={"left"}
        ml={30}
        bg={"purple.200"}
        fontWeight={"bold"}
        color={"white"}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        corporis?
      </Text>
      <Box my="30px" p="20px" bg="orange.500">
        <Text color={"white"}>This is a Box</Text>
      </Box>
      <Box my={30} p={20} bg={"orange.400"}>
        <Text color={"white"}>This is a Box</Text>
      </Box>
    </Container>
  );
};

export default Dashboard;
