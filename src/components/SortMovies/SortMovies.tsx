import { sortState } from 'atoms/sortAtom'
import { ChangeEvent, useState } from 'react'
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'
import { useSetRecoilState } from 'recoil'
import { Select, Box, Heading, Flex, Text } from 'theme-ui'

const SortMovies = () => {
  const setSelectedSort = useSetRecoilState(sortState)
  const [openSort, setOpenSort] = useState(false)

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort([e.target.value])
  }

  return (
    <Box
      sx={{
        marginTop: '10px',
        padding: '10px',
        boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
      }}
    >
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Heading as="h3">Sort</Heading>
        {openSort ? (
          <BiChevronDown
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenSort(false)}
            size="30px"
          />
        ) : (
          <BiChevronRight
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenSort(true)}
            size="30px"
          />
        )}
      </Flex>

      {openSort ? (
        <>
          <Text sx={{ fontWeight: 'medium' }}>Sort results by</Text>
          <Select
            sx={{ marginTop: '8px' }}
            defaultValue="popularity.desc"
            onChange={handleSortChange}
          >
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="release_date.desc">Release Date Descending</option>
            <option value="release_date.asc">Release Date Ascending</option>
          </Select>
        </>
      ) : null}
    </Box>
  )
}

export default SortMovies
