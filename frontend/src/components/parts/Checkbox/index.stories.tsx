import { checkboxSxSecondary } from "@/components/themes/styleSx";
import { Checkbox } from "../Checkbox/index";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Standard: Story = {
  args: {
    label: "サンプル",
  },
};

export const Secondary: Story = {
  args: {
    label: "secondary",
    sx: checkboxSxSecondary,
  },
};
