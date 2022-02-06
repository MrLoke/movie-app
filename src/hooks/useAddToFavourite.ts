import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { favouriteState } from 'atoms/favouriteAtom'

const useAddToFavourite = (movie: any) => {
  const [favourite, setFavourite] =
    //@ts-ignore
    useRecoilState<AddMovieTypes[]>(favouriteState)
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    // Check if movie already exist in favourite array
    setIsFavourite(favourite.findIndex((item) => item.id === movie.id) !== -1)
  }, [favourite, movie.id])

  const addMovieToFavourite = (movie: any) => {
    // If exist remove from array
    if (isFavourite) {
      setFavourite(favourite.filter((item) => item.id !== movie.id))
    } else {
      setFavourite([...favourite, movie])
    }
  }

  return {
    isFavourite,
    addMovieToFavourite,
  }
}

export default useAddToFavourite
