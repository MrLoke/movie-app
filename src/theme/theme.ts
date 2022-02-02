import { Theme, useThemeUI } from 'theme-ui'
import { ThemeUIContextValue } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

export const theme = makeTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    text: '#171717',
    background: '#e2e8f0',
    primary: '#0f172a',
    secondary: '#1e293b',
  },
  badges: {
    primary: {
      color: '#f0f9ff',
      bg: '#1e293b',
    },
    accent: {
      color: '#f0f9ff',
      bg: '#0ea5e9',
    },
  },
})

export type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue
