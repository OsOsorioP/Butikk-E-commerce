import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./Loading";

const meta = {
  title: "components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loadings: Story = {
  args: {},
};
