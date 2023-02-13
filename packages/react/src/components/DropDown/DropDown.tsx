import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react'
import FocusLock from 'react-focus-lock'

import * as S from './DropDown.styles'
import { DropDownProps, DropDownRef } from './DropDown.types'
import { DropDownProvider, useDropDown } from './DropDownProvider'

const DropDownComponent = forwardRef<DropDownRef, DropDownProps>(
  (
    { label, name, value, disabled, onSelect, children }: DropDownProps,
    forwardedRef
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const {
      triggerRef,
      items,
      isOpen,
      toggle,
      selectItem,
      value: selectedValue,
      label: selectedLabel,
    } = useDropDown()

    useImperativeHandle(
      forwardedRef,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      () => {
        return {
          ...inputRef.current,
          reset() {
            selectItem(items[0])
          },
        }
      },
      [items, selectItem]
    )

    useEffect(() => {
      onSelect && onSelect(selectedValue)
    }, [onSelect, selectedValue])

    useEffect(() => {
      if (value) {
        const item = items.find((item) => item.value === value)
        item && selectItem(item)
      } else {
        selectItem(items[0])
      }
    }, [items, selectItem, value])

    return (
      <S.Root>
        {/* Trigger */}
        <S.Trigger
          tabIndex={0}
          onClick={toggle}
          ref={triggerRef}
          disabled={disabled}
        >
          <S.Label hasSelectedValue={!!selectedValue}>
            {label ?? 'Inform a label for this dropdown'}
          </S.Label>
          {selectedValue && <S.SelectedValue>{selectedLabel}</S.SelectedValue>}
          <S.Arrow isOpened={isOpen} />
        </S.Trigger>

        {/* Items */}
        <S.Items isOpened={isOpen} tabIndex={isOpen ? 0 : -1}>
          <FocusLock disabled={!isOpen}>{children}</FocusLock>
        </S.Items>

        {/* Hint */}
        <S.Hint></S.Hint>

        {/* Hidden value handler */}
        <S.HideSelectedValue
          tabIndex={-1}
          name={name}
          defaultValue={selectedValue}
          ref={inputRef}
        />
      </S.Root>
    )
  }
)

export const DropDownContexted = forwardRef<DropDownRef, DropDownProps>(
  ({ children, ...props }: DropDownProps, forwardedRef) => {
    return (
      <DropDownProvider>
        <DropDownComponent {...props} ref={forwardedRef}>
          {children}
        </DropDownComponent>
      </DropDownProvider>
    )
  }
)

const DropDownMemoized = memo(DropDownContexted)
export { DropDownMemoized as DropDown }
