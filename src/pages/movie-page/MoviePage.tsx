import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { OverviewLayout } from "../OverviewLayout";
import { useFetch } from "../../hooks/useFetch";
import { MovieDetails, MovieReleaseDates } from "../../hooks/Movies/interfaces";

export interface OverviewProps extends RouteComponentProps<{ id: string }> {}

const MoviePage: React.FC<OverviewProps> = props => {
	const movie = useFetch<MovieDetails>(
		`movie/${parseInt(props.match.params.id, 10)}?api_key=${
			process.env.REACT_APP_API_KEY
		}&language=en-US`
	).data;

	const movieCert = useFetch<MovieReleaseDates>(
		`movie/${parseInt(props.match.params.id, 10)}/release_dates?api_key=${
			process.env.REACT_APP_API_KEY
		}`
	).data;

	let genres: string[] = [];

	const handleGenres = () => {
		const newArr = movie?.genres.forEach(el => {
			genres.push(el.name);
		});

		return newArr;
	};

	handleGenres();

	return (
		<>
			<OverviewLayout
				id={movie?.id ? movie?.id : 0}
				history={props.history}
				location={props.location}
				match={props.match}
				poster_path={movie?.poster_path}
				title={movie?.title}
				release_date={movie?.release_date}
				results={movieCert?.results}
				runtime={movie?.runtime}
				tagline={movie?.tagline}
				backdrop_path={movie?.backdrop_path}
				overview={movie?.overview}
				genres={movie?.genres}
			/>
		</>
	);
};

export { MoviePage };
