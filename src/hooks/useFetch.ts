import { useEffect, useState } from 'react'

const useFetch = <T>(
  url: string
): {
  data: T | null
  error: Error | string
} => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | string>('')

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(url, { signal: abortController.signal })
        const data = await res.json()
        setData(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }
    fetchData()

    return () => {
      abortController.abort()
    }
  }, [url])

  return { data, error }
}

export default useFetch
