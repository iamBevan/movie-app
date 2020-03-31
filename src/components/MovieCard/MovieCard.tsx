import React from 'react'
import styles from './MovieCard.module.scss'

export interface Movie {
    id?: number
    video?: boolean
    vote_count?: number
    title?: string
    release_date?: string
    original_language?: string
    backdrop_path?: string
    adult?: boolean
    overview?: string
    poster_path?: string
    popularity?: number
    media_type?: string
}

export interface TrendingMovies {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface TrendingProps {
    trending: TrendingMovies
}

const MovieCard: React.FC<Movie> = props => {
    return (
        <div className={styles['movie-card']}>
            <div>
                <img
                    src={
                        props.poster_path !== null
                            ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
                            : `https://via.placeholder.com/500x750`
                    }
                    alt="poster"
                />
            </div>
            <div>{props.title}</div>
            <div>{props.release_date}</div>
        </div>
    )
}

export { MovieCard }
