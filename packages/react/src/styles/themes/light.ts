import {
  colors as baseColors,
  fonts as baseFonts,
  fontSizes as baseFontSizes,
  fontWeights as baseFontWeights,
  lineHeights as baseLineHeights,
  radii as baseRadii,
  space as baseSpaces,
} from '@libellum-ds/tokens'
import { createTheme } from '@stitches/react'

export const colors = {
  ...baseColors,
  'color-background': baseColors['color-neutral-10'],
  'color-text': baseColors['color-neutral-90'],
}

export const space = { ...baseSpaces }
export const radii = { ...baseRadii }
export const fonts = { ...baseFonts }
export const fontSizes = { ...baseFontSizes }
export const fontWeights = { ...baseFontWeights }
export const lineHeights = { ...baseLineHeights }

export const theme = {
  colors,
  space,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
}

export const lightMode = createTheme(theme)
