import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./index";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AISales: Story = {
  args: {
    icon: "AISales",
    fontSize: "small",
  },
};

export const Sales: Story = {
  args: {
    icon: "sales",
    fontSize: "small",
  },
};

export const Search: Story = {
  args: {
    icon: "search",
    fontSize: "small",
  },
};

export const List: Story = {
  args: {
    icon: "list",
    fontSize: "small",
  },
};

export const Flag: Story = {
  args: {
    icon: "flag",
    fontSize: "small",
  },
};

export const Analysis: Story = {
  args: {
    icon: "analysis",
    fontSize: "small",
  },
};
