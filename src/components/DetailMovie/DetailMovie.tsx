import useAddToFavourite from 'hooks/useAddToFavourite'
import useAddToWatchList from 'hooks/useAddToWatchList'
import { IMG_API, BG_IMG_API, IMG_PLACEHOLDER } from 'api/themoviedb'
import { Flex, Heading, Text, Image, Paragraph, IconButton } from 'theme-ui'
import { DetailMovieProps } from 'types/types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5'
import { AiFillStar } from 'react-icons/ai'

const DetailMovie = ({ movie }: DetailMovieProps) => {
  const { isFavourite, addMovieToFavourite } = useAddToFavourite(movie)
  const { isWatchList, addMovieToWatchList } = useAddToWatchList(movie)

  return (
    <Flex sx={{ minHeight: '50vh' }}>
      <Flex
        sx={{
          position: 'relative',
          flexDirection: 'column',
          background: 'rgba(0,0,0,0.6)',
          padding: '20px',
          '@media screen and (min-width: 800px)': {
            flexDirection: 'row',
            alignItems: 'center',
          },
          ':before': {
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundImage: `url(${BG_IMG_API}${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            content: '" "',
            position: 'absolute',
            left: 0,
            top: 0,
          },
        }}
      >
        {movie.poster_path ? (
          <Image
            src={`${IMG_API}${movie.poster_path}`}
            alt={`${movie.title}`}
            height={300}
            width={300}
            sx={{
              cursor: 'pointer',
            }}
          />
        ) : (
          <Image
            src={`${IMG_PLACEHOLDER}`}
            alt={`${movie.title}`}
            height={300}
            width={300}
            sx={{
              cursor: 'pointer',
            }}
          />
        )}
        <Flex
          sx={{
            flexDirection: 'column',
            color: '#fff',
            background: 'rgba(30, 41, 59,0.7)',
            padding: '20px',
            marginTop: '20px',
            '@media screen and (min-width: 800px)': {
              width: '50%',
              marginLeft: '40px',
              marginTop: 0,
            },
          }}
        >
          <Heading sx={{ marginBottom: '10px' }}>{movie.title}</Heading>
          <Flex>
            {movie.genres.map((genre) => (
              <Text key={genre.id}>{genre.name},&nbsp;</Text>
            ))}
          </Flex>
          <Flex
            sx={{
              marginY: '15px',
              alignItems: 'center',
            }}
          >
            <Paragraph sx={{ marginRight: '20px', fontWeight: 'medium' }}>
              {movie.release_date}
            </Paragraph>
            <Flex>
              <IconButton
                aria-label="Add movie to favorite"
                onClick={() =>
                  addMovieToFavourite({
                    title: movie.title,
                    id: movie.id,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    overview: movie.overview,
                  })
                }
              >
                {isFavourite ? (
                  <MdFavorite
                    style={{ cursor: 'pointer' }}
                    size="30px"
                    color="#fff"
                  />
                ) : (
                  <MdFavoriteBorder
                    style={{ cursor: 'pointer' }}
                    size="30px"
                    color="#fff"
                  />
                )}
              </IconButton>
              <IconButton
                aria-label="Add movie to watch list"
                onClick={() =>
                  addMovieToWatchList({
                    title: movie.title,
                    id: movie.id,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    overview: movie.overview,
                  })
                }
              >
                {isWatchList ? (
                  <IoBookmarkSharp
                    style={{ cursor: 'pointer' }}
                    size="20px"
                    color="#fff"
                  />
                ) : (
                  <IoBookmarkOutline
                    style={{ cursor: 'pointer' }}
                    size="20px"
                    color="#fff"
                  />
                )}
              </IconButton>
            </Flex>
          </Flex>

          <Text
            sx={{
              color: '#d2d4d4',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            Rating:&nbsp;{movie.vote_average}&nbsp;
            <AiFillStar color="#fff600" size="15px" />
          </Text>
          <Paragraph sx={{ marginBottom: '10px' }}>{movie.tagline}</Paragraph>
          <Heading sx={{ marginBottom: '5px' }}>Overview</Heading>
          <Paragraph>{movie.overview}</Paragraph>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DetailMovie
