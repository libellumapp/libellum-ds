import { DropDown, DropDownItem, type DropDownProps } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/DropDown',
  component: DropDown,
  args: {
    label: 'Select an item',
    disabled: false,
    children: (
      <>
        <DropDownItem value={undefined}></DropDownItem>
        <DropDownItem value={1}>Item 1</DropDownItem>
        <DropDownItem value={2}>Item 2</DropDownItem>
        <DropDownItem value={3}>Item 3</DropDownItem>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<DropDownProps>

export const Default: StoryObj<DropDownProps> = {}
