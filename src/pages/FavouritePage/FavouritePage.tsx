import Movie from 'components/Movie/Movie'
import { favouriteState } from 'atoms/favouriteAtom'
import { useRecoilValue } from 'recoil'
import { Box, Flex, Heading } from 'theme-ui'

const FavouritePage = () => {
  const favourite = useRecoilValue<any[]>(favouriteState)

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
        Your favourite movies
      </Heading>
      <Flex
        sx={{
          flex: '0.75',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {favourite.length > 0 ? (
          favourite.map((item) => <Movie key={item.id} movie={item} />)
        ) : (
          <Heading sx={{ textAlign: 'center', marginTop: '20px' }}>
            Favourite movies list is empty.
          </Heading>
        )}
      </Flex>
    </Box>
  )
}

export default FavouritePage
