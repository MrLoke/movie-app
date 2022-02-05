/** @jsxImportSource theme-ui */
import FiltersMovies from 'components/FiltersMovies/FiltersMovies'
import MoviesList from 'components/MoviesList/MoviesList'
import SortMovies from 'components/SortMovies/SortMovies'
import { Box, Flex } from 'theme-ui'

const HomePage = () => {
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          '@media screen and (min-width: 800px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            flex: '0.25',
            marginX: '50px',
            '@media screen and (min-width: 800px)': {
              marginX: 0,
              marginTop: '10px',
              marginLeft: '20px',
            },
          }}
        >
          <FiltersMovies />
          <SortMovies />
        </Flex>
        <MoviesList />
      </Flex>
    </Box>
  )
}

export default HomePage
