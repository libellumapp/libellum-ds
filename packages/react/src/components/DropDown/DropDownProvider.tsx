import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  DropDownContextType,
  DropDownItemType,
  DropDownProviderProps,
} from './DropDown.types'

const DropDownContext = createContext<DropDownContextType | null>(null)

/**
 *
 * @param param0
 * @returns
 */
const DropDownProvider = ({ children }: DropDownProviderProps) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState<
    DropDownItemType | undefined
  >(undefined)
  const [items, setItems] = useState<DropDownItemType[]>([])

  const [selectedItemRef, setSelectedItemRef] =
    useState<React.MutableRefObject<HTMLLIElement | null> | null>(null)
  const [itemsRef, setItemsRef] = useState<
    React.MutableRefObject<HTMLLIElement | null>[]
  >([])

  const toggle = useCallback(() => {
    setIsOpen((state) => {
      const newValue = !state

      if (newValue) {
        if (selectedItem?.value) {
          const index = itemsRef.findIndex((item) => item === selectedItemRef)
          const item = itemsRef[index]
          if (item) {
            console.log('passando aqui', item)
            item.current?.focus()
          }
        } else {
          itemsRef[0].current?.focus()
        }
      }

      return newValue
    })
  }, [itemsRef, selectedItemRef, selectedItem?.value])

  const addItem = useCallback(
    (item: DropDownItemType) => {
      setItems((state) => {
        const itemExists = items.find(
          (currentItem) => currentItem.value === item.value
        )
        return itemExists ? state : [...state, item]
      })
    },
    [items]
  )

  const selectItem = useCallback(
    (item: DropDownItemType) => {
      setSelectedItem(item)
    },
    [setSelectedItem]
  )

  const addItemRef = useCallback(
    (item: React.MutableRefObject<HTMLLIElement | null>) => {
      setItemsRef((state) => Array.from(new Set([...state, item])))
    },
    []
  )

  const selectItemRef = useCallback(
    (item: React.MutableRefObject<HTMLLIElement | null>) => {
      setSelectedItemRef(item)
    },
    []
  )

  const value = useMemo(() => {
    return selectedItem?.value
  }, [selectedItem?.value])

  const label = useMemo(() => {
    return selectedItem?.label
  }, [selectedItem?.label])

  const contextValue = {
    triggerRef,
    itemsRef,
    items,
    value,
    label,
    isOpen,
    toggle,
    addItem,
    selectItem,
    addItemRef,
    selectItemRef,
  }

  return (
    <DropDownContext.Provider value={contextValue}>
      {children}
    </DropDownContext.Provider>
  )
}

/**
 *
 * @returns
 */
const useDropDown = () => {
  const context = useContext(DropDownContext)

  if (!context) {
    throw new Error('useDropDown must be use under DropDownProvider context')
  }

  return context
}

/**
 *
 */
export { DropDownProvider, useDropDown }
