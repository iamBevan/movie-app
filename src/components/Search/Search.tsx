import React, { useState, useEffect, FormEvent, useRef } from 'react'
import styles from './Search.module.scss'
import { useDebounce } from 'react-use'
import { Movies, Results } from './interfaces'
import { useMovie } from '../../hooks/Movies/useMovieCredits'
import { useClickAway } from 'react-use'
import searchPic from './search.svg'
import { useSearch } from '../../hooks/Search/useSearch'

const Search = () => {
    const ref = useRef(null)
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const moviesResults = useSearch(search)
    const [state] = useMovie(moviesResults)

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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('onSubmit')
        //Route to search results
    }

    const dropDownList = (movies: Movies | undefined) => {
        let resultsArr = []
        if (movies !== undefined) {
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
                            {console.log('results: ', moviesResults)}
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
            <ul ref={ref}>{isOpen && dropDownList(moviesResults)}</ul>
        </form>
    )
}

export { Search }
