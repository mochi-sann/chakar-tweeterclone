import React from "react";
import Button, { ButtonProps } from "../Components/Button";

import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Button } from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["blue", "red", "green"],
      control: { type: "radio" },
    },
  },
};
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  color: "blue",
  children: "テキスト",
};
