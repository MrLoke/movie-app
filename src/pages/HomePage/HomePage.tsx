import FiltersMovies from 'components/FiltersMovies/FiltersMovies'
import Pagination from 'components/Pagination/Pagination'
import SortMovies from 'components/SortMovies/SortMovies'
import { useEffect, useState } from 'react'
import { Box, Flex, Spinner, Text } from 'theme-ui'
import { BASE_URL } from 'api/themoviedb'
import useFetch from 'hooks/useFetch'
import { useRecoilValue } from 'recoil'
import { genresState, releaseYearState } from 'atoms/filtersAtom'
import concatenateGenre from 'utils/concatenateGenre'
import { ResultsMovieTypes } from 'types/types'
import { sortState } from 'atoms/sortAtom'
import Movie from 'components/Movie/Movie'

const HomePage = () => {
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const selectedGenres = useRecoilValue(genresState)
  const releaseYear = useRecoilValue(releaseYearState)
  const selectedSort = useRecoilValue(sortState)
  const genreforURL = concatenateGenre(selectedGenres)
  const url = `${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${selectedSort}&primary_release_year=${releaseYear}&page=${currentPage}&with_genres=${genreforURL}`
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
        <Flex
          sx={{
            flex: '0.75',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data ? (
            data.results.map((item: any) => (
              <Movie key={item.id} movie={item} />
            ))
          ) : (
            <Spinner />
          )}
          {error ? <Text>{error}</Text> : null}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default HomePage
