import Movie from 'components/Movie/Movie'
import { watchListState } from 'atoms/watchListAtom'
import { useRecoilValue } from 'recoil'
import { Box, Flex, Heading } from 'theme-ui'

const WatchlistPage = () => {
  const watchList = useRecoilValue(watchListState)
  return (
    <Box
      sx={{
        marginTop: '50px',
      }}
    >
      <Heading
        as="h2"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          color: 'accent',
        }}
      >
        Your watch list
      </Heading>
      <Flex
        sx={{
          flex: '0.75',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {watchList.length > 0 ? (
          watchList.map((item) => <Movie key={item.id} movie={item} />)
        ) : (
          <Heading sx={{ textAlign: 'center', marginTop: '20px' }}>
            Watch list is empty.
          </Heading>
        )}
      </Flex>
    </Box>
  )
}

export default WatchlistPage
