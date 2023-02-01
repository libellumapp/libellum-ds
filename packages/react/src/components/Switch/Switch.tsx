import { forwardRef } from 'react'
import { ComponentProps } from 'react'

import * as S from './styles'

export type SwitchProps = ComponentProps<typeof S.SwitchRoot>

type Ref = HTMLButtonElement

export const Switch = forwardRef<Ref, SwitchProps>(
  (props: SwitchProps, ref) => {
    return (
      <S.SwitchRoot {...props} ref={ref}>
        <S.SwitchThumb {...props} />
      </S.SwitchRoot>
    )
  }
)

Switch.displayName = 'Switch'
