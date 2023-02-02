import { ButtonArrow, ButtonArrowProps } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Buttons/ButtonArrow',
  component: ButtonArrow,
  args: {
    direction: 'left',
    disabled: false,
  },
  argTypes: {
    direction: {
      control: {
        options: ['up', 'right', 'down', 'left'],
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
} as Meta<ButtonArrowProps>

export const Default: StoryObj<ButtonArrowProps> = {
  args: {
    direction: 'right',
  },
}
