import { Button, ButtonProps, Search } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Buttons/Button',
  component: Button,
  args: {
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        options: ['primary', 'outline'],
        type: 'radio',
      },
    },
    onClick: {
      action: 'click',
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>

export const Basic: StoryObj<ButtonProps> = {
  args: {
    children: 'Clique aqui',
  },
}

export const WithLeftIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Search />
        Clique aqui
      </>
    ),
  },
}

export const WithRightIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Clique aqui
        <Search />
      </>
    ),
  },
}

export const WithBothSideIcons: StoryObj<ButtonProps> = {
  args: {
    children: [
      <>
        <Search />
        Clique aqui
        <Search />
      </>,
    ],
  },
}
