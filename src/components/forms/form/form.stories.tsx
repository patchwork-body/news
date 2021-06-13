import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoginForm } from './presets/login-form';

const Template: Story = args => <LoginForm {...args} />;

export const Main = Template.bind({});

export default {
  title: 'components/forms/LoginForm',
  component: LoginForm,
  decorators: [
    Story => (
      <div className="grid grid-flow-col place-content-center gap-x-4 m-12">
        <Story />
      </div>
    ),
  ],
} as Meta;
