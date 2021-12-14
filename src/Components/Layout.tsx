import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import LayoutHeader from "./LayoutHeader";
import SideBar from "./SideBar";

export type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = (props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} h="100vh">
      <LayoutHeader title="tweet" />
      <Container h="full" maxW="900px" mx="auto">
        <SideBar>{props.children}</SideBar>
      </Container>
    </Box>
  );
};

export default Layout;
