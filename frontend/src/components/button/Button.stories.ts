import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
    args: {
      label: "Button",
      color: "secondary",
    },
  };

  export const Small: Story = {
    args: {
      label: "Button",
      size: "small",
    },
  };

  export const Medium: Story = {
    args: {
      label: "Button",
      size: "medium",
    },
  };

  export const Large: Story = {
    args: {
      label: "Button",
      size: "large",
    },
  };
