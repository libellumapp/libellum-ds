import { Logo, LogoProps } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Others/Logo',
  component: Logo,
  args: {
    size: 'normal',
  },
  argTypes: {
    size: {
      control: {
        options: ['small', 'normal', 'large'],
        type: 'radio',
      },
    },
  },
} as Meta<LogoProps>

export const Defatult: StoryObj<LogoProps> = {}
