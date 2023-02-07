import { forwardRef, useLayoutEffect, useRef } from 'react'

import { Dismiss } from '../Icons'

import * as S from './Input.styles'
import { InputProps } from './Input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftIcon,
      hint,
      onClear,
      disabled,
      state = 'default',
      ...props
    }: InputProps,
    ref
  ) => {
    const inputContainerRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
      const input = inputContainerRef.current?.querySelector('input')
      if (input) {
        input.classList.toggle('hasValue', !!input.value)
        inputContainerRef.current?.parentElement?.classList.remove('focus')
      }
    }, [])

    return (
      <>
        <S.Root
          tabIndex={disabled ? -1 : 1}
          disabled={disabled}
          state={state}
          onFocus={() => {
            const input = inputContainerRef.current?.querySelector('input')
            if (input) {
              input?.focus()
              inputContainerRef.current?.parentElement?.classList.add('focus')
            }
          }}
          onBlur={() => {
            const input = inputContainerRef.current?.querySelector('input')
            if (input) {
              input.classList.toggle('hasValue', !!input.value)
              inputContainerRef.current?.parentElement?.classList.remove(
                'focus'
              )
            }
          }}
        >
          {!!leftIcon && (
            <S.LeftIconContainer disabled={disabled}>
              {leftIcon}
            </S.LeftIconContainer>
          )}

          <S.InputContainer hasLabel={!!label} ref={inputContainerRef}>
            <S.Input
              disabled={disabled}
              {...props}
              ref={ref}
              autoComplete="off"
            />
            {!!label && (
              <S.Label disabled={disabled} state={state}>
                {label}
              </S.Label>
            )}
          </S.InputContainer>

          {!!onClear && (
            <S.RightIconContainer disabled={disabled}>
              <Dismiss
                onClick={() => {
                  onClear()
                  if (!ref && inputContainerRef.current) {
                    const input =
                      inputContainerRef.current.querySelector('input')
                    if (input) input.value = ''
                  }
                }}
              />
            </S.RightIconContainer>
          )}
        </S.Root>

        <S.Hint state={state}>{hint}</S.Hint>
      </>
    )
  }
)
