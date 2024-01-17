import {
  ChatIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { TabList, TabPanels, Tabs, Tab, TabPanel } from "@chakra-ui/tabs";

const Profile = () => {
  return (
    <Tabs mt="40px" colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe.{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
              ipsa?
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={WarningIcon} color="red.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
