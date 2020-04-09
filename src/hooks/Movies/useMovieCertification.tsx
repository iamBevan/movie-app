import Axios from 'axios'
import { useEffect, useState } from 'react'
import { MovieCertification } from './interfaces'

const useMovieCertification = () => {
    const [state, setState] = useState<MovieCertification>()

    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            Axios.get(
                `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
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
    }, [])

    return state
}

export { useMovieCertification }
