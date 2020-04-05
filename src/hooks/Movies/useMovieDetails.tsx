import Axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieDetails } from './interfaces'

const useMovieDetails = (query: number) => {
    const [state, setState] = useState<MovieDetails>()

    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            Axios.get(
                `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
    }, [query])

    return state
}

export { useMovieDetails }
