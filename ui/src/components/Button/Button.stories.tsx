import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary", primary: true };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", secondary: true };

export const MiniPrimary = Template.bind({});
MiniPrimary.args = { label: "Primary Mini", mini: true, primary: true };

export const MiniSecondary = Template.bind({});

MiniSecondary.args = { label: "Secondary Mini ", mini: true, secondary: true };