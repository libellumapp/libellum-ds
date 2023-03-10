import { ComponentProps, ElementType } from 'react'

import { colors } from '@libellum-ds/tokens'

import { styled } from '../../styles'
import { inDarkMode } from '../../styles/utils'

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  columnGap: '$spacing-nano',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$bold',
  boxShadow: `inset 0px 0px 0px 4px transparent`,
  padding: '$spacing-nano $spacing-xxxs',
  borderRadius: '$md',
  cursor: 'pointer',
  height: '$spacing-lg',
  transition: 'all .3s ease-in-out',

  '& *': {
    cursor: 'pointer',
  },

  '&:disabled': {
    cursor: 'default',
    pointerEvents: 'none',

    '& *': {
      cursor: 'default',
    },
  },

  '@tablet': {
    '&:focus': {
      outlineOffset: '2px',
      outline: '1px solid $color-neutral-90',

      ...inDarkMode({
        outline: '1px solid $color-neutral-10',
      }),
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$color-theme-50',
        color: '$color-neutral-10',

        '& *': {
          color: '$color-neutral-10',
        },

        '&:hover': {
          backgroundColor: '$color-theme-90',
        },
        '&:active': {
          backgroundColor: '$color-theme-90',
          boxShadow: `inset 0px 0px 0px 4px ${colors['color-theme-50']}`,
        },
        '&:disabled': {
          backgroundColor: '$color-neutral-30',
          color: '$color-neutral-10',

          '& *': {
            color: '$color-neutral-10',
          },

          ...inDarkMode({
            backgroundColor: '$color-neutral-70',
            color: '$color-neutral-90',

            '& *': {
              color: '$color-neutral-90',
            },
          }),
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$color-neutral-90',
        boxShadow: `inset 0px 0px 0px 2px ${colors['color-neutral-90']}`,

        '& *': {
          color: '$color-neutral-90',
        },

        ...inDarkMode({
          color: '$color-neutral-10',
          boxShadow: `inset 0px 0px 0px 2px ${colors['color-neutral-10']}`,

          '& *': {
            color: '$color-neutral-10',
          },
        }),

        '&:hover': {
          color: '$color-theme-50',
          boxShadow: `inset 0px 0px 0px 2px ${colors['color-theme-50']}`,

          '& *': {
            color: '$color-theme-50',
          },
        },
        '&:active': {
          boxShadow: `inset 0px 0px 0px 4px ${colors['color-theme-50']}`,
        },
        '&:disabled': {
          boxShadow: `inset 0px 0px 0px 2px ${colors['color-neutral-30']}`,
          color: '$color-neutral-30',

          '& *': {
            color: '$color-neutral-30',
          },

          ...inDarkMode({
            boxShadow: `inset 0px 0px 0px 2px ${colors['color-neutral-70']}`,
            color: '$color-neutral-70',

            '& *': {
              color: '$color-neutral-70',
            },
          }),
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

Button.displayName = 'Button'

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
