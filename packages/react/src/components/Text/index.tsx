import { ComponentProps } from 'react'

import { styled } from '../../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    type: {
      display: {
        fontSize: '$4xl',
        fontWeight: '$bold',
        lineHeight: '$shorter',
      },
      title: {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$shorter',
      },
      subtitle: {
        fontSize: '$xl',
        fontWeight: '$semi-bold',
        lineHeight: '$shorter',
      },
      body1: {
        fontSize: '$md',
        fontWeight: '$medium',
        lineHeight: '$short',
      },
      body2: {
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$short',
      },
      caption: {
        fontSize: '$xs',
        fontWeight: '$medium',
        lineHeight: '$short',
      },
      caption2: {
        fontSize: '$xs',
        fontWeight: '$semi-bold',
        lineHeight: '$short',
      },
    },
  },
  defaultVariants: {
    type: 'body1',
  },
})

Text.displayName = 'Text'

export type TextProps = ComponentProps<typeof Text> & {
  as?: string
}
