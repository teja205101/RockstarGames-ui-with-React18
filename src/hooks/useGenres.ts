import { useState, useEffect } from 'react'
import apiClient from '../services/api-clients'
import { CanceledError } from 'axios'

export interface Genre {
  id: string
  name: string
}

interface FetchGenresResponse {
  data: {
    genres: Genre[]
  }[]
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGenresResponse>('/games/infinite-scroll', {
        signal: controller.signal,
      })
      .then((response) => {
        const allGenres = response.data.data.flatMap(
          (game: { genres: Genre[] }) => game.genres,
        )
        const uniqueGenres = Array.from(
          new Map(allGenres.map((genre: Genre) => [genre.id, genre])).values(),
        )
        setGenres(uniqueGenres)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { genres, error, loading }
}

export default useGenres
