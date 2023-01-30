import { Button, ButtonProps } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Teste',
  },
  argTypes: {
    onClick: {
      action: 'click',
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
