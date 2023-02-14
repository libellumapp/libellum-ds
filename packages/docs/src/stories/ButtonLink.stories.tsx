import { ButtonLink, ButtonLinkProps, Search } from '@libellum-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Buttons/ButtonLink',
  component: ButtonLink,
  args: {
    disabled: false,
    tabIndex: 1,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
      action: 'click',
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonLinkProps>

export const Basic: StoryObj<ButtonLinkProps> = {
  args: {
    children: 'Clique aqui',
  },
}

export const WithLeftIcon: StoryObj<ButtonLinkProps> = {
  args: {
    children: (
      <>
        <Search />
        Clique aqui
      </>
    ),
  },
}

export const WithRightIcon: StoryObj<ButtonLinkProps> = {
  args: {
    children: (
      <>
        Clique aqui
        <Search />
      </>
    ),
  },
}

export const WithBothSideIcons: StoryObj<ButtonLinkProps> = {
  args: {
    children: [
      <>
        <Search />
        Clique aqui
        <Search />
      </>,
    ],
  },
}

Basic.parameters = {
  docs: {
    source: {
      code: `
// Simple use
//====================================================================================
// ButtonLink render a HTML Anchor as default
import { ButtonLink } from '@libellum-ds/react'

<ButtonLink href="/">
  <Search />
  Home
  <Search />
</ButtonLink>

//====================================================================================
// If is necessary, is possible to pass "as" prop a Link (react-router-dom) component
import { ButtonLink } from '@libellum-ds/react'
import { Link } from 'react-router-dom'

<ButtonLink as={Link} to="/">
  <Search />
  Home
  <Search />
</ButtonLink>
`,
    },
  },
}
