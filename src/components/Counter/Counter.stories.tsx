import React from 'react';
import { Counter, CounterProps } from './Counter';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Homework/Counter',
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  loadedPeople: 0,
};

export const WithLoaded = Template.bind({});
WithLoaded.args = {
  loadedPeople: 5,
};
