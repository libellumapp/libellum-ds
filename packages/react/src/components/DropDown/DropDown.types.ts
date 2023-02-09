import { MutableRefObject, PropsWithChildren, ReactNode } from 'react'

//**************************************************************************/
// DropDown
export type DropDownRef = HTMLInputElement
export type DropDownProps = PropsWithChildren & {
  name?: string
  label: string
  value?: DropDownItemValue | null
  onSelect?: (item: DropDownItemValue | undefined) => void
  disabled?: boolean
}

//**************************************************************************/
// DropDownItem
export type DropDownItemValue = string | number | undefined
export type DropDownItemLabel = ReactNode | string
export type DropDownItemType = {
  value: DropDownItemValue
  label: DropDownItemLabel
}

export type DropDownItemProps = PropsWithChildren & {
  value: DropDownItemValue
}

//**************************************************************************/
// DropDown Provider
export type DropDownContextType = {
  isOpen: boolean
  toggle: () => void
  value: DropDownItemValue
  label: DropDownItemLabel
  addItem: (item: DropDownItemType) => void
  selectItem: (item: DropDownItemType) => void
  items: DropDownItemType[]
  addItemRef: (item: MutableRefObject<HTMLLIElement | null>) => void
  selectItemRef: (item: MutableRefObject<HTMLLIElement | null>) => void
  itemsRef: MutableRefObject<HTMLLIElement | null>[]
  triggerRef: MutableRefObject<HTMLButtonElement | null>
}

export type DropDownProviderProps = PropsWithChildren
