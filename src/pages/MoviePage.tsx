import React from 'react'
import { useMovieDetails } from '../hooks/Movies/useMovieDetails'
import styles from './MoviePage.module.scss'
import { Link, RouteComponentProps } from 'react-router-dom'

export interface MoviePageProps extends RouteComponentProps<{ id: string }> {}

const MoviePage: React.FC<MoviePageProps> = (props) => {
    const movie = useMovieDetails(parseInt(props.match.params.id, 10))
    return (
        <div className={styles['movie']}>
            <div
                className={styles['header']}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <section>
                <h1>{movie?.title}</h1>
            </section>
            >
        </div>
    )
}

export { MoviePage }
