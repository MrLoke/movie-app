import { useEffect, useState } from 'react'
import Movie from 'components/Movie/Movie'
import Pagination from 'components/Pagination/Pagination'
import { useRecoilValue } from 'recoil'
import { searchInputState } from 'atoms/searchInputAtom'
import { SEARCH_URL } from 'api/themoviedb'
import useFetch from 'hooks/useFetch'
import { Flex, Text, Spinner } from 'theme-ui'
import { ResultsMovieTypes } from 'types/types'

const SearchResultsPage = () => {
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const searchValue = useRecoilValue(searchInputState)
  const url = `${SEARCH_URL}/movie?query=${searchValue}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
  const { data, error } = useFetch<ResultsMovieTypes>(url)

  useEffect(() => {
    if (data?.total_pages !== undefined) {
      setTotalPages(data?.total_pages)
    }
  }, [data])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <Flex
      sx={{
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {data ? (
        <>
          <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.results.map((item) => (
              <Movie key={item.id} movie={item} />
            ))}
          </Flex>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <Spinner />
      )}
      {error ? <Text>{error}</Text> : null}
    </Flex>
  )
}

export default SearchResultsPage
