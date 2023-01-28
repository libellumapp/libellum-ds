import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@libellum-ds/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    type: 'body1',
  },
  argTypes: {
    type: {
      options: [
        'display',
        'title',
        'subtitle',
        'body1',
        'body2',
        'caption',
        'caption2',
      ],
      control: { type: 'select' },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    as: 'p',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio, saepe repudiandae sit adipisci dicta quibusdam facilis ipsa! Unde, quo? Aliquid fugiat incidunt deserunt harum odio commodi ipsam ea distinctio eius?',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'h1',
    children: 'Header H1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o text sempre será um `p` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
