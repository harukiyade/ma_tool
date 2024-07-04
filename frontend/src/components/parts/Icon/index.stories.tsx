import { Icon } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

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

export const Copy: Story = {
  args: {
    icon: "copy",
    fontSize: "small",
  },
};
