import { Global } from '@emotion/react'

const GlobalStyles = (_props: any) => (
  <Global
    styles={(theme) => ({
      '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: 'Roboto, sans-serif',
      },
    })}
  />
)

export default GlobalStyles
