import { AtSignIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List
      color={"white"}
      fontSize="1.2em"
      spacing={{
        base: 4,
        sm: 0,
        md:0,
        lg:4
      }}
      display={"flex"}
      flexDirection={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "column"
      }}
    >
      <ListItem mr="10px">
        <HamburgerIcon mr={"5px"} boxSize={6}></HamburgerIcon>
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem mr="10px">
        <ListIcon as={EditIcon} mr={"5px"} boxSize={6}></ListIcon>
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem mr="10px">
        <ListIcon as={AtSignIcon} mr={"5px"} boxSize={6} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
