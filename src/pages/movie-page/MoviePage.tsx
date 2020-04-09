import React from 'react'
import { useMovieDetails } from '../../hooks/Movies/useMovieDetails'
import styles from './MoviePage.module.scss'
import { RouteComponentProps } from 'react-router-dom'
import { useMovieReleaseDates } from '../../hooks/Movies/useMovieReleaseDates'
import { FaListUl, FaHeart, FaBookmark, FaStar } from 'react-icons/fa'

export interface MoviePageProps extends RouteComponentProps<{ id: string }> {}

const MoviePage: React.FC<MoviePageProps> = (props) => {
    const movie = useMovieDetails(parseInt(props.match.params.id, 10))
    const movieCert = useMovieReleaseDates(parseInt(props.match.params.id, 10))

    const handleDate = (date: string | undefined) => {
        return date?.split('').splice(0, 4)
    }

    let genres: string[] = []

    const handleGenres = () => {
        const newArr = movie?.genres.forEach((el) => {
            genres.push(el.name)
        })

        return newArr
    }

    handleGenres()

    return (
        <div className={styles['movie-page']}>
            <div
                className={styles['header-container']}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={styles['header']}>
                    <img
                        style={{ width: '300px', height: '450px' }}
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
                        <div className={styles['info-collection']}>
                            <div className={styles['certification']}>
                                {
                                    movieCert?.results[0].release_dates[0]
                                        .certification
                                }
                            </div>
                            <div>&#8226;</div>
                            <div className={styles['genres']}>
                                {genres.join(', ')}
                            </div>
                            <div>&#8226;</div>
                            <div className={styles['runtime']}>
                                {movie?.runtime}mins
                            </div>
                        </div>
                        <div className={styles['tagline']}>
                            {movie?.tagline}
                        </div>
                        <div className={styles['button-container']}>
                            <div className={styles['header-button']}>
                                <FaListUl />
                            </div>
                            <div className={styles['header-button']}>
                                <FaHeart />
                            </div>
                            <div className={styles['header-button']}>
                                <FaBookmark />
                            </div>
                            <div className={styles['header-button']}>
                                <FaStar />
                            </div>
                        </div>
                        <h2>Overview</h2>
                        <div className={styles['overview']}>
                            {movie?.overview}
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <h2>Cast</h2>
            </section>
            <section>
                <h2>Social</h2>
            </section>
            <section>
                <h2>Media</h2>
            </section>
            <section>
                <h2>Recommendations</h2>
            </section>
            >
        </div>
    )
}

export { MoviePage }
