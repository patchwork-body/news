import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Field, FieldProps } from './field';

const Template: Story<FieldProps> = args => (
  <React.Fragment>
    <Field {...args} type="text" label="text" defaultValue="Awesome text value" />
    <Field {...args} type="email" label="email" defaultValue="example@email.com" />
    <Field {...args} type="password" label="password" defaultValue="you_pass" />
  </React.Fragment>
);

export const Main = Template.bind({});

export default {
  title: 'components/forms/Field',
  component: Field,
  decorators: [
    Story => (
      <div className="grid grid-flow-col place-content-center gap-x-4 m-12">
        <Story />
      </div>
    ),
  ],
} as Meta;
