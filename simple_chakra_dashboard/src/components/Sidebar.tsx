import { AtSignIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color={"white"} fontSize="1.2em" spacing={4}>
      <ListItem>
        <HamburgerIcon mr="10px" boxSize={6}></HamburgerIcon>
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} mr={"10px"} boxSize={6}></ListIcon>
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} mr={"10px"} boxSize={6}/>
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
