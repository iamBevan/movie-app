import Axios from 'axios'
import { useEffect, useState } from 'react'
import { TrendingMovies } from '../components/MovieCard/MovieCard'

const useTrending = () => {
    const [trending, setTrending] = useState<TrendingMovies>()

    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            Axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=ccedeaf2d60b7254a235aefc51a62d35`
            )
                .then(res => {
                    setTrending(res.data)
                })
                .catch(() => {
                    console.log('Error')
                })
        }

        const cleanup = () => {}

        return cleanup
    }, [])

    return trending
}

export { useTrending }
