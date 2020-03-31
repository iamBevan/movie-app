import Axios from 'axios'
import { useEffect, useReducer } from 'react'
import { Movies } from '../components/Search/interfaces'

interface Data {
    cast: Cast[]
    crew: Crew[]
    id: number
}

interface Cast {
    cast_id: number
    character: string
    credit_id: string
    gender: number
    id: number
    name: string
    order: number
    profile_path: string
}

interface Crew {}

const useMovie = (props: Movies | null) => {
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
                `https://api.themoviedb.org/3/movie/${results &&
                    results[i]
                        .id}/credits?api_key=ccedeaf2d60b7254a235aefc51a62d35`
            )
                .then(res => {
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
