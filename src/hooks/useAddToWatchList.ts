import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { watchListState } from 'atoms/watchListAtom'

const useAddToWatchList = (movie: any) => {
  const [watchList, setWatchList] = useRecoilState(watchListState)
  const [isWatchList, setIsWatchList] = useState(false)

  useEffect(() => {
    // Check if movie already exist in watch list array
    setIsWatchList(watchList.findIndex((item) => item.id === movie.id) !== -1)
  }, [watchList, movie.id])

  const addMovieToWatchList = (movie: any) => {
    // If exist remove from array
    if (isWatchList) {
      setWatchList(watchList.filter((item) => item.id !== movie.id))
    } else {
      setWatchList([...watchList, movie])
    }
  }

  return {
    isWatchList,
    addMovieToWatchList,
  }
}

export default useAddToWatchList
