import React, { useState, useEffect, FormEvent, useRef } from 'react'
import Axios from 'axios'
import styles from './Search.module.scss'
import { useDebounce } from 'react-use'
import { Movies, Results } from './interfaces'
import { useMovie } from '../../hooks/useMovie'
import { useClickAway } from 'react-use'

const Search = () => {
    const ref = useRef(null)
    const [movies, setMovies] = useState(null)
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [state] = useMovie(movies)
    const [isOpen, setIsOpen] = useState(false)

    useClickAway(ref, () => {
        console.log('OUTSIDE CLICKED')
        setIsOpen(false)
    })

    // eslint-disable-next-line no-empty-pattern
    const [] = useDebounce(
        () => {
            setSearch(input)
            setIsOpen(true)
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

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('onSubmit')
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
                        {console.log(key)}
                        <img
                            src={
                                el.poster_path !== null
                                    ? `https://image.tmdb.org/t/p/w185${el.poster_path}`
                                    : `https://via.placeholder.com/50x75`
                            }
                            alt="poster"
                        />
                        <div className={styles.info}>
                            <div className={styles.title}>{el.title}</div>
                            <div className={styles.cast}>
                                {state[key] && state[key].cast[0].name},{' '}
                                {state[key] && state[key].cast[1].name}
                                {console.log(el)}
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.basicSearch}>
                <div className={styles.inputField}>
                    <input
                        id="search"
                        type="text"
                        placeholder="Type Keywords"
                        value={input}
                        onChange={onChange}
                        autoComplete="off"
                        onFocus={() => setIsOpen(true)}
                    />
                    <div className={styles.iconWrap}>
                        <svg
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                        >
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                        </svg>
                    </div>
                </div>
            </div>
            <ul ref={ref}>{isOpen && dropDownList(movies)}</ul>
        </form>
    )
}

export { Search }
