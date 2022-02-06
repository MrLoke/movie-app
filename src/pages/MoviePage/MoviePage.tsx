import DetailMovie from 'components/DetailMovie/DetailMovie'
import { Box, Flex, Text, Spinner } from 'theme-ui'
import useFetch from 'hooks/useFetch'
import { CustomizedState, DetailMovieTypes } from 'types/types'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from 'api/themoviedb'

const MoviePage = () => {
  const location = useLocation()
  const state = location.state as CustomizedState
  const { id } = state
  const url = `${BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const { data, error } = useFetch<DetailMovieTypes>(url)

  return (
    <Flex sx={{ marginTop: '50px' }}>
      {data ? <DetailMovie movie={data} /> : <Spinner />}
      <Box>{error ? <Text>{error}</Text> : null}</Box>
    </Flex>
  )
}

export default MoviePage
