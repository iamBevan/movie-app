import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from './Search.module.scss'
import { useDebounce } from 'react-use'
import { Movies, Results } from './interfaces'
import searchPic from './search.svg'
import { useMovie } from '../../hooks/useMovie'

const Search = () => {
    const [movies, setMovies] = useState(null)
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [state] = useMovie(movies)

    // eslint-disable-next-line no-empty-pattern
    const [] = useDebounce(
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
                console.log('Res data: ', res.data)
            })
            .catch(() => {
                console.log('Error')
            })

        const cleanup = () => {
            setMovies(null)
        }

        return cleanup
    }, [search])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    const onSubmit = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault()
        //Route to search results
    }

    const dropDownList = (movies: Movies | null) => {
        let resultsArr = []
        if (movies !== null) {
            if (Object.keys(movies).length > 0) {
                for (let i: number = 0; i < 7; i++) {
                    let entry = Object.values(movies)[3]
                    resultsArr.push(entry[i])
                }
            }

            return resultsArr.map((el: Results, key) => {
                return (
                    <li key={key}>
                        <img
                            src={
                                el.poster_path
                                    ? `https://image.tmdb.org/t/p/w185${el.poster_path}`
                                    : `https://via.placeholder.com/50x75`
                            }
                            alt="poster"
                        />
                        <div className={styles.info}>
                            <div className={styles.title}>{el.title}</div>
                        </div>
                    </li>
                )
            })
        }
    }

    return (
        <form className={styles.form}>
            {console.log('state: ', state)}
            <div className={styles.search}>
                <input
                    type="text"
                    value={input}
                    id="search"
                    onChange={onChange}
                    autoComplete="off"
                    className={styles.input}
                />
                <button
                    className={styles.button}
                    type="submit"
                    onClick={onSubmit}
                >
                    <img src={searchPic} alt="search" />
                </button>
            </div>
            {<ul>{dropDownList(movies)}</ul>}
        </form>
    )
}

export { Search }
