import { Theme, useThemeUI } from 'theme-ui'
import { ThemeUIContextValue } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

export const theme = makeTheme({
  fonts: {
    body: 'Roboto, sans-serif',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    text: '#111111',
    background: '#EEEEEE',
    primary: '#0073ff',
    secondary: '#00397f',
  },
})

export type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue
