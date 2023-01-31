import React from 'react';
import { darkMode, lightMode  } from '@libellum-ds/react'

const MODES = [
  {
    name: 'light',
    background: lightMode.colors['color-background'].value,
    mode: lightMode
  },
  {
    name: 'dark',
    background: darkMode.colors['color-background'].value,
    mode: darkMode
  }
]
const DEFAULT_MODE = MODES[0]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: DEFAULT_MODE.name,
    values: MODES.map(({name, background}) => ({
      name,
      value: background
    })),
  },
  layout: 'fullscreen'
}

export const decorators = [
  (Story, context) => {
    const currentModeBackground = context.globals.backgrounds?.value ?? DEFAULT_MODE.background
    const currentMode = MODES.find((mode) => mode.background === currentModeBackground).mode || ''

    return (
      <div className={currentMode} style={{ padding: '20px' }}>
        <Story />
      </div>
    )
  },
];
