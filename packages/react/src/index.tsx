import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$color-success-10',
  color: '$color-neutral-10',
  borderRadius: '$xs',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    backgroundColor: '$color-success-50',
  },

  '&:active': {
    backgroundColor: '$color-success-90',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$spacing-quarck $spacing-nano',
      },
      big: {
        fontSize: '$md',
        padding: '$spacing-xxxxs $spacing-xxxs',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
