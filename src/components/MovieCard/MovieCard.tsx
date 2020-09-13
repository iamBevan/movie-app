import React from "react"
import styles from "./MovieCard.module.scss"
import { Movie } from "./interfaces"
import { Link } from "react-router-dom"
import { RatingCircle } from "../RatingCircle/RatingCircle"
import { useGenres } from "../../helpers/movieGenres"

const MovieCard: React.FC<Movie> = props => {
	useGenres(props.genre_ids)

	const handleVoteAverage = (vote: string | undefined) => {
		return vote ? parseInt(vote) * 10 : undefined
	}

	return (
		<>
			<Link
				to={`/${
					props.media_type === "tv" ? "tv" : "movie"
				}/${props.id?.toString()}`}
			>
				<div className={styles["movie-card"]}>
					<div className={styles["front"]}>
						<img
							style={{ width: "185px", height: "100%" }}
							src={
								props.poster_path
									? `https://image.tmdb.org/t/p/w500${props.poster_path}`
									: `https://via.placeholder.com/500x750`
							}
							alt='poster'
						/>
					</div>
					<div className={styles["back"]}>
						<div className={styles.elements}>
							<div className={styles.img}>
								<img
									style={{ width: "100%" }}
									src={
										props.backdrop_path
											? `https://image.tmdb.org/t/p/w500${props.backdrop_path}`
											: `https://via.placeholder.com/500x750`
									}
									alt={
										props.title
											? props.title
											: props.original_title
									}
								/>
							</div>
							<div className={styles.info}>
								<span>
									{props.title
										? props.title
										: props.original_title}
								</span>
								<p>{props.release_date}</p>
								<div className={styles.media}>
									<div className={styles.tv}>TV</div>
									<div className={styles.movie}>
										<div className={styles.rating}>
											<RatingCircle
												rating={handleVoteAverage(
													props.vote_average
												)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export { MovieCard }
