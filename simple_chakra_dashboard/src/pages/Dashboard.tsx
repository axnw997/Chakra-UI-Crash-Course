import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatIcon, ViewIcon } from "@chakra-ui/icons";

interface Cards {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

const Dashboard = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3004/tasks").then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <SimpleGrid p="10px" spacing="20px" minChildWidth="300px" mt={"40px"}>
      {cards &&
        cards.map((card) => (
          <Card
            key={card.id}
            borderTop="8px"
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap={10}>
                <Box w="50px" h="50px">
                  <Avatar src={card.img} size="lg"/>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {card.title}
                  </Heading>
                  <Text ml="10px">by {card.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>{card.description}</CardBody>
            <Divider color={"gray.200"} />
            <CardFooter>
              <HStack>
                <Button
                  variant="outline"
                  leftIcon={<ViewIcon />}
                  colorScheme="purple"
                >
                  Watch
                </Button>
                <Button
                  variant="solid"
                  leftIcon={<ChatIcon />}
                  colorScheme="purple"
                >
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;
