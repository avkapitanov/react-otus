import React from 'react';
import { PeopleList, PeopleListProps } from './PeopleList';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Homework/PeopleList',
  component: PeopleList,
} as Meta;

const Template: Story<PeopleListProps> = (args) => <PeopleList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  people: [],
};

export const WithLoaded = Template.bind({});
WithLoaded.args = {
  people: [
    {
      id: 5,
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      gender: 'female',
    },
  ],
};
