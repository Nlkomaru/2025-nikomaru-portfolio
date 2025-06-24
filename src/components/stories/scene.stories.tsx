import type { Meta, StoryObj } from "@storybook/react";
import Scene from "../scene";

const meta: Meta<typeof Scene> = {
    title: "Components/Scene",
    component: Scene,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Scene>;

export const Default: Story = {
    args: {},
};
