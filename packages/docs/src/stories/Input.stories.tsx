import { Input, InputProps, Search } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'Floating Label',
    hint: 'Hint Label',
    disabled: false,
    state: 'default',
  },
  argTypes: {
    state: {
      options: ['default', 'success', 'warning', 'error'],
      control: 'radio',
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    onClear: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputProps>

export const Default: StoryObj = {}

export const WithoutLabel: StoryObj = {
  args: {
    label: undefined,
  },
}

export const LeftIcon: StoryObj<InputProps> = {
  args: {
    leftIcon: <Search />,
  },
}

export const WithClearIcon: StoryObj<InputProps> = {
  args: {
    onClear: () => console.log('clear 1'),
  },
}

export const BothSideIcon: StoryObj<InputProps> = {
  args: {
    leftIcon: <Search />,
    onClear: () => console.log('clear 2'),
  },
}
