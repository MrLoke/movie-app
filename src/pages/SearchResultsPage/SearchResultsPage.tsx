import Movie from 'components/Movie/Movie'
import { useRecoilValue } from 'recoil'
import { searchInputState } from 'atoms/searchInputAtom'
import { SEARCH_URL } from 'api/themoviedb'
import useFetch from 'hooks/useFetch'
import { Flex, Text, Spinner } from 'theme-ui'
import { MovieProps } from 'types/types'

const SearchResultsPage = () => {
  const searchValue = useRecoilValue(searchInputState)
  const url = `${SEARCH_URL}/movie/?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1`
  const { data, error } = useFetch<MovieProps>(url)

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {data ? (
        data.results.map((item) => <Movie key={item.id} movie={item} />)
      ) : (
        <Spinner />
      )}
      {error ? <Text>{error}</Text> : null}
    </Flex>
  )
}

export default SearchResultsPage
