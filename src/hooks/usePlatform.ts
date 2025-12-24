import { useState, useEffect } from 'react'
import apiClient from '../services/api-clients'
import { CanceledError } from 'axios'

export interface Platform {
  id: string
  name: string
}

interface FetchPlatformsResponse {
  data: {
    platforms: Platform[]
  }[]
}

function usePlatform() {
  const [platforms, setPlatforms] = useState<string[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()

    apiClient
      .get<FetchPlatformsResponse>('/games/infinite-scroll', {
        signal: controller.signal,
      })
      .then((response) => {
        const allPlatforms = response.data.data.flatMap(
          (game: { platforms: Platform[] }) => game.platforms,
        )

        // Deduplicate platforms by ID using Map
        let uniquePlatforms = Array.from(
          new Map(
            allPlatforms.map((platform: Platform) => [platform.id, platform]),
          ).values(),
        )

        let platformsArray: string[] = []
        const filterPlatforms = uniquePlatforms.filter((platform: Platform) =>
          platformsArray.push(platform.name),
        )

        let uniquePlatformsArray: string[] = [...new Set(platformsArray)]

        setPlatforms(uniquePlatformsArray)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { platforms, error, loading }
}

export default usePlatform
