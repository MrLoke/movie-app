import React, { ReactNode } from 'react'
import { Box } from 'theme-ui'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        maxWidth: '1300px',
        marginX: 'auto',
      }}
    >
      {children}
    </Box>
  )
}

export default Layout
