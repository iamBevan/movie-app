import React from "react"
import { useMovieDetails } from "../../hooks/Movies/useMovieDetails"
import { RouteComponentProps } from "react-router-dom"
import { useMovieReleaseDates } from "../../hooks/Movies/useMovieReleaseDates"
import { OverviewLayout } from "../OverviewLayout"

export interface OverviewProps extends RouteComponentProps<{ id: string }> {}

const MoviePage: React.FC<OverviewProps> = props => {
	const movie = useMovieDetails(parseInt(props.match.params.id, 10))
	const movieCert = useMovieReleaseDates(parseInt(props.match.params.id, 10))

	let genres: string[] = []

	const handleGenres = () => {
		const newArr = movie?.genres.forEach(el => {
			genres.push(el.name)
		})

		return newArr
	}

	handleGenres()

	return (
		<>
			<OverviewLayout
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
	)
}

export { MoviePage }
