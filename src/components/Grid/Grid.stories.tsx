import React from 'react';
import { Grid, GridCells, GridProps } from './Grid';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Field/Grid',
  component: Grid,
  argTypes: {
    width: {
      control: false,
    },
    height: {
      control: false,
    },
    template: {
      control: false,
    },
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const GridExample3х3 = Template.bind({});
GridExample3х3.args = {
  width: 3,
  height: 3,
  template: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
};

export const GridExample5х5 = Template.bind({});
GridExample5х5.args = {
  width: 5,
  height: 5,
  template: [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ],
};
