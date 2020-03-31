import React from 'react'
import styles from './Trending.module.scss'
import { useTrending } from '../../hooks/useTrending'
import { MovieCard, Movie } from '../MovieCard/MovieCard'

const Trending: React.FC = () => {
    const trending = useTrending()

    const handleMovies = () => {
        return trending?.results.map((el: Movie) => {
            return (
                <MovieCard
                    title={el.title}
                    poster_path={el.poster_path}
                    release_date={el.release_date}
                />
            )
        })
    }

    return <div className={styles['trending']}>{handleMovies()}</div>
}

export { Trending }
