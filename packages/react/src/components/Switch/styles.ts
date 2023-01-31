import * as Switch from '@radix-ui/react-switch'

import { darkMode, styled } from '../../styles'

export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  backgroundColor: '$color-neutral-30',
  borderRadius: '$full',
  border: '1px solid $color-neutral-30',
  position: 'relative',
  boxShadow: '0 2px 10px $color-neutral-30',
  WebkitTapHighlightColor: '$color-neutral-90',
  width: '$spacing-xl',
  height: '$spacing-sm',
  cursor: 'pointer',

  [`.${darkMode} &`]: {
    backgroundColor: '$color-neutral-70',
  },

  '&[data-state="checked"]': {
    '&[data-disabled]': {
      border: '1px solid $color-neutral-30',
    },
    backgroundColor: '$color-theme-50',
  },

  '&[data-disabled]': {
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },

  '@tablet': {
    width: '$spacing-md',
    height: '$spacing-xs',

    '&:focus': {
      outline: '1px solid $color-neutral-90',
      outlineOffset: '2px',
    },
  },
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  backgroundColor: '$color-neutral-10',
  borderRadius: '$full',
  boxShadow: '0 2px 2px $color-neutral-30',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  width: '28px',
  height: '28px',

  '&[data-disabled]': {
    backgroundColor: '$color-neutral-30',
  },

  '&[data-state="checked"]': {
    transform: 'translateX(26px)',
  },

  '@tablet': {
    width: '20px',
    height: '20px',
    '&[data-state="checked"]': {
      transform: 'translateX(19px)',
    },
  },
})
