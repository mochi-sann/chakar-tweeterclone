import { ButtonGroup, Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";

import { Button } from "@chakra-ui/react";
export type SideBarProps = {
  children: React.ReactNode;
};

const SideBar: React.VFC<SideBarProps> = (props) => {
  return (
    <Flex className="flex">
      <Stack
        w="220px"
        direction={"column"}
        borderRightWidth={"2px"}
        className="flex flex-col gap-2 p-2 w-60"
      >
        <Button color="blue-hover">Home</Button>
        <Button color="blue-hover">Settings</Button>
        <Button color="blue-hover">Settings</Button>
      </Stack>{" "}
      <div>{props.children}</div>
    </Flex>
  );
};

export default SideBar;
