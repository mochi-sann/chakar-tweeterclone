import { Box, ButtonGroup, Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiSettings3Fill, RiUser3Fill } from "react-icons/ri";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
export type SideBarProps = {
  children: React.ReactNode;
};

const SideBar: React.VFC<SideBarProps> = (props) => {
  const router = useRouter();
  const { data: session } = useSession();

  const list: {
    leftIcon: React.ReactElement;
    children: string | React.ReactNode;
    pathname: string;
  }[] = [
    {
      leftIcon: <AiFillHome />,
      children: "Home",
      pathname: "/",
    },
    {
      leftIcon: <RiUser3Fill />,
      children: "Profile",
      pathname: "/user/" + session?.user?.name,
    },
    {
      leftIcon: <RiSettings3Fill />,
      children: "Settings",
      pathname: "/settings",
    },
  ];
  return (
    <Flex h="full">
      <Stack
        w="220px"
        direction={"column"}
        borderRightWidth={"2px"}
        spacing={"2"}
        p="2"
      >
        {list.map((value, key) => {
          const IsSamePath = router.pathname === value.pathname;
          return (
            <Link href={value.pathname} key={key}>
              <a>
                <Button
                  w="full"
                  fontSize={"2xl"}
                  py="7"
                  rounded={"2px"}
                  leftIcon={value.leftIcon}
                  size="lg"
                  colorScheme={IsSamePath ? "blue" : "white"}
                  variant={IsSamePath ? "solid" : "ghost"}
                >
                  {value.children}
                </Button>
              </a>
            </Link>
          );
        })}
      </Stack>
      <Box w="full">{props.children}</Box>
    </Flex>
  );
};

export default SideBar;
