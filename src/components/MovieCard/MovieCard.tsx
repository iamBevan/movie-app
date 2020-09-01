import React from "react"
import styles from "./MovieCard.module.scss"
import { Movie } from "./interfaces"
import { Link } from "react-router-dom"

const MovieCard: React.FC<Movie> = props => {
	return (
		<>
			<Link to={`/movie/${props.id?.toString()}`}>
				<div className={styles["movie-card"]}>
					<div className={styles["front"]}>
						<img
							style={{ width: "300px", height: "100%" }}
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
								<h2>
									{props.title
										? props.title
										: props.original_title}
								</h2>
								<p>{props.release_date}</p>
								<div className={styles.ratings}>Ratings</div>
								<div className={styles.media}>
									<div className={styles.tv}>TV</div>
									<div className={styles.movie}>Movie</div>
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
