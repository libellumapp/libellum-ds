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
  border: 'none',
  borderRadius: '$full',
  cursor: 'pointer',

  '& *': {
    cursor: 'pointer',
  },

  color: '$color-text',
  backgroundColor: '$color-neutral-20',

  ...inDarkMode({
    backgroundColor: '$color-neutral-80',
  }),

  '&:hover': {
    '& *': {
      color: '$color-theme-50',
    },
  },
  '&:disabled': {
    pointerEvents: 'none',

    '& *': {
      color: '$color-neutral-50',
    },

    backgroundColor: '$color-neutral-10',

    ...inDarkMode({
      backgroundColor: '$color-neutral-90',
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
