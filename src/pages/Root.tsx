import AppRoutes from 'routes/AppRoutes'
import { ThemeProvider } from 'theme-ui'
import { RecoilRoot } from 'recoil'
import { theme } from 'theme/theme'

const Root = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default Root
