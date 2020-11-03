import React, { useEffect, useState } from "react";
import styles from "./Trending.module.scss";
import { MovieCard } from "../MovieCard/MovieCard";
import { Movie } from "../MovieCard/interfaces";
import { TrendingMovies } from "./interfaces";
import { apiData } from "../../helpers/apiData";

const Trending: React.FC = () => {
	const [trending, setTrending] = useState<TrendingMovies>();

	useEffect(() => {
		apiData.getTrending().then(data => {
			setTrending(data);
		});
	}, []);

	const createTrendingList = () => {
		const trendingList: Movie[] = [];
		if (trending?.results !== undefined) {
			for (let i: number = 0; i < 6; i++) {
				trendingList.push(trending?.results[i]);
			}
		}
		return trendingList;
	};

	return (
		<div className={styles["trending"]}>
			<h1>Trending</h1>
			<div className={styles["grid"]}>
				{createTrendingList().map((movie: Movie) => (
					<>
						<MovieCard
							title={movie.title}
							poster_path={movie.poster_path}
							release_date={
								movie.release_date ?? movie.first_air_date
							}
							key={movie.id}
							original_title={movie.original_title ?? movie.name}
							id={movie.id}
							backdrop_path={movie.backdrop_path}
							genre_ids={movie.genre_ids}
							media_type={movie.media_type}
							vote_average={movie.vote_average}
						/>
					</>
				))}
			</div>
		</div>
	);
};

export { Trending };
