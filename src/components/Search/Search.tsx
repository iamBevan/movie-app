import React, { useState, useEffect, FormEvent, useRef } from 'react'
import Axios from 'axios'
import styles from './Search.module.scss'
import { useDebounce } from 'react-use'
import { Movies, Results } from './interfaces'
import { useMovie } from '../../hooks/useMovie'
import { useClickAway } from 'react-use'
import searchPic from './search.svg'

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
                                el?.poster_path !== null
                                    ? `https://image.tmdb.org/t/p/w185${el?.poster_path}`
                                    : `https://via.placeholder.com/50x75`
                            }
                            alt="poster"
                        />
                        <div className={styles.info}>
                            <div className={styles.title}>{el?.title}</div>
                            <div className={styles.cast}>
                                {state[key] && state[key].cast[0]?.name},{' '}
                                {state[key] && state[key].cast[1]?.name}
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
                        <img src={searchPic} alt="" />
                    </div>
                </div>
            </div>
            <ul ref={ref}>{isOpen && dropDownList(movies)}</ul>
        </form>
    )
}

export { Search }
