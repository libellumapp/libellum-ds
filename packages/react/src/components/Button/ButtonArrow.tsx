import { ComponentProps } from '@stitches/react'

import { styled } from '../../styles'
import { inDarkMode } from '../../styles/utils'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from '../Icons'

const StyledButtonArrow = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$spacing-md',
  height: '$spacing-md',
  border: '1px solid $color-theme-50',
  borderRadius: '$full',
  cursor: 'pointer',
  transition: 'all .3s ease-in-out',

  '& *': {
    cursor: 'pointer',
  },

  color: '$color-text',
  backgroundColor: '$color-neutral-10',

  ...inDarkMode({
    backgroundColor: '$color-neutral-80',
  }),

  '&:hover': {
    backgroundColor: '$color-theme-10',
    '& *': {
      color: '$color-theme-50',
    },
  },
  '&:active': {
    backgroundColor: '$color-neutral-30',
    '& *': {
      color: '$color-theme-50',
    },

    ...inDarkMode({
      backgroundColor: '$color-neutral-70',
    }),
  },
  '&:disabled': {
    pointerEvents: 'none',
    border: '1px solid $color-neutral-50',

    '& *': {
      color: '$color-neutral-50',
    },

    backgroundColor: '$color-neutral-30',

    ...inDarkMode({
      backgroundColor: '$color-neutral-90',
      border: '1px solid $color-neutral-50',
    }),
  },
})

const ARROWS = {
  up: <ChevronUp />,
  right: <ChevronRight />,
  down: <ChevronDown />,
  left: <ChevronLeft />,
} as { [key: string]: JSX.Element }

export type ButtonArrowProps = Omit<
  ComponentProps<typeof StyledButtonArrow>,
  'children'
> & {
  direction?: 'up' | 'right' | 'down' | 'left'
}

export const ButtonArrow = ({
  direction = 'left',
  ...props
}: ButtonArrowProps) => {
  return (
    <StyledButtonArrow {...props} aria-label={direction}>
      {ARROWS[direction]}
    </StyledButtonArrow>
  )
}
