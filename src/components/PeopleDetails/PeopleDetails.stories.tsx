import React from 'react';
import { PeopleDetails, PeopleDetailsProps } from './PeopleDetails';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Homework/PeopleDetails',
  component: PeopleDetails,
} as Meta;

const Template: Story<PeopleDetailsProps> = (args) => (
  <PeopleDetails {...args} />
);

export const EmptyPerson = Template.bind({});
EmptyPerson.args = {
  personId: 0,
};

export const WithLoadedPerson = Template.bind({});
WithLoadedPerson.args = {
  personId: 1,
};
