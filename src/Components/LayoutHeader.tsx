import {
  Box,
  Container,
  HStack,
  Stack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Signin from "./Signin";

export type LayoutHeaderProps = { title: string };

const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  return (
    <Box as="header" borderBottomWidth={"2px"}>
      <Container maxW="800px" as={HStack}>
        <HStack
          p="2"
          w="full"
          direction={"row"}
          className="flex gap-2 items-center p-2 mx-auto w-full max-w-3xl"
        >
          <Heading>{props.title}</Heading>
          <Spacer />
          <Signin />
        </HStack>
      </Container>
    </Box>
  );
};

export default LayoutHeader;
