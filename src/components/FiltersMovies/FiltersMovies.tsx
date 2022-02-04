import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
  Badge,
  Box,
  Heading,
  Text,
  Spinner,
  Flex,
  Label,
  Input,
  Button,
} from 'theme-ui'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { genresState, releaseYearState } from 'atoms/filtersAtom'
import { BASE_URL } from 'api/themoviedb'
import useFetch from 'hooks/useFetch'
import { GenresProps } from 'types/types'
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'

const FiltersMovies = () => {
  const [selectedGenres, setSelectedGenres] = useRecoilState(genresState)
  const setReleaseYear = useSetRecoilState(releaseYearState)
  const resetReleaseYear = useResetRecoilState(releaseYearState)
  const [year, setYear] = useState('')
  const [openFilters, setOpenFilters] = useState(false)
  const [genres, setGenres] = useState<any>([])

  const url = `${BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const { data, error } = useFetch<GenresProps>(url)

  useEffect(() => {
    setGenres(data?.genres)
  }, [data])

  const handleChangeReleaseYear = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
  }
  // Why im using useState for release year instead of useRecoilState
  // Because if input value change as setReleaseYear then it call api query so i handle it in useState
  // And then if user click submit button then i set the year in setReleaseYear and pass value in url
  const handleSubmitReleaseYear = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (year.length < 4) return
    setReleaseYear(year)
  }

  const handleResetFilter = () => {
    // Remove the release year value from url
    resetReleaseYear()
    setYear('')
  }

  const handleSelectGenre = (genre: { id: number; name: string }) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g: { id: number }) => g.id !== genre.id)) // Remove duplicat if any genre is marked
  }

  const handleRemoveGenre = (genre: { id: number; name: string }) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    )
    setGenres([...genres, genre])
  }

  return (
    <Box sx={{ padding: '10px', boxShadow: '0 2px 8px rgb(0 0 0 / 10%)' }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Heading as="h3">Filters</Heading>
        {openFilters ? (
          <BiChevronDown
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenFilters(false)}
            size="30px"
          />
        ) : (
          <BiChevronRight
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenFilters(true)}
            size="30px"
          />
        )}
      </Flex>
      {openFilters ? (
        <>
          <Text
            as="p"
            sx={{
              marginY: '10px',
              fontWeight: 'medium',
            }}
          >
            Filtr by genre
          </Text>
          {selectedGenres.map((genre) => (
            <Badge
              key={genre.id}
              variant="accent"
              onClick={() => handleRemoveGenre(genre)}
              sx={{
                cursor: 'pointer',
                margin: '5px',
                padding: '5px',
              }}
            >
              {genre.name}
            </Badge>
          ))}
          {genres ? (
            genres.map((genre: any) => (
              <Badge
                key={genre.id}
                onClick={() => handleSelectGenre(genre)}
                sx={{
                  cursor: 'pointer',
                  margin: '5px',
                  padding: '5px',
                }}
              >
                {genre.name}
              </Badge>
            ))
          ) : (
            <Spinner />
          )}
          {error ? <Text>{error}</Text> : null}

          <Flex
            as="form"
            onSubmit={handleSubmitReleaseYear}
            sx={{ flexDirection: 'column' }}
          >
            <Label
              sx={{
                marginTop: '20px',
                marginBottom: '10px',
                fontWeight: 'medium',
              }}
              htmlFor="release-year"
            >
              Filtr by release year
            </Label>
            <Input
              onChange={handleChangeReleaseYear}
              type="number"
              id="release-year"
              value={year}
              required
              maxLength={4}
            />
            <Flex>
              <Button
                type="submit"
                sx={{
                  marginTop: '10px',
                  marginRight: '5px',
                  cursor: 'pointer',
                  width: '60%',
                  transition: 'all 0.2s ease-in',
                  ':hover': {
                    background: 'secondary',
                  },
                }}
              >
                Search
              </Button>
              <Button
                type="button"
                sx={{
                  marginTop: '10px',
                  cursor: 'pointer',
                  width: '40%',
                  transition: 'all 0.1s ease-in',
                  ':hover': {
                    background: 'secondary',
                  },
                }}
                onClick={handleResetFilter}
              >
                Reset
              </Button>
            </Flex>
          </Flex>
        </>
      ) : null}
    </Box>
  )
}

export default FiltersMovies
