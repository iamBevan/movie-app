import React from "react"
import { useTVDetails } from "../../hooks/TVShows/useTVDetails"
import styles from "./TVPage.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useMovieReleaseDates } from "../../hooks/Movies/useMovieReleaseDates"
import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa"
import { OverviewLayout } from "../OverviewLayout"

export interface OverviewProps extends RouteComponentProps<{ id: string }> {}

const TVPage: React.FC<OverviewProps> = props => {
	const movie = useTVDetails(parseInt(props.match.params.id, 10))
	const movieCert = useMovieReleaseDates(parseInt(props.match.params.id, 10))

	const handleDate = (date: string | undefined) => {
		return date?.split("").splice(0, 4)
	}

	let genres: string[] = []

	const handleGenres = () => {
		const newArr = movie?.genres.forEach(el => {
			genres.push(el.name)
		})

		return newArr
	}

	handleGenres()

	return <>#</>
}

export { TVPage }
