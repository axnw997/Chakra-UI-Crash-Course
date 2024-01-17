import { SimpleGrid, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <SimpleGrid p="10px" spacing="10px" minChildWidth="250px">
      {cards.map((card) => (
        <Box key={card.id} bg={"white"} h="200px" border="1px solid">
          {card.id}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Dashboard;
