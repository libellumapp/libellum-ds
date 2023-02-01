import { darkMode } from '.'

export const inDarkMode = (styles: unknown) => {
  return {
    [`.${darkMode} &`]: styles,
  }
}
