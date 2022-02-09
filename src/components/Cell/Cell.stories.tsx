import React from 'react';
import { Cell, CellProps } from './Cell';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Field/Cell',
  component: Cell,
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const Alive = Template.bind({});
Alive.args = {
  isAlive: true,
  isContentVisible: true,
  cellNumber: 1,
};

export const AliveWithoutVisibleContent = Template.bind({});
AliveWithoutVisibleContent.args = {
  isAlive: true,
  isContentVisible: false,
  cellNumber: 2,
};

export const Dead = Template.bind({});
Dead.args = {
  isAlive: false,
};
