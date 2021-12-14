import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SideBar from "../Components/SideBar";
import { Button } from "@chakra-ui/react";
// import { Button } from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SideBar",
  component: SideBar,
  argTypes: {},
};
const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  SideBarChildren: (
    <>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
    </>
  ),
  children: (
    <>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
      <Button>ボタン</Button>
    </>
  ),
};
