import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react'

import { Dismiss } from '../Icons'

import * as S from './Input.styles'
import { InputProps, InputRef } from './Input.types'

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      label,
      leftIcon,
      hint,
      disabled,
      state = 'default',
      onClear,
      ...props
    }: InputProps,
    fowardedRef
  ) => {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const hasValue =
      props.value !== null && props.value !== undefined && props.value !== ''

    const handleClearClick = useCallback(() => {
      onClear && onClear()
      if (inputRef?.current) {
        inputRef.current.value = ''
        inputRef.current.blur()
      }
    }, [onClear])

    useLayoutEffect(() => {
      if (inputRef?.current) {
        inputRef.current.classList.toggle('hasValue', !!inputRef.current.value)
        rootRef.current?.classList.remove('focus')
        if (!inputRef.current.value) inputRef.current.blur()
      }
    }, [])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    useImperativeHandle(fowardedRef, () => inputRef?.current, [])

    return (
      <>
        <S.Root
          ref={rootRef}
          tabIndex={disabled ? -1 : 1}
          disabled={disabled}
          state={state}
          onFocus={() => {
            inputRef.current?.focus()
            rootRef.current?.classList.add('focus')
          }}
          onBlur={() => {
            inputRef.current?.classList.toggle(
              'hasValue',
              !!inputRef.current.value
            )
            rootRef.current?.classList.remove('focus')
          }}
        >
          {!!leftIcon && (
            <S.LeftIconContainer disabled={disabled}>
              {leftIcon}
            </S.LeftIconContainer>
          )}

          <S.InputContainer hasLabel={!!label}>
            <S.Input
              disabled={disabled}
              {...props}
              ref={inputRef}
              autoComplete="off"
              className={hasValue ? 'hasValue' : ''}
            />
            {!!label && (
              <S.Label disabled={disabled} state={state}>
                {label}
              </S.Label>
            )}
          </S.InputContainer>

          {!!onClear && (
            <S.RightIconContainer disabled={disabled}>
              <Dismiss onClick={handleClearClick} />
            </S.RightIconContainer>
          )}
        </S.Root>

        <S.Hint state={state}>{hint}</S.Hint>
      </>
    )
  }
)
