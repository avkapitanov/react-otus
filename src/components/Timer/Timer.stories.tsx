import React from 'react';
import { Timer, TimerProps } from './Timer';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Homework/Timer',
  component: Timer,
} as Meta;

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const NotVisibleTimer = Template.bind({});
NotVisibleTimer.args = {
  isVisible: false,
};

export const VisibleTimer = Template.bind({});
VisibleTimer.args = {
  isVisible: true,
};
