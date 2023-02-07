import { styled } from '../../styles'
import { inDarkMode } from '../../styles/utils'

export const Label = styled('label', {
  position: 'absolute',
  top: '12px',
  left: '2px',
  fontSize: '$md',

  transition: 'top .3s ease-out, font-size .3s ease-out',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$color-neutral-20',

        ...inDarkMode({
          backgroundColor: '$color-neutral-80',
        }),
      },
    },
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
    disabled: false,
    state: 'default',
  },
})

export const Input = styled('input', {
  all: 'unset',
  alignSelf: 'end',

  outline: 'none',
  border: '0',
  fontSize: '$md',

  width: '100%',
  height: '$spacing-xs',
  lineHeight: '24px',
  marginBottom: '2px',

  ...inDarkMode({
    backgroundColor: '$color-neutral-90',
    color: '$color-neutral-10',

    '&:disabled': {
      backgroundColor: '$color-neutral-80',
      color: '$color-neutral-50',
    },
  }),

  '&:focus': {
    [`& + ${Label}`]: {
      top: '4px',
      fontSize: '$xs',
    },
  },

  '&.hasValue': {
    [`& + ${Label}`]: {
      top: '4px',
      fontSize: '$xs',
    },
  },

  '&:disabled': {
    backgroundColor: '$color-neutral-20',
    color: '$color-neutral-40',
  },
})

export const Root = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '$spacing-nano',

  height: '$spacing-lg',
  fontFamily: '$default',
  padding: '0 $spacing-nano',

  border: '1px solid $color-neutral-40',
  borderRadius: '$md',

  '&:hover': {
    borderColor: '$color-neutral-80',
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',

        backgroundColor: '$color-neutral-20',
        color: '$color-neutral-40',

        ...inDarkMode({
          backgroundColor: '$color-neutral-80',
          color: '$color-neutral-50',
        }),
      },
    },
    state: {
      default: {
        backgroundColor: '$color-neutral-10',
        borderColor: '$color-neutral-40',

        ...inDarkMode({
          backgroundColor: '$color-neutral-90',
          borderColor: '$color-neutral-60',
        }),

        '&:hover': {
          borderColor: '$color-neutral-80',

          ...inDarkMode({
            borderColor: '$color-neutral-10',
          }),
        },

        '&.focus': {
          borderColor: '$color-neutral-80',

          ...inDarkMode({
            borderColor: '$color-neutral-10',
          }),
        },
      },
      success: {
        borderColor: '$color-success-10',

        '&:hover': {
          borderColor: '$color-success-50',
        },

        '&.focus': {
          borderColor: '$color-success-50',
        },
      },
      warning: {
        borderColor: '$color-alert-10',

        '&:hover': {
          borderColor: '$color-alert-50',
        },

        '&.focus': {
          borderColor: '$color-alert-50',
        },
      },
      error: {
        borderColor: '$color-error-10',

        '&:hover': {
          borderColor: '$color-error-50',
        },

        '&.focus': {
          borderColor: '$color-error-50',
        },
      },
    },
  },
  defaultVariants: {
    disabled: false,
    state: 'default',
  },
  compoundVariants: [
    {
      disabled: true,
      state: 'default',
      css: {
        backgroundColor: '$color-neutral-20',
        color: '$color-neutral-40',

        ...inDarkMode({
          backgroundColor: '$color-neutral-80',
          color: '$color-neutral-50',
        }),
      },
    },
  ],
})

export const InputContainer = styled('div', {
  flex: 1,

  variants: {
    hasLabel: {
      true: {
        position: 'relative',
        display: 'flex',
        alignSelf: 'stretch',
      },
      false: {
        position: 'initial',
      },
    },
  },
  defaultVariants: {
    hasLabel: false,
  },
})

export const LeftIconContainer = styled('div', {
  variants: {
    disabled: {
      true: {
        backgroundColor: '$color-neutral-20',
        color: '$color-neutral-40',

        '& *': {
          color: '$color-neutral-40',
        },

        ...inDarkMode({
          backgroundColor: '$color-neutral-80',
          color: '$color-neutral-50',

          '& *': {
            color: '$color-neutral-50',
          },
        }),
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const RightIconContainer = styled('div', {
  variants: {
    disabled: {
      true: {
        backgroundColor: '$color-neutral-20',
        color: '$color-neutral-40',

        '& *': {
          color: '$color-neutral-40',
        },

        ...inDarkMode({
          backgroundColor: '$color-neutral-80',
          color: '$color-neutral-50',

          '& *': {
            color: '$color-neutral-50',
          },
        }),
      },
    },
  },
  defaultVariants: {
    disabled: false,
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
