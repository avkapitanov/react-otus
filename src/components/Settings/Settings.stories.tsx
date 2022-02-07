import React from 'react';
import { Settings, SettingsType } from './Settings';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Field/Settings',
  component: Settings,
} as Meta;

const Template: Story<SettingsType> = (args) => <Settings {...args} />;

export const SettingsBlock = Template.bind({});
SettingsBlock.args = {
  width: 5,
  height: 6,
};
