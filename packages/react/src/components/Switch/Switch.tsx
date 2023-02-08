import { forwardRef, useCallback, useEffect, useState } from 'react'

import * as S from './Switch.styles'

export type SwitchProps = {
  name?: string
  value?: boolean
  disabled?: boolean
  onChange?: (newValue: boolean) => void
}

type Ref = HTMLInputElement | null

export const Switch = forwardRef<Ref, SwitchProps>(
  ({ name, value, disabled, onChange }: SwitchProps, forwardedRef) => {
    const [state, setState] = useState<boolean>(false)

    const handleClick = useCallback(() => {
      setState((current) => {
        const newValue = !current
        onChange && onChange(newValue)
        return newValue
      })
    }, [setState, onChange])

    useEffect(() => {
      setState(value ?? false)
    }, [value])

    return (
      <S.Root>
        <S.Toggle
          onClick={handleClick}
          isTurnedOn={state}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          <S.Selector isTurnedOn={state} disabled={disabled} />
        </S.Toggle>

        <S.Checkbox
          ref={forwardedRef}
          type="checkbox"
          name={name}
          checked={state}
          onChange={() => {
            /**nothing */
          }}
        />
      </S.Root>
    )
  }
)
