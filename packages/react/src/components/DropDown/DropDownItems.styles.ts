import { styled } from '../../styles'

export const Item = styled('li', {
  padding: '12px 24px',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$medium',
  border: '1px solid transparent',
  color: '$color-text',

  '&:hover': {
    backgroundColor: '$color-theme-50',
    color: '$color-neutral-10',
  },
  '&:focus': {
    border: '1px solid $color-theme-90',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$color-theme-90',
        color: '$color-neutral-10',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
})
