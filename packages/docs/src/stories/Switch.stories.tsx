import { Switch, SwitchProps } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {}
