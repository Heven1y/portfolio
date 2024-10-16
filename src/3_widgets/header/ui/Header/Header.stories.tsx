import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import { Tabs } from "@/shared/models/enums";

import Header from "./index";

export default {
  title: "Widgets/Header",
  component: Header,
} as Meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  activeTabId: Tabs.about,
};
