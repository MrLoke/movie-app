/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'
import useAddToFavourite from 'hooks/useAddToFavourite'
import useAddToWatchList from 'hooks/useAddToWatchList'
import { IMG_API, IMG_PLACEHOLDER } from 'api/themoviedb'
import { Box, Flex, Image, Text, IconButton } from 'theme-ui'
import { SingleMovieTypes } from 'types/types'
import { styles } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5'

const Movie = ({ movie }: SingleMovieTypes) => {
  const { isFavourite, addMovieToFavourite } = useAddToFavourite(movie)
  const { isWatchList, addMovieToWatchList } = useAddToWatchList(movie)

  return (
    <Box
      sx={{
        ...styles.container,
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <Flex
        sx={{
          position: 'absolute',
          top: '0%',
          right: '0%',
          padding: '5px',
          background: 'rgba(30, 41, 59,0.7)',
        }}
      >
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
              size="20px"
              color="#fff"
            />
          ) : (
            <MdFavoriteBorder
              style={{ cursor: 'pointer' }}
              size="20px"
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
      <Flex
        sx={{
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <Link
          to={`/movie/${movie.title}.`.replace(/ /g, '-')} // Replace & in url to dash
          state={{ id: movie.id }}
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
        </Link>
        <Flex
          sx={{
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <Text
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <Link
              to={`/movie/${movie.title}`.replace(/ /g, '-')} // Replace & in url to dash
              state={{ id: movie.id }}
              sx={{
                textDecoration: 'none',
                color: '#d4d4d4',
                '&:hover': {
                  color: '#fafafa',
                },
              }}
            >
              {movie.title}
            </Link>
          </Text>
          {movie.release_date ? (
            <Text sx={{ color: '#d4d4d4', marginTop: '5px', fontSize: 1 }}>
              Release: <strong>{movie.release_date}</strong>
            </Text>
          ) : (
            <Text sx={{ color: '#d4d4d4', marginTop: '5px', fontSize: 1 }}>
              Release: <strong>Unknown</strong>
            </Text>
          )}
          <Text
            sx={{
              color: '#d2d4d4',
              marginTop: '5px',
              fontSize: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Rating:&nbsp;<strong>{movie.vote_average}</strong>&nbsp;
            <AiFillStar color="#fff600" size="15px" />
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Movie
