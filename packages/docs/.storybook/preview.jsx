import React from 'react';
import { darkMode, lightMode  } from '@libellum-ds/react'

// Define light and dark mode values
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

// Define default mode
const DEFAULT_MODE = MODES[0]

/**
 * Return background color based on selected storybook background
 * @param {*} backgrounds
 * @returns backgroun color
 */
const getCurrentBackground = (backgrounds) => {
  if (!backgrounds) return DEFAULT_MODE.background
  return ['transparent', DEFAULT_MODE.background].includes(backgrounds.value) ? DEFAULT_MODE.background : backgrounds.value
}

/**
 * Return current mode based on selected storybook background
 * @param {*} backgrounds
 * @returns current mode
 */
const getCurrentMode = (backgrounds) => {
  const currentModeBackground = getCurrentBackground(backgrounds)
  return MODES.find((mode) => mode.background === currentModeBackground).mode || ''
}

/**
 * Storybook parameters
 */
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

/**
 * Storybook global decorators
 */
export const decorators = [
  (Story, context) => {
    const currentMode = getCurrentMode(context.globals.backgrounds)

    return (
      <div
        className={currentMode}
        style={{ padding: '20px' }}
      >
        <Story />
      </div>
    )
  },
];
