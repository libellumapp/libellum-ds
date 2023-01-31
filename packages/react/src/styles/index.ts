import { media } from '@libellum-ds/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

import { theme as currentTheme } from './themes/light'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: currentTheme,
  media,
})

export { darkMode } from './themes/dark'
export { lightMode } from './themes/light'
