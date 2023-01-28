import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@libellum-ds/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Teste',
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Teste',
    size: 'big',
  },
}
