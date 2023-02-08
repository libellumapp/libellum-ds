import { styled } from '../../styles'
import { inDarkMode } from '../../styles/utils'

export const Root = styled('div', {
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
})

export const Toggle = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  width: '56px',
  height: '34px',
  borderRadius: '$full',
  cursor: 'pointer',
  border: '1px solid transparent',

  '@tablet': {
    width: '40px',
    height: '25px',
  },

  '&:focus': {
    outlineOffset: '2px',
    outline: '1px solid $color-neutral-90',

    ...inDarkMode({
      outline: '1px solid $color-neutral-10',
    }),
  },

  variants: {
    isTurnedOn: {
      true: {
        backgroundColor: '$color-theme-50',
      },
      false: {
        backgroundColor: '$color-neutral-40',

        ...inDarkMode({
          backgroundColor: '$color-neutral-60',
        }),
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        border: '1px solid $color-neutral-30',

        ...inDarkMode({
          backgroundColor: 'transparent',
          border: '1px solid $color-neutral-70',
        }),
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      isTurnedOn: true,
      disabled: true,
      css: {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        border: '1px solid $color-neutral-30',

        ...inDarkMode({
          backgroundColor: 'transparent',
          border: '1px solid $color-neutral-70',
        }),
      },
    },
  ],
  defaultVariants: {
    isTurnedOn: false,
    disabled: false,
  },
})

export const Selector = styled('div', {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '2px',
  width: '28px',
  height: '28px',
  backgroundColor: '$color-neutral-10',
  borderRadius: '$full',

  transition: 'left 0.3s',

  '@tablet': {
    width: '19px',
    height: '19px',
  },

  variants: {
    isTurnedOn: {
      true: {
        left: '26px',

        '@tablet': {
          left: '18px',
        },
      },
      false: {
        left: '2px',
      },
    },
    disabled: {
      true: {
        backgroundColor: '$color-neutral-30',

        ...inDarkMode({
          backgroundColor: '$color-neutral-70',
        }),
      },
      false: {},
    },
  },
  defaultVariants: {
    isTurnedOn: false,
    disabled: false,
  },
})

export const Checkbox = styled('input', {
  position: 'absolute',
  opacity: '0',
  pointerEvents: 'none',
})
