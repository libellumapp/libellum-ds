import { ComponentProps, ElementType } from 'react'

import { styled } from '../../styles/index'
import { inDarkMode } from '../../styles/utils'

export const StyledButtonLink = styled('a', {
  all: 'unset',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '$spacing-nano',

  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$bold',
  color: '$color-theme-50',
  transition: 'all .3s ease-in-out',

  backgroundColor: 'transparent',
  borderRadius: '$xs',
  cursor: 'pointer',

  '& *': {
    cursor: 'pointer',
    color: '$color-theme-50',
  },

  '&:hover': {
    backgroundColor: '$color-neutral-20',

    ...inDarkMode({
      backgroundColor: '$color-neutral-80',
    }),
  },
  '&:active': {
    backgroundColor: '$color-neutral-20',
    color: '$color-neutral-90',

    '& *': {
      color: '$color-neutral-90',
    },

    ...inDarkMode({
      backgroundColor: '$color-neutral-80',
      color: '$color-neutral-10',

      '& *': {
        color: '$color-neutral-10',
      },
    }),
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
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$color-neutral-30',

        '& *': {
          color: '$color-neutral-30',
        },

        ...inDarkMode({
          color: '$color-neutral-70',

          '& *': {
            color: '$color-neutral-70',
          },
        }),
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export type ButtonLinkProps = ComponentProps<typeof StyledButtonLink> & {
  as?: ElementType
  to?: string
  disabled?: boolean
}

export const ButtonLink = ({
  children,
  disabled = false,
  ...props
}: ButtonLinkProps) => {
  return (
    <StyledButtonLink disabled={disabled} {...props}>
      {children}
    </StyledButtonLink>
  )
}
