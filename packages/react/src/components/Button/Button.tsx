import { ComponentProps, ElementType } from 'react'

import { styled } from '../../styles'

export const Button = styled('button', {})

Button.displayName = 'Button'

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
