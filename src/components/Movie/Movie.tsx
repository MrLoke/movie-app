/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'
import { IMG_API, IMG_PLACEHOLDER } from 'api/themoviedb'
import { Box, Flex, Image, Text, IconButton, Alert } from 'theme-ui'
import { styles } from './styles'
import { DetailMovieProps, SingleMovieProps } from 'types/types'
import { AiFillStar } from 'react-icons/ai'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { favouriteState } from 'atoms/favouriteAtom'
import { watchListState } from 'atoms/watchListAtom'
import { useEffect, useState } from 'react'

const Movie = ({ movie }: SingleMovieProps) => {
  const [favourite, setFavourite] = useRecoilState(favouriteState)
  const [watchList, setWatchList] = useRecoilState(watchListState)
  const [isFavourite, setIsFavourite] = useState(false)
  const [isWatchList, setIsWatchList] = useState(false)

  useEffect(() => {
    setIsFavourite(favourite.findIndex((item) => item.id === movie.id) !== -1)
  }, [favourite])

  useEffect(() => {
    setIsWatchList(watchList.findIndex((item) => item.id === movie.id) !== -1)
  }, [watchList])

  const addMovieToFavourite = (movie: DetailMovieProps) => {
    if (isFavourite) {
      setFavourite(favourite.filter((item) => item.id !== movie.id))
    } else {
      setFavourite([...favourite, movie])
    }
  }

  const addMovieToWatchList = (movie: DetailMovieProps) => {
    if (isWatchList) {
      setWatchList(watchList.filter((item) => item.id !== movie.id))
    } else {
      setWatchList([...watchList, movie])
    }
  }

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
          onClick={() => addMovieToFavourite(movie)}
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
          onClick={() => addMovieToWatchList(movie)}
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
      <Box
        sx={{
          display: 'flex',
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
        <Box
          sx={{
            display: 'flex',
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
        </Box>
      </Box>
    </Box>
  )
}

export default Movie
