import { ComponentProps } from '@stitches/react'

import * as S from './styles'

export type SwitchProps = ComponentProps<typeof S.SwitchRoot>

export const Switch = (props: SwitchProps) => {
  return (
    <S.SwitchRoot {...props}>
      <S.SwitchThumb {...props} />
    </S.SwitchRoot>
  )
}
