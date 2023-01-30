import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  radii,
  space,
} from '@libellum-ds/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

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
  theme: {
    colors: {
      ...colors,
      'color-background': colors['color-neutral-10'],
      'color-text': colors['color-neutral-90'],
    },
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
  media,
})

export const darkMode = createTheme({
  colors: {
    ...colors,
    'color-background': colors['color-neutral-90'],
    'color-text': colors['color-neutral-10'],
  },
})
