import { styled } from '../../styles'
import { inDarkMode } from '../../styles/utils'
import { ChevronDown } from '../Icons'

export const Root = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
})

export const Trigger = styled('button', {
  boxSizing: 'border-box',
  all: 'unset',
  width: '100%',
  height: '48px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  border: '1px solid $color-neutral-40',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all .3s ease-in-out',

  backgroundColor: '$color-neutral-10',

  ...inDarkMode({
    backgroundColor: '$color-neutral-90',
  }),

  '& * ': {
    cursor: 'pointer',
  },

  '&:hover': {
    borderColor: '$color-neutral-80',

    ...inDarkMode({
      borderColor: '$color-neutral-20',
    }),
  },

  '&:focus': {
    borderColor: '$color-neutral-80',

    ...inDarkMode({
      borderColor: '$color-neutral-10',
    }),
  },

  '&:disabled': {
    backgroundColor: '$color-neutral-20',
    color: '$color-neutral-40',

    '& * ': {
      color: '$color-neutral-40',
    },

    ...inDarkMode({
      color: '$color-neutral-60',
      backgroundColor: '$color-neutral-80',

      '& * ': {
        color: '$color-neutral-60',
      },
    }),
  },
})

export const Label = styled('div', {
  boxSizing: 'border-box',
  position: 'absolute',
  color: '$color-neutral-50',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$medium',
  left: '8px',
  top: '14px',
  transition: 'top .3s ease-out, font-size .3s ease-out',

  variants: {
    hasSelectedValue: {
      true: {
        top: '4px',
        fontSize: '$xs',
      },
    },
  },
  defaultVariants: {
    hasSelectedValue: false,
  },
})

export const SelectedValue = styled('p', {
  position: 'absolute',
  top: '20px',
  left: '8px',
  height: '24px',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$medium',
  color: '$color-text',
})

export const Arrow = styled(ChevronDown, {
  marginLeft: 'auto',
  marginRight: '12px',
  transition: 'transform .3s ease-out',

  variants: {
    isOpened: {
      true: {
        transform: 'rotate(-180deg)',
      },
      false: {
        transform: 'rotate(0)',
      },
    },
  },
  defaultVariants: {
    isOpened: true,
  },
})

export const Items = styled('ul', {
  all: 'unset',
  boxSizing: 'border-box',
  position: 'absolute',

  width: '100%',
  maxHeight: '300px',
  overflowY: 'auto',
  marginTop: '8px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.15)',

  border: '1px solid $color-neutral-40',
  borderRadius: '$md',
  zIndex: 10,
  transition: 'opacity .3s ease-out',

  backgroundColor: '$color-neutral-10',

  ...inDarkMode({
    backgroundColor: '$color-neutral-90',
  }),

  variants: {
    isOpened: {
      true: {
        opacity: '1',
        pointerEvents: 'all',
      },
      false: {
        opacity: '0',
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    isOpened: true,
  },
})

export const Hint = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$xs',
  fontFamily: '$default',
  height: '$spacing-xs',
  marginLeft: '$spacing-xxxs',

  variants: {
    state: {
      default: {
        color: '$color-neutral-50',
      },
      success: {
        color: '$color-success-50',
      },
      warning: {
        color: '$color-alert-50',
      },
      error: {
        color: '$color-error-50',
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
})

export const HideSelectedValue = styled('input', {
  position: 'absolute',
  top: 0,
  opacity: '0',
  visibility: 'hidden',
  pointerEvents: 'none',
})
