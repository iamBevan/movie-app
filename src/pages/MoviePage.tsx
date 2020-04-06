import React from 'react'
import { useMovieDetails } from '../hooks/Movies/useMovieDetails'
import styles from './MoviePage.module.scss'
import { Link, RouteComponentProps } from 'react-router-dom'

export interface MoviePageProps extends RouteComponentProps<{ id: string }> {}

const MoviePage: React.FC<MoviePageProps> = (props) => {
    const movie = useMovieDetails(parseInt(props.match.params.id, 10))

    const handleDate = (date: string | undefined) => {
        return date?.split('').splice(0, 4)
    }
    return (
        <div className={styles['movie']}>
            <div
                className={styles['header']}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={styles['overview']}>
                    <img
                        style={{ width: '300px', height: '100%' }}
                        src={
                            movie?.poster_path !== null
                                ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                                : `https://via.placeholder.com/500x750`
                        }
                        alt="poster"
                    />
                    <div className={styles['details']}>
                        <h1>
                            {movie?.title}
                            <span>{handleDate(movie?.release_date)}</span>
                        </h1>
                    </div>
                </div>
            </div>
            <section>
                <h1>{movie?.title}</h1>
            </section>
            >
        </div>
    )
}

export { MoviePage }
