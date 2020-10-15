import Axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieReleaseDates } from './interfaces'

const useMovieReleaseDates = (movieId: number) => {
    const [state, setState] = useState<MovieReleaseDates>()

    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            Axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => {
                    setState(res.data)
                })
                .catch(() => {
                    console.log('Error')
                })
        }

        const cleanup = () => {}

        return cleanup
    }, [movieId])

    return state
}

export { useMovieReleaseDates }
