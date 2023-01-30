import React from 'react';
import { darkMode } from '@libellum-ds/react'
import { colors } from '@libellum-ds/tokens'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: colors['color-neutral-10'],
      },
      {
        name: 'dark',
        value: colors['color-neutral-90'],
      },
    ],
  },
  layout: 'fullscreen'
}

export const decorators = [
  (Story, context) => {
    const background = context.globals.backgrounds?.value ?? colors['color-neutral-10']
    const theme = background === colors['color-neutral-10'] ? 'light' : 'dark'
    const themeClass = theme === 'light' ? 'light' : darkMode

    return (
      <div className={themeClass} style={{ padding: '20px' }}>
        <Story />
      </div>
    )
  },
];
