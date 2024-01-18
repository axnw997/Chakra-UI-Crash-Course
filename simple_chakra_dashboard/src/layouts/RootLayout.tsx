import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
export const RootLayout = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} bg="gray.50">
      <GridItem
      colSpan={{base:6, lg:2, xl:1}}
      bg="brand.950"
      minHeight={{lg:"100vh"}}
      p="30px"
      >
        <Sidebar/>
      </GridItem>
      <GridItem colSpan={{ base:6, lg:4, xl:5}}
      p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
