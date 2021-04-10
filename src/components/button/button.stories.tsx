import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  children: 'default Button',
} as ButtonProps

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'primary Button'
} as ButtonProps

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'danger Button'
} as ButtonProps

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [(Story) => <div className="flex justify-center m-12"><Story /></div>],

  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'danger']
      }
    }
  }
} as Meta;
