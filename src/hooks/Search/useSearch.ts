import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Movies } from './interfaces'

const useSearch = (query: string) => {
    const [moviesResults, setMoviesResults] = useState<Movies>()

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
        )
            .then((res) => {
                setMoviesResults(res.data)
                console.log('Res data: ', res.data)
            })
            .catch(() => {
                console.log('Error')
            })

        const cleanup = () => {}

        return cleanup
    }, [query])

    return moviesResults
}

export { useSearch }
