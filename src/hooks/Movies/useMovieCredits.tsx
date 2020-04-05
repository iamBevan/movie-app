import Axios from 'axios'
import { useEffect, useReducer } from 'react'
import { Movies } from '../../components/Search/interfaces'
import { Cast } from '.././interfaces'

const useMovie = (props: Movies | undefined) => {
    const results = props?.results

    const reducer = (state: Cast[], action: any) => {
        switch (action.type) {
            case 'add': {
                return [...state, action.fetch]
            }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            Axios.get(
                `https://api.themoviedb.org/3/movie/${
                    results && results[i]?.id
                }/credits?api_key=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => {
                    dispatch({ type: 'add', fetch: res.data })
                })
                .catch(() => {
                    console.log('Error')
                })
        }

        const cleanup = () => {}

        return cleanup
    }, [props, results])

    return [state]
}

export { useMovie }
