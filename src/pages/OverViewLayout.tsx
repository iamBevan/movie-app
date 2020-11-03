import React from "react";
import styles from "./Overview.module.scss";
import { RouteComponentProps } from "react-router-dom";
import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";
import {
	MovieDetailsProductionCompanies,
	MovieDetailsProductionCountries,
	MovieDetailsSpokenLanguages,
} from "../hooks/Movies/interfaces";
import { handleDate } from "../helpers/handleDates";
import { CastSection } from "../components/CastSection/CastSection";
import { CastData } from "../hooks/interfaces";
import { useFetch } from "../hooks/useFetch";

export interface OverviewProps extends RouteComponentProps<{ id: string }> {
	adult?: boolean;
	backdrop_path: string | null | undefined;
	belongs_to_collection?: null | {};
	budget?: number;
	genres: [{ id: number; name: string }] | undefined;
	homepage?: string | null;
	id: number | undefined;
	imdb_id?: string | null; // Validations:  minLength: 9, maxLength: 9, pattern:^tt[0-9]{7}
	original_language?: string;
	original_title?: string;
	overview: string | null | undefined;
	popularity?: number;
	poster_path: string | null | undefined;
	production_companies?: MovieDetailsProductionCompanies[];
	production_countries?: MovieDetailsProductionCountries[];
	release_date: string | undefined; // format Date
	revenue?: number;
	runtime: number | undefined;
	spoken_languages?: MovieDetailsSpokenLanguages[];
	status?: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Cancelled
	tagline: string | null | undefined;
	title: string | undefined;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
	results:
		| [
				{
					iso_3166_1: string;
					release_dates: [
						{
							certification: string;
							iso_639_1: string;
							release_date: string;
							type: number;
							note: string;
						}
					];
				}
		  ]
		| undefined;
}

const OverviewLayout: React.FC<OverviewProps> = ({
	poster_path,
	title,
	release_date,
	results,
	runtime,
	tagline,
	backdrop_path,
	overview,
	genres,
	id,
}) => {
	const cast = useFetch<CastData>(
		`movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
	);

	let genresArr: string[] = [];

	const handleGenres = () => {
		const newArr = genres?.forEach(el => {
			genresArr.push(el.name);
		});

		return newArr;
	};

	handleGenres();
	return (
		<div className={styles["movie-page"]}>
			<div
				className={styles["header-container"]}
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles["header"]}>
					<img
						style={{ width: "300px", height: "450px" }}
						src={
							poster_path !== null
								? `https://image.tmdb.org/t/p/w500${poster_path}`
								: `https://via.placeholder.com/500x750`
						}
						alt='poster'
					/>
					<div className={styles["details"]}>
						<h1>
							{title}
							<span>{handleDate(release_date)}</span>
						</h1>
						<div className={styles["info-collection"]}>
							<div className={styles["certification"]}>
								{results &&
									results[0].release_dates[0].certification}
							</div>
							<div>&#8226;</div>
							<div className={styles["genres"]}>
								{genresArr.join(", ")}
							</div>
							<div>&#8226;</div>
							<div className={styles["runtime"]}>
								{runtime}mins
							</div>
						</div>
						<div className={styles["tagline"]}>{tagline}</div>
						<div className={styles["button-container"]}>
							<div className={styles["header-button"]}>
								<FaListUl />
							</div>
							<div className={styles["header-button"]}>
								<FaHeart />
							</div>
							<div className={styles["header-button"]}>
								<FaBookmark />
							</div>
							<div className={styles["header-button"]}>
								<FaStar />
							</div>
						</div>
						<h2>Overview</h2>
						<div className={styles["overview"]}>{overview}</div>
					</div>
				</div>
			</div>
			<section>
				<CastSection
					cast={cast.data?.cast}
					crew={cast.data?.crew}
					id={cast.data?.id}
				/>
				'#'
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
		</div>
	);
};

export { OverviewLayout };
