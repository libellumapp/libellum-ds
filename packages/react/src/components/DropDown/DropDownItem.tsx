import { useCallback, useEffect, useRef } from 'react'

import { DropDownItemProps } from './DropDown.types'
import * as S from './DropDownItems.styles'
import { useDropDown } from './DropDownProvider'

export const DropDownItem = ({ value, children }: DropDownItemProps) => {
  const {
    isOpen,
    selectItem,
    toggle,
    value: selectedValue,
    addItem,
    addItemRef,
    selectItemRef,
    itemsRef,
  } = useDropDown()
  const itemRef = useRef<HTMLLIElement | null>(null)

  const handleItemClick = useCallback(() => {
    selectItem({ value, label: children })
    toggle()
  }, [children, selectItem, toggle, value])

  const handleItemKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (['Enter', 'Space', 'NumpadEnter'].includes(event.code)) {
        selectItem({ value, label: children })
        selectItemRef(itemRef)
        toggle()
        return
      }

      if (['Escape'].includes(event.code)) {
        toggle()
        return
      }

      if (['ArrowDown'].includes(event.code)) {
        const index = itemsRef.findIndex((item) => item === itemRef)
        const next = itemsRef[index + 1]
        if (next) {
          next.current?.focus()
        }
        return
      }

      if (['ArrowUp'].includes(event.code)) {
        const index = itemsRef.findIndex((item) => item === itemRef)
        const previous = itemsRef[index - 1]
        if (previous) {
          previous.current?.focus()
        }
        return
      }
    },
    [children, itemsRef, selectItemRef, selectItem, toggle, value]
  )

  useEffect(() => {
    addItem({ value, label: children })
    addItemRef(itemRef)
  }, [addItem, addItemRef, children, value])

  return (
    <S.Item
      id={value?.toString()}
      tabIndex={isOpen ? 0 : -1}
      selected={!!selectedValue && selectedValue === value}
      onClick={handleItemClick}
      onKeyDown={handleItemKeyDown}
      ref={itemRef}
    >
      {children}
    </S.Item>
  )
}
