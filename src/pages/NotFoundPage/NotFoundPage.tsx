import { Link } from 'react-router-dom'
import { Box, Heading } from 'theme-ui'

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}
    >
      <Heading sx={{ marginBottom: '10px' }}>This page doesn't exist</Heading>
      <Link to="/">Back to home</Link>
    </Box>
  )
}

export default NotFoundPage
