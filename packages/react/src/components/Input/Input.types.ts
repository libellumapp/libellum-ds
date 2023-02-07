import { ComponentPropsWithRef } from 'react'

import { Input } from './Input.styles'

export type InputProps = ComponentPropsWithRef<typeof Input> & {
  label?: string
  leftIcon?: JSX.Element
  hint?: string
  onClear?: () => void
  state?: 'default' | 'success' | 'warning' | 'error'
}
