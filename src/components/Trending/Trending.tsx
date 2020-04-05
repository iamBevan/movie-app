import React from 'react'
import styles from './Trending.module.scss'
import { useTrending } from '../../hooks/useTrending'
import { MovieCard } from '../MovieCard/MovieCard'
import { Movie } from '../MovieCard/interfaces'

const Trending: React.FC = () => {
    const trending = useTrending()

    const createTrendingList = () => {
        const trendingList: Movie[] = []
        if (trending?.results !== undefined) {
            for (let i: number = 0; i < 8; i++) {
                trendingList.push(trending?.results[i])
            }
        }
        return trendingList
    }

    return (
        <div className={styles['trending']}>
            <h1>Trending</h1>
            <div className={styles['grid']}>
                {createTrendingList().map((movie: Movie) => (
                    <MovieCard
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        key={movie.id}
                        original_title={movie.original_title}
                    />
                ))}
            </div>
        </div>
    )
}

export { Trending }
