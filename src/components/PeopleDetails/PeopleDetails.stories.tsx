import React from 'react';
import { PeopleDetails, PeopleDetailsProps } from './PeopleDetails';
import { Story, Meta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

export default {
  title: 'Homework/PeopleDetails',
  component: PeopleDetails,
  decorators: [withMock],
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
  personId: 5,
};
WithLoadedPerson.parameters = {
  mockData: [
    {
      url: 'https://swapi.dev/api/people/5',
      method: 'GET',
      status: 200,
      response: {
        id: 5,
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        gender: 'female',
      },
    },
  ],
};
