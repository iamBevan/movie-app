import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from './Search.module.scss'
import { useDebounce } from 'react-use'

interface Results {
    adult: boolean
    backdrop_path: string
    genreIds: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface Movies {
    page: number
    results: Results[]
    total_pages: number
    total_results: number
}

const Search = () => {
    const [movies, setMovies] = useState({})
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, cancel] = useDebounce(
        () => {
            setSearch(input)
        },
        500,
        [input]
    )

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
        )
            .then(res => {
                setMovies(res.data)
            })
            .catch(() => console.log('Error'))

        const cleanup = () => {
            setMovies({})
        }

        return cleanup
    }, [search])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //Route to search results
    }

    const dropDownList = (movies: Movies | {}) => {
        let resultsArr = []

        if (Object.keys(movies).length > 0) {
            for (let i: number = 0; i < 7; i++) {
                let entry = Object.values(movies)[3]
                resultsArr.push(entry[i])
            }
        }

        return resultsArr.map((el: Results, key) => {
            return (
                <li key={key}>
                    <div>{el.title}</div>
                </li>
            )
        })
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {movies && console.log(movies)}
            <label htmlFor="search">Search</label>
            <input
                type="text"
                value={input}
                id="search"
                onChange={onChange}
                autoComplete="off"
            />
            <button className={styles.button} type="submit">
                Search
            </button>
            {
                <ul
                    className={
                        search.length > 1 ? styles.nonHidden : styles.nonHidden
                    }
                >
                    {' '}
                    {dropDownList(movies ? movies : {})}
                </ul>
            }
        </form>
    )
}

export { Search }
