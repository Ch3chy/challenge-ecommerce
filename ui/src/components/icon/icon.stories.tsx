import * as Icons from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(Icons),
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: "1rem" }}>
        <div style={{ fontSize: "1em" }}>
          <Story />
        </div>
        <br />
        <div style={{ fontSize: "2em" }}>
          <Story />
        </div>
        <br />
        <div style={{ fontSize: "4em" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "QrCode",
  },
};
